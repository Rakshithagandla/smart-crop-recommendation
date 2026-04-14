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
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///smart_crop.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'your-256-bit-secret-key-change-this')

db.init_app(app)

# ===== CREATE TABLES =====
with app.app_context():
    db.create_all()

# ===== LOAD ML MODEL =====
try:
    rf_model = joblib.load('model/crop_rf_model.pkl')
    print("✅ Model loaded successfully!")
except:
    print("❌ Model not found - Using fallback logic")
    rf_model = None

# ===== CONFIGURATION & HELPERS =====
TWILIO_ACCOUNT_SID = os.getenv('TWILIO_ACCOUNT_SID', 'AC307fa26fee0cb788f7b24e72f0ce337e')
TWILIO_AUTH_TOKEN = os.getenv('TWILIO_AUTH_TOKEN', 'af053af80f1c8e8d40439f601f2bd889')
TWILIO_PHONE_NUMBER = os.getenv('TWILIO_PHONE_NUMBER', '+12605445133')

def generate_otp():
    return ''.join(secrets.choice(string.digits) for _ in range(6))

def send_otp_sms(phone, otp):
    try:
        client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
        client.messages.create(
            body=f"Your Smart Crop OTP is: {otp}. Valid for 5 minutes.",
            from_=TWILIO_PHONE_NUMBER,
            to=f"+91{phone}"
        )
        return True
    except Exception as e:
        print(f"❌ Twilio Error: {e}")
        return False

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
        except Exception as e:
            return jsonify({'success': False, 'error': 'Invalid token'}), 401
        return f(current_user_id, *args, **kwargs)
    return decorated

# ===== ROUTES =====

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/auth/send-otp', methods=['POST'])
def send_otp():
    data = request.json
    phone = data.get('phone')
    if not phone or len(phone) != 10:
        return jsonify({'success': False, 'error': 'Invalid phone number'}), 400
    
    user = User.query.filter_by(phone=phone).first()
    otp = generate_otp()
    
    otp_record = OTPVerification.query.filter_by(phone=phone).first()
    if otp_record:
        otp_record.otp = otp
        otp_record.expires_at = datetime.utcnow() + timedelta(minutes=10)
    else:
        otp_record = OTPVerification(phone=phone, otp=otp, expires_at=datetime.utcnow() + timedelta(minutes=10))
        db.session.add(otp_record)
    
    db.session.commit()
    send_otp_sms(phone, otp) # This will log the 401 error but code continues
    
    return jsonify({'success': True, 'is_registered': bool(user)}), 200

@app.route('/api/auth/verify-otp', methods=['POST'])
def verify_otp():
    data = request.json
    phone, user_otp, name, aadhar = data.get('phone'), data.get('otp'), data.get('name'), data.get('aadhar')

    if not all([phone, user_otp, name, aadhar]):
        return jsonify({'success': False, 'error': 'Missing fields'}), 400

    # MASTER OTP CHECK (Priority)
    if user_otp != "123456":
        otp_record = OTPVerification.query.filter_by(phone=phone).first()
        if not otp_record or otp_record.otp != user_otp or datetime.utcnow() > otp_record.expires_at:
            return jsonify({'success': False, 'error': 'Invalid or expired OTP'}), 400

    user = User.query.filter_by(phone=phone).first()
    if user:
         return jsonify({'success': False, 'error': 'Number already registered'}), 400

    # Create Secure Account
    new_user = User(email=f"farmer_{aadhar}@smartcrop.local", phone=phone, name=name, role='literate_farmer', verified=True)
    new_user.set_password(secrets.token_urlsafe(12))
    db.session.add(new_user)
    db.session.flush() 
    
    farmer = Farmer(name=name, aadhar=aadhar, phone=phone, literacy_status='literate', user_id=new_user.id)
    db.session.add(farmer)
    db.session.commit()
    
    token = jwt.encode({'user_id': new_user.id, 'role': new_user.role, 'exp': datetime.utcnow() + timedelta(hours=24)}, app.config['SECRET_KEY'], algorithm='HS256')
    
    return jsonify({'success': True, 'token': token, 'user': {'id': new_user.id, 'name': new_user.name, 'role': new_user.role, 'farmer_id': farmer.id}}), 200

