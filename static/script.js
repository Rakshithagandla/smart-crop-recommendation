const translations = {
    'en': {
        // Navigation & Welcome
        'navLogin': 'Login',
        'navRegister': 'Register',
        'welcomeTitle': 'Smart Crop Recommendation System',
        'welcomeSub': 'AI-Powered Recommendations for Better Harvests',
        'getStarted': 'Get Started',
        'logout': 'Logout',

        // Auth Screens
        'phoneTitle': 'Phone Verification',
        'phoneLabel': 'Enter Mobile Number',
        'sendOtp': 'Send OTP',
        'otpLabel': 'Enter 6-Digit OTP',
        'verifyBtn': 'Verify & Login',
        'aadharLabel': 'Aadhar Number (12 digits)',
        'nameLabel': 'Full Name',

        // Officer Dashboard
        'dashTitle': 'Officer Dashboard',
        'addNewFarmer': 'Add New Farmer',
        'myFarmers': 'My Farmers',
        'addFarmerBtn': 'Add Farmer',
        'getRecBtn': 'Get Recommendation',

        // Input Form
        'formTitle': 'Soil & Location Details',
        'cityLabel': 'City/District',
        'soilLabel': 'Soil Condition',
        'fertilityLabel': 'Soil Fertility',
        'harvestLabel': 'Last Harvest Quality',
        'predictBtn': 'Predict Best Crop',
        'sandy': 'Sandy', 'loamy': 'Loamy', 'clay': 'Clay',
        'low': 'Low', 'medium': 'Medium', 'high': 'High',
        'poor': 'Poor', 'good': 'Good',

        // Results Section
        'resTitle': 'Recommendation Result',
        'confLabel': 'Confidence Score',
        'fertLabel': 'Recommended Fertilizer',
        'weatherLabel': 'Current Weather',
        'factorsLabel': 'Impact Factors',

        // Crops (All 22 Categories)
        'crop_rice': 'Rice', 'crop_maize': 'Maize', 'crop_chickpea': 'Chickpea',
        'crop_kidneybeans': 'Kidney Beans', 'crop_pigeonpeas': 'Pigeon Peas',
        'crop_mothbeans': 'Moth Beans', 'crop_mungbean': 'Mung Bean',
        'crop_blackgram': 'Black Gram', 'crop_lentil': 'Lentil',
        'crop_pomegranate': 'Pomegranate', 'crop_banana': 'Banana',
        'crop_mango': 'Mango', 'crop_grapes': 'Grapes',
        'crop_watermelon': 'Watermelon', 'crop_muskmelon': 'Muskmelon',
        'crop_apple': 'Apple', 'crop_orange': 'Orange',
        'crop_papaya': 'Papaya', 'crop_coconut': 'Coconut',
        'crop_cotton': 'Cotton', 'crop_jute': 'Jute', 'crop_coffee': 'Coffee'
    },
    'hi': {
        'navLogin': 'लॉगिन',
        'navRegister': 'पंजीकरण',
        'welcomeTitle': 'स्मार्ट फसल अनुशंसा प्रणाली',
        'welcomeSub': 'बेहतर फसल के लिए एआई-संचालित सिफारिशें',
        'getStarted': 'शुरू करें',
        'logout': 'लॉगआउट',

        'phoneTitle': 'फ़ोन सत्यापन',
        'phoneLabel': 'मोबाइल नंबर दर्ज करें',
        'sendOtp': 'ओटीपी भेजें',
        'otpLabel': '6-अंकीय ओटीपी दर्ज करें',
        'verifyBtn': 'सत्यापित करें और लॉगिन करें',
        'aadharLabel': 'आधार नंबर (12 अंक)',
        'nameLabel': 'पूरा नाम',

        'dashTitle': 'अधिकारी डैशबोर्ड',
        'addNewFarmer': 'नया किसान जोड़ें',
        'myFarmers': 'मेरे किसान',
        'addFarmerBtn': 'किसान जोड़ें',
        'getRecBtn': 'अनुशंसा प्राप्त करें',

        'formTitle': 'मिट्टी और स्थान का विवरण',
        'cityLabel': 'शहर/जिला',
        'soilLabel': 'मिट्टी की स्थिति',
        'fertilityLabel': 'मिट्टी की उर्वरता',
        'harvestLabel': 'पिछली फसल की गुणवत्ता',
        'predictBtn': 'सबसे अच्छी फसल जानें',
        'sandy': 'रेतीली', 'loamy': 'दोमट', 'clay': 'चिकनी',
        'low': 'कम', 'medium': 'मध्यम', 'high': 'उच्च',
        'poor': 'खराब', 'good': 'अच्छा',

        'resTitle': 'अनुशंसा परिणाम',
        'confLabel': 'आत्मविश्वास स्कोर',
        'fertLabel': 'अनुशंसित उर्वरक',
        'weatherLabel': 'वर्तमान मौसम',
        'factorsLabel': 'प्रभाव कारक',

        'crop_rice': 'चावल', 'crop_maize': 'मक्का', 'crop_chickpea': 'चना',
        'crop_kidneybeans': 'राजमा', 'crop_pigeonpeas': 'अरहर दाल',
        'crop_mothbeans': 'मोठ दाल', 'crop_mungbean': 'मूंग दाल',
        'crop_blackgram': 'उड़द दाल', 'crop_lentil': 'मसूर दाल',
        'crop_pomegranate': 'अनार', 'crop_banana': 'केला',
        'crop_mango': 'आम', 'crop_grapes': 'अंगूर',
        'crop_watermelon': 'तरबूज', 'crop_muskmelon': 'खरबूजा',
        'crop_apple': 'सेब', 'crop_orange': 'संतरा',
        'crop_papaya': 'पपीता', 'crop_coconut': 'नारियल',
        'crop_cotton': 'कपास', 'crop_jute': 'जूट', 'crop_coffee': 'कॉफी'
    },
    'te': {
        'navLogin': 'లాగిన్',
        'navRegister': 'రిజిస్టర్',
        'welcomeTitle': 'స్మార్ట్ పంట సిఫార్సు వ్యవస్థ',
        'welcomeSub': 'మెరుగైన దిగుబడి కోసం AI సిఫార్సులు',
        'getStarted': 'ప్రారంభించండి',
        'logout': 'లాగ్ అవుట్',

        'phoneTitle': 'ఫోన్ వెరిఫికేషన్',
        'phoneLabel': 'మొబైల్ సంఖ్యను నమోదు చేయండి',
        'sendOtp': 'OTP పంపండి',
        'otpLabel': '6 అంకెల OTP ని నమోదు చేయండి',
        'verifyBtn': 'ధృవీకరించండి & లాగిన్ చేయండి',
        'aadharLabel': 'ఆధార్ సంఖ్య (12 అంకెలు)',
        'nameLabel': 'పూర్తి పేరు',

        'dashTitle': 'ఆఫీసర్ డాష్‌బోర్డ్',
        'addNewFarmer': 'కొత్త రైతును చేర్చండి',
        'myFarmers': 'నా రైతులు',
        'addFarmerBtn': 'రైతును చేర్చు',
        'getRecBtn': 'సిఫార్సు పొందండి',

        'formTitle': 'నేల మరియు స్థాన వివరాలు',
        'cityLabel': 'నగరం/జిల్లా',
        'soilLabel': 'నేల పరిస్థితి',
        'fertilityLabel': 'నేల సారవంతం',
        'harvestLabel': 'గత పంట నాణ్యత',
        'predictBtn': 'ఉత్తమ పంటను అంచనా వేయండి',
        'sandy': 'ఇసుక నేల', 'loamy': 'దుంప నేల', 'clay': 'బంకమట్టి',
        'low': 'తక్కువ', 'medium': 'మధ్యస్థం', 'high': 'ఎక్కువ',
        'poor': 'తక్కువ నాణ్యత', 'good': 'మంచి నాణ్యత',

        'resTitle': 'సిఫార్సు ఫలితం',
        'confLabel': 'విశ్వాస శాతం',
        'fertLabel': 'సిఫార్సు చేసిన ఎరువులు',
        'weatherLabel': 'ప్రస్తుత వాతావరణం',
        'factorsLabel': 'ప్రభావం చూపే అంశాలు',

        'crop_rice': 'వరి', 'crop_maize': 'మొక్కజొన్న', 'crop_chickpea': 'శనగలు',
        'crop_kidneybeans': 'రాజ్మా', 'crop_pigeonpeas': 'కందులు',
        'crop_mothbeans': 'మొలకలు', 'crop_mungbean': 'పెసర్లు',
        'crop_blackgram': 'మినుములు', 'crop_lentil': 'చిక్కుళ్ళు',
        'crop_pomegranate': 'దానిమ్మ', 'crop_banana': 'అరటి',
        'crop_mango': 'మామిడి', 'crop_grapes': 'ద్రాక్ష',
        'crop_watermelon': 'పుచ్చకాయ', 'crop_muskmelon': 'ఖర్బూజా',
        'crop_apple': 'ఆపిల్', 'crop_orange': 'నారింజ',
        'crop_papaya': 'బొప్పాయి', 'crop_coconut': 'కొబ్బరి',
        'crop_cotton': 'పత్తి', 'crop_jute': 'జనపనార', 'crop_coffee': 'కాఫీ'
    }
};

