from flask import Flask, render_template, request, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from models import db, User, Farmer, Recommendation, Feedback
from datetime import datetime, timedelta
import os, joblib, numpy as np, requests, jwt
from dotenv import load_dotenv
from functools import wraps

load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///smart_crop.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'your-256-bit-secret-key-change-this')

db.init_app(app)
with app.app_context():
    db.create_all()

# ── Load ML model
try:
    rf_model = joblib.load('model/crop_rf_model.pkl')
    print("✅ Model loaded!")
except Exception as e:
    print(f"❌ Model not found: {e}")
    rf_model = None

OPENWEATHER_API_KEY = os.getenv('OPENWEATHER_API_KEY', '')

# ── Crop emojis
CROP_EMOJI = {
    'rice':'🌾','maize':'🌽','chickpea':'🫘','kidneybeans':'🫘','pigeonpeas':'🌱',
    'mothbeans':'🌱','mungbean':'🌿','blackgram':'🌿','lentil':'🫘','pomegranate':'🍎',
    'banana':'🍌','mango':'🥭','grapes':'🍇','watermelon':'🍉','muskmelon':'🍈',
    'apple':'🍎','orange':'🍊','papaya':'🍈','coconut':'🥥','cotton':'🌸',
    'jute':'🌿','coffee':'☕'
}

# ── Fertilizer map
FERTILIZER_MAP = {
    'rice':        'Urea + DAP (80:40 kg/acre)',
    'maize':       'NPK 20-20-0 + Zinc Sulphate',
    'wheat':       'Urea + SSP (60:30 kg/acre)',
    'cotton':      'NPK 19-19-19 + Potash',
    'chickpea':    'SSP + Rhizobium culture',
    'lentil':      'DAP + Sulphur (20:10 kg/acre)',
    'mango':       'NPK 13-00-45 + Magnesium + Micronutrients',
    'banana':      'NPK 13-00-45 + Magnesium',
    'grapes':      'NPK 0-52-34 + Calcium Nitrate',
    'pigeonpeas':  'SSP + Rhizobium culture',
    'blackgram':   'SSP + Zinc Sulphate',
    'mungbean':    'SSP + Rhizobium culture',
    'kidneybeans': 'DAP + Potash',
    'mothbeans':   'SSP + Zinc Sulphate',
    'pomegranate': 'NPK 13-00-45 + Calcium Nitrate',
    'watermelon':  'NPK 17-17-17 + Potash',
    'muskmelon':   'NPK 17-17-17 + Potash',
    'apple':       'NPK 12-32-16 + Calcium Nitrate',
    'orange':      'NPK 13-00-45 + Magnesium',
    'papaya':      'NPK 13-00-45 + Urea',
    'coconut':     'NPK 13-00-45 + Magnesium + Potash',
    'jute':        'Urea + SSP',
    'coffee':      'NPK 17-17-17 + Magnesium',
    'default':     'NPK 17-17-17 (Balanced)'
}

# ── Crop rotation rules:
# If last harvest was POOR, avoid recommending the same crop family
# Maps crop families so we can penalise repeat crops
CROP_FAMILIES = {
    'cereals':  ['rice','maize','wheat'],
    'pulses':   ['chickpea','lentil','pigeonpeas','blackgram','mungbean','mothbeans','kidneybeans'],
    'fruits':   ['mango','banana','grapes','watermelon','muskmelon','apple','orange','papaya','coconut','pomegranate'],
    'cash':     ['cotton','jute','coffee'],
}

def get_crop_family(crop_name):
    c = crop_name.lower().replace(' ','')
    for family, members in CROP_FAMILIES.items():
        if c in members:
            return family
    return None


