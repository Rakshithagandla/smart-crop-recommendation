from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from models import db, User, OTPVerification, Farmer, Recommendation, AuditLog
from datetime import datetime, timedelta
import os
import joblib
import numpy as np
import requests
from dotenv import load_dotenv
import jwt
import secrets
import string
from functools import wraps
from twilio.rest import Client

load_dotenv()

app = Flask(__name__)

# ===== DATABASE CONFIGURATION =====
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///smart_crop.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'your-256-bit-secret-key-change-this')

db.init_app(app)

with app.app_context():
    db.create_all()

# ===== LOAD ML MODEL =====
try:
    rf_model = joblib.load('model/crop_rf_model.pkl')
    print("✅ Model loaded successfully!")
except Exception as e:
    print(f"❌ Model not found - Using fallback logic: {e}")
    rf_model = None

# ===== CONFIGURATION =====
TWILIO_ACCOUNT_SID = os.getenv('TWILIO_ACCOUNT_SID', '')
TWILIO_AUTH_TOKEN  = os.getenv('TWILIO_AUTH_TOKEN', '')
TWILIO_PHONE_NUMBER = os.getenv('TWILIO_PHONE_NUMBER', '')
OPENWEATHER_API_KEY = os.getenv('OPENWEATHER_API_KEY', '')

# Emoji map for crop results
CROP_EMOJI = {
    'rice': '🌾', 'maize': '🌽', 'chickpea': '🫘', 'kidneybeans': '🫘',
    'pigeonpeas': '🌱', 'mothbeans': '🌱', 'mungbean': '🌿', 'blackgram': '🌿',
    'lentil': '🫘', 'pomegranate': '🍎', 'banana': '🍌', 'mango': '🥭',
    'grapes': '🍇', 'watermelon': '🍉', 'muskmelon': '🍈', 'apple': '🍎',
    'orange': '🍊', 'papaya': '🍈', 'coconut': '🥥', 'cotton': '🌸',
    'jute': '🌿', 'coffee': '☕'
}

# Fertilizer recommendations per crop
FERTILIZER_MAP = {
    'rice': 'Urea + DAP (80:40 kg/acre)',
    'maize': 'NPK 20-20-0 + Zinc Sulphate',
    'wheat': 'Urea + SSP (60:30 kg/acre)',
    'cotton': 'NPK 19-19-19 + Potash',
    'sugarcane': 'Urea + Potash + Zinc',
    'chickpea': 'SSP + Rhizobium culture',
    'lentil': 'DAP + Sulphur (20:10 kg/acre)',
    'mango': 'NPK 13-00-45 + Micronutrients',
    'banana': 'NPK 13-00-45 + Magnesium',
    'grapes': 'NPK 0-52-34 + Calcium Nitrate',
    'default': 'NPK 17-17-17 (Balanced fertilizer)'
}


# ===== HELPERS =====

def generate_otp():
    return ''.join(secrets.choice(string.digits) for _ in range(6))

def send_otp_sms(phone, otp):
    if not TWILIO_ACCOUNT_SID or not TWILIO_AUTH_TOKEN:
        print(f"⚠️ Twilio not configured. OTP for {phone}: {otp}")
        return False
    try:
        client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
        client.messages.create(
            body=f"Your Smart Crop OTP is: {otp}. Valid for 10 minutes.",
            from_=TWILIO_PHONE_NUMBER,
            to=f"+91{phone}"
        )
        return True
    except Exception as e:
        print(f"❌ Twilio Error: {e}")
        return False