function changeLanguage(lang) {
    // 1. Save the user's choice
    localStorage.setItem('preferredLanguage', lang);
    
    // 2. Update all static text with data-key attributes
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            // If it's an input with a placeholder, update the placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });

    // 3. Special Case: Update the Page Title
    document.title = translations[lang]['welcomeTitle'];
}

// 4. Run this automatically when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
        langSelect.value = savedLang;
        changeLanguage(savedLang);
    }
});

// Load saved language on page load
window.onload = () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    document.getElementById('languageSelect').value = savedLang;
    changeLanguage(savedLang);
};
// Configuration
const API_BASE_URL = '';
let currentUserToken = localStorage.getItem('token');
let currentUserRole = localStorage.getItem('role');
let currentUser = JSON.parse(localStorage.getItem('user') || '{}');

// GLOBAL VARIABLE: Tracks which farmer the officer is helping
let selectedFarmerId = null; 

// ===== NAVIGATION LOGIC =====

function showScreen(screenId) {
    // 1. Hide all screens by removing 'active' and adding 'hidden'
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.classList.add('hidden');
    });

    // 2. Show the target screen by adding 'active' and removing 'hidden'
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
        target.classList.remove('hidden');
    } else {
        console.error(`Screen with id "${screenId}" not found.`);
    }
}

