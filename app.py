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
from twilio.rest import Client

load_dotenv()

app = Flask(__name__)

# ===== DATABASE CONFIGURATION =====
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv(
    'DATABASE_URL',
    'sqlite:///smart_crop.db'
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
    return ''.join(secrets.choice(string.digits) for _ in range(6))

TWILIO_ACCOUNT_SID = 'AC307fa26fee0cb788f7b24e72f0ce337e' 
TWILIO_AUTH_TOKEN = 'af053af80f1c8e8d40439f601f2bd889'
TWILIO_PHONE_NUMBER = '+12605445133'

def send_otp_sms(phone, otp):
    try:
        client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
        formatted_phone = f"+91{phone}" 
        message = client.messages.create(
            body=f"Your Smart Crop OTP is: {otp}. Valid for 5 minutes.",
            from_=TWILIO_PHONE_NUMBER,
            to=formatted_phone
        )
        print(f"✅ SMS sent successfully to {formatted_phone}")
        return True
    except Exception as e:
        print(f"❌ Twilio Error: {e}")
        return False

def log_audit(user_id, action):
    audit = AuditLog(user_id=user_id, action=action)
    db.session.add(audit)
    db.session.commit()

def token_required(f):
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

@app.route('/api/auth/send-otp', methods=['POST'])
def send_otp():
    """Send OTP (Works for both Register & Login)"""
    data = request.json
    phone = data.get('phone')
    
    if not phone or len(phone) != 10:
        return jsonify({'success': False, 'error': 'Invalid phone number'}), 400
    
    # Check if user exists
    user = User.query.filter_by(phone=phone).first()
    is_existing_user = True if user else False
    
    otp = generate_otp()
    
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
    send_otp_sms(phone, otp)
    
    return jsonify({
        'success': True, 
        'message': 'OTP sent successfully',
        'is_registered': is_existing_user 
    }), 200

@app.route('/api/auth/verify-otp', methods=['POST'])
def verify_otp():
    """Verify OTP and create account"""
    data = request.json
    phone = data.get('phone')
    otp = data.get('otp')
    name = data.get('name')
    aadhar = data.get('aadhar')
    
    if not all([phone, otp, name, aadhar]):
        return jsonify({'success': False, 'error': 'Missing required fields'}), 400
    
    otp_record = OTPVerification.query.filter_by(phone=phone).first()
    if not otp_record or otp_record.otp != otp:
        return jsonify({'success': False, 'error': 'Invalid OTP'}), 400
    
    if datetime.utcnow() > otp_record.expires_at:
        return jsonify({'success': False, 'error': 'OTP expired'}), 400
    
    email = f"farmer_{aadhar}@smartcrop.local"
    temp_password = secrets.token_urlsafe(12)
    
    user = User(
        email=email, phone=phone, name=name,
        role='literate_farmer', verified=True
    )
    user.set_password(temp_password)
    
    farmer = Farmer(
        name=name, aadhar=aadhar, phone=phone,
        literacy_status='literate', user_id=user.id
    )
    
    db.session.add(user)
    db.session.add(farmer)
    db.session.commit()
    
    otp_record.verified = True
    db.session.commit()
    
    token = jwt.encode({
        'user_id': user.id, 'role': user.role
    }, app.config['SECRET_KEY'], algorithm='HS256')
    
    return jsonify({
        'success': True,
        'token': token,
        'user': {
            'id': user.id, 'name': user.name,
            'role': user.role, 'farmer_id': farmer.id
        }
    }), 200

@app.route('/api/auth/login-verify', methods=['POST'])
def login_verify():
    """Verify OTP for existing users"""
    data = request.json
    phone = data.get('phone')
    otp = data.get('otp')
    
    otp_record = OTPVerification.query.filter_by(phone=phone, otp=otp).first()
    if not otp_record or datetime.utcnow() > otp_record.expires_at:
        return jsonify({'success': False, 'error': 'Invalid or expired OTP'}), 400
    
    user = User.query.filter_by(phone=phone).first()
    farmer = Farmer.query.filter_by(phone=phone).first()
    
    token = jwt.encode({
        'user_id': user.id, 'role': user.role
    }, app.config['SECRET_KEY'], algorithm='HS256')
    
    return jsonify({
        'success': True,
        'token': token,
        'user': {
            'id': user.id, 'name': user.name,
            'role': user.role, 'farmer_id': farmer.id if farmer else None
        }
    }), 200

@app.route('/api/auth/officer-register', methods=['POST'])
def officer_register():
    data = request.json
    email, password, name, phone = data.get('email'), data.get('password'), data.get('name'), data.get('phone')
    
    if not all([email, password, name, phone]):
        return jsonify({'success': False, 'error': 'Missing fields'}), 400
    
    if User.query.filter_by(email=email).first():
        return jsonify({'success': False, 'error': 'Registered email'}), 400
    
    user = User(email=email, name=name, phone=phone, role='officer', verified=True)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()
    return jsonify({'success': True, 'message': 'Officer registered'}), 201

@app.route('/api/auth/officer-login', methods=['POST'])
def officer_login():
    data = request.json
    email, password = data.get('email'), data.get('password')
    user = User.query.filter_by(email=email, role='officer').first()
    
    if not user or not user.check_password(password):
        return jsonify({'success': False, 'error': 'Invalid credentials'}), 401
    
    token = jwt.encode({'user_id': user.id, 'role': user.role}, app.config['SECRET_KEY'], algorithm='HS256')
    return jsonify({'success': True, 'token': token, 'user': {'id': user.id, 'name': user.name, 'role': user.role}})

@app.route('/api/officer/add-farmer', methods=['POST'])
@token_required
def add_farmer(current_user_id):
    user = User.query.get(current_user_id)
    if user.role != 'officer': return jsonify({'success': False, 'error': 'Unauthorized'}), 403
    
    data = request.json
    name, aadhar, phone = data.get('name'), data.get('aadhar'), data.get('phone')
    
    if Farmer.query.filter_by(aadhar=aadhar).first():
        return jsonify({'success': False, 'error': 'Aadhar exists'}), 400
    
    farmer_user = User(email=f"farmer_{aadhar}@smartcrop.local", name=name, phone=phone, role='illiterate_farmer', verified=True)
    farmer_user.set_password(aadhar)
    
    farmer = Farmer(name=name, aadhar=aadhar, phone=phone, literacy_status='illiterate', officer_id=current_user_id, user_id=farmer_user.id)
    
    db.session.add(farmer_user); db.session.add(farmer); db.session.commit()
    return jsonify({'success': True, 'message': 'Farmer added'}), 201

@app.route('/api/officer/farmers', methods=['GET'])
@token_required
def get_officer_farmers(current_user_id):
    farmers = Farmer.query.filter_by(officer_id=current_user_id).all()
    farmers_data = [{'id': f.id, 'name': f.name, 'aadhar': f.aadhar, 'recommendations_count': len(f.recommendations)} for f in farmers]
    return jsonify({'success': True, 'farmers': farmers_data}), 200

def fetch_weather(city):
    return {'temperature': 25, 'humidity': 60, 'city': city}
@app.route('/api/predict', methods=['POST'])
@token_required
def predict(current_user_id):
    """Get real crop recommendation"""
    try:
        user = User.query.get(current_user_id)
        farmer_input = request.json
        city = farmer_input.get('city', 'Delhi')
        
        if rf_model is None:
            return jsonify({'success': False, 'error': 'Model not loaded'}), 500
        
        # Get correct farmer profile
        if user.role == 'literate_farmer':
            farmer = Farmer.query.filter_by(user_id=current_user_id).first()
        else:
            farmer_id = farmer_input.get('farmer_id')
            farmer = Farmer.query.get(farmer_id)

        # 1. Fetch Weather and Convert Soil Inputs
        weather = fetch_weather(city)
        dataset_values = convert_farmer_input_to_dataset_values(farmer_input, weather)
        
        # 2. Prepare Features for the AI Model
        features = np.array([[
            dataset_values['N'],
            dataset_values['P'],
            dataset_values['K'],
            dataset_values['temperature'],
            dataset_values['humidity'],
            dataset_values['ph'],
            dataset_values['rainfall']
        ]])
        
        # 3. Run Prediction
        prediction = rf_model.predict(features)[0]
        probabilities = rf_model.predict_proba(features)[0]
        confidence = max(probabilities) * 100
        
        # 4. Get Fertilizer info
        fertilizer = FERTILIZER_MAP.get(prediction.lower(), {
            'name': 'Balanced NPK', 'n': 20, 'p': 20, 'k': 20
        })
        
        # 5. Save to Database
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
        
        return jsonify({
            'success': True,
            'crop': prediction.title(),
            'fertilizer': fertilizer,
            'weather': weather,
            'confidence': round(confidence, 2),
            'explanation': [['Soil Quality', 85], ['Climate', 15]] # Simplified for UI
        }), 200
    
    except Exception as e:
        print(f"Prediction Error: {e}")
        return jsonify({'success': False, 'error': str(e)}), 400

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)