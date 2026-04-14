// 1. TRANSLATIONS DATA
const translations = {
    'en': {
        'navLogin': 'Login', 'navRegister': 'Register', 'welcomeTitle': 'Smart Crop Recommendation System',
        'welcomeSub': 'AI-Powered Recommendations for Better Harvests', 'getStarted': 'Get Started', 'logout': 'Logout',
        'phoneTitle': 'Phone Verification', 'phoneLabel': 'Enter Mobile Number', 'sendOtp': 'Send OTP',
        'otpLabel': 'Enter 6-Digit OTP', 'verifyBtn': 'Verify & Login', 'aadharLabel': 'Aadhar Number (12 digits)',
        'nameLabel': 'Full Name', 'dashTitle': 'Officer Dashboard', 'addNewFarmer': 'Add New Farmer',
        'myFarmers': 'My Farmers', 'addFarmerBtn': 'Add Farmer', 'getRecBtn': 'Get Recommendation',
        'formTitle': 'Soil & Location Details', 'cityLabel': 'City/District', 'soilLabel': 'Soil Condition',
        'fertilityLabel': 'Soil Fertility', 'harvestLabel': 'Last Harvest Quality', 'predictBtn': 'Predict Best Crop',
        'sandy': 'Sandy', 'loamy': 'Loamy', 'clay': 'Clay', 'low': 'Low', 'medium': 'Medium', 'high': 'High',
        'poor': 'Poor', 'good': 'Good', 'resTitle': 'Recommendation Result', 'confLabel': 'Confidence Score',
        'fertLabel': 'Recommended Fertilizer', 'weatherLabel': 'Current Weather', 'factorsLabel': 'Impact Factors',
        'crop_rice': 'Rice', 'crop_maize': 'Maize', 'crop_chickpea': 'Chickpea', 'crop_kidneybeans': 'Kidney Beans',
        'crop_pigeonpeas': 'Pigeon Peas', 'crop_mothbeans': 'Moth Beans', 'crop_mungbean': 'Mung Bean',
        'crop_blackgram': 'Black Gram', 'crop_lentil': 'Lentil', 'crop_pomegranate': 'Pomegranate',
        'crop_banana': 'Banana', 'crop_mango': 'Mango', 'crop_grapes': 'Grapes', 'crop_watermelon': 'Watermelon',
        'crop_muskmelon': 'Muskmelon', 'crop_apple': 'Apple', 'crop_orange': 'Orange', 'crop_papaya': 'Papaya',
        'crop_coconut': 'Coconut', 'crop_cotton': 'Cotton', 'crop_jute': 'Jute', 'crop_coffee': 'Coffee'
    },
    'hi': {
        'navLogin': 'लॉगिन', 'navRegister': 'पंजीकरण', 'welcomeTitle': 'स्मार्ट फसल अनुशंसा प्रणाली',
        'welcomeSub': 'बेहतर फसल के लिए एआई-संचालित सिफारिशें', 'getStarted': 'शुरू करें', 'logout': 'लॉगआउट',
        'phoneTitle': 'फ़ोन सत्यापन', 'phoneLabel': 'मोबाइल नंबर दर्ज करें', 'sendOtp': 'ओटीपी भेजें',
        'otpLabel': '6-अंकीय ओटीपी दर्ज करें', 'verifyBtn': 'सत्यापित करें और लॉगिन करें', 'aadharLabel': 'आधार नंबर (12 अंक)',
        'nameLabel': 'पूरा नाम', 'dashTitle': 'अधिकारी डैशबोर्ड', 'addNewFarmer': 'नया किसान जोड़ें',
        'myFarmers': 'मेरे किसान', 'addFarmerBtn': 'किसान जोड़ें', 'getRecBtn': 'अनुशंसा प्राप्त करें',
        'formTitle': 'मिट्टी और स्थान का विवरण', 'cityLabel': 'शहर/जिला', 'soilLabel': 'मिट्टी की स्थिति',
        'fertilityLabel': 'मिट्टी की उर्वरता', 'harvestLabel': 'पिछली फसल की गुणवत्ता', 'predictBtn': 'सबसे अच्छी फसल जानें',
        'sandy': 'रेतीली', 'loamy': 'दोमट', 'clay': 'चिकनी', 'low': 'कम', 'medium': 'मध्यम', 'high': 'उच्च',
        'poor': 'खराब', 'good': 'अच्छा', 'resTitle': 'अनुशंसा परिणाम', 'confLabel': 'आत्मविश्वास स्कोर',
        'fertLabel': 'अनुशंसित उर्वरक', 'weatherLabel': 'वर्तमान मौसम', 'factorsLabel': 'प्रभाव कारक',
        'crop_rice': 'चावल', 'crop_maize': 'मक्का', 'crop_chickpea': 'चना', 'crop_kidneybeans': 'राजमा',
        'crop_pigeonpeas': 'अरहर दाल', 'crop_mothbeans': 'मोठ दाल', 'crop_mungbean': 'मूंग दाल',
        'crop_blackgram': 'उड़द दाल', 'crop_lentil': 'मसूर दाल', 'crop_pomegranate': 'अनार',
        'crop_banana': 'केला', 'crop_mango': 'आम', 'crop_grapes': 'अंगूर', 'crop_watermelon': 'तरबूज',
        'crop_muskmelon': 'खरबूजा', 'crop_apple': 'सेब', 'crop_orange': 'संतरा', 'crop_papaya': 'पपीता',
        'crop_coconut': 'नारियल', 'crop_cotton': 'कपास', 'crop_jute': 'जूट', 'crop_coffee': 'कॉफी'
    },
    'te': {
        'navLogin': 'లాగిన్', 'navRegister': 'రిజిస్టర్', 'welcomeTitle': 'స్మార్ట్ పంట సిఫార్సు వ్యవస్థ',
        'welcomeSub': 'మెరుగైన దిగుబడి కోసం AI సిఫార్సులు', 'getStarted': 'ప్రారంభించండి', 'logout': 'లాగ్ అవుట్',
        'phoneTitle': 'ఫోన్ వెరిఫికేషన్', 'phoneLabel': 'మొబైల్ సంఖ్యను నమోదు చేయండి', 'sendOtp': 'OTP పంపండి',
        'otpLabel': '6 అంకెల OTP ని నమోదు చేయండి', 'verifyBtn': 'ధృవీకరించండి & లాగిన్ చేయండి', 'aadharLabel': 'ఆధార్ సంఖ్య (12 అంకెలు)',
        'nameLabel': 'పూర్తి పేరు', 'dashTitle': 'ఆఫీసర్ డాష్‌బోర్డ్', 'addNewFarmer': 'కొత్త రైతును చేర్చండి',
        'myFarmers': 'నా రైతులు', 'addFarmerBtn': 'రైతును చేర్చు', 'getRecBtn': 'సిఫార్సు పొందండి',
        'formTitle': 'నేల మరియు స్థాన వివరాలు', 'cityLabel': 'నగరం/జిల్లా', 'soilLabel': 'నేల పరిస్థితి',
        'fertilityLabel': 'నేల సారవంతం', 'harvestLabel': 'గత పంట నాణ్యత', 'predictBtn': 'ఉత్తమ పంటను అంచనా వేయండి',
        'sandy': 'ఇసుక నేల', 'loamy': 'దుంప నేల', 'clay': 'బంకమట్టి', 'low': 'తక్కువ', 'medium': 'మధ్యస్థం',
        'high': 'ఎక్కువ', 'poor': 'తక్కువ నాణ్యత', 'good': 'మంచి నాణ్యత', 'resTitle': 'సిఫార్సు ఫలితం',
        'confLabel': 'విశ్వాస శాతం', 'fertLabel': 'సిఫార్సు చేసిన ఎరువులు', 'weatherLabel': 'ప్రస్తుత వాతావరణం',
        'factorsLabel': 'ప్రభావం చూపే అంశాలు', 'crop_rice': 'వరి', 'crop_maize': 'మొక్కజొన్న', 'crop_chickpea': 'శనగలు',
        'crop_kidneybeans': 'రాజ్మా', 'crop_pigeonpeas': 'కందులు', 'crop_mothbeans': 'మొలకలు', 'crop_mungbean': 'పెసర్లు',
        'crop_blackgram': 'మినుములు', 'crop_lentil': 'చిక్కుళ్ళు', 'crop_pomegranate': 'దానిమ్మ', 'crop_banana': 'అరటి',
        'crop_mango': 'మామిడి', 'crop_grapes': 'ద్రాక్ష', 'crop_watermelon': 'పుచ్చకాయ', 'crop_muskmelon': 'ఖర్బూజా',
        'crop_apple': 'ఆపిల్', 'crop_orange': 'నారింజ', 'crop_papaya': 'బొప్పాయి', 'crop_coconut': 'కొబ్బరి',
        'crop_cotton': 'పత్తి', 'crop_jute': 'జనపనార', 'crop_coffee': 'కాఫీ'
    }
};