function showLiteracySelection() {
    showScreen('literacyScreen');
}

function selectLiteracy(type) {
    if (type === 'literate') {
        showScreen('otpRegisterScreen');
    } else {
        showScreen('officerLoginScreen'); // Illiterate farmers are handled via Officer Login
    }
}

function goBack() {
    showScreen('welcomeScreen');
}

// Navbar Shortcuts
function showLogin() {
    showScreen('officerLoginScreen');
}

function showRegister() {
    showScreen('officerRegisterScreen');
}

function showOfficerRegister() {
    showScreen('officerRegisterScreen');
}

// ===== FARMER SELECTION LOGIC =====

function startPredictionForFarmer(farmerId, farmerName) {
    selectedFarmerId = farmerId; // Remember this farmer
    alert(`🌱 Starting recommendation for: ${farmerName}`);
    showScreen('farmerInputScreen'); // Move to the input form
}

// ===== OTP & AUTH FUNCTIONS =====

async function sendOTP() {
    const phone = document.getElementById('phoneInput').value;
    if (!phone || phone.length !== 10) {
        alert('Please enter a valid 10-digit mobile number');
        return;
    }
    try {
        const response = await fetch(`${API_BASE_URL}/api/auth/send-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone })
        });
        const data = await response.json();
        
        if (data.success) {
            alert('✅ OTP sent!');
            document.getElementById('otpStep1').classList.add('hidden');
            document.getElementById('otpStep2').classList.remove('hidden');

            // NEW LOGIC: If user exists, hide Registration-only fields
            if (data.is_registered) {
                document.getElementById('nameInput').classList.add('hidden');
                document.getElementById('aadharInput').classList.add('hidden');
                // Change button text to "Login"
                document.querySelector('#otpStep2 button').innerText = "Login & Get Recommendation";
            } else {
                document.getElementById('nameInput').classList.remove('hidden');
                document.getElementById('aadharInput').classList.remove('hidden');
            }
        } else {
            alert('❌ Error: ' + data.error);
        }
    } catch (error) {
        alert('❌ Connection error');
    }
}

async function verifyOTP() {
    const phone = document.getElementById('phoneInput').value;
    const otp = document.getElementById('otpInput').value;
    const name = document.getElementById('nameInput').value;
    const aadhar = document.getElementById('aadharInput').value;

    if (!otp || otp.length !== 6) {
        alert('Please enter the 6-digit OTP');
        return;
    }

    // Determine if we are Registering or Logging In
    const isLogin = document.getElementById('nameInput').classList.contains('hidden');
    const endpoint = isLogin ? '/api/auth/login-verify' : '/api/auth/verify-otp';
    
    const payload = isLogin ? { phone, otp } : { phone, otp, name, aadhar };

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        
        if (data.success) {
            saveUserSession(data.token, 'literate_farmer', data.user);
            selectedFarmerId = data.user.farmer_id; // Set the global ID for prediction
            alert(isLogin ? '✅ Login Successful!' : '✅ Registration Successful!');
            showScreen('farmerInputScreen');
        } else {
            alert('❌ Error: ' + data.error);
        }
    } catch (error) {
        alert('❌ Connection error');
    }
}

// ===== OFFICER FUNCTIONS =====

async function officerLogin() {
    const email = document.getElementById('officerEmail').value;
    const password = document.getElementById('officerPassword').value;

    if (!email || !password) {
        alert('Please fill all fields');
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/auth/officer-login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (data.success) {
            saveUserSession(data.token, 'officer', data.user);
            alert('✅ Officer Login successful!');
            loadOfficerDashboard();
        } else {
            alert('❌ Error: ' + data.error);
        }
    } catch (error) {
        alert('❌ Connection error');
    }
}

async function loadOfficerDashboard() {
    showScreen('officerDashboard');
    await loadFarmers();
}

async function addFarmer() {
    const name = document.getElementById('farmerName').value;
    const aadhar = document.getElementById('farmerAadhar').value;
    const phone = document.getElementById('farmerPhone').value;

    if (!name || aadhar.length !== 12) {
        alert('Please fill required fields (Name & 12-digit Aadhar)');
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/officer/add-farmer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUserToken}`
            },
            body: JSON.stringify({ name, aadhar, phone })
        });
        const data = await response.json();
        if (data.success) {
            alert('✅ Farmer added to your list!');
            document.getElementById('farmerName').value = '';
            document.getElementById('farmerAadhar').value = '';
            loadFarmers();
        } else {
            alert('❌ Error: ' + data.error);
        }
    } catch (error) {
        alert('❌ Connection error');
    }
}

