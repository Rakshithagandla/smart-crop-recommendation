// ═══════════════════════════════════════════════
// 1. TRANSLATIONS
// ═══════════════════════════════════════════════
const translations = {
    en: {
        navLogin:'Login', navRegister:'Register', welcomeTitle:'Smart Crop Recommendation System',
        welcomeSub:'AI-Powered Recommendations for Better Harvests', getStarted:'Get Started', logout:'Logout',
        dashTitle:'Officer Dashboard', addNewFarmer:'Add New Farmer', myFarmers:'My Farmers',
        addFarmerBtn:'Add Farmer', getRecBtn:'Get Recommendation',
        formTitle:'Soil & Location Details', cityLabel:'City / Village', soilLabel:'Soil Condition',
        fertilityLabel:'Soil Fertility', harvestLabel:'Last Harvest Quality', predictBtn:'Predict Best Crop',
        sandy:'Sandy', loamy:'Loamy', clay:'Clay', low:'Low', medium:'Medium', high:'High', poor:'Poor', good:'Good',
        resTitle:'Recommendation Result', confLabel:'Confidence Score', fertLabel:'Recommended Fertilizer',
        weatherLabel:'Current Weather', factorsLabel:'Impact Factors',
        crop_rice:'Rice', crop_maize:'Maize', crop_chickpea:'Chickpea', crop_kidneybeans:'Kidney Beans',
        crop_pigeonpeas:'Pigeon Peas', crop_mothbeans:'Moth Beans', crop_mungbean:'Mung Bean',
        crop_blackgram:'Black Gram', crop_lentil:'Lentil', crop_pomegranate:'Pomegranate',
        crop_banana:'Banana', crop_mango:'Mango', crop_grapes:'Grapes', crop_watermelon:'Watermelon',
        crop_muskmelon:'Muskmelon', crop_apple:'Apple', crop_orange:'Orange', crop_papaya:'Papaya',
        crop_coconut:'Coconut', crop_cotton:'Cotton', crop_jute:'Jute', crop_coffee:'Coffee'
    },
    hi: {
        navLogin:'लॉगिन', navRegister:'पंजीकरण', welcomeTitle:'स्मार्ट फसल अनुशंसा प्रणाली',
        welcomeSub:'बेहतर फसल के लिए एआई सिफारिशें', getStarted:'शुरू करें', logout:'लॉगआउट',
        dashTitle:'अधिकारी डैशबोर्ड', addNewFarmer:'नया किसान जोड़ें', myFarmers:'मेरे किसान',
        addFarmerBtn:'किसान जोड़ें', getRecBtn:'अनुशंसा प्राप्त करें',
        formTitle:'मिट्टी और स्थान का विवरण', cityLabel:'शहर/जिला', soilLabel:'मिट्टी की स्थिति',
        fertilityLabel:'मिट्टी की उर्वरता', harvestLabel:'पिछली फसल की गुणवत्ता', predictBtn:'सबसे अच्छी फसल जानें',
        sandy:'रेतीली', loamy:'दोमट', clay:'चिकनी', low:'कम', medium:'मध्यम', high:'उच्च', poor:'खराब', good:'अच्छा',
        resTitle:'अनुशंसा परिणाम', confLabel:'आत्मविश्वास स्कोर', fertLabel:'अनुशंसित उर्वरक',
        weatherLabel:'वर्तमान मौसम', factorsLabel:'प्रभाव कारक',
        crop_rice:'चावल', crop_maize:'मक्का', crop_chickpea:'चना', crop_kidneybeans:'राजमा',
        crop_pigeonpeas:'अरहर दाल', crop_mothbeans:'मोठ दाल', crop_mungbean:'मूंग दाल',
        crop_blackgram:'उड़द दाल', crop_lentil:'मसूर दाल', crop_pomegranate:'अनार',
        crop_banana:'केला', crop_mango:'आम', crop_grapes:'अंगूर', crop_watermelon:'तरबूज',
        crop_muskmelon:'खरबूजा', crop_apple:'सेब', crop_orange:'संतरा', crop_papaya:'पपीता',
        crop_coconut:'नारियल', crop_cotton:'कपास', crop_jute:'जूट', crop_coffee:'कॉफी'
    },
    te: {
        navLogin:'లాగిన్', navRegister:'రిజిస్టర్', welcomeTitle:'స్మార్ట్ పంట సిఫార్సు వ్యవస్థ',
        welcomeSub:'మెరుగైన దిగుబడి కోసం AI సిఫార్సులు', getStarted:'ప్రారంభించండి', logout:'లాగ్ అవుట్',
        dashTitle:'ఆఫీసర్ డాష్‌బోర్డ్', addNewFarmer:'కొత్త రైతును చేర్చండి', myFarmers:'నా రైతులు',
        addFarmerBtn:'రైతును చేర్చు', getRecBtn:'సిఫార్సు పొందండి',
        formTitle:'నేల మరియు స్థాన వివరాలు', cityLabel:'నగరం/జిల్లా', soilLabel:'నేల పరిస్థితి',
        fertilityLabel:'నేల సారవంతం', harvestLabel:'గత పంట నాణ్యత', predictBtn:'ఉత్తమ పంటను అంచనా వేయండి',
        sandy:'ఇసుక నేల', loamy:'దుంప నేల', clay:'బంకమట్టి', low:'తక్కువ', medium:'మధ్యస్థం', high:'ఎక్కువ',
        poor:'తక్కువ నాణ్యత', good:'మంచి నాణ్యత', resTitle:'సిఫార్సు ఫలితం', confLabel:'విశ్వాస శాతం',
        fertLabel:'సిఫార్సు చేసిన ఎరువులు', weatherLabel:'ప్రస్తుత వాతావరణం', factorsLabel:'ప్రభావం చూపే అంశాలు',
        crop_rice:'వరి', crop_maize:'మొక్కజొన్న', crop_chickpea:'శనగలు', crop_kidneybeans:'రాజ్మా',
        crop_pigeonpeas:'కందులు', crop_mothbeans:'మొలకలు', crop_mungbean:'పెసర్లు',
        crop_blackgram:'మినుములు', crop_lentil:'చిక్కుళ్ళు', crop_pomegranate:'దానిమ్మ',
        crop_banana:'అరటి', crop_mango:'మామిడి', crop_grapes:'ద్రాక్ష', crop_watermelon:'పుచ్చకాయ',
        crop_muskmelon:'ఖర్బూజా', crop_apple:'ఆపిల్', crop_orange:'నారింజ', crop_papaya:'బొప్పాయి',
        crop_coconut:'కొబ్బరి', crop_cotton:'పత్తి', crop_jute:'జనపనార', crop_coffee:'కాఫీ'
    }
};

