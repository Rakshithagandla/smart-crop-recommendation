// ═══════════════════════════════════════════════════════════════
// 1. TRANSLATIONS  —  ALL strings for EN / HI / TE
// ═══════════════════════════════════════════════════════════════
const T = {
en: {
  appName:'CropAI 🌾',
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
  installApp:'📲 Install App',
  confHigh:'Very high — the AI is very confident this crop suits your soil and weather conditions.',
  confMed:'Moderate confidence — this crop is likely suitable. Consider local expert advice too.',
  confLow:'Lower confidence — multiple crops may suit your land. Consult your agricultural officer.',
  newOfficer:'New officer?',
  emailOrPhonePh:'Email or phone number',
  cropGrownPh:'e.g. Rice, Maize, Cotton',
  kharif:'Kharif (Jun-Oct)', rabi:'Rabi (Oct-Mar)', zaid:'Zaid (Mar-Jun)',
  seasonInputLabel:'🌦 Season (Optional)',
  factor_Nitrogen:'Nitrogen', factor_Phosphorus:'Phosphorus',
  factor_Potassium:'Potassium', factor_Temperature:'Temperature',
  factor_Humidity:'Humidity', factor_pH:'pH', factor_Rainfall:'Rainfall',
  factor_SoilHealth:'Soil Health',
  cityPh:'Your city / village',
  translateBtn:'🌐 Translate', translateClose:'✕ Original',
  alreadyReg:'Already registered?', alreadyOfficer:'Already registered?',
  deptCodePh:'Code from your department',
  locationPh:'Village / District / State',
  commentPh:'How was your yield? Was the recommendation helpful? Any tips for other farmers?',
  voice_literate: ['literate','read','write','educated','farmer'],
  voice_illiterate: ['illiterate','officer','help','cannot','cant'],
  voice_sandy:['sandy','sand'], voice_loamy:['loamy','loam','foam'],
  voice_clay:['clay','black'], voice_low:['low'], voice_medium:['medium','middle'],
  voice_high:['high'], voice_poor:['poor','bad'], voice_good:['good'],
},
hi: {
  appName:'फसल AI 🌾',
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
  installApp:'📲 ऐप इंस्टॉल करें',
  confHigh:'बहुत अधिक — AI को यकीन है यह फसल आपकी मिट्टी और मौसम के लिए उपयुक्त है।',
  confMed:'मध्यम विश्वास — यह फसल संभवतः उपयुक्त है। स्थानीय विशेषज्ञ से भी सलाह लें।',
  confLow:'कम विश्वास — कई फसलें उपयुक्त हो सकती हैं। कृषि अधिकारी से संपर्क करें।',
  newOfficer:'नए अधिकारी?',
  emailOrPhonePh:'ईमेल या फोन नंबर',
  cropGrownPh:'जैसे: चावल, मक्का, कपास',
  kharif:'खरीफ (जून-अक्टूबर)', rabi:'रबी (अक्टूबर-मार्च)', zaid:'जायद (मार्च-जून)',
  seasonInputLabel:'🌦 मौसम (वैकल्पिक)',
  factor_Nitrogen:'नाइट्रोजन', factor_Phosphorus:'फास्फोरस',
  factor_Potassium:'पोटेशियम', factor_Temperature:'तापमान',
  factor_Humidity:'आर्द्रता', factor_pH:'पीएच', factor_Rainfall:'वर्षा',
  factor_SoilHealth:'मिट्टी का स्वास्थ्य',
  cityPh:'आपका शहर / गाँव',
  translateBtn:'🌐 अनुवाद करें', translateClose:'✕ मूल',
  alreadyReg:'पहले से पंजीकृत हैं?', alreadyOfficer:'पहले से पंजीकृत हैं?',
  deptCodePh:'विभाग कोड दर्ज करें',
  locationPh:'गाँव / जिला / राज्य',
  commentPh:'आपकी फसल कैसी रही? क्या सुझाव मिला सही था? अन्य किसानों के लिए सुझाव?',
  voice_literate:['साक्षर','पढ़','लिख'],
  voice_illiterate:['निरक्षर','अधिकारी','मदद'],
  voice_sandy:['रेतीली','रेत'], voice_loamy:['दोमट'], voice_clay:['चिकनी'],
  voice_low:['कम'], voice_medium:['मध्यम'], voice_high:['उच्च'],
  voice_poor:['खराब'], voice_good:['अच्छी','अच्छा'],
},
te: {
  appName:'పంట AI 🌾',
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
  installApp:'📲 యాప్ ఇన్‌స్టాల్ చేయండి',
  confHigh:'చాలా అధిక నమ్మకం — AI మీ నేల మరియు వాతావరణానికి ఈ పంట సరైనదని నిర్ధారించింది.',
  confMed:'మధ్యస్థ నమ్మకం — ఈ పంట సరిగ్గా ఉండవచ్చు. స్థానిక నిపుణుల సలహా కూడా తీసుకోండి.',
  confLow:'తక్కువ నమ్మకం — అనేక పంటలు సరిపోవచ్చు. వ్యవసాయ అధికారిని సంప్రదించండి.',
  newOfficer:'కొత్త అధికారి?',
  emailOrPhonePh:'ఇమెయిల్ లేదా ఫోన్ నంబర్',
  cropGrownPh:'ఉదా: వరి, మొక్కజొన్న, పత్తి',
  kharif:'ఖరీఫ్ (జూన్-అక్టోబర్)', rabi:'రబీ (అక్టోబర్-మార్చి)', zaid:'జాయిద్ (మార్చి-జూన్)',
  seasonInputLabel:'🌦 సీజన్ (ఐచ్ఛికం)',
  factor_Nitrogen:'నైట్రోజన్', factor_Phosphorus:'ఫాస్పరస్',
  factor_Potassium:'పొటాషియం', factor_Temperature:'ఉష్ణోగ్రత',
  factor_Humidity:'తేమ', factor_pH:'పీహెచ్', factor_Rainfall:'వర్షపాతం',
  factor_SoilHealth:'నేల ఆరోగ్యం',
  cityPh:'మీ నగరం / గ్రామం',
  translateBtn:'🌐 అనువదించు', translateClose:'✕ అసలు',
  alreadyReg:'ఇప్పటికే నమోదు అయ్యారా?', alreadyOfficer:'ఇప్పటికే నమోదు అయ్యారా?',
  deptCodePh:'విభాగ కోడ్ నమోదు చేయండి',
  locationPh:'గ్రామం / జిల్లా / రాష్ట్రం',
  commentPh:'మీ పంట ఎలా ఉంది? సిఫార్సు సరైనదా? ఇతర రైతులకు సూచనలు?',
  voice_literate:['అక్షరాస్యుడు','చదువు','రాయి'],
  voice_illiterate:['నిరక్షరాస్యుడు','అధికారి','సహాయం'],
  voice_sandy:['ఇసుక'], voice_loamy:['దుంప'], voice_clay:['బంకమట్టి'],
  voice_low:['తక్కువ'], voice_medium:['మధ్యస్థం'], voice_high:['ఎక్కువ'],
  voice_poor:['తక్కువ నాణ్యత'], voice_good:['మంచి'],
}};