async function loadFarmers() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/officer/farmers`, {
            headers: { 'Authorization': `Bearer ${currentUserToken}` }
        });
        const data = await response.json();
        const farmersList = document.getElementById('farmersList');
        farmersList.innerHTML = '';

        if (data.farmers.length === 0) {
            farmersList.innerHTML = '<p>No farmers added yet</p>';
            return;
        }

        data.farmers.forEach(farmer => {
            const div = document.createElement('div');
            div.className = 'farmer-item';
            div.innerHTML = `
                <p><strong>👤 ${farmer.name}</strong></p>
                <p>🆔 Aadhar: ${farmer.aadhar}</p>
                <p>📊 Recommendations: ${farmer.recommendations_count}</p>
                <button onclick="startPredictionForFarmer(${farmer.id}, '${farmer.name}')" class="btn btn-primary" style="margin-top:10px; font-size:0.85em;">
                    🌱 Get Recommendation
                </button>
            `;
            farmersList.appendChild(div);
        });
    } catch (error) {
        console.error('Error loading farmers:', error);
    }
}

// ===== PREDICTION LOGIC =====

async function getPrediction() {
    const soilCondition = document.querySelector('input[name="soil_condition"]:checked')?.value || 'loamy';
    const soilFertility = document.querySelector('input[name="soil_fertility"]:checked')?.value || 'medium';
    const lastHarvest = document.querySelector('input[name="last_harvest"]:checked')?.value || 'medium';
    const city = document.getElementById('cityInput').value || 'Delhi';

    const formData = {
        soil_condition: soilCondition,
        soil_fertility: soilFertility,
        last_harvest: lastHarvest,
        city: city,
        farmer_id: selectedFarmerId // Sends the selected farmer ID to Python
    };

    try {
        const response = await fetch(`${API_BASE_URL}/api/predict`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUserToken}`
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        if (data.success) {
            displayResults(data);
        } else {
            alert('❌ Error: ' + data.error);
        }
    } catch (error) {
        alert('❌ Connection error');
    }
}

