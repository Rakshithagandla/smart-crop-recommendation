// ═══════════════════════════════════════════════════════════════
// 1. TRANSLATIONS  —  ALL strings for EN / HI / TE
// ═══════════════════════════════════════════════════════════════
const T = {
en: {
  appName:'CropAI',
  welcomeTitle:'AI-Based Crop Prediction & Fertilizer Recommendation System',
  welcomeSub:'Empowering farmers with intelligent, data-driven crop guidance',
  getStarted:'Get Started',
  literacyQ:'Who are you?',
  literacySay:'Tap a card below, or press 🎤 and say "literate" or "illiterate"',
  speakChoice:'🎤 Speak Your Choice', hearOptions:'🔊 Hear Options',
  literateTitle:'Literate Farmer', literateDesc:'I can read & write — I will login myself',
  illiterateTitle:'Need Officer Help', illiterateDesc:'Agricultural Officer will assist me',
  back:'Back',
  regTitle:'🌱 Farmer Registration',
  nameLabel:'👤 Full Name', namePh:'Enter your full name',
  aadharLabel:'🪪 Aadhaar Number (12 digits)', aadharPh:'Enter 12-digit Aadhaar',
  phonePh:'Mobile number',
  passwordLabel:'🔒 Password', passwordPh:'Minimum 6 characters',
  confirmLabel:'🔒 Confirm Password', confirmPh:'Repeat password',
  passwordHint:'⚠ Do not speak your password — type it for security',
  registerBtn:'✅ Register',
  hasAccount:'Already registered?', loginLink:'Login here',
  loginTitle:'🔐 Farmer Login',
  loginBtn:'🚀 Login',
  newFarmer:'New? Register', forgotPwd:'Forgot Password?',
  forgotTitle:'🔑 Reset Password',
  forgotDesc:'Enter your Aadhaar and set a new password.',
  newPwdLabel:'🔒 New Password',
  updatePwdBtn:'✅ Update Password',
  officerLoginTitle:'🚜 Officer Login',
  emailLabel:'📧 Email / Phone',
  emailOrPhoneLabel:'📧 Email or Phone',
  officerRegLink:'Register here',
  officerRegTitle:'🚜 Officer Registration',
  officerRegInfo:'ℹ️ You need a department registration code. Default: AGRI2024',
  deptCodeLabel:'🔑 Department Registration Code',
  dashTitle:'🚜 Officer Dashboard',
  addNewFarmer:'➕ Add New Farmer',
  myFarmers:'👨‍🌾 My Farmers',
  addFarmerBtn:'Add Farmer',
  formTitle:'🌱 Crop Prediction',
  soilLabel:'📋 Soil Type', sandy:'Sandy', loamy:'Loamy', clay:'Clay',
  fertilityLabel:'💚 Soil Fertility', low:'Low', medium:'Medium', high:'High',
  harvestLabel:'🌾 Last Harvest Quality', poor:'Poor', good:'Good',
  cityLabel:'📍 Your City / Village',
  predictBtn:'🌱 Predict Best Crop',
  reviews:'Reviews',
  resTitle:'✅ Recommendation Result',
  confLabel:'📊 Confidence Score',
  fertLabel:'💧 Recommended Fertilizer',
  weatherLabel:'🌤 Current Weather',
  factorsLabel:'📈 Impact Factors',
  readResults:'Read Results Aloud',
  getRecBtn:'🔄 New Prediction',
  shareExp:'Share Experience',
  logout:'Logout',
  feedbackTitle:'✍️ Share Your Experience',
  feedbackSubtitle:'Your review helps other farmers make better decisions!',
  cropGrown:'🌾 Crop You Grew',
  ratingLabel:'⭐ Your Rating',
  locationLabel:'📍 Your Location',
  seasonLabel:'🌦 Season', selectSeason:'Select season',
  commentLabel:'💬 Your Experience',
  submitReview:'📤 Submit Review',
  reviewsTitle:'💬 Farmer Reviews',
  allCrops:'All Crops',
  writeReview:'✍️ Write Review',
  crop_rice:'Rice', crop_maize:'Maize', crop_chickpea:'Chickpea', crop_kidneybeans:'Kidney Beans',
  crop_pigeonpeas:'Pigeon Peas', crop_mothbeans:'Moth Beans', crop_mungbean:'Mung Bean',
  crop_blackgram:'Black Gram', crop_lentil:'Lentil', crop_pomegranate:'Pomegranate',
  crop_banana:'Banana', crop_mango:'Mango', crop_grapes:'Grapes', crop_watermelon:'Watermelon',
  crop_muskmelon:'Muskmelon', crop_apple:'Apple', crop_orange:'Orange', crop_papaya:'Papaya',
  crop_coconut:'Coconut', crop_cotton:'Cotton', crop_jute:'Jute', crop_coffee:'Coffee',
  // Voice literacy keywords
  voice_literate: ['literate','read','write','educated','farmer'],
  voice_illiterate: ['illiterate','officer','help','cannot','cant'],
  // Radio voice keywords
  voice_sandy:['sandy','sand'], voice_loamy:['loamy','loam','foam'],
  voice_clay:['clay','black'], voice_low:['low'], voice_medium:['medium','middle'],
  voice_high:['high'], voice_poor:['poor','bad'], voice_good:['good'],
},
hi: {
  appName:'CropAI',
  welcomeTitle:'AI-आधारित फसल पूर्वानुमान और उर्वरक अनुशंसा प्रणाली',
  welcomeSub:'बेहतर फसल के लिए बुद्धिमान डेटा-आधारित मार्गदर्शन',
  getStarted:'शुरू करें',
  literacyQ:'आप कौन हैं?',
  literacySay:'नीचे टैप करें या 🎤 दबाकर "साक्षर" या "निरक्षर" कहें',
  speakChoice:'🎤 बोलकर चुनें', hearOptions:'🔊 विकल्प सुनें',
  literateTitle:'साक्षर किसान', literateDesc:'मैं खुद पढ़ और लिख सकता हूँ',
  illiterateTitle:'अधिकारी की मदद चाहिए', illiterateDesc:'कृषि अधिकारी मेरी मदद करेंगे',
  back:'वापस',
  regTitle:'🌱 किसान पंजीकरण',
  nameLabel:'👤 पूरा नाम', namePh:'अपना पूरा नाम दर्ज करें',
  aadharLabel:'🪪 आधार नंबर (12 अंक)', aadharPh:'12-अंकीय आधार नंबर',
  phonePh:'मोबाइल नंबर',
  passwordLabel:'🔒 पासवर्ड', passwordPh:'कम से कम 6 अक्षर',
  confirmLabel:'🔒 पासवर्ड की पुष्टि', confirmPh:'पासवर्ड दोबारा दर्ज करें',
  passwordHint:'⚠ सुरक्षा के लिए पासवर्ड बोलें नहीं — टाइप करें',
  registerBtn:'✅ पंजीकरण करें',
  hasAccount:'पहले से पंजीकृत हैं?', loginLink:'यहाँ लॉगिन करें',
  loginTitle:'🔐 किसान लॉगिन',
  loginBtn:'🚀 लॉगिन',
  newFarmer:'नए हैं? पंजीकरण करें', forgotPwd:'पासवर्ड भूल गए?',
  forgotTitle:'🔑 पासवर्ड रीसेट',
  forgotDesc:'आधार नंबर दर्ज करें और नया पासवर्ड बनाएं।',
  newPwdLabel:'🔒 नया पासवर्ड',
  updatePwdBtn:'✅ पासवर्ड अपडेट करें',
  officerLoginTitle:'🚜 अधिकारी लॉगिन',
  emailLabel:'📧 ईमेल / फ़ोन',
  emailOrPhoneLabel:'📧 ईमेल या फ़ोन',
  officerRegLink:'यहाँ पंजीकरण करें',
  officerRegTitle:'🚜 अधिकारी पंजीकरण',
  officerRegInfo:'ℹ️ विभाग पंजीकरण कोड आवश्यक है। डिफ़ॉल्ट: AGRI2024',
  deptCodeLabel:'🔑 विभाग पंजीकरण कोड',
  dashTitle:'🚜 अधिकारी डैशबोर्ड',
  addNewFarmer:'➕ नया किसान जोड़ें',
  myFarmers:'👨‍🌾 मेरे किसान',
  addFarmerBtn:'किसान जोड़ें',
  formTitle:'🌱 फसल पूर्वानुमान',
  soilLabel:'📋 मिट्टी का प्रकार', sandy:'रेतीली', loamy:'दोमट', clay:'चिकनी',
  fertilityLabel:'💚 मिट्टी की उर्वरता', low:'कम', medium:'मध्यम', high:'उच्च',
  harvestLabel:'🌾 पिछली फसल की गुणवत्ता', poor:'खराब', good:'अच्छी',
  cityLabel:'📍 आपका शहर / गाँव',
  predictBtn:'🌱 सबसे अच्छी फसल जानें',
  reviews:'समीक्षाएं',
  resTitle:'✅ अनुशंसा परिणाम',
  confLabel:'📊 आत्मविश्वास स्कोर',
  fertLabel:'💧 अनुशंसित उर्वरक',
  weatherLabel:'🌤 वर्तमान मौसम',
  factorsLabel:'📈 प्रभाव कारक',
  readResults:'🔊 परिणाम ज़ोर से पढ़ें',
  getRecBtn:'🔄 नई भविष्यवाणी',
  shareExp:'अनुभव साझा करें',
  logout:'लॉगआउट',
  feedbackTitle:'✍️ अपना अनुभव साझा करें',
  feedbackSubtitle:'आपकी समीक्षा अन्य किसानों की मदद करती है!',
  cropGrown:'🌾 आपने जो फसल उगाई',
  ratingLabel:'⭐ आपकी रेटिंग',
  locationLabel:'📍 आपका स्थान',
  seasonLabel:'🌦 मौसम', selectSeason:'मौसम चुनें',
  commentLabel:'💬 आपका अनुभव',
  submitReview:'📤 समीक्षा सबमिट करें',
  reviewsTitle:'💬 किसानों की समीक्षाएं',
  allCrops:'सभी फसलें',
  writeReview:'✍️ समीक्षा लिखें',
  crop_rice:'चावल', crop_maize:'मक्का', crop_chickpea:'चना', crop_kidneybeans:'राजमा',
  crop_pigeonpeas:'अरहर दाल', crop_mothbeans:'मोठ दाल', crop_mungbean:'मूंग दाल',
  crop_blackgram:'उड़द दाल', crop_lentil:'मसूर दाल', crop_pomegranate:'अनार',
  crop_banana:'केला', crop_mango:'आम', crop_grapes:'अंगूर', crop_watermelon:'तरबूज',
  crop_muskmelon:'खरबूजा', crop_apple:'सेब', crop_orange:'संतरा', crop_papaya:'पपीता',
  crop_coconut:'नारियल', crop_cotton:'कपास', crop_jute:'जूट', crop_coffee:'कॉफी',
  voice_literate:['साक्षर','पढ़','लिख'],
  voice_illiterate:['निरक्षर','अधिकारी','मदद'],
  voice_sandy:['रेतीली','रेत'], voice_loamy:['दोमट'], voice_clay:['चिकनी'],
  voice_low:['कम'], voice_medium:['मध्यम'], voice_high:['उच्च'],
  voice_poor:['खराब'], voice_good:['अच्छी','अच्छा'],
},
te: {
  appName:'CropAI',
  welcomeTitle:'AI ఆధారిత పంట అంచనా & ఎరువుల సిఫార్సు వ్యవస్థ',
  welcomeSub:'తెలివైన డేటా ఆధారిత పంట మార్గదర్శనంతో రైతులను శక్తివంతం చేయడం',
  getStarted:'ప్రారంభించండి',
  literacyQ:'మీరు ఎవరు?',
  literacySay:'క్రింద నొక్కండి లేదా 🎤 నొక్కి "అక్షరాస్యుడు" లేదా "నిరక్షరాస్యుడు" అని చెప్పండి',
  speakChoice:'🎤 మాట్లాడి ఎంచుకోండి', hearOptions:'🔊 ఎంపికలు వినండి',
  literateTitle:'అక్షరాస్య రైతు', literateDesc:'నేను చదవగలను & రాయగలను',
  illiterateTitle:'అధికారి సహాయం కావాలి', illiterateDesc:'వ్యవసాయ అధికారి నాకు సహాయం చేస్తారు',
  back:'వెనక్కి',
  regTitle:'🌱 రైతు నమోదు',
  nameLabel:'👤 పూర్తి పేరు', namePh:'మీ పూర్తి పేరు నమోదు చేయండి',
  aadharLabel:'🪪 ఆధార్ సంఖ్య (12 అంకెలు)', aadharPh:'12 అంకెల ఆధార్ నంబర్',
  phonePh:'మొబైల్ నంబర్',
  passwordLabel:'🔒 పాస్‌వర్డ్', passwordPh:'కనీసం 6 అక్షరాలు',
  confirmLabel:'🔒 పాస్‌వర్డ్ ధృవీకరించండి', confirmPh:'పాస్‌వర్డ్ మళ్లీ నమోదు చేయండి',
  passwordHint:'⚠ భద్రతకు పాస్‌వర్డ్ మాట్లాడకండి — టైప్ చేయండి',
  registerBtn:'✅ నమోదు చేయండి',
  hasAccount:'ఇప్పటికే నమోదు అయ్యారా?', loginLink:'ఇక్కడ లాగిన్ చేయండి',
  loginTitle:'🔐 రైతు లాగిన్',
  loginBtn:'🚀 లాగిన్',
  newFarmer:'కొత్తవారా? నమోదు చేయండి', forgotPwd:'పాస్‌వర్డ్ మర్చిపోయారా?',
  forgotTitle:'🔑 పాస్‌వర్డ్ రీసెట్',
  forgotDesc:'ఆధార్ సంఖ్య నమోదు చేసి కొత్త పాస్‌వర్డ్ సెట్ చేయండి.',
  newPwdLabel:'🔒 కొత్త పాస్‌వర్డ్',
  updatePwdBtn:'✅ పాస్‌వర్డ్ అప్‌డేట్ చేయండి',
  officerLoginTitle:'🚜 అధికారి లాగిన్',
  emailLabel:'📧 ఇమెయిల్ / ఫోన్',
  emailOrPhoneLabel:'📧 ఇమెయిల్ లేదా ఫోన్',
  officerRegLink:'ఇక్కడ నమోదు చేయండి',
  officerRegTitle:'🚜 అధికారి నమోదు',
  officerRegInfo:'ℹ️ విభాగ నమోదు కోడ్ అవసరం. డిఫాల్ట్: AGRI2024',
  deptCodeLabel:'🔑 విభాగ నమోదు కోడ్',
  dashTitle:'🚜 అధికారి డాష్‌బోర్డ్',
  addNewFarmer:'➕ కొత్త రైతును చేర్చండి',
  myFarmers:'👨‍🌾 నా రైతులు',
  addFarmerBtn:'రైతును చేర్చు',
  formTitle:'🌱 పంట అంచనా',
  soilLabel:'📋 నేల రకం', sandy:'ఇసుక నేల', loamy:'దుంప నేల', clay:'బంకమట్టి',
  fertilityLabel:'💚 నేల సారం', low:'తక్కువ', medium:'మధ్యస్థం', high:'ఎక్కువ',
  harvestLabel:'🌾 గత పంట నాణ్యత', poor:'తక్కువ నాణ్యత', good:'మంచి నాణ్యత',
  cityLabel:'📍 మీ నగరం / గ్రామం',
  predictBtn:'🌱 ఉత్తమ పంటను అంచనా వేయండి',
  reviews:'సమీక్షలు',
  resTitle:'✅ సిఫార్సు ఫలితం',
  confLabel:'📊 విశ్వాస శాతం',
  fertLabel:'💧 సిఫార్సు చేసిన ఎరువులు',
  weatherLabel:'🌤 ప్రస్తుత వాతావరణం',
  factorsLabel:'📈 ప్రభావం చూపే అంశాలు',
  readResults:'🔊 ఫలితాలు చదవండి',
  getRecBtn:'🔄 కొత్త అంచనా',
  shareExp:'అనుభవం పంచుకోండి',
  logout:'లాగ్ అవుట్',
  feedbackTitle:'✍️ మీ అనుభవం పంచుకోండి',
  feedbackSubtitle:'మీ సమీక్ష ఇతర రైతులకు మేలు చేస్తుంది!',
  cropGrown:'🌾 మీరు పండించిన పంట',
  ratingLabel:'⭐ మీ రేటింగ్',
  locationLabel:'📍 మీ స్థానం',
  seasonLabel:'🌦 సీజన్', selectSeason:'సీజన్ ఎంచుకోండి',
  commentLabel:'💬 మీ అనుభవం',
  submitReview:'📤 సమీక్ష సమర్పించండి',
  reviewsTitle:'💬 రైతుల సమీక్షలు',
  allCrops:'అన్ని పంటలు',
  writeReview:'✍️ సమీక్ష రాయండి',
  crop_rice:'వరి', crop_maize:'మొక్కజొన్న', crop_chickpea:'శనగలు', crop_kidneybeans:'రాజ్మా',
  crop_pigeonpeas:'కందులు', crop_mothbeans:'మొలకలు', crop_mungbean:'పెసర్లు',
  crop_blackgram:'మినుములు', crop_lentil:'చిక్కుళ్ళు', crop_pomegranate:'దానిమ్మ',
  crop_banana:'అరటి', crop_mango:'మామిడి', crop_grapes:'ద్రాక్ష', crop_watermelon:'పుచ్చకాయ',
  crop_muskmelon:'ఖర్బూజా', crop_apple:'ఆపిల్', crop_orange:'నారింజ', crop_papaya:'బొప్పాయి',
  crop_coconut:'కొబ్బరి', crop_cotton:'పత్తి', crop_jute:'జనపనార', crop_coffee:'కాఫీ',
  voice_literate:['అక్షరాస్యుడు','చదువు','రాయి'],
  voice_illiterate:['నిరక్షరాస్యుడు','అధికారి','సహాయం'],
  voice_sandy:['ఇసుక'], voice_loamy:['దుంప'], voice_clay:['బంకమట్టి'],
  voice_low:['తక్కువ'], voice_medium:['మధ్యస్థం'], voice_high:['ఎక్కువ'],
  voice_poor:['తక్కువ నాణ్యత'], voice_good:['మంచి'],
}};