// ═══════════════════════════════════════════════
// 2. STATE
// ═══════════════════════════════════════════════
let currentUserToken = localStorage.getItem('token');
let currentUserRole  = localStorage.getItem('role');
let currentUser      = JSON.parse(localStorage.getItem('user') || '{}');
let selectedFarmerId = null;
let screenHistory    = ['welcomeScreen'];
let selectedRating   = 0;
let feedbackPage     = 1;
let lastCropResult   = '';

// ═══════════════════════════════════════════════
// 3. NAVIGATION
// ═══════════════════════════════════════════════
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
    window.scrollTo(0, 0);
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

// ═══════════════════════════════════════════════
// 4. LANGUAGE
// ═══════════════════════════════════════════════
function changeLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang]?.[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });
    const resultCrop = document.getElementById('resultCrop');
    if (resultCrop?.innerText) {
        const raw = resultCrop.getAttribute('data-raw') || resultCrop.innerText;
        const cropKey = `crop_${raw.toLowerCase().replace(/\s+/g,'')}`;
        if (translations[lang][cropKey]) {
            resultCrop.innerText = translations[lang][cropKey];
            resultCrop.setAttribute('data-raw', raw);
        }
    }
}

// ═══════════════════════════════════════════════
// 5. VOICE INPUT — works for ANY input
// ═══════════════════════════════════════════════
function startVoice(inputId, inputType = 'text') {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert('Voice input not supported. Please use Chrome.');
        return;
    }

    const recognition = new SpeechRecognition();
    const lang = document.getElementById('languageSelect').value;
    recognition.lang = lang === 'te' ? 'te-IN' : lang === 'hi' ? 'hi-IN' : 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    // Find the mic button near this input
    const inputEl = document.getElementById(inputId);
    const micBtn  = inputEl?.parentElement?.querySelector('.btn-mic');
    if (micBtn) {
        micBtn.textContent = '🔴';
        micBtn.disabled = true;
    }

    recognition.start();

    recognition.onresult = (event) => {
        let transcript = event.results[0][0].transcript;
        // Strip non-digits for numeric fields
        if (inputType === 'numeric') {
            transcript = transcript.replace(/\D/g,'');
        }
        const el = document.getElementById(inputId);
        if (el) {
            if (el.tagName === 'TEXTAREA') {
                el.value += (el.value ? ' ' : '') + transcript;
            } else {
                el.value = transcript;
            }
        }
    };

    recognition.onend = () => {
        if (micBtn) { micBtn.textContent = '🎤'; micBtn.disabled = false; }
    };
    recognition.onerror = () => {
        if (micBtn) { micBtn.textContent = '🎤'; micBtn.disabled = false; }
        alert('Voice input failed. Please try again.');
    };
}