// ═══════════════════════════════════════════════════════════════
// FERTILIZER EXPLANATIONS
// ═══════════════════════════════════════════════════════════════
const FERT_EXPLAIN = {
en: {
  'urea':      'Urea supplies Nitrogen (N) — the key nutrient for leaf growth and green colour. Rice needs high nitrogen for dense paddy production.',
  'dap':       'DAP (Di-Ammonium Phosphate) provides Phosphorus which develops strong roots and helps the plant absorb water efficiently.',
  'npk':       'NPK is a balanced fertilizer providing Nitrogen (growth), Phosphorus (roots), and Potassium (disease resistance) equally.',
  'potash':    'Potash (Potassium Chloride) strengthens stems, improves fruit quality, and helps the crop resist drought and disease.',
  'ssp':       'SSP (Single Super Phosphate) provides Phosphorus and Sulphur. Ideal for pulses like chickpea and lentil to fix atmospheric nitrogen.',
  'zinc':      'Zinc Sulphate corrects zinc deficiency in soils, which causes stunted growth. Especially important for maize and rice.',
  'calcium':   'Calcium Nitrate strengthens cell walls in fruits, prevents blossom-end rot, and improves shelf life. Critical for grapes.',
  'magnesium': 'Magnesium is the centre of chlorophyll (the green pigment). Banana needs magnesium for large, healthy leaves.',
  'default':   'This balanced fertilizer provides all three major nutrients — Nitrogen for growth, Phosphorus for roots, and Potassium for strength.'
},
hi: {
  'urea':      'यूरिया नाइट्रोजन (N) देता है — पत्तियों की वृद्धि और हरे रंग के लिए मुख्य पोषक तत्व।',
  'dap':       'डीएपी फास्फोरस देता है जो मजबूत जड़ें बनाता है और पौधे को पानी सोखने में मदद करता है।',
  'npk':       'एनपीके संतुलित उर्वरक है जो नाइट्रोजन (विकास), फास्फोरस (जड़ें) और पोटेशियम (रोग प्रतिरोधक) देता है।',
  'potash':    'पोटाश तने को मजबूत करता है, फल की गुणवत्ता सुधारता है और फसल को सूखे व बीमारी से बचाता है।',
  'ssp':       'एसएसपी फास्फोरस और सल्फर देता है। चने और मसूर जैसी दालों के लिए आदर्श।',
  'zinc':      'जिंक सल्फेट मिट्टी में जिंक की कमी को दूर करता है। मक्का और चावल के लिए महत्वपूर्ण।',
  'calcium':   'कैल्शियम नाइट्रेट फलों की कोशिका दीवारें मजबूत करता है। अंगूर के लिए जरूरी।',
  'magnesium': 'मैग्नीशियम क्लोरोफिल का केंद्र है। केले को बड़े, स्वस्थ पत्तों के लिए मैग्नीशियम चाहिए।',
  'default':   'यह संतुलित उर्वरक सभी तीन मुख्य पोषक तत्व देता है — नाइट्रोजन, फास्फोरस और पोटेशियम।'
},
te: {
  'urea':      'యూరియా నైట్రోజన్ (N) అందిస్తుంది — ఆకుల పెరుగుదల మరియు ఆకుపచ్చ రంగుకు ముఖ్యమైన పోషకం.',
  'dap':       'DAP ఫాస్పరస్ అందిస్తుంది, ఇది బలమైన వేర్లు అభివృద్ధి చేస్తుంది.',
  'npk':       'NPK సమతుల్య ఎరువు — నైట్రోజన్, ఫాస్పరస్, పొటాషియం అందిస్తుంది.',
  'potash':    'పొటాష్ కాండాలను బలపరుస్తుంది మరియు పంటను కరువు నుండి రక్షిస్తుంది.',
  'ssp':       'SSP ఫాస్పరస్ మరియు సల్ఫర్ అందిస్తుంది. శనగలకు అనువైనది.',
  'zinc':      'జింక్ సల్ఫేట్ నేలలో జింక్ లోపాన్ని సరిచేస్తుంది. మొక్కజొన్నకు ముఖ్యం.',
  'calcium':   'కాల్షియం నైట్రేట్ పండ్ల కణ గోడలను బలపరుస్తుంది. ద్రాక్షకు అవసరం.',
  'magnesium': 'మెగ్నీషియం క్లోరోఫిల్ కేంద్రం. అరటికి ఆరోగ్యకరమైన ఆకుల కోసం అవసరం.',
  'default':   'ఈ సమతుల్య ఎరువు మూడు ప్రధాన పోషకాలు అందిస్తుంది — నైట్రోజన్, ఫాస్పరస్, పొటాషియం.'
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
        const prevEl = document.getElementById(prev);
        if (prevEl) { prevEl.classList.remove('hidden'); prevEl.classList.add('active'); }
    }
}