// Fertilizer explanations (language-aware)
const FERT_EXPLAIN = {
en: {
  'urea':       'Urea supplies Nitrogen (N) — the key nutrient for leaf growth and green colour. Rice needs high nitrogen for dense paddy production.',
  'dap':        'DAP (Di-Ammonium Phosphate) provides Phosphorus which develops strong roots and helps the plant absorb water efficiently.',
  'npk':        'NPK is a balanced fertilizer providing Nitrogen (growth), Phosphorus (roots), and Potassium (disease resistance) equally.',
  'potash':     'Potash (Potassium Chloride) strengthens stems, improves fruit quality, and helps the crop resist drought and disease.',
  'ssp':        'SSP (Single Super Phosphate) provides Phosphorus and Sulphur. Ideal for pulses like chickpea and lentil to fix atmospheric nitrogen.',
  'zinc':       'Zinc Sulphate corrects zinc deficiency in soils, which causes stunted growth. Especially important for maize and rice.',
  'calcium':    'Calcium Nitrate strengthens cell walls in fruits, prevents blossom-end rot, and improves shelf life. Critical for grapes.',
  'magnesium':  'Magnesium is the centre of chlorophyll (the green pigment). Banana needs magnesium for large, healthy leaves.',
  'default':    'This balanced fertilizer provides all three major nutrients — Nitrogen for growth, Phosphorus for roots, and Potassium for strength.'
},
hi: {
  'urea':       'यूरिया नाइट्रोजन (N) देता है — पत्तियों की वृद्धि और हरे रंग के लिए मुख्य पोषक तत्व। चावल को घने उत्पादन के लिए अधिक नाइट्रोजन चाहिए।',
  'dap':        'डीएपी फास्फोरस देता है जो मजबूत जड़ें बनाता है और पौधे को पानी सोखने में मदद करता है।',
  'npk':        'एनपीके संतुलित उर्वरक है जो नाइट्रोजन (विकास), फास्फोरस (जड़ें) और पोटेशियम (रोग प्रतिरोधक) देता है।',
  'potash':     'पोटाश तने को मजबूत करता है, फल की गुणवत्ता सुधारता है और फसल को सूखे व बीमारी से बचाता है।',
  'ssp':        'एसएसपी फास्फोरस और सल्फर देता है। चने और मसूर जैसी दालों के लिए आदर्श।',
  'zinc':       'जिंक सल्फेट मिट्टी में जिंक की कमी को दूर करता है जो विकास रोकती है। मक्का और चावल के लिए महत्वपूर्ण।',
  'calcium':    'कैल्शियम नाइट्रेट फलों की कोशिका दीवारें मजबूत करता है और शेल्फ लाइफ बढ़ाता है। अंगूर के लिए जरूरी।',
  'magnesium':  'मैग्नीशियम क्लोरोफिल का केंद्र है। केले को बड़े, स्वस्थ पत्तों के लिए मैग्नीशियम चाहिए।',
  'default':    'यह संतुलित उर्वरक सभी तीन मुख्य पोषक तत्व देता है — वृद्धि के लिए नाइट्रोजन, जड़ों के लिए फास्फोरस और मजबूती के लिए पोटेशियम।'
},
te: {
  'urea':       'యూరియా నైట్రోజన్ (N) అందిస్తుంది — ఆకుల పెరుగుదల మరియు ఆకుపచ్చ రంగుకు ముఖ్యమైన పోషకం. వరికి అధిక నైట్రోజన్ అవసరం.',
  'dap':        'DAP ఫాస్పరస్ అందిస్తుంది, ఇది బలమైన వేర్లు అభివృద్ధి చేస్తుంది మరియు మొక్క నీటిని సమర్థంగా గ్రహించేలా చేస్తుంది.',
  'npk':        'NPK సమతుల్య ఎరువు — నైట్రోజన్ (పెరుగుదల), ఫాస్పరస్ (వేర్లు), పొటాషియం (వ్యాధి నిరోధకత) అందిస్తుంది.',
  'potash':     'పొటాష్ కాండాలను బలపరుస్తుంది, పండ్ల నాణ్యతను మెరుగుపరుస్తుంది మరియు పంటను కరువు నుండి రక్షిస్తుంది.',
  'ssp':        'SSP ఫాస్పరస్ మరియు సల్ఫర్ అందిస్తుంది. శనగలు మరియు మసూర్ వంటి పప్పుధాన్యాలకు అనువైనది.',
  'zinc':       'జింక్ సల్ఫేట్ నేలలో జింక్ లోపాన్ని సరిచేస్తుంది. మొక్కజొన్న మరియు వరికి చాలా ముఖ్యమైనది.',
  'calcium':    'కాల్షియం నైట్రేట్ పండ్ల కణ గోడలను బలపరుస్తుంది మరియు నిల్వ జీవితాన్ని మెరుగుపరుస్తుంది. ద్రాక్షకు అవసరం.',
  'magnesium':  'మెగ్నీషియం క్లోరోఫిల్ కేంద్రం. అరటికి పెద్ద, ఆరోగ్యకరమైన ఆకుల కోసం మెగ్నీషియం అవసరం.',
  'default':    'ఈ సమతుల్య ఎరువు మూడు ప్రధాన పోషకాలు అందిస్తుంది — పెరుగుదలకు నైట్రోజన్, వేర్లకు ఫాస్పరస్, బలానికి పొటాషియం.'
}};

