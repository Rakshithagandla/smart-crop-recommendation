from flask import Flask, render_template, request, jsonify
import joblib
import pandas as pd
import numpy as np
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Load dataset
df_dataset = pd.read_csv('data/Crop_recommendation.csv')

# Calculate crop averages
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

print("✅ Crop Dataset Averages Loaded")

# Farmer mapping
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

# Fertilizer recommendations
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

# Load model
try:
    rf_model = joblib.load('model/crop_rf_model.pkl')
    print("✅ Model loaded successfully!")
except:
    print("❌ Model not found")
    rf_model = None

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
                'description': 'API key not configured'
            }
        
        url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
        response = requests.get(url, timeout=5)
        
        if response.statusCode == 200:
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

def get_fertilizer_recommendation(crop):
    crop_key = crop.lower().strip()
    if crop_key in FERTILIZER_MAP:
        return FERTILIZER_MAP[crop_key]
    return {
        'name': '💚 Balanced NPK 20-20-20',
        'n': 20, 'p': 20, 'k': 20
    }

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        farmer_input = request.json
        city = farmer_input.get('city', 'Delhi')
        
        if rf_model is None:
            return jsonify({'success': False, 'error': 'Model not loaded'}), 500
        
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
        fertilizer = get_fertilizer_recommendation(prediction)
        
        feature_names = ['Nitrogen', 'Phosphorus', 'Potassium', 
                        'Temperature', 'Humidity', 'pH', 'Rainfall']
        importances = rf_model.feature_importances_
        feature_dict = dict(zip(feature_names, importances))
        explanation = sorted(feature_dict.items(), key=lambda x: x[1], reverse=True)[:3]
        
        return jsonify({
            'success': True,
            'crop': prediction.title(),
            'crop_info': crop_info,
            'fertilizer': fertilizer,
            'weather': weather,
            'confidence': round(confidence, 2),
            'explanation': explanation
        })
    
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'success': False, 'error': str(e)}), 400

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)