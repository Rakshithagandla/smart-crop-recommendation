from flask import Flask, render_template, request, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from models import db, User, OTPVerification, Farmer, Recommendation, AuditLog
from datetime import datetime, timedelta
import os
import joblib
import pandas as pd
import numpy as np
import requests
from dotenv import load_dotenv
import jwt
import secrets
import string
from functools import wraps

load_dotenv()

app = Flask(__name__)

# ===== DATABASE CONFIGURATION =====
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv(
    'DATABASE_URL',
    'sqlite:///smart_crop.db'  # SQLite for local, PostgreSQL for production
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'your-secret-key-change-this')

db.init_app(app)

# ===== CREATE TABLES =====
with app.app_context():
    db.create_all()

# ===== LOAD ML MODEL =====
df_dataset = pd.read_csv('data/Crop_recommendation.csv')

CROP_DATASET_AVERAGES = {}
for crop in df_dataset['label'].unique():
    crop_data = df_dataset[df_dataset['label'] == crop]
    CROP_DATASET_AVERAGES[crop.lower()] = {
        'N': crop_data['N'].mean(),
        'P': crop_data['P'].mean(),
        'K': crop_data['K'].mean(),
        'temperature': crop_data['temperature'].mean(),
        'humidity': crop_data['humidity'].mean(),
        'ph': crop_data['ph'].mean(),
        'rainfall': crop_data['rainfall'].mean()
    }

FARMER_TO_DATASET_MAPPING = {
    'soil_condition': {
        'sandy': {'ph': 6.5, 'k_factor': 0.7, 'moisture': 0.3},
        'loamy': {'ph': 7.0, 'k_factor': 1.0, 'moisture': 0.6},
        'clay': {'ph': 7.5, 'k_factor': 1.2, 'moisture': 0.9}
    },
    'soil_fertility': {
        'low': {'multiplier': 0.5},
        'medium': {'multiplier': 1.0},
        'high': {'multiplier': 1.5}
    },
    'last_harvest': {
        'poor': {'multiplier': 0.8},
        'medium': {'multiplier': 1.0},
        'good': {'multiplier': 1.1}
    }
}

FERTILIZER_MAP = {
    'rice': {'name': '🌾 DAP + Urea', 'n': 46, 'p': 18, 'k': 0},
    'maize': {'name': '🌽 Urea + NPK', 'n': 46, 'p': 0, 'k': 0},
    'chickpea': {'name': '🫛 Balanced NPK', 'n': 20, 'p': 20, 'k': 20},
    'kidneybeans': {'name': '🫘 Balanced NPK', 'n': 20, 'p': 20, 'k': 20},
    'pigeonpeas': {'name': '🫘 DAP + Urea', 'n': 46, 'p': 18, 'k': 0},
    'mothbeans': {'name': '🫘 Balanced', 'n': 20, 'p': 20, 'k': 20},
    'mungbean': {'name': '🫘 NPK 5-10-10', 'n': 5, 'p': 10, 'k': 10},
    'blackgram': {'name': '🫘 DAP + Urea', 'n': 46, 'p': 18, 'k': 0},
    'lentil': {'name': '🫛 NPK 10-26-26', 'n': 10, 'p': 26, 'k': 26},
    'pomegranate': {'name': '🍎 High K', 'n': 46, 'p': 0, 'k': 60},
    'banana': {'name': '🍌 NPK 10-52-34', 'n': 10, 'p': 52, 'k': 34},
    'mango': {'name': '🥭 Urea + DAP', 'n': 46, 'p': 18, 'k': 0},
    'grapes': {'name': '🍇 Balanced', 'n': 20, 'p': 20, 'k': 20},
    'watermelon': {'name': '🍉 Light', 'n': 5, 'p': 10, 'k': 10},
    'muskmelon': {'name': '🍈 High P', 'n': 10, 'p': 52, 'k': 34},
    'apple': {'name': '🍎 Balanced', 'n': 20, 'p': 20, 'k': 20},
    'orange': {'name': '🍊 Urea', 'n': 46, 'p': 18, 'k': 0},
    'papaya': {'name': '🧡 High P', 'n': 10, 'p': 52, 'k': 34},
    'coconut': {'name': '🥥 Balanced', 'n': 20, 'p': 20, 'k': 20},
    'cotton': {'name': '🤍 NPK 10-26-26', 'n': 10, 'p': 26, 'k': 26},
    'sugarcane': {'name': '🍯 High NK', 'n': 46, 'p': 0, 'k': 60},
    'tobacco': {'name': '🔶 Urea', 'n': 46, 'p': 0, 'k': 0},
    'arecanut': {'name': '🎀 DAP + Urea', 'n': 46, 'p': 18, 'k': 0},
    'jute': {'name': '🧵 NPK 10-26-26', 'n': 10, 'p': 26, 'k': 26},
}