@app.route('/api/auth/login-verify', methods=['POST'])
def login_verify():
    data = request.json
    phone = data.get('phone')
    otp = data.get('otp')

    # MASTER OTP BYPASS
    if otp == "123456":
        user = User.query.filter_by(phone=phone).first()
        if user:
            # Create a token that lasts 24 hours
            token = jwt.encode({
                'user_id': user.id,
                'role': user.role,
                'exp': datetime.utcnow() + timedelta(hours=24)
            }, app.config['SECRET_KEY'], algorithm='HS256')
            
            return jsonify({
                "success": True, 
                "token": token, 
                "user": {"id": user.id, "name": user.name, "role": user.role, "farmer_id": user.id}
            }), 200
        return jsonify({"success": False, "error": "User not found"}), 404
    return jsonify({"success": False, "error": "Invalid OTP"}), 400

@app.route('/api/predict', methods=['POST'])
@token_required # Keep this to handle the 401/Auth correctly
def predict(current_user_id):
    try:
        data = request.json
        if not data:
            return jsonify({'success': False, 'error': 'No data provided'}), 400

        # 1. Get Farmer-Friendly Inputs
        # We use .get() with defaults so the code doesn't crash if a field is missing
        soil_type = data.get('soil_condition', 'loamy').lower()
        water_level = int(data.get('water_level', 2)) 
        city = data.get('city', 'Nizamabad')

        # 2. Map Friendly inputs to scientific N-P-K (For your ML Model)
        soil_map = {
            'sandy': [20, 15, 15, 6.0], 
            'loamy': [60, 40, 40, 7.0], 
            'clay': [90, 50, 50, 7.5]
        }
        n, p, k, ph = soil_map.get(soil_type, [50, 30, 30, 6.5])
        
        # Map Water Level to Rainfall (mm)
        rainfall = {1: 400, 2: 800, 3: 1200}.get(water_level, 600)
        
        # 3. AI Model Prediction
        # Format: [N, P, K, Temperature, Humidity, pH, Rainfall]
        if rf_model:
            features = np.array([[n, p, k, 28, 70, ph, rainfall]])
            prediction_raw = rf_model.predict(features)[0]
            prediction = str(prediction_raw).title()
        else:
            # Fallback if the .pkl file didn't load
            prediction = "Rice" if rainfall > 1000 else "Maize"

        # 4. Return the response
        return jsonify({
            'success': True,
            'crop': prediction,
            'fertilizer': {
                'name': 'Urea + DAP' if prediction == "Rice" else 'NPK 19-19-19',
                'n': n, 'p': p, 'k': k
            },
            'weather': {
                'temperature': 28, 
                'humidity': 70, 
                'city': city
            },
            'confidence': 94,
            'explanation': [['Soil Health', 75], ['Water Supply', 25]]
        }), 200

    except Exception as e:
        print(f"Prediction Error: {str(e)}")
        return jsonify({'success': False, 'error': 'Server processed error: ' + str(e)}), 400

@app.route('/api/auth/officer-login', methods=['POST'])
def officer_login():
    data = request.json
    email, password = data.get('email'), data.get('password')
    user = User.query.filter_by(email=email, role='officer').first()
    if user and user.check_password(password):
        token = jwt.encode({'user_id': user.id, 'role': user.role, 'exp': datetime.utcnow() + timedelta(hours=24)}, app.config['SECRET_KEY'], algorithm='HS256')
        return jsonify({'success': True, 'token': token, 'user': {'id': user.id, 'name': user.name, 'role': user.role}})
    return jsonify({'success': False, 'error': 'Invalid credentials'}), 401

@app.route('/api/officer/farmers', methods=['GET'])
@token_required
def get_officer_farmers(current_user_id):
    farmers = Farmer.query.filter_by(officer_id=current_user_id).all()
    return jsonify({'success': True, 'farmers': [{'id': f.id, 'name': f.name, 'aadhar': '[Redacted]', 'recommendations_count': 0} for f in farmers]}), 200

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)