def get_weather(city):
    if not OPENWEATHER_API_KEY or OPENWEATHER_API_KEY in ('demo_key_12345', ''):
        return {'temperature': 28, 'humidity': 70, 'city': city, 'description': 'Clear sky'}
    try:
        url  = f"https://api.openweathermap.org/data/2.5/weather?q={city},IN&appid={OPENWEATHER_API_KEY}&units=metric"
        resp = requests.get(url, timeout=5)
        d    = resp.json()
        if resp.status_code == 200:
            return {
                'temperature': round(d['main']['temp'], 1),
                'humidity':    d['main']['humidity'],
                'city':        d['name'],
                'description': d['weather'][0]['description'].title()
            }
    except Exception as e:
        print(f"⚠ Weather API: {e}")
    return {'temperature': 28, 'humidity': 70, 'city': city, 'description': 'Unavailable'}


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        if not token:
            return jsonify({'success': False, 'error': 'Token missing'}), 401
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
            return f(data['user_id'], *args, **kwargs)
        except jwt.ExpiredSignatureError:
            return jsonify({'success': False, 'error': 'Token expired'}), 401
        except Exception:
            return jsonify({'success': False, 'error': 'Invalid token'}), 401
    return decorated


def make_token(user):
    return jwt.encode(
        {'user_id': user.id, 'role': user.role, 'exp': datetime.utcnow() + timedelta(hours=24)},
        app.config['SECRET_KEY'], algorithm='HS256'
    )


# ── Service worker served from root scope
@app.route('/sw.js')
def service_worker():
    return send_from_directory('static', 'sw.js', mimetype='application/javascript', max_age=0)


@app.after_request
def add_headers(response):
    response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    response.headers['Pragma']        = 'no-cache'
    response.headers['Expires']       = '0'
    return response


@app.route('/')
def index():
    return render_template('index.html')


# ════════════════════════════════════════════
# FARMER AUTH
# ════════════════════════════════════════════

@app.route('/api/auth/farmer-register', methods=['POST'])
def farmer_register():
    d        = request.json
    name     = d.get('name', '').strip()
    aadhar   = d.get('aadhar', '').strip()
    password = d.get('password', '')
    if not all([name, aadhar, password]):
        return jsonify({'success': False, 'error': 'Name, Aadhaar and password required'}), 400
    if len(aadhar) != 12 or not aadhar.isdigit():
        return jsonify({'success': False, 'error': 'Aadhaar must be exactly 12 digits'}), 400
    if len(password) < 6:
        return jsonify({'success': False, 'error': 'Password must be at least 6 characters'}), 400
    if User.query.filter_by(email=f"farmer_{aadhar}@smartcrop.local").first():
        return jsonify({'success': False, 'error': 'Farmer already registered. Please login.'}), 400
    user   = User(email=f"farmer_{aadhar}@smartcrop.local", phone='', name=name, role='literate_farmer', verified=True)
    user.set_password(password)
    db.session.add(user)
    db.session.flush()
    farmer = Farmer(name=name, aadhar=aadhar, phone='', literacy_status='literate', user_id=user.id)
    db.session.add(farmer)
    db.session.commit()
    token = make_token(user)
    return jsonify({'success': True, 'token': token, 'user': {'id': user.id, 'name': user.name, 'role': user.role, 'farmer_id': farmer.id}}), 201


@app.route('/api/auth/farmer-login', methods=['POST'])
def farmer_login():
    d      = request.json
    aadhar = d.get('aadhar', '').strip()
    pwd    = d.get('password', '')
    if not aadhar or not pwd:
        return jsonify({'success': False, 'error': 'Aadhaar and password required'}), 400
    user = User.query.filter_by(email=f"farmer_{aadhar}@smartcrop.local").first()
    if not user or not user.check_password(pwd):
        return jsonify({'success': False, 'error': 'Invalid Aadhaar or password'}), 401
    farmer = Farmer.query.filter_by(user_id=user.id).first()
    token  = make_token(user)
    return jsonify({'success': True, 'token': token, 'user': {'id': user.id, 'name': user.name, 'role': user.role, 'farmer_id': farmer.id if farmer else user.id}}), 200