try:
    rf_model = joblib.load('model/crop_rf_model.pkl')
    print("✅ Model loaded successfully!")
except:
    print("❌ Model not found")
    rf_model = None

# ===== HELPER FUNCTIONS =====

def generate_otp():
    """Generate 6-digit OTP"""
    return ''.join(secrets.choice(string.digits) for _ in range(6))

def send_otp_sms(phone, otp):
    """Send OTP via SMS (using mock for now)"""
    try:
        # For production, use Twilio
        # from twilio.rest import Client
        # client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
        # message = client.messages.create(
        #     body=f'Your Smart Crop Recommendation OTP is: {otp}',
        #     from_=TWILIO_PHONE,
        #     to=phone
        # )
        
        print(f"📱 OTP for {phone}: {otp}")  # Mock SMS
        return True
    except Exception as e:
        print(f"❌ SMS Error: {e}")
        return False

def log_audit(user_id, action):
    """Log user actions for audit trail"""
    audit = AuditLog(user_id=user_id, action=action)
    db.session.add(audit)
    db.session.commit()

def token_required(f):
    """Decorator to check JWT token"""
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'success': False, 'error': 'Token missing'}), 401
        
        try:
            token = token.replace('Bearer ', '')
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
            current_user_id = data['user_id']
        except:
            return jsonify({'success': False, 'error': 'Invalid token'}), 401
        
        return f(current_user_id, *args, **kwargs)
    
    return decorated

# ===== ROUTES =====

@app.route('/')
def index():
    return render_template('index.html')

# ===== AUTHENTICATION ROUTES =====

@app.route('/api/auth/send-otp', methods=['POST'])
def send_otp():
    """Send OTP to phone number (Literate Farmer)"""
    data = request.json
    phone = data.get('phone')
    
    if not phone or len(phone) != 10:
        return jsonify({'success': False, 'error': 'Invalid phone number'}), 400
    
    # Check if user already exists
    user = User.query.filter_by(phone=phone).first()
    if user:
        return jsonify({'success': False, 'error': 'Phone number already registered'}), 400
    
    # Generate OTP
    otp = generate_otp()
    
    # Save OTP in database
    otp_record = OTPVerification.query.filter_by(phone=phone).first()
    if otp_record:
        otp_record.otp = otp
        otp_record.expires_at = datetime.utcnow() + timedelta(minutes=10)
    else:
        otp_record = OTPVerification(
            phone=phone,
            otp=otp,
            expires_at=datetime.utcnow() + timedelta(minutes=10)
        )
        db.session.add(otp_record)
    
    db.session.commit()
    
    # Send SMS
    send_otp_sms(phone, otp)
    
    return jsonify({'success': True, 'message': 'OTP sent to your phone'}), 200