def get_weather(city):
    """Fetch live weather from OpenWeatherMap. Falls back to defaults if key missing."""
    if not OPENWEATHER_API_KEY or OPENWEATHER_API_KEY == 'demo_key_12345':
        return {'temperature': 28, 'humidity': 70, 'city': city, 'description': 'Clear sky'}
    try:
        url = f"https://api.openweathermap.org/data/2.5/weather?q={city},IN&appid={OPENWEATHER_API_KEY}&units=metric"
        resp = requests.get(url, timeout=5)
        data = resp.json()
        if resp.status_code == 200:
            return {
                'temperature': round(data['main']['temp'], 1),
                'humidity': data['main']['humidity'],
                'city': data['name'],
                'description': data['weather'][0]['description'].title()
            }
    except Exception as e:
        print(f"⚠️ Weather API error: {e}")
    return {'temperature': 28, 'humidity': 70, 'city': city, 'description': 'Data unavailable'}

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization', '')
        if not token:
            return jsonify({'success': False, 'error': 'Token missing'}), 401
        try:
            token = token.replace('Bearer ', '')
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
            current_user_id = data['user_id']
        except jwt.ExpiredSignatureError:
            return jsonify({'success': False, 'error': 'Token expired'}), 401
        except Exception:
            return jsonify({'success': False, 'error': 'Invalid token'}), 401
        return f(current_user_id, *args, **kwargs)
    return decorated


# ===== ROUTES =====

@app.route('/')
def index():
    return render_template('index.html')


# ----- AUTH -----

@app.route('/api/auth/send-otp', methods=['POST'])
def send_otp():
    data = request.json
    phone = data.get('phone', '').strip()
    if not phone or len(phone) != 10 or not phone.isdigit():
        return jsonify({'success': False, 'error': 'Enter a valid 10-digit mobile number'}), 400

    user = User.query.filter_by(phone=phone).first()
    otp = generate_otp()

    otp_record = OTPVerification.query.filter_by(phone=phone).first()
    if otp_record:
        otp_record.otp = otp
        otp_record.expires_at = datetime.utcnow() + timedelta(minutes=10)
        otp_record.verified = False
    else:
        otp_record = OTPVerification(
            phone=phone, otp=otp,
            expires_at=datetime.utcnow() + timedelta(minutes=10)
        )
        db.session.add(otp_record)
    db.session.commit()

    send_otp_sms(phone, otp)
    return jsonify({'success': True, 'is_registered': bool(user)}), 200


@app.route('/api/auth/verify-otp', methods=['POST'])
def verify_otp():
    """Register a new literate farmer via OTP."""
    data = request.json
    phone   = data.get('phone', '').strip()
    user_otp = data.get('otp', '').strip()
    name    = data.get('name', '').strip()
    aadhar  = data.get('aadhar', '').strip()

    if not all([phone, user_otp, name, aadhar]):
        return jsonify({'success': False, 'error': 'All fields are required'}), 400

    # Master OTP bypass (demo only)
    if user_otp != '123456':
        otp_record = OTPVerification.query.filter_by(phone=phone).first()
        if not otp_record or otp_record.otp != user_otp or datetime.utcnow() > otp_record.expires_at:
            return jsonify({'success': False, 'error': 'Invalid or expired OTP'}), 400

    if User.query.filter_by(phone=phone).first():
        return jsonify({'success': False, 'error': 'Mobile number already registered. Please login.'}), 400

    new_user = User(
        email=f"farmer_{aadhar}@smartcrop.local",
        phone=phone, name=name,
        role='literate_farmer', verified=True
    )
    new_user.set_password(secrets.token_urlsafe(12))
    db.session.add(new_user)
    db.session.flush()

    farmer = Farmer(
        name=name, aadhar=aadhar, phone=phone,
        literacy_status='literate', user_id=new_user.id
    )
    db.session.add(farmer)
    db.session.commit()

    token = jwt.encode(
        {'user_id': new_user.id, 'role': new_user.role,
         'exp': datetime.utcnow() + timedelta(hours=24)},
        app.config['SECRET_KEY'], algorithm='HS256'
    )
    return jsonify({
        'success': True, 'token': token,
        'user': {'id': new_user.id, 'name': new_user.name,
                 'role': new_user.role, 'farmer_id': farmer.id}
    }), 200