function getFertExplanation(fertName, lang) {
  const name = (fertName || '').toLowerCase();
  const dict = FERT_EXPLAIN[lang] || FERT_EXPLAIN.en;
  for (const [key, text] of Object.entries(dict)) {
    if (name.includes(key)) return text;
  }
  return dict.default;
}

// ═══════════════════════════════════════════════════════════════
// 2. STATE
// ═══════════════════════════════════════════════════════════════
let currentUserToken = localStorage.getItem('token');
let currentUserRole  = localStorage.getItem('role');
let currentUser      = JSON.parse(localStorage.getItem('user') || '{}');
let selectedFarmerId = null;
let screenHistory    = ['welcomeScreen'];
let selectedRating   = 0;
let lastCropResult   = '';
let currentLang      = localStorage.getItem('preferredLanguage') || 'en';
let currentFertilizerText = '';

// ═══════════════════════════════════════════════════════════════
// 3. NAVIGATION
// ═══════════════════════════════════════════════════════════════
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active'); s.classList.add('hidden'); });
    const t = document.getElementById(id);
    if (t) { t.classList.add('active'); t.classList.remove('hidden'); }
    if (screenHistory[screenHistory.length-1] !== id) screenHistory.push(id);
    window.scrollTo(0,0);
    window.speechSynthesis.cancel();
}
function goBack() {
    window.speechSynthesis.cancel();
    if (screenHistory.length > 1) {
        screenHistory.pop();
        const prev = screenHistory[screenHistory.length-1];
        document.querySelectorAll('.screen').forEach(s => { s.classList.remove('active'); s.classList.add('hidden'); });
        document.getElementById(prev)?.classList.replace('hidden','active');
    }
}