@app.route('/api/auth/farmer-forgot-password', methods=['POST'])
def farmer_forgot_password():
    d      = request.json
    aadhar = d.get('aadhar', '').strip()
    np_    = d.get('new_password', '')
    cp     = d.get('confirm_password', '')
    if not aadhar or not np_:
        return jsonify({'success': False, 'error': 'Aadhaar and new password required'}), 400
    if np_ != cp:
        return jsonify({'success': False, 'error': 'Passwords do not match'}), 400
    if len(np_) < 6:
        return jsonify({'success': False, 'error': 'Password must be at least 6 characters'}), 400
    user = User.query.filter_by(email=f"farmer_{aadhar}@smartcrop.local").first()
    if not user:
        return jsonify({'success': False, 'error': 'No account found with this Aadhaar'}), 404
    user.set_password(np_)
    db.session.commit()
    return jsonify({'success': True, 'message': 'Password updated! Please login.'}), 200


# ════════════════════════════════════════════
# OFFICER AUTH
# ════════════════════════════════════════════

@app.route('/api/auth/officer-register', methods=['POST'])
def officer_register():
    d        = request.json
    name     = d.get('name', '').strip()
    email    = d.get('email', '').strip().lower()
    password = d.get('password', '')
    code     = d.get('officer_code', '').strip()
    if not all([name, email, password]):
        return jsonify({'success': False, 'error': 'Name, email/phone and password required'}), 400
    if len(password) < 6:
        return jsonify({'success': False, 'error': 'Password must be at least 6 characters'}), 400
    OFFICER_REG_CODE = os.getenv('OFFICER_REG_CODE', 'AGRI2024')
    if code != OFFICER_REG_CODE:
        return jsonify({'success': False, 'error': 'Invalid department registration code'}), 403
    if User.query.filter_by(email=email).first():
        return jsonify({'success': False, 'error': 'This email/phone is already registered'}), 400
    user = User(email=email, phone='', name=name, role='officer', verified=True)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()
    token = make_token(user)
    return jsonify({'success': True, 'token': token, 'user': {'id': user.id, 'name': user.name, 'role': user.role}}), 201


@app.route('/api/auth/officer-login', methods=['POST'])
def officer_login():
    d      = request.json
    email  = d.get('email', '').strip().lower()
    pwd    = d.get('password', '')
    user   = User.query.filter_by(email=email, role='officer').first()
    if user and user.check_password(pwd):
        token = make_token(user)
        return jsonify({'success': True, 'token': token, 'user': {'id': user.id, 'name': user.name, 'role': user.role}})
    return jsonify({'success': False, 'error': 'Invalid credentials'}), 401


# ════════════════════════════════════════════
# OFFICER — FARMER MANAGEMENT
# ════════════════════════════════════════════

@app.route('/api/officer/farmers', methods=['GET'])
@token_required
def get_officer_farmers(cuid):
    farmers = Farmer.query.filter_by(officer_id=cuid).all()
    return jsonify({'success': True, 'farmers': [
        {'id': f.id, 'name': f.name, 'phone': f.phone or 'N/A',
         'aadhar': '[Redacted]', 'recommendations_count': len(f.recommendations)}
        for f in farmers
    ]}), 200


@app.route('/api/officer/add-farmer', methods=['POST'])
@token_required
def add_farmer(cuid):
    d      = request.json
    name   = d.get('name', '').strip()
    aadhar = d.get('aadhar', '').strip()
    phone  = d.get('phone', '').strip()
    if not all([name, aadhar]):
        return jsonify({'success': False, 'error': 'Name and Aadhaar required'}), 400
    if len(aadhar) != 12 or not aadhar.isdigit():
        return jsonify({'success': False, 'error': 'Aadhaar must be 12 digits'}), 400
    if Farmer.query.filter_by(aadhar=aadhar).first():
        return jsonify({'success': False, 'error': 'Farmer with this Aadhaar already exists'}), 400
    farmer = Farmer(name=name, aadhar=aadhar, phone=phone, literacy_status='illiterate', officer_id=cuid)
    db.session.add(farmer)
    db.session.commit()
    return jsonify({'success': True, 'message': f'{name} added', 'farmer': {'id': farmer.id, 'name': farmer.name, 'phone': farmer.phone}}), 201