@app.route('/api/auth/login-verify', methods=['POST'])
def login_verify():
    """Login existing farmer via OTP."""
    data = request.json
    phone = data.get('phone', '').strip()
    otp   = data.get('otp', '').strip()

    # Master OTP bypass (demo)
    if otp == '123456':
        user = User.query.filter_by(phone=phone).first()
        if user:
            farmer = Farmer.query.filter_by(user_id=user.id).first()
            token = jwt.encode(
                {'user_id': user.id, 'role': user.role,
                 'exp': datetime.utcnow() + timedelta(hours=24)},
                app.config['SECRET_KEY'], algorithm='HS256'
            )
            return jsonify({
                'success': True, 'token': token,
                'user': {'id': user.id, 'name': user.name, 'role': user.role,
                         'farmer_id': farmer.id if farmer else user.id}
            }), 200
        return jsonify({'success': False, 'error': 'User not found. Please register first.'}), 404

    # Real OTP check
    otp_record = OTPVerification.query.filter_by(phone=phone).first()
    if not otp_record or otp_record.otp != otp or datetime.utcnow() > otp_record.expires_at:
        return jsonify({'success': False, 'error': 'Invalid or expired OTP'}), 400

    user = User.query.filter_by(phone=phone).first()
    if not user:
        return jsonify({'success': False, 'error': 'User not found. Please register first.'}), 404

    farmer = Farmer.query.filter_by(user_id=user.id).first()
    token = jwt.encode(
        {'user_id': user.id, 'role': user.role,
         'exp': datetime.utcnow() + timedelta(hours=24)},
        app.config['SECRET_KEY'], algorithm='HS256'
    )
    return jsonify({
        'success': True, 'token': token,
        'user': {'id': user.id, 'name': user.name, 'role': user.role,
                 'farmer_id': farmer.id if farmer else user.id}
    }), 200


@app.route('/api/auth/officer-login', methods=['POST'])
def officer_login():
    data = request.json
    email, password = data.get('email', ''), data.get('password', '')
    user = User.query.filter_by(email=email, role='officer').first()
    if user and user.check_password(password):
        token = jwt.encode(
            {'user_id': user.id, 'role': user.role,
             'exp': datetime.utcnow() + timedelta(hours=24)},
            app.config['SECRET_KEY'], algorithm='HS256'
        )
        return jsonify({'success': True, 'token': token,
                        'user': {'id': user.id, 'name': user.name, 'role': user.role}})
    return jsonify({'success': False, 'error': 'Invalid email or password'}), 401


# ----- OFFICER ROUTES -----

@app.route('/api/officer/farmers', methods=['GET'])
@token_required
def get_officer_farmers(current_user_id):
    """Return all farmers managed by this officer."""
    farmers = Farmer.query.filter_by(officer_id=current_user_id).all()
    return jsonify({
        'success': True,
        'farmers': [
            {
                'id': f.id,
                'name': f.name,
                'phone': f.phone,                          # FIX: was missing phone
                'aadhar': '[Redacted]',
                'recommendations_count': len(f.recommendations)
            }
            for f in farmers
        ]
    }), 200


@app.route('/api/officer/add-farmer', methods=['POST'])
@token_required
def add_farmer(current_user_id):
    """Add a new illiterate farmer under this officer."""
    data    = request.json
    name    = data.get('name', '').strip()
    aadhar  = data.get('aadhar', '').strip()
    phone   = data.get('phone', '').strip()

    if not all([name, aadhar, phone]):
        return jsonify({'success': False, 'error': 'Name, Aadhaar and phone are required'}), 400

    if len(aadhar) != 12 or not aadhar.isdigit():
        return jsonify({'success': False, 'error': 'Aadhaar must be 12 digits'}), 400

    if Farmer.query.filter_by(aadhar=aadhar).first():
        return jsonify({'success': False, 'error': 'Farmer with this Aadhaar already exists'}), 400

    farmer = Farmer(
        name=name, aadhar=aadhar, phone=phone,
        literacy_status='illiterate',
        officer_id=current_user_id
    )
    db.session.add(farmer)
    db.session.commit()

    return jsonify({
        'success': True,
        'message': f'Farmer {name} added successfully',
        'farmer': {'id': farmer.id, 'name': farmer.name, 'phone': farmer.phone}
    }), 201


# ----- PREDICTION -----