// ═══════════════════════════════════════════════════════════════
// 4. LANGUAGE — full page translation every switch
// ═══════════════════════════════════════════════════════════════
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    const dict = T[lang] || T.en;

    // data-key elements (text content)
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (!dict[key]) return;
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = dict[key];
        } else if (el.tagName === 'OPTION') {
            el.textContent = dict[key];
        } else {
            el.textContent = dict[key];
        }
    });

    // data-key-ph elements (placeholder-only)
    document.querySelectorAll('[data-key-ph]').forEach(el => {
        const key = el.getAttribute('data-key-ph');
        if (dict[key]) el.placeholder = dict[key];
    });

    // Page title
    document.title = dict.welcomeTitle || 'AI Crop Prediction';

    // Translate crop result if visible
    const rc = document.getElementById('resultCrop');
    if (rc && rc.getAttribute('data-raw')) {
        const raw = rc.getAttribute('data-raw');
        const ck  = `crop_${raw.toLowerCase().replace(/\s+/g,'')}`;
        if (dict[ck]) rc.textContent = dict[ck];
    }
}

function selectLiteracy(type) {
    if (type === 'literate')   showScreen('farmerLoginScreen');
    else                       showScreen('officerLoginScreen');
}

// ═══════════════════════════════════════════════════════════════
// 5. TEXT-TO-SPEECH helpers
// ═══════════════════════════════════════════════════════════════
function getLang() { return currentLang; }