@app.route('/api/auth/verify-otp', methods=['POST'])
def verify_otp():
    """Verify OTP and create account (Literate Farmer)"""
    data = request.json
    phone = data.get('phone')
    otp = data.get('otp')
    name = data.get('name')
    aadhar = data.get('aadhar')
    
    if not all([phone, otp, name, aadhar]):
        return jsonify({'success': False, 'error': 'Missing required fields'}), 400
    
    # Verify OTP
    otp_record = OTPVerification.query.filter_by(phone=phone).first()
    if not otp_record or otp_record.otp != otp:
        return jsonify({'success': False, 'error': 'Invalid OTP'}), 400
    
    if datetime.utcnow() > otp_record.expires_at:
        return jsonify({'success': False, 'error': 'OTP expired'}), 400
    
    # Create user account
    email = f"farmer_{aadhar}@smartcrop.local"
    temp_password = secrets.token_urlsafe(12)
    
    user = User(
        email=email,
        phone=phone,
        name=name,
        role='literate_farmer',
        verified=True
    )
    user.set_password(temp_password)
    
    # Create farmer profile
    farmer = Farmer(
        name=name,
        aadhar=aadhar,
        phone=phone,
        literacy_status='literate',
        user_id=user.id
    )
    
    db.session.add(user)
    db.session.add(farmer)
    db.session.commit()
    
    # Mark OTP as verified
    otp_record.verified = True
    db.session.commit()
    
    # Generate token
    token = jwt.encode({
        'user_id': user.id,
        'role': user.role
    }, app.config['SECRET_KEY'], algorithm='HS256')
    
    log_audit(user.id, f'Registered as literate farmer')
    
    return jsonify({
        'success': True,
        'token': token,
        'user': {
            'id': user.id,
            'name': user.name,
            'role': user.role,
            'farmer_id': farmer.id
        }
    }), 200

@app.route('/api/auth/officer-register', methods=['POST'])
def officer_register():
    """Register Agricultural Officer"""
    data = request.json
    email = data.get('email')
    password = data.get('password')
    name = data.get('name')
    phone = data.get('phone')
    
    if not all([email, password, name, phone]):
        return jsonify({'success': False, 'error': 'Missing required fields'}), 400
    
    if User.query.filter_by(email=email).first():
        return jsonify({'success': False, 'error': 'Email already registered'}), 400
    
    user = User(
        email=email,
        name=name,
        phone=phone,
        role='officer',
        verified=True
    )
    user.set_password(password)
    
    db.session.add(user)
    db.session.commit()
    
    log_audit(user.id, 'Officer registration')
    
    return jsonify({
        'success': True,
        'message': 'Officer registered successfully'
    }), 201

@app.route('/api/auth/officer-login', methods=['POST'])
def officer_login():
    """Login for Agricultural Officer"""
    data = request.json
    email = data.get('email')
    password = data.get('password')
    
    user = User.query.filter_by(email=email, role='officer').first()
    
    if not user or not user.check_password(password):
        return jsonify({'success': False, 'error': 'Invalid credentials'}), 401
    
    token = jwt.encode({
        'user_id': user.id,
        'role': user.role
    }, app.config['SECRET_KEY'], algorithm='HS256')
    
    log_audit(user.id, 'Officer login')
    
    return jsonify({
        'success': True,
        'token': token,
        'user': {
            'id': user.id,
            'name': user.name,
            'email': user.email,
            'role': user.role
        }
    }), 200

@app.route('/api/auth/login-illiterate', methods=['POST'])
def login_illiterate():
    """Login for Illiterate Farmer (managed by officer)"""
    data = request.json
    aadhar = data.get('aadhar')
    
    farmer = Farmer.query.filter_by(aadhar=aadhar, literacy_status='illiterate').first()
    
    if not farmer:
        return jsonify({'success': False, 'error': 'Farmer not found'}), 404
    
    if not farmer.user_id:
        return jsonify({'success': False, 'error': 'Farmer account not setup'}), 400
    
    user = User.query.get(farmer.user_id)
    
    token = jwt.encode({
        'user_id': user.id,
        'role': user.role,
        'farmer_id': farmer.id
    }, app.config['SECRET_KEY'], algorithm='HS256')
    
    log_audit(user.id, f'Illiterate farmer login - {aadhar}')
    
    return jsonify({
        'success': True,
        'token': token,
        'user': {
            'id': user.id,
            'name': farmer.name,
            'role': 'illiterate_farmer',
            'farmer_id': farmer.id
        }
    }), 200