// ═══════════════════════════════════════════════
// 6. UTILITY
// ═══════════════════════════════════════════════
function togglePassword(inputId) {
    const el = document.getElementById(inputId);
    if (el) el.type = el.type === 'password' ? 'text' : 'password';
}

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

// ═══════════════════════════════════════════════
// 7. FARMER AUTH (Password-based)
// ═══════════════════════════════════════════════
async function farmerRegister() {
    const name     = document.getElementById('regName').value.trim();
    const aadhar   = document.getElementById('regAadhar').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirm  = document.getElementById('regConfirm').value;

    if (!name || !aadhar || !password) { alert('Please fill all fields'); return; }
    if (password !== confirm)           { alert('Passwords do not match'); return; }
    if (password.length < 6)            { alert('Password must be at least 6 characters'); return; }

    try {
        const res  = await fetch('/api/auth/farmer-register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, aadhar, password })
        });
        const data = await res.json();
        if (data.success) {
            saveUserSession(data.token, 'literate_farmer', data.user);
            selectedFarmerId = data.user.farmer_id;
            alert(`✅ Welcome, ${data.user.name}! Registration successful.`);
            showScreen('farmerInputScreen');
        } else {
            alert('❌ ' + data.error);
        }
    } catch (e) {
        alert('❌ Connection error. Is the server running?');
    }
}

async function farmerLogin() {
    const aadhar   = document.getElementById('loginAadhar').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!aadhar || !password) { alert('Please enter Aadhaar and password'); return; }

    try {
        const res  = await fetch('/api/auth/farmer-login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ aadhar, password })
        });
        const data = await res.json();
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

async function resetPassword() {
    const aadhar       = document.getElementById('forgotAadhar').value.trim();
    const new_password = document.getElementById('forgotNew').value;
    const confirm      = document.getElementById('forgotConfirm').value;

    if (!aadhar || !new_password) { alert('Please fill all fields'); return; }
    if (new_password !== confirm)  { alert('Passwords do not match'); return; }

    try {
        const res  = await fetch('/api/auth/farmer-forgot-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ aadhar, new_password, confirm_password: confirm })
        });
        const data = await res.json();
        if (data.success) {
            alert('✅ ' + data.message);
            showScreen('farmerLoginScreen');
        } else {
            alert('❌ ' + data.error);
        }
    } catch (e) {
        alert('❌ Connection error');
    }
}