function speak(text, lang) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang === 'te' ? 'te-IN' : lang === 'hi' ? 'hi-IN' : 'en-IN';
    utter.rate = 0.92;
    window.speechSynthesis.speak(utter);
}

/** 🔊 button next to any input — reads back what's been typed */
function speakField(inputId) {
    const el = document.getElementById(inputId);
    if (!el) return;
    const val = (el.value || '').trim();
    if (!val) { speak('Empty field', getLang()); return; }
    speak(val, getLang());
}

/** 🔊 for radio groups — says "currently selected: Loamy" */
function speakRadio(radioName) {
    const checked = document.querySelector(`input[name="${radioName}"]:checked`);
    if (!checked) return;
    const label = checked.closest('label')?.textContent?.trim() || checked.value;
    speak(label, getLang());
}

/** Read options on the literacy screen */
function readLiteracyOptions() {
    const dict = T[currentLang] || T.en;
    const msg = `${dict.literateTitle}: ${dict.literateDesc}. ${dict.illiterateTitle}: ${dict.illiterateDesc}.`;
    speak(msg, currentLang);
}

/** Read all results on results screen */
function speakAllResults() {
    const crop    = document.getElementById('resultCrop')?.textContent || '';
    const conf    = document.getElementById('confidenceText')?.textContent || '';
    const weather = document.getElementById('weatherInfo')?.textContent || '';
    const fert    = document.getElementById('fertilizerName')?.textContent || '';
    const fertExp = currentFertilizerText || '';
    const full    = `Recommended crop: ${crop}. Confidence: ${conf}. Weather: ${weather}. Fertilizer: ${fert}. ${fertExp}`;
    speak(full, currentLang);
}

/** Read fertilizer name + explanation */
function speakFertilizer() {
    const name = document.getElementById('fertilizerName')?.textContent || '';
    const exp  = currentFertilizerText || '';
    speak(`${name}. ${exp}`, currentLang);
}

// ═══════════════════════════════════════════════════════════════
// 6. VOICE INPUT
// ═══════════════════════════════════════════════════════════════
function startVoice(inputId, type='text') {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { alert('Voice not supported — use Chrome.'); return; }

    const rec    = new SR();
    const langCode = currentLang === 'te' ? 'te-IN' : currentLang === 'hi' ? 'hi-IN' : 'en-IN';
    rec.lang     = langCode;
    rec.interimResults = false;

    const el     = document.getElementById(inputId);
    const parent = el?.closest('.input-row') || el?.parentElement;
    const mic    = parent?.querySelector('.btn-mic');
    if (mic) { mic.textContent = '🔴'; mic.disabled = true; }

    rec.start();
    rec.onresult = e => {
        let t = e.results[0][0].transcript;
        if (type === 'numeric') t = t.replace(/\D/g,'');
        if (el) {
            el.value = (el.tagName === 'TEXTAREA' && el.value) ? el.value + ' ' + t : t;
        }
        // Auto read back after voice capture
        setTimeout(() => speakField(inputId), 300);
    };
    rec.onend = () => { if (mic) { mic.textContent = '🎤'; mic.disabled = false; } };
    rec.onerror = () => { if (mic) { mic.textContent = '🎤'; mic.disabled = false; } };
}