# ===== OFFICER PORTAL ROUTES =====

@app.route('/api/officer/add-farmer', methods=['POST'])
@token_required
def add_farmer(current_user_id):
    """Officer adds new illiterate farmer"""
    user = User.query.get(current_user_id)
    if user.role != 'officer':
        return jsonify({'success': False, 'error': 'Unauthorized'}), 403
    
    data = request.json
    name = data.get('name')
    aadhar = data.get('aadhar')
    phone = data.get('phone')
    
    if not all([name, aadhar]):
        return jsonify({'success': False, 'error': 'Name and Aadhar required'}), 400
    
    if Farmer.query.filter_by(aadhar=aadhar).first():
        return jsonify({'success': False, 'error': 'Aadhar already registered'}), 400
    
    # Create farmer account
    farmer_user = User(
        email=f"farmer_{aadhar}@smartcrop.local",
        name=name,
        phone=phone,
        role='illiterate_farmer',
        verified=True
    )
    farmer_user.set_password(aadhar)  # Use Aadhar as temporary password
    
    farmer = Farmer(
        name=name,
        aadhar=aadhar,
        phone=phone,
        literacy_status='illiterate',
        officer_id=current_user_id,
        user_id=farmer_user.id
    )
    
    db.session.add(farmer_user)
    db.session.add(farmer)
    db.session.commit()
    
    log_audit(current_user_id, f'Added illiterate farmer: {aadhar}')
    
    return jsonify({
        'success': True,
        'message': 'Farmer added successfully',
        'farmer': {
            'id': farmer.id,
            'name': farmer.name,
            'aadhar': farmer.aadhar,
            'phone': farmer.phone
        }
    }), 201

@app.route('/api/officer/farmers', methods=['GET'])
@token_required
def get_officer_farmers(current_user_id):
    """Get all farmers added by officer"""
    user = User.query.get(current_user_id)
    if user.role != 'officer':
        return jsonify({'success': False, 'error': 'Unauthorized'}), 403
    
    farmers = Farmer.query.filter_by(officer_id=current_user_id).all()
    
    farmers_data = [{
        'id': f.id,
        'name': f.name,
        'aadhar': f.aadhar,
        'phone': f.phone,
        'literacy_status': f.literacy_status,
        'recommendations_count': len(f.recommendations)
    } for f in farmers]
    
    return jsonify({
        'success': True,
        'farmers': farmers_data,
        'total': len(farmers_data)
    }), 200

# ===== CROP RECOMMENDATION ROUTES =====

def convert_farmer_input_to_dataset_values(farmer_input, weather_data):
    soil_condition = farmer_input.get('soil_condition', 'loamy')
    soil_fertility = farmer_input.get('soil_fertility', 'medium')
    last_harvest = farmer_input.get('last_harvest', 'medium')
    
    soil_map = FARMER_TO_DATASET_MAPPING['soil_condition'].get(
        soil_condition, FARMER_TO_DATASET_MAPPING['soil_condition']['loamy']
    )
    fertility_map = FARMER_TO_DATASET_MAPPING['soil_fertility'].get(
        soil_fertility, FARMER_TO_DATASET_MAPPING['soil_fertility']['medium']
    )
    harvest_map = FARMER_TO_DATASET_MAPPING['last_harvest'].get(
        last_harvest, FARMER_TO_DATASET_MAPPING['last_harvest']['medium']
    )
    
    base_n = df_dataset['N'].mean()
    base_p = df_dataset['P'].mean()
    base_k = df_dataset['K'].mean()
    
    n_value = base_n * fertility_map['multiplier'] * soil_map['k_factor'] * harvest_map['multiplier']
    p_value = base_p * fertility_map['multiplier'] * soil_map['k_factor'] * harvest_map['multiplier']
    k_value = base_k * fertility_map['multiplier'] * soil_map['k_factor'] * harvest_map['multiplier']
    
    temperature = weather_data.get('temperature', 25)
    rainfall = weather_data.get('rainfall', 100)
    ph = soil_map['ph']
    humidity = soil_map['moisture'] * 100
    
    return {
        'N': max(0, round(n_value, 2)),
        'P': max(0, round(p_value, 2)),
        'K': max(0, round(k_value, 2)),
        'temperature': temperature,
        'humidity': round(humidity, 2),
        'ph': ph,
        'rainfall': rainfall
    }