// ═══════════════════════════════════════════════
// 8. OFFICER AUTH
// ═══════════════════════════════════════════════
async function officerLogin() {
    const email    = document.getElementById('officerEmail').value.trim();
    const password = document.getElementById('officerPassword').value;

    try {
        const res  = await fetch('/api/auth/officer-login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
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

async function officerRegister() {
    const name     = document.getElementById('offRegName').value.trim();
    const email    = document.getElementById('offRegEmail').value.trim();
    const password = document.getElementById('offRegPassword').value;
    const code     = document.getElementById('offRegCode').value.trim();

    if (!name || !email || !password || !code) { alert('Please fill all fields'); return; }

    try {
        const res  = await fetch('/api/auth/officer-register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, officer_code: code })
        });
        const data = await res.json();
        if (data.success) {
            saveUserSession(data.token, 'officer', data.user);
            alert(`✅ Welcome, ${data.user.name}! Officer account created.`);
            loadOfficerDashboard();
        } else {
            alert('❌ ' + data.error);
        }
    } catch (e) {
        alert('❌ Connection error');
    }
}

// ═══════════════════════════════════════════════
// 9. OFFICER DASHBOARD
// ═══════════════════════════════════════════════
async function loadOfficerDashboard() {
    showScreen('officerDashboard');
    await loadFarmers();
}

async function addFarmer() {
    const name   = document.getElementById('farmerName').value.trim();
    const aadhar = document.getElementById('farmerAadhar').value.trim();
    const phone  = document.getElementById('farmerPhone').value.trim();

    if (!name || !aadhar) { alert('Name and Aadhaar are required'); return; }

    try {
        const res  = await fetch('/api/officer/add-farmer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${currentUserToken}` },
            body: JSON.stringify({ name, aadhar, phone })
        });
        const data = await res.json();
        if (data.success) {
            alert(`✅ ${name} added!`);
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
        const res  = await fetch('/api/officer/farmers', {
            headers: { 'Authorization': `Bearer ${currentUserToken}` }
        });
        const data = await res.json();
        const list = document.getElementById('farmersList');
        list.innerHTML = '';

        if (!data.farmers?.length) {
            list.innerHTML = '<p style="color:#999;text-align:center;">No farmers added yet.</p>';
            return;
        }

        data.farmers.forEach(f => {
            const div = document.createElement('div');
            div.className = 'farmer-item card';
            div.style.marginBottom = '10px';
            div.innerHTML = `
                <p><strong>👤 ${f.name}</strong></p>
                <p>📞 ${f.phone || 'N/A'}</p>
                <p style="font-size:0.8em;color:#888;">Recommendations: ${f.recommendations_count}</p>
                <button onclick="startPredictionForFarmer(${f.id},'${f.name}')" class="btn btn-primary" style="width:100%;margin-top:8px">🌱 Get Recommendation</button>
            `;
            list.appendChild(div);
        });
    } catch (e) { console.error(e); }
}

function startPredictionForFarmer(id, name) {
    selectedFarmerId = id;
    showScreen('farmerInputScreen');
}

// ═══════════════════════════════════════════════
// 10. PREDICTION
// ═══════════════════════════════════════════════
async function getPrediction() {
    const token = localStorage.getItem('token');
    if (!token) { alert('Session expired. Please login.'); showScreen('welcomeScreen'); return; }

    const btn = document.querySelector('[data-key="predictBtn"]');
    if (btn) { btn.textContent = '⏳ Predicting...'; btn.disabled = true; }

    try {
        const res = await fetch('/api/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify({
                soil_condition:      document.querySelector('input[name="soil_condition"]:checked')?.value  || 'loamy',
                soil_fertility:      document.querySelector('input[name="soil_fertility"]:checked')?.value  || 'medium',
                last_harvest_status: document.querySelector('input[name="last_harvest"]:checked')?.value    || 'good',
                city:                document.getElementById('cityInput').value.trim() || 'Hyderabad',
                water_level:         2,
                farmer_id:           selectedFarmerId
            })
        });
        const data = await res.json();

        if (data.success) {
            lastCropResult = data.crop;
            displayResults(data);
        } else if (res.status === 401) {
            alert('Session expired. Please login again.');
            localStorage.clear(); location.reload();
        } else {
            alert('❌ ' + data.error);
        }
    } catch (e) {
        alert('❌ Prediction error: ' + e);
    } finally {
        if (btn) { btn.textContent = '🌱 Predict Best Crop'; btn.disabled = false; }
    }
}