/** Voice for radio buttons — say "loamy", "sandy", "clay", etc. */
function startVoiceRadio(radioName, options) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { alert('Voice not supported — use Chrome.'); return; }

    const dict = T[currentLang] || T.en;
    const rec  = new SR();
    rec.lang   = currentLang === 'te' ? 'te-IN' : currentLang === 'hi' ? 'hi-IN' : 'en-IN';
    rec.interimResults = false;

    // Brief instruction
    const hints = options.map(o => dict[o] || o).join(', ');
    speak(`Please say one of: ${hints}`, currentLang);

    setTimeout(() => {
        rec.start();
        rec.onresult = e => {
            const said = e.results[0][0].transcript.toLowerCase();
            let matched = null;
            for (const opt of options) {
                const keywords = dict[`voice_${opt}`] || [opt];
                if (keywords.some(kw => said.includes(kw.toLowerCase()))) {
                    matched = opt; break;
                }
            }
            if (matched) {
                const radio = document.querySelector(`input[name="${radioName}"][value="${matched}"]`);
                if (radio) { radio.checked = true; speakRadio(radioName); }
            } else {
                speak(`Sorry, I heard "${said}". Please try again.`, currentLang);
            }
        };
        rec.onerror = () => {};
    }, 1500);
}

/** Voice selection on literacy screen */
function startLiteracyVoice() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { alert('Voice not supported — use Chrome.'); return; }

    const dict = T[currentLang] || T.en;
    speak(`${dict.literateTitle} or ${dict.illiterateTitle}?`, currentLang);

    const rec = new SR();
    rec.lang  = currentLang === 'te' ? 'te-IN' : currentLang === 'hi' ? 'hi-IN' : 'en-IN';

    setTimeout(() => {
        rec.start();
        rec.onresult = e => {
            const said = e.results[0][0].transcript.toLowerCase();
            const litKeys   = (dict.voice_literate   || ['literate']).map(k => k.toLowerCase());
            const illitKeys = (dict.voice_illiterate || ['illiterate','officer']).map(k => k.toLowerCase());
            if (litKeys.some(k => said.includes(k))) {
                speak(dict.literateTitle, currentLang);
                setTimeout(() => selectLiteracy('literate'), 900);
            } else if (illitKeys.some(k => said.includes(k))) {
                speak(dict.illiterateTitle, currentLang);
                setTimeout(() => selectLiteracy('illiterate'), 900);
            } else {
                speak(`I heard "${said}". Please try again.`, currentLang);
            }
        };
        rec.onerror = () => {};
    }, 1800);
}

// ═══════════════════════════════════════════════════════════════
// 7. UTILS
// ═══════════════════════════════════════════════════════════════
function togglePwd(id) {
    const el = document.getElementById(id);
    if (el) el.type = el.type === 'password' ? 'text' : 'password';
}
function saveSession(token, role, user) {
    localStorage.setItem('token', token); localStorage.setItem('role', role);
    localStorage.setItem('user', JSON.stringify(user));
    currentUserToken = token; currentUserRole = role; currentUser = user;
}
function logout() { localStorage.clear(); location.reload(); }