def fetch_weather(city):
    try:
        api_key = os.getenv('OPENWEATHER_API_KEY', '')
        if not api_key or api_key == 'demo_key_12345':
            return {
                'temperature': 25,
                'humidity': 60,
                'rainfall': 100,
                'city': city,
                'description': 'Demo mode'
            }
        
        url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
        response = requests.get(url, timeout=5)
        
        if response.status_code == 200:
            data = response.json()
            return {
                'temperature': data['main']['temp'],
                'humidity': data['main']['humidity'],
                'city': data['name']
            }
    except:
        pass
    
    return {
        'temperature': 25,
        'humidity': 60,
        'city': city
    }

@app.route('/api/predict', methods=['POST'])
@token_required
def predict(current_user_id):
    """Get crop recommendation"""
    try:
        user = User.query.get(current_user_id)
        farmer_input = request.json
        city = farmer_input.get('city', 'Delhi')
        
        if rf_model is None:
            return jsonify({'success': False, 'error': 'Model not loaded'}), 500
        
        # Get farmer info
        if user.role == 'literate_farmer':
            farmer = Farmer.query.filter_by(user_id=current_user_id).first()
        else:
            farmer_id = farmer_input.get('farmer_id')
            farmer = Farmer.query.get(farmer_id)
        
        weather = fetch_weather(city)
        dataset_values = convert_farmer_input_to_dataset_values(farmer_input, weather)
        
        features = np.array([[
            dataset_values['N'],
            dataset_values['P'],
            dataset_values['K'],
            dataset_values['temperature'],
            dataset_values['humidity'],
            dataset_values['ph'],
            dataset_values['rainfall']
        ]])
        
        prediction = rf_model.predict(features)[0]
        probabilities = rf_model.predict_proba(features)[0]
        confidence = max(probabilities) * 100
        
        crop_info = CROP_DATASET_AVERAGES.get(prediction.lower(), {})
        fertilizer = FERTILIZER_MAP.get(prediction.lower(), {
            'name': '💚 Balanced NPK 20-20-20',
            'n': 20, 'p': 20, 'k': 20
        })
        
        # Save recommendation
        if farmer:
            recommendation = Recommendation(
                farmer_id=farmer.id,
                crop=prediction.title(),
                fertilizer=str(fertilizer),
                confidence=round(confidence, 2),
                weather_data=weather
            )
            db.session.add(recommendation)
            db.session.commit()
        
        feature_names = ['Nitrogen', 'Phosphorus', 'Potassium', 
                        'Temperature', 'Humidity', 'pH', 'Rainfall']
        importances = rf_model.feature_importances_
        feature_dict = dict(zip(feature_names, importances))
        explanation = sorted(feature_dict.items(), key=lambda x: x[1], reverse=True)[:3]
        
        log_audit(current_user_id, f'Got recommendation for crop: {prediction}')
        
        return jsonify({
            'success': True,
            'crop': prediction.title(),
            'crop_info': crop_info,
            'fertilizer': fertilizer,
            'weather': weather,
            'confidence': round(confidence, 2),
            'explanation': [[e[0], round(e[1] * 100, 1)] for e in explanation]
        }), 200
    
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'success': False, 'error': str(e)}), 400

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)