# ════════════════════════════════════════════
# PREDICTION — with last_harvest_crop logic
# ════════════════════════════════════════════

@app.route('/api/predict', methods=['POST'])
@token_required
def predict(cuid):
    try:
        d = request.json
        if not d:
            return jsonify({'success': False, 'error': 'No data received'}), 400

        # ── Input parameters
        soil_type            = d.get('soil_condition', 'loamy').lower()
        fertility            = d.get('soil_fertility', 'medium').lower()
        city                 = d.get('city', 'Hyderabad').strip()
        water_level          = int(d.get('water_level', 2))
        last_harvest_status  = d.get('last_harvest_status', 'good').lower()
        last_harvest_crop    = d.get('last_harvest_crop', '').strip().lower()

        # ── Base NPK from soil type
        soil_base = {
            'sandy': [20, 15, 15, 6.0],
            'loamy': [60, 40, 40, 7.0],
            'clay':  [90, 50, 50, 7.5]
        }
        fertility_mult = {'low': 0.6, 'medium': 1.0, 'high': 1.4}

        n, p, k, ph = soil_base.get(soil_type, [50, 30, 30, 6.5])
        m = fertility_mult.get(fertility, 1.0)
        n, p, k = int(n * m), int(p * m), int(k * m)

        # ── Adjust for poor harvest — boost N to aid soil recovery
        if last_harvest_status == 'poor':
            n = int(n * 1.15)
            p = int(p * 1.1)

        # ── Weather
        weather  = get_weather(city)
        rainfall = {1: 400, 2: 800, 3: 1200}.get(water_level, 600)

        # ── ML Prediction
        if rf_model:
            features   = np.array([[n, p, k, weather['temperature'], weather['humidity'], ph, rainfall]])
            prediction = str(rf_model.predict(features)[0]).title()
            proba      = rf_model.predict_proba(features)[0]
            confidence = round(float(max(proba)) * 100, 1)

            # ── Crop rotation: if last harvest was poor and same crop is predicted,
            #    check second-best option
            if last_harvest_status == 'poor' and last_harvest_crop:
                last_family   = get_crop_family(last_harvest_crop)
                pred_family   = get_crop_family(prediction.lower())
                if last_family and pred_family and last_family == pred_family:
                    # Pick second-best class
                    sorted_indices = np.argsort(proba)[::-1]
                    classes = rf_model.classes_
                    for idx in sorted_indices[1:]:
                        alt_crop   = str(classes[idx]).title()
                        alt_family = get_crop_family(alt_crop.lower())
                        if alt_family != last_family:
                            prediction = alt_crop
                            confidence = round(float(proba[idx]) * 100, 1)
                            break
        else:
            prediction = 'Rice' if rainfall > 1000 else 'Maize'
            confidence = 87.5

        crop_key   = prediction.lower().replace(' ', '')
        fertilizer = FERTILIZER_MAP.get(crop_key, FERTILIZER_MAP['default'])

        # ── Feature importances for explanation
        if rf_model and hasattr(rf_model, 'feature_importances_'):
            names = ['Nitrogen', 'Phosphorus', 'Potassium', 'Temperature', 'Humidity', 'pH', 'Rainfall']
            top   = sorted(zip(names, rf_model.feature_importances_), key=lambda x: -x[1])[:4]
            explanation = [[name, round(val * 100, 1)] for name, val in top]
        else:
            explanation = [['Soil Health', 45], ['Rainfall', 30], ['Temperature', 15], ['Humidity', 10]]

        # ── Save recommendation to DB
        try:
            farmer = Farmer.query.filter(
                (Farmer.user_id == cuid) | (Farmer.officer_id == cuid)
            ).first()
            fid = d.get('farmer_id') or (farmer.id if farmer else None)
            if fid:
                db.session.add(Recommendation(
                    farmer_id=int(fid), crop=prediction,
                    fertilizer=fertilizer, confidence=confidence,
                    weather_data=weather
                ))
                db.session.commit()
        except Exception as e:
            print(f"⚠ DB save error: {e}")

        return jsonify({
            'success':     True,
            'crop':        prediction,
            'emoji':       CROP_EMOJI.get(crop_key, '🌾'),
            'confidence':  confidence,
            'fertilizer':  {'name': fertilizer, 'n': n, 'p': p, 'k': k},
            'weather':     weather,
            'explanation': explanation
        }), 200

    except Exception as e:
        print(f"❌ Predict error: {e}")
        return jsonify({'success': False, 'error': str(e)}), 500