@app.route('/api/predict', methods=['POST'])
@token_required
def predict(current_user_id):
    try:
        data = request.json
        if not data:
            return jsonify({'success': False, 'error': 'No data provided'}), 400

        # 1. Read farmer-friendly inputs
        soil_type      = data.get('soil_condition', 'loamy').lower()
        fertility      = data.get('soil_fertility', 'medium').lower()
        city           = data.get('city', 'Hyderabad').strip()
        water_level    = int(data.get('water_level', 2))
        harvest_status = data.get('last_harvest_status', 'good')

        # 2. Map to N-P-K + pH based on soil type and fertility
        soil_base = {
            'sandy': [20, 15, 15, 6.0],
            'loamy': [60, 40, 40, 7.0],
            'clay':  [90, 50, 50, 7.5]
        }
        fertility_multiplier = {'low': 0.6, 'medium': 1.0, 'high': 1.4}
        n, p, k, ph = soil_base.get(soil_type, [50, 30, 30, 6.5])
        mult = fertility_multiplier.get(fertility, 1.0)
        n, p, k = int(n * mult), int(p * mult), int(k * mult)

        # 3. Get live weather
        weather = get_weather(city)
        temperature = weather['temperature']
        humidity    = weather['humidity']
        rainfall    = {1: 400, 2: 800, 3: 1200}.get(water_level, 600)

        # 4. ML Prediction
        if rf_model:
            features = np.array([[n, p, k, temperature, humidity, ph, rainfall]])
            prediction_raw = rf_model.predict(features)[0]
            # Get confidence from probability
            proba = rf_model.predict_proba(features)[0]
            confidence = round(float(max(proba)) * 100, 1)
            prediction = str(prediction_raw).title()
        else:
            prediction = 'Rice' if rainfall > 1000 else 'Maize'
            confidence = 87.5

        # 5. Fertilizer recommendation
        crop_key = prediction.lower().replace(' ', '')
        fertilizer_name = FERTILIZER_MAP.get(crop_key, FERTILIZER_MAP['default'])

        # 6. Impact factors (feature importances if available)
        explanation = []
        if rf_model and hasattr(rf_model, 'feature_importances_'):
            feature_names = ['Nitrogen', 'Phosphorus', 'Potassium', 'Temperature', 'Humidity', 'pH', 'Rainfall']
            importances = rf_model.feature_importances_
            top = sorted(zip(feature_names, importances), key=lambda x: -x[1])[:4]
            explanation = [[name, round(imp * 100, 1)] for name, imp in top]
        else:
            explanation = [['Soil Health', 45], ['Rainfall', 30], ['Temperature', 15], ['Humidity', 10]]

        # 7. Save recommendation to database
        try:
            farmer = Farmer.query.filter(
                (Farmer.user_id == current_user_id) | (Farmer.officer_id == current_user_id)
            ).first()
            farmer_id = data.get('farmer_id') or (farmer.id if farmer else None)

            if farmer_id:
                rec = Recommendation(
                    farmer_id=int(farmer_id),
                    crop=prediction,
                    fertilizer=fertilizer_name,
                    confidence=confidence,
                    weather_data=weather
                )
                db.session.add(rec)
                db.session.commit()
        except Exception as db_err:
            print(f"⚠️ Could not save recommendation: {db_err}")

        # 8. Return full response
        return jsonify({
            'success': True,
            'crop': prediction,
            'emoji': CROP_EMOJI.get(prediction.lower(), '🌾'),
            'confidence': confidence,
            'fertilizer': {
                'name': fertilizer_name,
                'n': n, 'p': p, 'k': k
            },
            'weather': weather,
            'explanation': explanation
        }), 200

    except Exception as e:
        print(f"❌ Prediction Error: {e}")
        return jsonify({'success': False, 'error': f'Server error: {str(e)}'}), 500


# ----- SEED OFFICER (run once to create a test officer account) -----

@app.route('/api/seed-officer', methods=['POST'])
def seed_officer():
    """Create a default officer account for testing. Remove in production."""
    if User.query.filter_by(email='officer@smartcrop.local').first():
        return jsonify({'message': 'Officer already exists'}), 200
    officer = User(
        email='officer@smartcrop.local',
        phone='9999999999', name='Test Officer',
        role='officer', verified=True
    )
    officer.set_password('officer123')
    db.session.add(officer)
    db.session.commit()
    return jsonify({'message': 'Officer created. Email: officer@smartcrop.local, Password: officer123'}), 201


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)