function displayResults(data) {
    document.getElementById('resultCrop').textContent = data.crop;
    document.getElementById('resultCrop').setAttribute('data-raw', data.crop);
    document.getElementById('resultEmoji').textContent = data.emoji || '🌾';

    const bar = document.getElementById('confidenceBar');
    const txt = document.getElementById('confidenceText');
    if (bar) bar.style.width = `${data.confidence}%`;
    if (txt) txt.textContent  = `${data.confidence}% Confidence`;

    document.getElementById('fertilizerName').textContent = data.fertilizer.name;

    const w = data.weather;
    document.getElementById('weatherInfo').textContent =
        `🌡 ${w.temperature}°C  💧 ${w.humidity}%  📍 ${w.city}  ${w.description || ''}`;

    const fl = document.getElementById('factorsList');
    if (fl && data.explanation) {
        fl.innerHTML = '';
        data.explanation.forEach(([factor, score]) => {
            const li = document.createElement('li');
            li.textContent = `${factor}: ${score}%`;
            fl.appendChild(li);
        });
    }

    const lang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(lang);
    showScreen('resultsScreen');
}

// ═══════════════════════════════════════════════
// 11. FEEDBACK — Submit
// ═══════════════════════════════════════════════
function setRating(val) {
    selectedRating = val;
    document.getElementById('fbRating').value = val;
    document.querySelectorAll('.star').forEach(s => {
        s.classList.toggle('active', parseInt(s.getAttribute('data-val')) <= val);
    });
}

function showFeedbackForm() {
    // Pre-fill crop if we have a result
    if (lastCropResult) {
        const el = document.getElementById('fbCrop');
        if (el) el.value = lastCropResult;
    }
    selectedRating = 0;
    document.querySelectorAll('.star').forEach(s => s.classList.remove('active'));
    showScreen('feedbackFormScreen');
}

async function submitFeedback() {
    const token = localStorage.getItem('token');
    if (!token) { alert('Please login to submit a review'); showScreen('farmerLoginScreen'); return; }

    const crop    = document.getElementById('fbCrop').value.trim();
    const rating  = parseInt(document.getElementById('fbRating').value);
    const comment = document.getElementById('fbComment').value.trim();
    const location = document.getElementById('fbLocation').value.trim();
    const season  = document.getElementById('fbSeason').value;

    if (!crop)    { alert('Please enter the crop name'); return; }
    if (!rating)  { alert('Please select a star rating'); return; }
    if (!comment) { alert('Please write your experience (even a few words help others!)'); return; }

    try {
        const res  = await fetch('/api/feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify({ crop, rating, comment, location, season })
        });
        const data = await res.json();
        if (data.success) {
            alert('🙏 ' + data.message);
            // Clear form
            document.getElementById('fbCrop').value    = '';
            document.getElementById('fbComment').value  = '';
            document.getElementById('fbLocation').value = '';
            document.getElementById('fbSeason').value   = '';
            setRating(0);
            showScreen('feedbackScreen');
            loadFeedback();
        } else {
            alert('❌ ' + data.error);
        }
    } catch (e) {
        alert('❌ Connection error');
    }
}

