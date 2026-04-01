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