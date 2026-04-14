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
let currentUserRole  = localStorage.getItem('role');
let currentUser      = JSON.parse(localStorage.getItem('user') || '{}');
let selectedFarmerId = null;
let screenHistory    = ['welcomeScreen'];

// 3. CORE NAVIGATION
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.classList.add('hidden');
    });
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
        target.classList.remove('hidden');
        if (screenHistory[screenHistory.length - 1] !== screenId) {
            screenHistory.push(screenId);
        }
    }
}

function goBack() {
    if (screenHistory.length > 1) {
        screenHistory.pop();
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

// 4. LANGUAGE
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
    if (resultCrop && resultCrop.innerText !== '') {
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
        alert('Voice input not supported. Please use Chrome.');
        return;
    }
    const recognition = new SpeechRecognition();
    const lang = document.getElementById('languageSelect').value;
    recognition.lang = lang === 'te' ? 'te-IN' : lang === 'hi' ? 'hi-IN' : 'en-US';
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

function showLogin()    { showScreen('officerLoginScreen'); }
function showRegister() { showScreen('otpRegisterScreen'); }

function startPredictionForFarmer(farmerId, farmerName) {
    selectedFarmerId = farmerId;
    showScreen('farmerInputScreen');
}

// 7. AUTH & API CALLS

async function sendOTP() {
    const phone = document.getElementById('phoneInput').value.trim();
    if (!phone || phone.length !== 10) {
        alert('Enter a valid 10-digit mobile number');
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
            alert('✅ OTP sent! (Demo: Use 123456)');
            document.getElementById('otpStep1').classList.add('hidden');
            document.getElementById('otpStep2').classList.remove('hidden');
            if (data.is_registered) {
                document.getElementById('registrationFields').classList.add('hidden');
            } else {
                document.getElementById('registrationFields').classList.remove('hidden');
            }
        } else {
            alert('❌ ' + data.error);
        }
    } catch (e) {
        alert('❌ Connection error. Make sure the server is running.');
    }
}

async function verifyOTP() {
    const phone  = document.getElementById('phoneInput').value.trim();
    const otp    = document.getElementById('otpInput').value.trim();
    const name   = document.getElementById('nameInput').value.trim();
    const aadhar = document.getElementById('aadharInput').value.trim();

    const isRegistering = !document.getElementById('registrationFields').classList.contains('hidden');
    const endpoint = isRegistering ? '/api/auth/verify-otp' : '/api/auth/login-verify';
    const payload  = isRegistering ? { phone, otp, name, aadhar } : { phone, otp };

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        if (data.success) {
            saveUserSession(data.token, 'literate_farmer', data.user);
            selectedFarmerId = data.user.farmer_id;
            showScreen('farmerInputScreen');
        } else {
            alert('❌ ' + data.error);
        }
    } catch (e) {
        alert('❌ Connection error');
    }
}

async function officerLogin() {
    const email    = document.getElementById('officerEmail').value.trim();
    const password = document.getElementById('officerPassword').value;
    try {
        const response = await fetch(`${API_BASE_URL}/api/auth/officer-login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (data.success) {
            saveUserSession(data.token, 'officer', data.user);
            loadOfficerDashboard();
        } else {
            alert('❌ ' + data.error);
        }
    } catch (e) {
        alert('❌ Connection error');
    }
}

async function loadOfficerDashboard() {
    showScreen('officerDashboard');
    await loadFarmers();
}

async function addFarmer() {
    const name   = document.getElementById('farmerName').value.trim();
    const aadhar = document.getElementById('farmerAadhar').value.trim();
    const phone  = document.getElementById('farmerPhone').value.trim();

    if (!name || !aadhar || !phone) {
        alert('Please fill in all farmer details');
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
            alert(`✅ ${name} added successfully!`);
            document.getElementById('farmerName').value  = '';
            document.getElementById('farmerAadhar').value = '';
            document.getElementById('farmerPhone').value  = '';
            loadFarmers();
        } else {
            alert('❌ ' + data.error);
        }
    } catch (e) {
        alert('❌ Connection error');
    }
}

async function loadFarmers() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/officer/farmers`, {
            headers: { 'Authorization': `Bearer ${currentUserToken}` }
        });
        const data = await response.json();
        const list = document.getElementById('farmersList');
        list.innerHTML = '';

        if (!data.farmers || data.farmers.length === 0) {
            list.innerHTML = '<p style="color:#999; text-align:center;">No farmers added yet.</p>';
            return;
        }

        data.farmers.forEach(f => {
            const div = document.createElement('div');
            div.className = 'farmer-item card';
            div.style.marginBottom = '10px';
            div.innerHTML = `
                <p><strong>👤 ${f.name}</strong></p>
                <p>📞 ${f.phone || 'N/A'}</p>
                <p style="font-size:0.8em; color:#888;">Recommendations: ${f.recommendations_count}</p>
                <button onclick="startPredictionForFarmer(${f.id}, '${f.name}')" class="btn btn-primary" style="width:100%; margin-top:8px;">🌱 Get Recommendation</button>
            `;
            list.appendChild(div);
        });
    } catch (e) {
        console.error('Error loading farmers:', e);
    }
}