// ═══════════════════════════════════════════════
// 12. FEEDBACK — Browse / Read Reviews
// ═══════════════════════════════════════════════
async function loadFeedback(page = 1) {
    feedbackPage = page;
    const cropFilter = document.getElementById('cropFilter')?.value || '';

    try {
        // Load crop filter options first time
        if (page === 1) {
            const cRes = await fetch('/api/feedback/crops');
            const cData = await cRes.json();
            const sel = document.getElementById('cropFilter');
            if (sel && cData.crops) {
                const current = sel.value;
                sel.innerHTML = '<option value="">All Crops</option>';
                cData.crops.forEach(c => {
                    const opt = document.createElement('option');
                    opt.value = c; opt.textContent = c;
                    if (c === current) opt.selected = true;
                    sel.appendChild(opt);
                });
            }
        }

        const res  = await fetch(`/api/feedback?crop=${encodeURIComponent(cropFilter)}&page=${page}`);
        const data = await res.json();

        // Stats section
        const statsEl = document.getElementById('feedbackStats');
        if (statsEl && data.total_reviews > 0) {
            const stars = '★'.repeat(Math.round(data.avg_rating)) + '☆'.repeat(5 - Math.round(data.avg_rating));
            statsEl.innerHTML = `
                <div class="feedback-summary">
                    <div class="summary-score">
                        <span class="big-rating">${data.avg_rating}</span>
                        <span class="stars-display">${stars}</span>
                        <span style="color:#666;font-size:0.85em;">${data.total_reviews} reviews</span>
                    </div>
                    <div class="rating-bars">
                        ${[5,4,3,2,1].map(star => {
                            const count = data.rating_dist?.[star] || 0;
                            const pct   = data.total_reviews ? Math.round(count/data.total_reviews*100) : 0;
                            return `
                            <div class="rating-bar-row">
                                <span class="rb-label">${star}★</span>
                                <div class="rb-track"><div class="rb-fill" style="width:${pct}%"></div></div>
                                <span class="rb-count">${count}</span>
                            </div>`;
                        }).join('')}
                    </div>
                </div>
            `;
        } else if (statsEl) {
            statsEl.innerHTML = '<p style="color:#999;text-align:center;padding:10px;">No reviews yet. Be the first to share your experience!</p>';
        }

        // Reviews list
        const listEl = document.getElementById('feedbackList');
        if (!listEl) return;

        if (!data.feedbacks?.length) {
            listEl.innerHTML = '<p style="color:#999;text-align:center;padding:20px;">No reviews found.</p>';
            document.getElementById('feedbackPagination').innerHTML = '';
            return;
        }

        listEl.innerHTML = data.feedbacks.map(fb => `
            <div class="review-card">
                <div class="review-header">
                    <div>
                        <span class="reviewer-name">👤 ${fb.farmer_name}</span>
                        ${fb.location ? `<span class="reviewer-loc">📍 ${fb.location}</span>` : ''}
                    </div>
                    <div>
                        <span class="review-stars">${'★'.repeat(fb.rating)}${'☆'.repeat(5-fb.rating)}</span>
                        <span class="review-date">${fb.created_at}</span>
                    </div>
                </div>
                <div class="review-crop">🌾 ${fb.crop}${fb.season ? ` · ${fb.season}` : ''}</div>
                <p class="review-comment">"${fb.comment}"</p>
            </div>
        `).join('');

        // Pagination
        const totalPages = Math.ceil(data.total / 10);
        const pag = document.getElementById('feedbackPagination');
        if (pag && totalPages > 1) {
            pag.innerHTML = `
                ${page > 1 ? `<button onclick="loadFeedback(${page-1})" class="btn btn-secondary" style="margin:0 5px">← Prev</button>` : ''}
                <span style="margin:0 10px;color:#666;">Page ${page} of ${totalPages}</span>
                ${page < totalPages ? `<button onclick="loadFeedback(${page+1})" class="btn btn-primary" style="margin:0 5px">Next →</button>` : ''}
            `;
        } else if (pag) {
            pag.innerHTML = '';
        }

    } catch (e) {
        console.error('Feedback load error:', e);
        document.getElementById('feedbackList').innerHTML = '<p style="color:#c00;">Failed to load reviews.</p>';
    }
}

// ═══════════════════════════════════════════════
// 13. INIT
// ═══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    const langSel   = document.getElementById('languageSelect');
    if (langSel) langSel.value = savedLang;
    changeLanguage(savedLang);

    if (currentUserToken && currentUserRole) {
        if (currentUserRole === 'officer') loadOfficerDashboard();
        else showScreen('farmerInputScreen');
    } else {
        showScreen('welcomeScreen');
    }
});