// 2. CONFIG & STATE
const API_BASE_URL = '';
let currentUserToken = localStorage.getItem('token');
let currentUserRole = localStorage.getItem('role');
let currentUser = JSON.parse(localStorage.getItem('user') || '{}');
let selectedFarmerId = null;
let screenHistory = ['welcomeScreen'];

// 3. CORE NAVIGATION ENGINE
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.classList.add('hidden');
    });

    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
        target.classList.remove('hidden');
        // Push to history if it's a new screen
        if (screenHistory[screenHistory.length - 1] !== screenId) {
            screenHistory.push(screenId);
        }
    }
}

function goBack() {
    if (screenHistory.length > 1) {
        screenHistory.pop(); // Remove current
        const prev = screenHistory[screenHistory.length - 1];
        
        document.querySelectorAll('.screen').forEach(s => {
            s.classList.remove('active');
            s.classList.add('hidden');
        });
        
        const target = document.getElementById(prev);
        if (target) {
            target.classList.add('active');
            target.classList.remove('hidden');
        }
    }
}

// 4. LANGUAGE LOGIC
function changeLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });

    const resultCrop = document.getElementById('resultCrop');
    if (resultCrop && resultCrop.innerText !== "") {
        const rawName = resultCrop.getAttribute('data-raw') || resultCrop.innerText;
        const cropKey = `crop_${rawName.toLowerCase().replace(/\s+/g, '')}`;
        if (translations[lang][cropKey]) {
            resultCrop.innerText = translations[lang][cropKey];
            resultCrop.setAttribute('data-raw', rawName);
        }
    }
    if (translations[lang]['welcomeTitle']) document.title = translations[lang]['welcomeTitle'];
}