// ═══════════════════════════════════════════════════════════════
// 4. LANGUAGE — FIX: re-translates confidence + fertilizer too
// ═══════════════════════════════════════════════════════════════
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    const dict = T[lang] || T.en;

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (!dict[key]) return;
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = dict[key];
        } else {
            el.textContent = dict[key];
        }
    });

    document.querySelectorAll('[data-key-ph]').forEach(el => {
        const key = el.getAttribute('data-key-ph');
        if (dict[key]) el.placeholder = dict[key];
    });

    const brandEl = document.querySelector('.nav-brand');
    if (brandEl && dict.appName) brandEl.textContent = dict.appName;
    document.title = dict.welcomeTitle || 'AI Crop Prediction';

    // Translate crop result if visible
    const rc = document.getElementById('resultCrop');
    if (rc && rc.getAttribute('data-raw')) {
        const raw = rc.getAttribute('data-raw');
        const ck = `crop_${raw.toLowerCase().replace(/\s+/g,'')}`;
        if (dict[ck]) rc.textContent = dict[ck];
    }

    // Translate season dropdowns
    ['fbSeason','inputSeason'].forEach(id => {
        const sel = document.getElementById(id);
        if (!sel) return;
        sel.querySelectorAll('option').forEach(opt => {
            const v = opt.value;
            if (!v) { opt.textContent = dict.selectSeason || 'Select season'; return; }
            if (v.startsWith('Kharif')) opt.textContent = dict.kharif || v;
            else if (v.startsWith('Rabi')) opt.textContent = dict.rabi || v;
            else if (v.startsWith('Zaid')) opt.textContent = dict.zaid || v;
        });
    });

    const seasonInputLbl = document.getElementById('seasonInputLabel');
    if (seasonInputLbl && dict.seasonInputLabel) seasonInputLbl.textContent = dict.seasonInputLabel;

    // Translate impact factors
    const factList = document.getElementById('factorsList');
    if (factList && factList.children.length > 0) {
        Array.from(factList.children).forEach(li => {
            const engName = li.getAttribute('data-en');
            const val     = li.getAttribute('data-val');
            if (engName && val) {
                const tkey = 'factor_' + engName.replace(/\s+/g,'');
                li.textContent = `${dict[tkey] || engName}: ${val}%`;
            }
        });
    }

    // ── FIX 1: Re-translate confidence explanation ──
    const confExp = document.getElementById('confidenceExplain');
    if (confExp) {
        const confKey = confExp.getAttribute('data-conf-key');
        if (confKey && dict[confKey]) confExp.textContent = dict[confKey];
    }

    // ── FIX 2: Re-translate fertilizer explanation ──
    const fertNameEl = document.getElementById('fertilizerName');
    const fertExpEl  = document.getElementById('fertilizerExplanation');
    if (fertNameEl && fertExpEl) {
        const rawFert = fertNameEl.getAttribute('data-fert-raw');
        if (rawFert) {
            const newExp = getFertExplanation(rawFert, lang);
            currentFertilizerText = newExp;
            fertExpEl.textContent = newExp;
        }
    }
}

function selectLiteracy(type) {
    if (type === 'literate') showScreen('farmerLoginScreen');
    else                      showScreen('officerLoginScreen');
}

// ═══════════════════════════════════════════════════════════════
// 5. TEXT-TO-SPEECH
// ═══════════════════════════════════════════════════════════════
function getLang() { return currentLang; }

function speak(text, lang) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang === 'te' ? 'te-IN' : lang === 'hi' ? 'hi-IN' : 'en-IN';
    utter.rate = 0.92;
    window.speechSynthesis.speak(utter);
}

function speakField(inputId) {
    const el = document.getElementById(inputId);
    if (!el) return;
    const val = (el.value || '').trim();
    if (!val) { speak('Empty field', getLang()); return; }
    speak(val, getLang());
}

function speakRadio(radioName) {
    const checked = document.querySelector(`input[name="${radioName}"]:checked`);
    if (!checked) return;
    const label = checked.closest('label')?.textContent?.trim() || checked.value;
    speak(label, getLang());
}

function readLiteracyOptions() {
    const dict = T[currentLang] || T.en;
    speak(`${dict.literateTitle}: ${dict.literateDesc}. ${dict.illiterateTitle}: ${dict.illiterateDesc}.`, currentLang);
}