# ════════════════════════════════════════════
# FEEDBACK
# ════════════════════════════════════════════

@app.route('/api/feedback', methods=['POST'])
@token_required
def submit_feedback(cuid):
    d        = request.json
    crop     = d.get('crop', '').strip()
    rating   = d.get('rating')
    comment  = d.get('comment', '').strip()
    location = d.get('location', '').strip()
    season   = d.get('season', '').strip()
    if not crop or rating is None:
        return jsonify({'success': False, 'error': 'Crop and rating required'}), 400
    if not (1 <= int(rating) <= 5):
        return jsonify({'success': False, 'error': 'Rating must be 1–5'}), 400
    farmer = Farmer.query.filter_by(user_id=cuid).first()
    db.session.add(Feedback(
        user_id=cuid, farmer_id=farmer.id if farmer else None,
        crop=crop, rating=int(rating), comment=comment,
        location=location, season=season
    ))
    db.session.commit()
    return jsonify({'success': True, 'message': 'Thank you for your feedback!'}), 201


@app.route('/api/feedback', methods=['GET'])
def get_feedback():
    crop     = request.args.get('crop', '')
    page     = int(request.args.get('page', 1))
    per_page = 10
    query    = Feedback.query
    if crop:
        query = query.filter(Feedback.crop.ilike(f'%{crop}%'))
    total     = query.count()
    feedbacks = query.order_by(Feedback.created_at.desc()).offset((page-1)*per_page).limit(per_page).all()
    all_q     = Feedback.query
    if crop:
        all_q = all_q.filter(Feedback.crop.ilike(f'%{crop}%'))
    all_r = [f.rating for f in all_q.all()]
    avg   = round(sum(all_r)/len(all_r), 1) if all_r else 0
    dist  = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
    for r in all_r:
        dist[r] = dist.get(r, 0) + 1
    return jsonify({
        'success': True, 'total': total, 'avg_rating': avg,
        'total_reviews': len(all_r), 'rating_dist': dist,
        'feedbacks': [{
            'id':           f.id,
            'farmer_name':  f.user.name if f.user else 'Anonymous',
            'crop':         f.crop,
            'rating':       f.rating,
            'comment':      f.comment,
            'location':     f.location,
            'season':       f.season,
            'created_at':   f.created_at.strftime('%b %d, %Y')
        } for f in feedbacks]
    }), 200


@app.route('/api/feedback/crops', methods=['GET'])
def get_feedback_crops():
    crops = db.session.query(Feedback.crop).distinct().all()
    return jsonify({'success': True, 'crops': [c[0] for c in crops]}), 200


# ════════════════════════════════════════════
# UTILITY ROUTES
# ════════════════════════════════════════════

@app.route('/api/seed-officer', methods=['POST'])
def seed_officer():
    if User.query.filter_by(email='officer@smartcrop.local').first():
        return jsonify({'message': 'Already exists'}), 200
    u = User(email='officer@smartcrop.local', phone='', name='Test Officer', role='officer', verified=True)
    u.set_password('officer123')
    db.session.add(u)
    db.session.commit()
    return jsonify({'message': 'Created: officer@smartcrop.local / officer123'}), 201


@app.route('/ping')
def ping():
    return jsonify({'status': 'alive', 'time': datetime.utcnow().isoformat()}), 200


@app.route('/health')
def health():
    return jsonify({'status': 'ok'}), 200


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))