// 5. VOICE INPUT
function startVoiceInput() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Voice input not supported in this browser. Please use Chrome.");
        return;
    }
    const recognition = new SpeechRecognition();
    const lang = document.getElementById('languageSelect').value;
    recognition.lang = (lang === 'te') ? 'te-IN' : (lang === 'hi' ? 'hi-IN' : 'en-US');
    recognition.start();

    const micBtn = document.querySelector('.btn-mic');
    if (micBtn) micBtn.style.color = 'red';

    recognition.onresult = (event) => {
        document.getElementById('cityInput').value = event.results[0][0].transcript;
        if (micBtn) micBtn.style.color = '';
    };
    recognition.onerror = () => { if (micBtn) micBtn.style.color = ''; };
}

// 6. UI FLOW HELPERS
function showLiteracySelection() { showScreen('literacyScreen'); }
function selectLiteracy(type) {
    if (type === 'literate') showScreen('otpRegisterScreen');
    else showScreen('officerLoginScreen');
}
function showLogin() { showScreen('officerLoginScreen'); }
function showRegister() { showScreen('otpRegisterScreen'); }

function startPredictionForFarmer(farmerId, farmerName) {
    selectedFarmerId = farmerId;
    alert(`🌱 Starting recommendation for: ${farmerName}`);
    showScreen('farmerInputScreen');
}

// 7. AUTH & API CALLS
async function sendOTP() {
    const phone = document.getElementById('phoneInput').value;
    if (!phone || phone.length !== 10) { alert('Enter valid 10-digit number'); return; }
    try {
        const response = await fetch(`${API_BASE_URL}/api/auth/send-otp`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone })
        });
        const data = await response.json();
        if (data.success) {
            alert('✅ OTP sent! (Demo: Use 123456)');
            document.getElementById('otpStep1').classList.add('hidden');
            document.getElementById('otpStep2').classList.remove('hidden');
            if (data.is_registered) {
                document.getElementById('registrationFields').classList.add('hidden');
            } else {
                document.getElementById('registrationFields').classList.remove('hidden');
            }
        }
    } catch (e) { alert('❌ Connection error'); }
}