async function getPrediction() {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('Session expired. Please log in again.');
        showScreen('welcomeScreen');
        return;
    }

    const city = document.getElementById('cityInput').value.trim() || 'Hyderabad';

    const formData = {
        soil_condition:     document.querySelector('input[name="soil_condition"]:checked')?.value  || 'loamy',
        soil_fertility:     document.querySelector('input[name="soil_fertility"]:checked')?.value   || 'medium',
        last_harvest_status: document.querySelector('input[name="last_harvest"]:checked')?.value   || 'good',
        city:               city,
        water_level:        2,
        farmer_id:          selectedFarmerId
    };

    // Show loading state
    const btn = document.querySelector('[data-key="predictBtn"]');
    if (btn) { btn.textContent = '⏳ Predicting...'; btn.disabled = true; }

    try {
        const response = await fetch('/api/predict', {
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
            if (response.status === 401) {
                alert('Your session has expired. Please log in again.');
                localStorage.clear();
                location.reload();
            } else {
                alert('❌ Error: ' + data.error);
            }
        }
    } catch (e) {
        alert('❌ Prediction error: ' + e);
    } finally {
        if (btn) { btn.textContent = '🌱 Predict Best Crop'; btn.disabled = false; }
    }
}

// 8. DISPLAY RESULTS (FIXED: now shows emoji, weather description, and factors list)
function displayResults(data) {
    // Crop name
    document.getElementById('resultCrop').textContent = data.crop;
    document.getElementById('resultCrop').setAttribute('data-raw', data.crop);

    // Emoji
    document.getElementById('resultEmoji').textContent = data.emoji || '🌾';

    // Confidence bar
    const conf = data.confidence || 0;
    const bar  = document.getElementById('confidenceBar');
    const txt  = document.getElementById('confidenceText');
    if (bar) bar.style.width = `${conf}%`;
    if (txt) txt.textContent = `${conf}% Confidence`;

    // Fertilizer
    document.getElementById('fertilizerName').textContent = data.fertilizer.name;

    // Weather (FIXED: now shows description too)
    const w = data.weather;
    document.getElementById('weatherInfo').textContent =
        `🌡 ${w.temperature}°C  💧 ${w.humidity}%  📍 ${w.city}  ${w.description || ''}`;

    // Impact factors (FIXED: was never rendered)
    const factorsList = document.getElementById('factorsList');
    if (factorsList && data.explanation) {
        factorsList.innerHTML = '';
        data.explanation.forEach(([factor, score]) => {
            const li = document.createElement('li');
            li.textContent = `${factor}: ${score}%`;
            factorsList.appendChild(li);
        });
    }

    // Apply current language translation to crop name
    const lang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(lang);

    showScreen('resultsScreen');
}

// 9. SESSION HELPERS
function saveUserSession(token, role, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('user', JSON.stringify(user));
    currentUserToken = token;
    currentUserRole  = role;
    currentUser      = user;
}

function logout() {
    localStorage.clear();
    location.reload();
}

// 10. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) langSelect.value = savedLang;
    changeLanguage(savedLang);

    if (currentUserToken && currentUserRole) {
        if (currentUserRole === 'officer') loadOfficerDashboard();
        else showScreen('farmerInputScreen');
    } else {
        showScreen('welcomeScreen');
    }
});