// ═══════════════════════════════════════════════════════════════
// 8. FARMER AUTH
// ═══════════════════════════════════════════════════════════════
async function farmerRegister() {
    const name=document.getElementById('regName').value.trim(),
          aadhar=document.getElementById('regAadhar').value.trim(),
          pwd=document.getElementById('regPassword').value,
          conf=document.getElementById('regConfirm').value;
    if (!name||!aadhar||!pwd)    { alert('Please fill all fields'); return; }
    if (pwd !== conf)            { alert('Passwords do not match'); return; }
    if (pwd.length < 6)          { alert('Password must be at least 6 characters'); return; }
    try {
        const r = await fetch('/api/auth/farmer-register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,aadhar,password:pwd})});
        const d = await r.json();
        if (d.success) { saveSession(d.token,'literate_farmer',d.user); selectedFarmerId=d.user.farmer_id; alert(`✅ Welcome, ${d.user.name}!`); showScreen('farmerInputScreen'); }
        else alert('❌ '+d.error);
    } catch(e) { alert('❌ Connection error'); }
}

async function farmerLogin() {
    const aadhar=document.getElementById('loginAadhar').value.trim(),
          pwd=document.getElementById('loginPassword').value;
    if (!aadhar||!pwd) { alert('Enter Aadhaar and password'); return; }
    try {
        const r=await fetch('/api/auth/farmer-login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({aadhar,password:pwd})});
        const d=await r.json();
        if (d.success) { saveSession(d.token,'literate_farmer',d.user); selectedFarmerId=d.user.farmer_id; showScreen('farmerInputScreen'); }
        else alert('❌ '+d.error);
    } catch(e) { alert('❌ Connection error'); }
}

async function resetPassword() {
    const aadhar=document.getElementById('forgotAadhar').value.trim(),
          np=document.getElementById('forgotNew').value,
          cp=document.getElementById('forgotConfirm').value;
    if (!aadhar||!np) { alert('Fill all fields'); return; }
    if (np !== cp)    { alert('Passwords do not match'); return; }
    try {
        const r=await fetch('/api/auth/farmer-forgot-password',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({aadhar,new_password:np,confirm_password:cp})});
        const d=await r.json();
        if (d.success) { alert('✅ '+d.message); showScreen('farmerLoginScreen'); }
        else alert('❌ '+d.error);
    } catch(e) { alert('❌ Connection error'); }
}

// ═══════════════════════════════════════════════════════════════
// 9. OFFICER AUTH
// ═══════════════════════════════════════════════════════════════
async function officerLogin() {
    const email=document.getElementById('officerEmail').value.trim(),
          pwd=document.getElementById('officerPassword').value;
    try {
        const r=await fetch('/api/auth/officer-login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password:pwd})});
        const d=await r.json();
        if (d.success) { saveSession(d.token,'officer',d.user); loadOfficerDashboard(); }
        else alert('❌ '+d.error);
    } catch(e) { alert('❌ Connection error'); }
}

async function officerRegister() {
    const name=document.getElementById('offRegName').value.trim(),
          email=document.getElementById('offRegEmail').value.trim(),
          pwd=document.getElementById('offRegPassword').value,
          code=document.getElementById('offRegCode').value.trim();
    if (!name||!email||!pwd||!code) { alert('Fill all fields'); return; }
    try {
        const r=await fetch('/api/auth/officer-register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email,password:pwd,officer_code:code})});
        const d=await r.json();
        if (d.success) { saveSession(d.token,'officer',d.user); alert(`✅ Welcome, ${d.user.name}!`); loadOfficerDashboard(); }
        else alert('❌ '+d.error);
    } catch(e) { alert('❌ Connection error'); }
}

// ═══════════════════════════════════════════════════════════════
// 10. OFFICER DASHBOARD
// ═══════════════════════════════════════════════════════════════
async function loadOfficerDashboard() { showScreen('officerDashboard'); await loadFarmers(); }

async function addFarmer() {
    const name=document.getElementById('farmerName').value.trim(),
          aadhar=document.getElementById('farmerAadhar').value.trim(),
          phone=document.getElementById('farmerPhone').value.trim();
    if (!name||!aadhar) { alert('Name and Aadhaar required'); return; }
    try {
        const r=await fetch('/api/officer/add-farmer',{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${currentUserToken}`},body:JSON.stringify({name,aadhar,phone})});
        const d=await r.json();
        if (d.success) { alert(`✅ ${name} added!`); ['farmerName','farmerAadhar','farmerPhone'].forEach(id=>document.getElementById(id).value=''); loadFarmers(); }
        else alert('❌ '+d.error);
    } catch(e) { alert('❌ Connection error'); }
}

async function loadFarmers() {
    try {
        const r=await fetch('/api/officer/farmers',{headers:{'Authorization':`Bearer ${currentUserToken}`}});
        const d=await r.json();
        const list=document.getElementById('farmersList');
        if (!d.farmers?.length) { list.innerHTML='<p style="color:#999;text-align:center;">No farmers yet.</p>'; return; }
        list.innerHTML='';
        d.farmers.forEach(f=>{
            const div=document.createElement('div');
            div.className='farmer-item';
            div.innerHTML=`<p><strong>👤 ${f.name}</strong></p><p>📞 ${f.phone||'N/A'}</p><p style="font-size:0.8em;color:#888;">Recs: ${f.recommendations_count}</p><button onclick="startForFarmer(${f.id},'${f.name}')" class="btn btn-primary" style="width:100%;margin-top:8px">🌱 Get Recommendation</button>`;
            list.appendChild(div);
        });
    } catch(e) { console.error(e); }
}

function startForFarmer(id, name) { selectedFarmerId=id; showScreen('farmerInputScreen'); }

// ═══════════════════════════════════════════════════════════════
// 11. PREDICTION
// ═══════════════════════════════════════════════════════════════
async function getPrediction() {
    const token=localStorage.getItem('token');
    if (!token) { alert('Session expired. Please login.'); showScreen('welcomeScreen'); return; }
    const btn=document.querySelector('[data-key="predictBtn"]');
    if (btn) { btn.textContent='⏳ Predicting...'; btn.disabled=true; }
    try {
        const r=await fetch('/api/predict',{method:'POST',
            headers:{'Content-Type':'application/json','Authorization':`Bearer ${token}`},
            body:JSON.stringify({
                soil_condition:  document.querySelector('input[name="soil_condition"]:checked')?.value||'loamy',
                soil_fertility:  document.querySelector('input[name="soil_fertility"]:checked')?.value||'medium',
                last_harvest_status: document.querySelector('input[name="last_harvest"]:checked')?.value||'good',
                city:            document.getElementById('cityInput').value.trim()||'Hyderabad',
                water_level:     2, farmer_id: selectedFarmerId
            })
        });
        const d=await r.json();
        if (d.success) { lastCropResult=d.crop; displayResults(d); }
        else if (r.status===401) { alert('Session expired.'); localStorage.clear(); location.reload(); }
        else alert('❌ '+d.error);
    } catch(e) { alert('❌ Error: '+e); }
    finally { if(btn){btn.textContent=(T[currentLang]||T.en).predictBtn||'🌱 Predict Best Crop'; btn.disabled=false;} }
}

function displayResults(data) {
    const lang=currentLang;
    const dict=T[lang]||T.en;

    // Crop
    const cropEl=document.getElementById('resultCrop');
    cropEl.textContent=data.crop; cropEl.setAttribute('data-raw',data.crop);
    const ck=`crop_${data.crop.toLowerCase().replace(/\s+/g,'')}`;
    if (dict[ck]) cropEl.textContent=dict[ck];

    document.getElementById('resultEmoji').textContent=data.emoji||'🌾';

    // Confidence
    const bar=document.getElementById('confidenceBar'),txt=document.getElementById('confidenceText');
    if(bar) bar.style.width=`${data.confidence}%`;
    if(txt) txt.textContent=`${data.confidence}%`;

    // Fertilizer + explanation
    document.getElementById('fertilizerName').textContent=data.fertilizer.name;
    const fertExp=getFertExplanation(data.fertilizer.name, lang);
    currentFertilizerText=fertExp;
    const expEl=document.getElementById('fertilizerExplanation');
    if(expEl) expEl.textContent=fertExp;

    // Weather
    const w=data.weather;
    document.getElementById('weatherInfo').textContent=`🌡 ${w.temperature}°C  💧 ${w.humidity}%  📍 ${w.city}`;

    // Factors
    const fl=document.getElementById('factorsList');
    if(fl&&data.explanation){
        fl.innerHTML='';
        data.explanation.forEach(([f,s])=>{const li=document.createElement('li');li.textContent=`${f}: ${s}%`;fl.appendChild(li);});
    }

    showScreen('resultsScreen');
}

// ═══════════════════════════════════════════════════════════════
// 12. FEEDBACK
// ═══════════════════════════════════════════════════════════════
function setRating(v) {
    selectedRating=v; document.getElementById('fbRating').value=v;
    document.querySelectorAll('.star').forEach(s=>s.classList.toggle('active',parseInt(s.dataset.val)<=v));
}

function showFeedbackForm() {
    const el=document.getElementById('fbCrop');
    if(el&&lastCropResult) el.value=lastCropResult;
    selectedRating=0;
    document.querySelectorAll('.star').forEach(s=>s.classList.remove('active'));
    showScreen('feedbackFormScreen');
}

async function submitFeedback() {
    const token=localStorage.getItem('token');
    if(!token){alert('Please login to submit a review');showScreen('farmerLoginScreen');return;}
    const crop=document.getElementById('fbCrop').value.trim(),
          rating=parseInt(document.getElementById('fbRating').value),
          comment=document.getElementById('fbComment').value.trim(),
          location=document.getElementById('fbLocation').value.trim(),
          season=document.getElementById('fbSeason').value;
    if(!crop){alert('Please enter the crop name');return;}
    if(!rating){alert('Please select a star rating');return;}
    if(!comment){alert('Please write your experience');return;}
    try {
        const r=await fetch('/api/feedback',{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${token}`},body:JSON.stringify({crop,rating,comment,location,season})});
        const d=await r.json();
        if(d.success){
            alert('🙏 '+d.message);
            ['fbCrop','fbComment','fbLocation'].forEach(id=>document.getElementById(id).value='');
            document.getElementById('fbSeason').value=''; setRating(0);
            showScreen('feedbackScreen'); loadFeedback();
        } else alert('❌ '+d.error);
    } catch(e){alert('❌ Connection error');}
}

async function loadFeedback(page=1) {
    const crop=document.getElementById('cropFilter')?.value||'';
    try {
        if(page===1){
            const cr=await fetch('/api/feedback/crops');
            const cd=await cr.json();
            const sel=document.getElementById('cropFilter');
            if(sel&&cd.crops){
                const cur=sel.value; sel.innerHTML=`<option value="">${(T[currentLang]||T.en).allCrops||'All Crops'}</option>`;
                cd.crops.forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;if(c===cur)o.selected=true;sel.appendChild(o);});
            }
        }
        const r=await fetch(`/api/feedback?crop=${encodeURIComponent(crop)}&page=${page}`);
        const d=await r.json();

        const statsEl=document.getElementById('feedbackStats');
        if(statsEl){
            if(d.total_reviews>0){
                const filled='★'.repeat(Math.round(d.avg_rating)),empty='☆'.repeat(5-Math.round(d.avg_rating));
                statsEl.innerHTML=`<div class="feedback-summary">
                    <div class="summary-score"><span class="big-rating">${d.avg_rating}</span><span class="stars-display">${filled}${empty}</span><span style="color:#666;font-size:0.82em;">${d.total_reviews} reviews</span></div>
                    <div class="rating-bars">${[5,4,3,2,1].map(s=>{const c=d.rating_dist?.[s]||0,p=d.total_reviews?Math.round(c/d.total_reviews*100):0;return`<div class="rating-bar-row"><span class="rb-label">${s}★</span><div class="rb-track"><div class="rb-fill" style="width:${p}%"></div></div><span class="rb-count">${c}</span></div>`;}).join('')}</div>
                </div>`;
            } else statsEl.innerHTML='<p style="color:#999;text-align:center;padding:12px;">No reviews yet. Be the first!</p>';
        }

        const listEl=document.getElementById('feedbackList');
        if(!d.feedbacks?.length){listEl.innerHTML='<p style="color:#999;text-align:center;padding:20px;">No reviews found.</p>';document.getElementById('feedbackPagination').innerHTML='';return;}
        listEl.innerHTML=d.feedbacks.map(fb=>`
            <div class="review-card">
                <div class="review-header">
                    <div><span class="reviewer-name">👤 ${fb.farmer_name}</span>${fb.location?`<span class="reviewer-loc">📍 ${fb.location}</span>`:''}</div>
                    <div><span class="review-stars">${'★'.repeat(fb.rating)}${'☆'.repeat(5-fb.rating)}</span><span class="review-date">${fb.created_at}</span></div>
                </div>
                <div class="review-crop">🌾 ${fb.crop}${fb.season?` · ${fb.season}`:''}</div>
                <p class="review-comment">"${fb.comment}"</p>
                <button class="btn-speak small-speak" onclick="speak('${fb.comment.replace(/'/g,"\\'")}','${currentLang}')" title="Read review">🔊</button>
            </div>`).join('');

        const total=Math.ceil(d.total/10),pag=document.getElementById('feedbackPagination');
        if(pag&&total>1){pag.innerHTML=`${page>1?`<button onclick="loadFeedback(${page-1})" class="btn btn-secondary" style="margin:0 5px">← Prev</button>`:''}
            <span style="margin:0 10px;color:#666;">Page ${page} / ${total}</span>
            ${page<total?`<button onclick="loadFeedback(${page+1})" class="btn btn-primary" style="margin:0 5px">Next →</button>`:''}`;}
        else if(pag) pag.innerHTML='';
    } catch(e){console.error(e);document.getElementById('feedbackList').innerHTML='<p style="color:#c00;">Failed to load.</p>';}
}

// ═══════════════════════════════════════════════════════════════
// 13. INIT
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    const lang=localStorage.getItem('preferredLanguage')||'en';
    const sel=document.getElementById('languageSelect');
    if(sel) sel.value=lang;
    changeLanguage(lang);

    if(currentUserToken&&currentUserRole){
        if(currentUserRole==='officer') loadOfficerDashboard();
        else showScreen('farmerInputScreen');
    } else showScreen('welcomeScreen');

    // PWA install banner
    window.addEventListener('beforeinstallprompt', e => {
        e.preventDefault();
        const banner=document.createElement('div');
        banner.className='install-banner';
        banner.innerHTML=`📲 Add to Home Screen for app-like experience <button onclick="installApp(event)" class="btn btn-primary" style="padding:6px 14px;font-size:0.85em;margin-left:10px">Install</button> <button onclick="this.parentElement.remove()" style="background:none;border:none;cursor:pointer;margin-left:8px;font-size:1.2em;">✕</button>`;
        document.body.prepend(banner);
        window._deferredInstall=e;
    });
});

function installApp(e) {
    e.target.closest('.install-banner')?.remove();
    window._deferredInstall?.prompt();
}