async function verifyOTP() {
    const phone = document.getElementById('phoneInput').value;
    const otp = document.getElementById('otpInput').value;
    const name = document.getElementById('nameInput').value;
    const aadhar = document.getElementById('aadharInput').value;
    
    const isRegistering = !document.getElementById('registrationFields').classList.contains('hidden');
    const endpoint = isRegistering ? '/api/auth/verify-otp' : '/api/auth/login-verify';
    const payload = isRegistering ? { phone, otp, name, aadhar } : { phone, otp };

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        if (data.success) {
            saveUserSession(data.token, 'literate_farmer', data.user);
            selectedFarmerId = data.user.farmer_id;
            showScreen('farmerInputScreen');
        } else { alert('❌ Error: ' + data.error); }
    } catch (e) { alert('❌ Connection error'); }
}

async function officerLogin() {
    const email = document.getElementById('officerEmail').value;
    const password = document.getElementById('officerPassword').value;
    try {
        const response = await fetch(`${API_BASE_URL}/api/auth/officer-login`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (data.success) {
            saveUserSession(data.token, 'officer', data.user);
            loadOfficerDashboard();
        } else { alert('❌ Error: ' + data.error); }
    } catch (e) { alert('❌ Connection error'); }
}

async function loadOfficerDashboard() {
    showScreen('officerDashboard');
    await loadFarmers();
}

async function addFarmer() {
    const name = document.getElementById('farmerName').value;
    const aadhar = document.getElementById('farmerAadhar').value;
    const phone = document.getElementById('farmerPhone').value;
    try {
        const response = await fetch(`${API_BASE_URL}/api/officer/add-farmer`, {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUserToken}`
            },
            body: JSON.stringify({ name, aadhar, phone })
        });
        const data = await response.json();
        if (data.success) { loadFarmers(); }
    } catch (e) { alert('❌ Connection error'); }
}

async function loadFarmers() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/officer/farmers`, {
            headers: { 'Authorization': `Bearer ${currentUserToken}` }
        });
        const data = await response.json();
        const list = document.getElementById('farmersList');
        list.innerHTML = '';
        data.farmers.forEach(f => {
            const div = document.createElement('div');
            div.className = 'farmer-item card';
            div.style.marginBottom = '10px';
            div.innerHTML = `
                <p><strong>👤 ${f.name}</strong></p>
                <p>📞 ${f.phone}</p>
                <button onclick="startPredictionForFarmer(${f.id}, '${f.name}')" class="btn btn-primary" style="width:100%">🌱 Get Recommendation</button>
            `;
            list.appendChild(div);
        });
    } catch (e) { console.error(e); }
}
async function getPrediction() {
    // 1. Force refresh the token from storage
    const token = localStorage.getItem('token'); 
    
    if (!token) {
        alert("Session expired. Please log in again.");
        showScreen('welcomeScreen');
        return;
    }

    const formData = {
        soil_condition: document.querySelector('input[name="soil_condition"]:checked')?.value || 'loamy',
        soil_fertility: document.querySelector('input[name="soil_fertility"]:checked')?.value || 'medium',
        city: document.getElementById('cityInput').value || 'Delhi',
        water_level: 2, // Default mapping
        last_harvest_status: 2
    };

    try {
        const response = await fetch(`/api/predict`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        
        if (data.success) {
            displayResults(data);
        } else {
            // NEW: Handle expired tokens smoothly
            if (response.status === 401) {
                alert("Your session has expired. Please log in again.");
                localStorage.clear(); // Clear the bad token
                location.reload();    // Refresh the page to show login
            } else {
                alert('Error: ' + data.error);
            }
        }
    } catch (e) {
        alert('❌ Prediction error: ' + e);
    }
}
function displayResults(data) {
    document.getElementById('resultCrop').textContent = data.crop;
    document.getElementById('resultCrop').setAttribute('data-raw', data.crop);
    document.getElementById('confidenceBar').style.width = `${data.confidence}%`;
    document.getElementById('confidenceText').textContent = `${data.confidence}% Confidence`;
    document.getElementById('fertilizerName').textContent = data.fertilizer.name;
    document.getElementById('weatherInfo').textContent = `Temp: ${data.weather.temperature}°C | Loc: ${data.weather.city}`;
    
    // Refresh language for the new crop result
    const lang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(lang);
    
    showScreen('resultsScreen');
}

function saveUserSession(token, role, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('user', JSON.stringify(user));
    currentUserToken = token; currentUserRole = role; currentUser = user;
}

function logout() { localStorage.clear(); location.reload(); }

// 8. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLang);

    if (currentUserToken && currentUserRole) {
        if (currentUserRole === 'officer') loadOfficerDashboard();
        else showScreen('farmerInputScreen');
    } else {
        showScreen('welcomeScreen');
    }
});