function displayResults(data) {
    const cropEmojis = {
        'rice': '🌾', 'maize': '🌽', 'chickpea': '🫛', 'kidneybeans': '🫘',
        'pigeonpeas': '🫘', 'mothbeans': '🫘', 'mungbean': '🫘', 'blackgram': '🫘',
        'lentil': '🫛', 'pomegranate': '🍎', 'banana': '🍌', 'mango': '🥭',
        'grapes': '🍇', 'watermelon': '🍉', 'muskmelon': '🍈', 'apple': '🍎',
        'orange': '🍊', 'papaya': '🧡', 'coconut': '🥥', 'cotton': '🤍',
        'sugarcane': '🍯', 'tobacco': '🔶', 'arecanut': '🎀', 'jute': '🧵'
    };

    const cropName = data.crop.toLowerCase();
    const emoji = cropEmojis[cropName] || '🌱';

    document.getElementById('resultEmoji').textContent = emoji;
    document.getElementById('resultCrop').textContent = data.crop;
    document.getElementById('confidenceBar').style.width = `${data.confidence}%`;
    document.getElementById('confidenceText').textContent = `${data.confidence}% Confidence`;
    document.getElementById('fertilizerName').textContent = data.fertilizer.name;
    document.getElementById('fertilizerDesc').textContent = `N: ${data.fertilizer.n} | P: ${data.fertilizer.p} | K: ${data.fertilizer.k}`;
    document.getElementById('weatherInfo').textContent = `🌡️ ${data.weather.temperature}°C | 📍 ${data.weather.city}`;

    let explanationHTML = '';
    data.explanation.forEach(exp => {
        explanationHTML += `<li>${exp[0]}: ${exp[1]}%</li>`;
    });
    document.getElementById('explanationList').innerHTML = explanationHTML;

    showScreen('resultsScreen');
}

// ===== HELPERS & INIT =====

function saveUserSession(token, role, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('user', JSON.stringify(user));
    currentUserToken = token;
    currentUserRole = role;
    currentUser = user;
}

function logout() {
    localStorage.clear();
    location.reload();
}

window.addEventListener('load', () => {
    if (currentUserToken && currentUserRole) {
        if (currentUserRole === 'officer') {
            loadOfficerDashboard();
        } else {
            showScreen('farmerInputScreen');
        }
    } else {
        showScreen('welcomeScreen');
    }
});