function speakAllResults() {
    const crop    = document.getElementById('resultCrop')?.textContent || '';
    const conf    = document.getElementById('confidenceText')?.textContent || '';
    const confExp = document.getElementById('confidenceExplain')?.textContent || '';
    const weather = document.getElementById('weatherInfo')?.textContent || '';
    const fert    = document.getElementById('fertilizerName')?.textContent || '';
    const fertExp = currentFertilizerText || '';
    const full = currentLang === 'te'
        ? `సిఫార్సు చేసిన పంట: ${crop}. నమ్మకం: ${conf}. ${confExp} వాతావరణం: ${weather}. ఎరువు: ${fert}. ${fertExp}`
        : currentLang === 'hi'
        ? `अनुशंसित फसल: ${crop}. विश्वास: ${conf}. ${confExp} मौसम: ${weather}. उर्वरक: ${fert}. ${fertExp}`
        : `Recommended crop: ${crop}. Confidence: ${conf}. ${confExp} Weather: ${weather}. Fertilizer: ${fert}. ${fertExp}`;
    speak(full, currentLang);
}

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
        if (el) el.value = (el.tagName === 'TEXTAREA' && el.value) ? el.value + ' ' + t : t;
        setTimeout(() => speakField(inputId), 300);
    };
    rec.onend = () => { if (mic) { mic.textContent = '🎤'; mic.disabled = false; } };
    rec.onerror = () => { if (mic) { mic.textContent = '🎤'; mic.disabled = false; } };
}

function startVoiceRadio(radioName, options) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { alert('Voice not supported — use Chrome.'); return; }
    const dict = T[currentLang] || T.en;
    const rec  = new SR();
    rec.lang   = currentLang === 'te' ? 'te-IN' : currentLang === 'hi' ? 'hi-IN' : 'en-IN';
    rec.interimResults = false;
    const hints = options.map(o => dict[o] || o).join(', ');
    speak(`Please say one of: ${hints}`, currentLang);
    setTimeout(() => {
        rec.start();
        rec.onresult = e => {
            const said = e.results[0][0].transcript.toLowerCase();
            let matched = null;
            for (const opt of options) {
                const keywords = dict[`voice_${opt}`] || [opt];
                if (keywords.some(kw => said.includes(kw.toLowerCase()))) { matched = opt; break; }
            }
            if (matched) {
                const radio = document.querySelector(`input[name="${radioName}"][value="${matched}"]`);
                if (radio) {
                    radio.checked = true;
                    speakRadio(radioName);
                    // Trigger harvest detail if needed
                    if (radioName === 'last_harvest' && typeof onHarvestChange === 'function') {
                        onHarvestChange(radio);
                    }
                }
            } else {
                speak(`Sorry, I heard "${said}". Please try again.`, currentLang);
            }
        };
        rec.onerror = () => {};
    }, 1500);
}

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
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('user', JSON.stringify(user));
    currentUserToken = token; currentUserRole = role; currentUser = user;
}
function logout() { localStorage.clear(); location.reload(); }

// ═══════════════════════════════════════════════════════════════
// 8. FARMER AUTH
// ═══════════════════════════════════════════════════════════════
async function farmerRegister() {
    const name   = document.getElementById('regName').value.trim();
    const aadhar = document.getElementById('regAadhar').value.trim();
    const pwd    = document.getElementById('regPassword').value;
    const conf   = document.getElementById('regConfirm').value;
    if (!name||!aadhar||!pwd)   { alert('Please fill all fields'); return; }
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
    const aadhar = document.getElementById('loginAadhar').value.trim();
    const pwd    = document.getElementById('loginPassword').value;
    if (!aadhar||!pwd) { alert('Enter Aadhaar and password'); return; }
    try {
        const r = await fetch('/api/auth/farmer-login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({aadhar,password:pwd})});
        const d = await r.json();
        if (d.success) { saveSession(d.token,'literate_farmer',d.user); selectedFarmerId=d.user.farmer_id; showScreen('farmerInputScreen'); }
        else alert('❌ '+d.error);
    } catch(e) { alert('❌ Connection error'); }
}

async function resetPassword() {
    const aadhar = document.getElementById('forgotAadhar').value.trim();
    const np = document.getElementById('forgotNew').value;
    const cp = document.getElementById('forgotConfirm').value;
    if (!aadhar||!np) { alert('Fill all fields'); return; }
    if (np !== cp)    { alert('Passwords do not match'); return; }
    try {
        const r = await fetch('/api/auth/farmer-forgot-password',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({aadhar,new_password:np,confirm_password:cp})});
        const d = await r.json();
        if (d.success) { alert('✅ '+d.message); showScreen('farmerLoginScreen'); }
        else alert('❌ '+d.error);
    } catch(e) { alert('❌ Connection error'); }
}

