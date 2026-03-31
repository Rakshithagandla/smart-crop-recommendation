// Configuration
const API_BASE_URL = '';
let currentUserToken = localStorage.getItem('token');
let currentUserRole = localStorage.getItem('role');
let currentUser = JSON.parse(localStorage.getItem('user') || '{}');

// Show/Hide Screens
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function showLiteracySelection() {
    showScreen('literacyScreen');
}

function selectLiteracy(type) {
    if (type === 'literate') {
        showScreen('otpRegisterScreen');
    } else {
        showScreen('officerLoginScreen');
    }
}

function goBack() {
    showScreen('welcomeScreen');
}

function showLogin() {
    showScreen('officerLoginScreen');
}

function showRegister() {
    showScreen('officerRegisterScreen');
}

function showOfficerRegister() {
    showScreen('officerRegisterScreen');
}

// OTP Functions
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
            alert('✅ OTP sent to your phone!');
            document.getElementById('otpStep1').classList.add('hidden');
            document.getElementById('otpStep2').classList.remove('hidden');
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
        alert('Please enter a valid 6-digit OTP');
        return;
    }

    if (!name || !aadhar || aadhar.length !== 12) {
        alert('Please fill all fields correctly');
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/auth/verify-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone, otp, name, aadhar })
        });

        const data = await response.json();

        if (data.success) {
            // Save token and user data
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', 'literate_farmer');
            localStorage.setItem('user', JSON.stringify(data.user));
            
            currentUserToken = data.token;
            currentUserRole = 'literate_farmer';
            currentUser = data.user;

            alert('✅ Registration successful!');
            showScreen('farmerInputScreen');
        } else {
            alert('❌ Error: ' + data.error);
        }
    } catch (error) {
        alert('❌ Connection error');
    }
}

function resendOTP() {
    sendOTP();
}

// Officer Functions
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
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', 'officer');
            localStorage.setItem('user', JSON.stringify(data.user));
            
            currentUserToken = data.token;
            currentUserRole = 'officer';
            currentUser = data.user;

            alert('✅ Login successful!');
            loadOfficerDashboard();
        } else {
            alert('❌ Error: ' + data.error);
        }
    } catch (error) {
        alert('❌ Connection error');
    }
}

async function registerOfficer() {
    const name = document.getElementById('officerName').value;
    const email = document.getElementById('officerRegEmail').value;
    const phone = document.getElementById('officerPhone').value;
    const password = document.getElementById('officerRegPassword').value;

    if (!name || !email || !phone || !password) {
        alert('Please fill all fields');
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/auth/officer-register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, phone, password })
        });

        const data = await response.json();

        if (data.success) {
            alert('✅ Registration successful! Now login.');
            document.getElementById('officerRegEmail').value = email;
            document.getElementById('officerRegPassword').value = '';
            showScreen('officerLoginScreen');
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

    if (!name || !aadhar || aadhar.length !== 12) {
        alert('Please fill all required fields correctly');
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
            alert('✅ Farmer added successfully!');
            document.getElementById('farmerName').value = '';
            document.getElementById('farmerAadhar').value = '';
            document.getElementById('farmerPhone').value = '';
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
                <p><strong>${farmer.name}</strong></p>
                <p>Aadhar: ${farmer.aadhar}</p>
                <p>Phone: ${farmer.phone || 'N/A'}</p>
                <p>Recommendations: ${farmer.recommendations_count}</p>
            `;
            farmersList.appendChild(div);
        });
    } catch (error) {
        console.error('Error loading farmers:', error);
    }
}

// Crop Recommendation
async function getPrediction() {
    const soilCondition = document.querySelector('input[name="soil_condition"]:checked')?.value || 'loamy';
    const soilFertility = document.querySelector('input[name="soil_fertility"]:checked')?.value || 'medium';
    const lastHarvest = document.querySelector('input[name="last_harvest"]:checked')?.value || 'medium';
    const city = document.getElementById('cityInput').value || 'Delhi';

    const formData = {
        soil_condition: soilCondition,
        soil_fertility: soilFertility,
        last_harvest: lastHarvest,
        city: city
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
    const emoji = cropEmojis[cropName] || '🌾';

    document.getElementById('resultEmoji').textContent = emoji;
    document.getElementById('resultCrop').textContent = data.crop;
    document.getElementById('confidenceBar').style.width = `${data.confidence}%`;
    document.getElementById('confidenceText').textContent = `${data.confidence}% Confidence`;
    document.getElementById('fertilizerName').textContent = data.fertilizer.name;
    document.getElementById('fertilizerDesc').textContent = `N: ${data.fertilizer.n} | P: ${data.fertilizer.p} | K: ${data.fertilizer.k}`;
    document.getElementById('weatherInfo').textContent = `🌡️ ${data.weather.temperature}°C | 💧 ${data.weather.humidity}% | 📍 ${data.weather.city}`;

    let explanationHTML = '';
    data.explanation.forEach(exp => {
        explanationHTML += `<li>${exp[0]}: ${exp[1]}%</li>`;
    });
    document.getElementById('explanationList').innerHTML = explanationHTML;

    showScreen('resultsScreen');
}

function logout() {
    localStorage.clear();
    location.reload();
}

// Initialize
window.addEventListener('load', () => {
    if (currentUserToken && currentUserRole) {
        if (currentUserRole === 'officer') {
            loadOfficerDashboard();
        } else {
            showScreen('farmerInputScreen');
        }
    }
});