// ═══════════════════════════════════════════════════════════════
// 9. OFFICER AUTH
// ═══════════════════════════════════════════════════════════════
async function officerLogin() {
    const email = document.getElementById('officerEmail').value.trim();
    const pwd   = document.getElementById('officerPassword').value;
    try {
        const r = await fetch('/api/auth/officer-login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password:pwd})});
        const d = await r.json();
        if (d.success) { saveSession(d.token,'officer',d.user); loadOfficerDashboard(); }
        else alert('❌ '+d.error);
    } catch(e) { alert('❌ Connection error'); }
}

async function officerRegister() {
    const name  = document.getElementById('offRegName').value.trim();
    const email = document.getElementById('offRegEmail').value.trim();
    const pwd   = document.getElementById('offRegPassword').value;
    const code  = document.getElementById('offRegCode').value.trim();
    if (!name||!email||!pwd||!code) { alert('Fill all fields'); return; }
    try {
        const r = await fetch('/api/auth/officer-register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,email,password:pwd,officer_code:code})});
        const d = await r.json();
        if (d.success) { saveSession(d.token,'officer',d.user); alert(`✅ Welcome, ${d.user.name}!`); loadOfficerDashboard(); }
        else alert('❌ '+d.error);
    } catch(e) { alert('❌ Connection error'); }
}

// ═══════════════════════════════════════════════════════════════
// 10. OFFICER DASHBOARD
// ═══════════════════════════════════════════════════════════════
async function loadOfficerDashboard() { showScreen('officerDashboard'); await loadFarmers(); }

async function addFarmer() {
    const name   = document.getElementById('farmerName').value.trim();
    const aadhar = document.getElementById('farmerAadhar').value.trim();
    const phone  = document.getElementById('farmerPhone').value.trim();
    if (!name||!aadhar) { alert('Name and Aadhaar required'); return; }
    try {
        const r = await fetch('/api/officer/add-farmer',{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${currentUserToken}`},body:JSON.stringify({name,aadhar,phone})});
        const d = await r.json();
        if (d.success) { alert(`✅ ${name} added!`); ['farmerName','farmerAadhar','farmerPhone'].forEach(id=>document.getElementById(id).value=''); loadFarmers(); }
        else alert('❌ '+d.error);
    } catch(e) { alert('❌ Connection error'); }
}

async function loadFarmers() {
    try {
        const r = await fetch('/api/officer/farmers',{headers:{'Authorization':`Bearer ${currentUserToken}`}});
        const d = await r.json();
        const list = document.getElementById('farmersList');
        if (!d.farmers?.length) { list.innerHTML='<p style="color:#999;text-align:center;">No farmers yet.</p>'; return; }
        list.innerHTML='';
        d.farmers.forEach(f => {
            const div = document.createElement('div');
            div.className = 'farmer-item';
            div.innerHTML = `<p><strong>👤 ${f.name}</strong></p><p>📞 ${f.phone||'N/A'}</p><p style="font-size:0.8em;color:#888;">Recs: ${f.recommendations_count}</p><button onclick="startForFarmer(${f.id},'${f.name}')" class="btn btn-primary" style="width:100%;margin-top:8px">🌱 Get Recommendation</button>`;
            list.appendChild(div);
        });
    } catch(e) { console.error(e); }
}

function startForFarmer(id, name) { selectedFarmerId=id; showScreen('farmerInputScreen'); }

// ═══════════════════════════════════════════════════════════════
// 11. LOADING OVERLAY
// ═══════════════════════════════════════════════════════════════
function showLoading(msg) {
    const overlay = document.getElementById('loadingOverlay');
    const msgEl   = document.getElementById('loadingMsg');
    if (overlay) overlay.classList.remove('hidden');
    if (msgEl)   msgEl.textContent = msg || ((T[currentLang]||T.en).predictBtn || 'Predicting...');
}
function hideLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) overlay.classList.add('hidden');
}

// ═══════════════════════════════════════════════════════════════
// 12. PREDICTION — FIX: full validation before API call
// ═══════════════════════════════════════════════════════════════
async function getPrediction() {
    const token = localStorage.getItem('token');
    if (!token) { alert('Session expired. Please login.'); showScreen('welcomeScreen'); return; }

    const dict = T[currentLang] || T.en;

    // ── VALIDATE all inputs ──
    const soilCond = document.querySelector('input[name="soil_condition"]:checked');
    const soilFert = document.querySelector('input[name="soil_fertility"]:checked');
    const lastHarv = document.querySelector('input[name="last_harvest"]:checked');
    const harvestCrop = document.getElementById('harvestCropName')?.value.trim() || '';
    const city     = document.getElementById('cityInput').value.trim();

    if (!soilCond) {
        alert(currentLang==='hi' ? '⚠ कृपया मिट्टी का प्रकार चुनें' :
              currentLang==='te' ? '⚠ దయచేసి నేల రకాన్ని ఎంచుకోండి' :
              '⚠ Please select a Soil Type');
        return;
    }
    if (!soilFert) {
        alert(currentLang==='hi' ? '⚠ कृपया मिट्टी की उर्वरता चुनें' :
              currentLang==='te' ? '⚠ దయచేసి నేల సారాన్ని ఎంచుకోండి' :
              '⚠ Please select Soil Fertility');
        return;
    }
    if (!lastHarv) {
        alert(currentLang==='hi' ? '⚠ कृपया पिछली फसल की गुणवत्ता चुनें' :
              currentLang==='te' ? '⚠ దయచేసి గత పంట నాణ్యతను ఎంచుకోండి' :
              '⚠ Please select Last Harvest Quality');
        return;
    }
    if (!harvestCrop) {
        alert(currentLang==='hi' ? '⚠ कृपया पिछली फसल का नाम दर्ज करें' :
              currentLang==='te' ? '⚠ దయచేసి గత పంట పేరు నమోదు చేయండి' :
              '⚠ Please enter your last harvest crop name');
        return;
    }
    if (!city) {
        alert(currentLang==='hi' ? '⚠ कृपया अपना शहर / गाँव दर्ज करें' :
              currentLang==='te' ? '⚠ దయచేసి మీ నగరం / గ్రామం నమోదు చేయండి' :
              '⚠ Please enter your City / Village');
        return;
    }

    showLoading();
    const btn = document.querySelector('[data-key="predictBtn"]');
    if (btn) btn.disabled = true;

    try {
        const r = await fetch('/api/predict', {
            method: 'POST',
            headers: {'Content-Type':'application/json','Authorization':`Bearer ${token}`},
            body: JSON.stringify({
                soil_condition:      soilCond.value,
                soil_fertility:      soilFert.value,
                last_harvest_status: lastHarv.value,
                last_harvest_crop:   harvestCrop,
                city:                city,
                water_level:         2,
                farmer_id:           selectedFarmerId,
                season:              document.getElementById('inputSeason')?.value || ''
            })
        });
        const d = await r.json();
        if (d.success) {
            lastCropResult = d.crop;
            displayResults(d, harvestCrop, lastHarv.value);
        } else if (r.status === 401) {
            alert('Session expired. Please login again.');
            localStorage.clear();
            location.reload();
        } else {
            alert('❌ ' + d.error);
        }
    } catch(e) {
        alert('❌ Error: ' + e);
    } finally {
        hideLoading();
        if (btn) { btn.textContent = (T[currentLang]||T.en).predictBtn || '🌱 Predict Best Crop'; btn.disabled = false; }
    }
}

// ═══════════════════════════════════════════════════════════════
// 13. CROP IMAGES
// ═══════════════════════════════════════════════════════════════
const CROP_IMAGES = {
  'rice':        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/White_rice.jpg/320px-White_rice.jpg',
  'maize':       'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Corn_flint.jpg/320px-Corn_flint.jpg',
  'mothbeans':   'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Mung_bean_seeds.jpg/320px-Mung_bean_seeds.jpg',
  'chickpea':    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chickpeas.jpg/320px-Chickpeas.jpg',
  'kidneybeans': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Kidney_beans.jpg/320px-Kidney_beans.jpg',
  'pigeonpeas':  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Cajanus_cajan_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-175.jpg/320px-Cajanus_cajan_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-175.jpg',
  'mungbean':    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Mung_bean_seeds.jpg/320px-Mung_bean_seeds.jpg',
  'blackgram':   'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Urad_beans.jpg/320px-Urad_beans.jpg',
  'lentil':      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Lentil_soup.jpg/320px-Lentil_soup.jpg',
  'pomegranate': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Pomegranate_fruit_-_whole.jpg/320px-Pomegranate_fruit_-_whole.jpg',
  'banana':      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Banana_Fruit_800x533.jpg/320px-Banana-Banana_Fruit_800x533.jpg',
  'mango':       'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/320px-Hapus_Mango.jpg',
  'grapes':      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Kyoho-grape.jpg/320px-Kyoho-grape.jpg',
  'watermelon':  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Single_watermelon.jpg/320px-Single_watermelon.jpg',
  'muskmelon':   'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/CSIRO_ScienceImage_9785.jpg/320px-CSIRO_ScienceImage_9785.jpg',
  'apple':       'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/320px-Red_Apple.jpg',
  'orange':      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Oranges_and_orange_juice.jpg/320px-Oranges_and_orange_juice.jpg',
  'papaya':      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Papaya-Ripe.jpg/320px-Papaya-Ripe.jpg',
  'coconut':     'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Coconut_on_white.jpg/320px-Coconut_on_white.jpg',
  'cotton':      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Cotton_flowers_and_bolls.jpg/320px-Cotton_flowers_and_bolls.jpg',
  'jute':        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Jute_Crop_in_West_Bengal.jpg/320px-Jute_Crop_in_West_Bengal.jpg',
  'coffee':      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/320px-A_small_cup_of_coffee.JPG',
};

// ═══════════════════════════════════════════════════════════════
// 14. DISPLAY RESULTS — FIX: stores data-conf-key + data-fert-raw
// ═══════════════════════════════════════════════════════════════
function displayResults(data, harvestCropName, harvestStatus) {
    const lang = currentLang;
    const dict = T[lang] || T.en;

    // Crop name
    const cropEl = document.getElementById('resultCrop');
    cropEl.textContent = data.crop;
    cropEl.setAttribute('data-raw', data.crop);
    const ck = `crop_${data.crop.toLowerCase().replace(/\s+/g,'')}`;
    if (dict[ck]) cropEl.textContent = dict[ck];

    document.getElementById('resultEmoji').textContent = data.emoji || '🌾';

    // Crop image
    const imgEl = document.getElementById('resultCropImage');
    if (imgEl) {
        const imgUrl = CROP_IMAGES[data.crop.toLowerCase().replace(/\s+/g,'')] || '';
        if (imgUrl) {
            imgEl.src = imgUrl; imgEl.alt = data.crop; imgEl.style.display = 'block';
            imgEl.onerror = () => { imgEl.style.display='none'; };
        } else {
            imgEl.style.display = 'none';
        }
    }

    // Confidence bar
    const bar = document.getElementById('confidenceBar');
    const txt = document.getElementById('confidenceText');
    if (bar) bar.style.width = `${data.confidence}%`;
    if (txt) txt.textContent = `${data.confidence}%`;

    // ── FIX: store data-conf-key for re-translation ──
    const confExp = document.getElementById('confidenceExplain');
    if (confExp) {
        const confKey = data.confidence >= 85 ? 'confHigh' :
                        data.confidence >= 65 ? 'confMed'  : 'confLow';
        confExp.setAttribute('data-conf-key', confKey);
        confExp.textContent = dict[confKey] || '';
    }

    // ── FIX: store data-fert-raw for re-translation ──
    const fertNameEl = document.getElementById('fertilizerName');
    fertNameEl.textContent = data.fertilizer.name;
    fertNameEl.setAttribute('data-fert-raw', data.fertilizer.name);

    const fertExp = getFertExplanation(data.fertilizer.name, lang);
    currentFertilizerText = fertExp;
    const expEl = document.getElementById('fertilizerExplanation');
    if (expEl) expEl.textContent = fertExp;

    // Weather
    const w = data.weather;
    document.getElementById('weatherInfo').textContent = `🌡 ${w.temperature}°C  💧 ${w.humidity}%  📍 ${w.city}`;

    // Impact Factors
    const fl = document.getElementById('factorsList');
    if (fl && data.explanation) {
        fl.innerHTML = '';
        data.explanation.forEach(([f, s]) => {
            const li = document.createElement('li');
            const tkey = 'factor_' + f.replace(/\s+/g,'');
            li.textContent = `${dict[tkey]||f}: ${s}%`;
            li.setAttribute('data-en', f);
            li.setAttribute('data-val', String(s));
            fl.appendChild(li);
        });
    }

    // ── Harvest context box ──
    const hBox = document.getElementById('harvestContextBox');
    const hTxt = document.getElementById('harvestContextText');
    if (hBox && hTxt && harvestCropName) {
        const msg = harvestStatus === 'poor'
            ? (currentLang==='hi'
                ? ` आपकी पिछली "${harvestCropName}" फसल खराब थी। हमने मिट्टी सुधार को ध्यान में रखकर यह फसल सुझाई है।`
                : currentLang==='te'
                ? ` మీ గత "${harvestCropName}" పంట తక్కువగా ఉంది. నేల మెరుగుదలను దృష్టిలో పెట్టుకుని ఈ పంటను సిఫార్సు చేశాము.`
                : ` Your last "${harvestCropName}" harvest was poor. We've recommended this crop considering soil recovery.`)
            : (currentLang==='hi'
                ? ` आपकी पिछली "${harvestCropName}" फसल अच्छी थी। यह अगली फसल उसी श्रृंखला में सर्वोत्तम है।`
                : currentLang==='te'
                ? ` మీ గత "${harvestCropName}" పంట మంచిది. ఇది అదే క్రమంలో ఉత్తమ తదుపరి పంట.`
                : ` Your last "${harvestCropName}" harvest was good. This is the best follow-up crop for your land.`);
        hTxt.textContent = msg;
        hBox.style.display = 'block';
    } else if (hBox) {
        hBox.style.display = 'none';
    }

    showScreen('resultsScreen');
}

// ═══════════════════════════════════════════════════════════════
// 15. FEEDBACK
// ═══════════════════════════════════════════════════════════════
function setRating(v) {
    selectedRating = v;
    document.getElementById('fbRating').value = v;
    document.querySelectorAll('.star').forEach(s => s.classList.toggle('active', parseInt(s.dataset.val) <= v));
}

function showFeedbackForm() {
    const el = document.getElementById('fbCrop');
    if (el && lastCropResult) el.value = lastCropResult;
    const inputSeason = document.getElementById('inputSeason')?.value || '';
    const fbSeasonEl  = document.getElementById('fbSeason');
    if (fbSeasonEl && inputSeason) fbSeasonEl.value = inputSeason;
    selectedRating = 0;
    document.querySelectorAll('.star').forEach(s => s.classList.remove('active'));
    showScreen('feedbackFormScreen');
}

async function submitFeedback() {
    const token = localStorage.getItem('token');
    if (!token) { alert('Please login to submit a review'); showScreen('farmerLoginScreen'); return; }
    const crop     = document.getElementById('fbCrop').value.trim();
    const rating   = parseInt(document.getElementById('fbRating').value);
    const comment  = document.getElementById('fbComment').value.trim();
    const location = document.getElementById('fbLocation').value.trim();
    const season   = document.getElementById('fbSeason').value;
    if (!crop)   { alert('Please enter the crop name'); return; }
    if (!rating) { alert('Please select a star rating'); return; }
    if (!comment){ alert('Please write your experience'); return; }
    try {
        const r = await fetch('/api/feedback',{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${token}`},body:JSON.stringify({crop,rating,comment,location,season})});
        const d = await r.json();
        if (d.success) {
            alert('🙏 '+d.message);
            ['fbCrop','fbComment','fbLocation'].forEach(id => document.getElementById(id).value='');
            document.getElementById('fbSeason').value='';
            setRating(0);
            showScreen('feedbackScreen'); loadFeedback();
        } else alert('❌ '+d.error);
    } catch(e) { alert('❌ Connection error'); }
}

async function loadFeedback(page=1) {
    const crop = document.getElementById('cropFilter')?.value || '';
    try {
        if (page===1) {
            const cr = await fetch('/api/feedback/crops');
            const cd = await cr.json();
            const sel = document.getElementById('cropFilter');
            if (sel && cd.crops) {
                const cur = sel.value;
                sel.innerHTML = `<option value="">${(T[currentLang]||T.en).allCrops||'All Crops'}</option>`;
                cd.crops.forEach(c => {
                    const o = document.createElement('option');
                    o.value = c; o.textContent = c;
                    if (c===cur) o.selected = true;
                    sel.appendChild(o);
                });
            }
        }
        const r = await fetch(`/api/feedback?crop=${encodeURIComponent(crop)}&page=${page}`);
        const d = await r.json();

        const statsEl = document.getElementById('feedbackStats');
        if (statsEl) {
            if (d.total_reviews > 0) {
                const filled = '★'.repeat(Math.round(d.avg_rating));
                const empty  = '☆'.repeat(5-Math.round(d.avg_rating));
                statsEl.innerHTML = `<div class="feedback-summary">
                    <div class="summary-score"><span class="big-rating">${d.avg_rating}</span><span class="stars-display">${filled}${empty}</span><span style="color:#666;font-size:0.82em;">${d.total_reviews} reviews</span></div>
                    <div class="rating-bars">${[5,4,3,2,1].map(s=>{const c=d.rating_dist?.[s]||0,p=d.total_reviews?Math.round(c/d.total_reviews*100):0;return`<div class="rating-bar-row"><span class="rb-label">${s}★</span><div class="rb-track"><div class="rb-fill" style="width:${p}%"></div></div><span class="rb-count">${c}</span></div>`;}).join('')}</div>
                </div>`;
            } else {
                statsEl.innerHTML = '<p style="color:#999;text-align:center;padding:12px;">No reviews yet. Be the first!</p>';
            }
        }

        const listEl = document.getElementById('feedbackList');
        if (!d.feedbacks?.length) {
            listEl.innerHTML = '<p style="color:#999;text-align:center;padding:20px;">No reviews found.</p>';
            document.getElementById('feedbackPagination').innerHTML = '';
            return;
        }
        listEl.innerHTML = d.feedbacks.map(fb => `
            <div class="review-card">
                <div class="review-header">
                    <div><span class="reviewer-name">👤 ${fb.farmer_name}</span>${fb.location?`<span class="reviewer-loc">📍 ${fb.location}</span>`:''}</div>
                    <div><span class="review-stars">${'★'.repeat(fb.rating)}${'☆'.repeat(5-fb.rating)}</span><span class="review-date">${fb.created_at}</span></div>
                </div>
                <div class="review-crop">🌾 ${fb.crop}${fb.season?` · ${fb.season}`:''}</div>
                <p class="review-comment">"${fb.comment}"</p>
                <button class="btn-speak small-speak" onclick="speak('${fb.comment.replace(/'/g,"\\'")}','${currentLang}')" title="Read review">🔊</button>
            </div>`).join('');

        const total = Math.ceil(d.total/10);
        const pag   = document.getElementById('feedbackPagination');
        if (pag && total > 1) {
            pag.innerHTML = `${page>1?`<button onclick="loadFeedback(${page-1})" class="btn btn-secondary" style="margin:0 5px">← Prev</button>`:''}
                <span style="margin:0 10px;color:#666;">Page ${page} / ${total}</span>
                ${page<total?`<button onclick="loadFeedback(${page+1})" class="btn btn-primary" style="margin:0 5px">Next →</button>`:''}`;
        } else if (pag) pag.innerHTML = '';
    } catch(e) {
        console.error(e);
        document.getElementById('feedbackList').innerHTML = '<p style="color:#c00;">Failed to load reviews.</p>';
    }
}

// ═══════════════════════════════════════════════════════════════
// 16. TRANSLATION (review comments)
// ═══════════════════════════════════════════════════════════════
async function translateReview(idx, originalText, btn) {
    const commentEl = document.getElementById(`review-comment-${idx}`);
    if (!commentEl) return;
    if (btn.getAttribute('data-translated') === '1') {
        commentEl.innerHTML = `"${commentEl.getAttribute('data-original')}"`;
        btn.setAttribute('data-translated','0');
        btn.textContent = (T[currentLang]||T.en).translateBtn || '🌐 Translate';
        return;
    }
    btn.textContent = '⏳';
    const targetLang = currentLang === 'hi' ? 'hi' : currentLang === 'te' ? 'te' : 'en';
    try {
        const url  = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(originalText)}&langpair=en|${targetLang}`;
        const resp = await fetch(url);
        const data = await resp.json();
        const translated = data.responseData?.translatedText || originalText;
        commentEl.innerHTML = `"${translated}"`;
        btn.setAttribute('data-translated','1');
        btn.textContent = (T[currentLang]||T.en).translateClose || '✕ Original';
    } catch(e) {
        btn.textContent = '❌';
        setTimeout(() => { btn.textContent = (T[currentLang]||T.en).translateBtn || '🌐 Translate'; }, 1500);
    }
}

// ═══════════════════════════════════════════════════════════════
// 17. PWA INSTALL
// ═══════════════════════════════════════════════════════════════
function triggerInstall() {
    if (window._deferredInstall) {
        window._deferredInstall.prompt();
        window._deferredInstall.userChoice.then(result => {
            if (result.outcome === 'accepted') {
                ['installAppBtn','installAppBtn2'].forEach(id => {
                    const btn = document.getElementById(id);
                    if (btn) btn.style.display = 'none';
                });
            }
            window._deferredInstall = null;
        });
    } else {
        alert('📲 To install:\n\nAndroid: Tap menu (⋮) in Chrome → "Add to Home screen"\niOS Safari: Tap Share (⬆) → "Add to Home Screen"');
    }
}

// ═══════════════════════════════════════════════════════════════
// 18. INIT
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('preferredLanguage') || 'en';
    const sel  = document.getElementById('languageSelect');
    if (sel) sel.value = lang;
    changeLanguage(lang);
    setTimeout(() => changeLanguage(lang), 100);

    if (currentUserToken && currentUserRole) {
        if (currentUserRole === 'officer') loadOfficerDashboard();
        else showScreen('farmerInputScreen');
    } else {
        showScreen('welcomeScreen');
    }

    // PWA install prompt
    window.addEventListener('beforeinstallprompt', e => {
        e.preventDefault();
        window._deferredInstall = e;
        ['installAppBtn','installAppBtn2'].forEach(id => {
            const btn = document.getElementById(id);
            if (btn) btn.style.display = 'inline-flex';
        });
    });

    window.addEventListener('appinstalled', () => {
        ['installAppBtn','installAppBtn2'].forEach(id => {
            const btn = document.getElementById(id);
            if (btn) btn.style.display = 'none';
        });
    });

    // Keep-alive ping every 10 minutes (prevents Render spin-down)
    setInterval(() => { fetch('/ping').catch(() => {}); }, 10 * 60 * 1000);
});