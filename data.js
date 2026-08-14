// =========================================================================
// Madadgar — Multilingual Citizen Services Detailed Dataset
// Comprehensive, step-by-step procedural guides for Pakistan
// =========================================================================

const ICONS = {
  idCard: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><line x1="15" y1="8" x2="17" y2="8"/><line x1="15" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="17" y2="16"/></svg>`,
  passport: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M12 13v4"/><path d="M8 21h8"/></svg>`,
  license: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="8" x2="7.01" y2="8"/><line x1="11" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="13" y2="16"/></svg>`,
  certificate: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  tax: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  child: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/></svg>`,
  police: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
  power: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  check: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  externalLink: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  info: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`
};

const UI_STRINGS = {
  en: {
    govBanner: "Government of Pakistan • Citizen Information Portal",
    brandTitle: "Madadgar",
    brandSub: "Citizen Services Guide",
    navServices: "Services",
    navRights: "Citizen Rights",
    navHelplines: "Helplines",
    heroHeading: "Pakistan Citizen Services Guide",
    heroLead: "Step-by-step requirements, official fees, and document checklists for NADRA, Passports, Licenses, and Utilities.",
    searchPlaceholder: "Search services (e.g. CNIC Renewal, New Passport, Driving License, Tax Filer, Form-B)...",
    shortcutLabel: "Popular Shortcuts:",
    allServices: "All Services",
    catIdentity: "Identity (NADRA)",
    catTravel: "Passport & Travel",
    catTransport: "Driving License",
    catFinance: "FBR Tax Filer",
    catUtilities: "Electricity & Gas",
    dirTitle: "Available Government Services",
    dirDesc: "Select any service below to view required documents, exact fees, and detailed step-by-step procedure.",
    showingResults: "Showing {count} of {total} services",
    viewGuideBtn: "View Step-by-Step Guide →",
    noResultsTitle: "No Services Found",
    noResultsDesc: "Try searching with a simpler keyword like 'CNIC', 'Passport', or 'License'.",
    resetFilter: "Show All Services",
    specDocs: "Required Docs",
    specTime: "Processing Time",
    specFee: "Official Fee",
    guidelinesTitle: "Citizen Protection & Counter-Fraud Advisory",
    guidelinesSub: "Important official rules to keep your money and identity safe",
    guide1Title: "Never Pay Outside Agents",
    guide1Desc: "All fees must be deposited directly at bank counters, NADRA e-Sahulat, or through official 1Link/e-Pay digital channels. Agents standing outside have no legal authority.",
    guide2Title: "Keep Original Documents Safe",
    guide2Desc: "Government officers only inspect original documents at the counter for immediate visual verification. Never leave original cards with anyone.",
    guide3Title: "Always Take Computerized Receipts",
    guide3Desc: "Every valid token, fee deposit, or application provides an official printed tracking receipt. Always verify the tracking number.",
    helplinesTitle: "Verified Department Helplines",
    helplinesDesc: "Official phone numbers for queries and complaints.",
    tabDocs: "1. Prepare Documents",
    tabProcess: "2. Step-by-Step Procedure",
    tabFees: "3. Fees & Office Timings",
    printBtn: "Print Checklist",
    reqDocsTitle: "Mandatory Documents Checklist",
    reqDocsSub: "Tick items as you arrange them (Click to mark done)",
    optDocsTitle: "Additional / Conditional Documents",
    requiredBadge: "Required",
    conditionalBadge: "Conditional",
    feeTableType: "Category / Urgency Tier",
    feeTableFee: "Official Prescribed Fee",
    hoursLabel: "Office Timings",
    portalLabel: "Official Website",
    helplineLabel: "Official Helpline",
    advisoryTitle: "Important Advice for Applicants",
    progressTitle: "Document Readiness Checklist",
    progressStatus: "{count} of {total} mandatory documents ready ({percent}%)",
    footerText: "Madadgar is a public utility resource dedicated to making citizen services transparent, accessible, and easy for every Pakistani.",
    copyright: "© 2026 Madadgar • Free & Open Public Resource for Pakistan",
    tooltips: {
      theme: "Switch between Light and Dark mode",
      lang: "Select language: English, Roman Urdu, or Urdu",
      search: "Type service name, document, or authority to filter in real-time",
      clearSearch: "Clear search query",
      print: "Print a clean checklist on A4 paper for your office visit",
      closeModal: "Close this window (Esc)",
      cardAction: "Click to see step-by-step checklist, fees, and procedures"
    }
  },
  "ur-ro": {
    govBanner: "Hukumat-e-Pakistan • Awami Rehnumai Portal",
    brandTitle: "Madadgar",
    brandSub: "Sarkari Kaam Asaan Guide",
    navServices: "Services",
    navRights: "Shehri Haqooq",
    navHelplines: "Helplines",
    heroHeading: "Pakistan Citizen Services Guide",
    heroLead: "NADRA CNIC, Passport, Driving License aur Bijli Meter ke required documents, official fees aur step-by-step tareeqa.",
    searchPlaceholder: "Talaash karein (maslan CNIC Renewal, Naya Passport, Driving License, Filer, Form-B)...",
    shortcutLabel: "Aham Shortcuts:",
    allServices: "Tamam Services",
    catIdentity: "Shanakht (NADRA)",
    catTravel: "Passport & Safar",
    catTransport: "Driving License",
    catFinance: "Tax & FBR",
    catUtilities: "Bijli & Gas",
    dirTitle: "Dastiyab Sarkari Services",
    dirDesc: "Apni zaroorat ki service select karein aur zaroori documents, official fees aur mukammal process dekhein.",
    showingResults: "{total} mein se {count} services nazar aa rahi hain",
    viewGuideBtn: "Step-by-Step Guide Dekhein →",
    noResultsTitle: "Koi Service Nahi Mili",
    noResultsDesc: "Mukhtalif lafz likh kar talaash karein maslan 'CNIC', 'Passport' ya 'License'.",
    resetFilter: "Tamam Services Dekhein",
    specDocs: "Zaroori Documents",
    specTime: "Waqt",
    specFee: "Sarkari Fee",
    guidelinesTitle: "Shehri Haqooq & Fraud Se Bachne Ki Hidayat",
    guidelinesSub: "Apne paise aur documents mehfooz rakhne ke liye zaroori baatein",
    guide1Title: "Bahar Khare Agent Ko Paise Mat Dein",
    guide1Desc: "Tamam sarkari fees bank counter, official mobile app ya 1Link se pay karein. Bahar khare agenton ke paas koi ikhtiyar nahi hota.",
    guide2Title: "Original Documents Kisi Ko Mat Dein",
    guide2Desc: "Sarkari staff sirf counter par original document dekh kar wapas kar deta hai. Original card kabhi kisi ke paas na chorein.",
    guide3Title: "Printed Receipt Lazmi Lein",
    guide3Desc: "Har fee payment aur application jama karne par computerized slip zaroor lein jis par tracking number ho.",
    helplinesTitle: "Official Department Helplines",
    helplinesDesc: "Maloomat aur shikayat ke liye direct sarkari numbers.",
    tabDocs: "1. Documents Tayyar Karein",
    tabProcess: "2. Step-by-Step Tareeqa",
    tabFees: "3. Sarkari Fees & Auqaat",
    printBtn: "Checklist Print Karein",
    reqDocsTitle: "Lazmi Documents Checklist",
    reqDocsSub: "Tayyari ke sath tick lagate jayein (Click karein)",
    optDocsTitle: "Hasb-e-Zaroorat Documents",
    requiredBadge: "Lazmi",
    conditionalBadge: "Optional",
    feeTableType: "Service Ki Qisam",
    feeTableFee: "Sarkari Fee",
    hoursLabel: "Daftari Auqaat",
    portalLabel: "Official Website",
    helplineLabel: "Helpline Number",
    advisoryTitle: "Aham Mashwaray",
    progressTitle: "Documents Tayyari Progress",
    progressStatus: "{total} mein se {count} lazmi documents ready hain ({percent}%)",
    footerText: "Madadgar Pakistan ke shehriyon ke liye ek aam public utility portal hai taake sarkari kaam baghair agenton ke asaani se hon.",
    copyright: "© 2026 Madadgar • Pakistani Shehriyon Ke Liye",
    tooltips: {
      theme: "Light aur Dark theme badlein",
      lang: "Zubaan muntakhib karein: English, Roman Urdu, ya Urdu",
      search: "Service ya document ka naam likhein",
      clearSearch: "Search saaf karein",
      print: "Checklist ka A4 printout nikaalein",
      closeModal: "Window band karein (Esc)",
      cardAction: "Mukammal guide aur fees dekhne ke liye click karein"
    }
  },
  ur: {
    govBanner: "حکومتِ پاکستان • عوامی رہنمائی پورٹل",
    brandTitle: "مددگار",
    brandSub: "سٹیزن سروسز گائیڈ",
    navServices: "خدمات",
    navRights: "شہری حقوق",
    navHelplines: "ہیلپ لائنز",
    heroHeading: "پاکستان سٹیزن سروسز گائیڈ",
    heroLead: "نادرا شناختی کارڈ، پاسپورٹ، ڈرائیونگ لائسنس، ایف بی آر ٹیکس فائلر اور بجلی کنکشن کے مطلوبہ کاغذات، سرکاری فیس اور مرحلہ وار طریقہ کار۔",
    searchPlaceholder: "تلاش کریں (مثلاً شناختی کارڈ کی تجدید، نیا پاسپورٹ، ڈرائیونگ لائسنس، ٹیکس فائلر، فارم بی)...",
    shortcutLabel: "فوری شارٹ کٹس:",
    allServices: "تمام خدمات",
    catIdentity: "شناخت (نادرا)",
    catTravel: "پاسپورٹ اور سفر",
    catTransport: "ڈرائیونگ لائسنس",
    catFinance: "ٹیکس اور ایف بی آر",
    catUtilities: "بجلی و گیس",
    dirTitle: "دستیاب سرکاری خدمات",
    dirDesc: "مطلوبہ سروس پر کلک کریں اور ضروری کاغذات، سرکاری فیس اور مرحلہ وار تفصیلی طریقہ کار جانیں۔",
    showingResults: "کل {total} میں سے {count} خدمات دستیاب ہیں",
    viewGuideBtn: "مرحلہ وار گائیڈ دیکھیں ←",
    noResultsTitle: "کوئی سروس نہیں ملی",
    noResultsDesc: "مختلف یا آسان الفاظ لکھ کر تلاش کریں مثلاً 'شناختی کارڈ' یا 'پاسپورٹ'۔",
    resetFilter: "تمام خدمات دیکھیں",
    specDocs: "مطلوبہ کاغذات",
    specTime: "تخمینہ وقت",
    specFee: "سرکاری فیس",
    guidelinesTitle: "شہری حقوق اور فراڈ سے بچاؤ کی سرکاری ہدایات",
    guidelinesSub: "اپنی دستاویزات کو محفوظ رکھیں اور غیر ضروری اخراجات سے بچیں",
    guide1Title: "بیرونی ایجنٹوں کو رقم ہرگز نہ دیں",
    guide1Desc: "تمام سرکاری فیس بینک کاؤنٹر، ای سہولت یا ون لنک/موبائل ایپ کے ذریعے براہ راست جمع کروائیں۔",
    guide2Title: "اصل دستاویزات اپنے پاس محفوظ رکھیں",
    guide2Desc: "سرکاری عملہ کاؤنٹر پر صرف تصدیق کے لیے اصل دستاویز دیکھ کر فوری واپس کرتا ہے۔ اصل کاغذات کسی کے پاس نہ چھوڑیں۔",
    guide3Title: "کمپیوٹرائزڈ مشین رسید لازمی لیں",
    guide3Desc: "ہر درخواست اور فیس کی ادائیگی پر سرکاری ٹریکنگ نمبر والی رسید ضرور طلب کریں۔",
    helplinesTitle: "مستند سرکاری ہیلپ لائنز",
    helplinesDesc: "معلومات اور شکایات کے لیے متعلقہ محکموں کے رابطہ نمبر۔",
    tabDocs: "1. مطلوبہ کاغذات کی فہرست",
    tabProcess: "2. مرحلہ وار تفصیلی طریقہ کار",
    tabFees: "3. سرکاری فیس اور دفتری اوقات",
    printBtn: "فہرست پرنٹ کریں",
    reqDocsTitle: "لازمی مطلوبہ دستاویزات",
    reqDocsSub: "تیاری کے ساتھ نشان لگائیں (کلک کریں)",
    optDocsTitle: "اضافی / حسب ضرورت دستاویزات",
    requiredBadge: "لازمی",
    conditionalBadge: "حسبِ ضرورت",
    feeTableType: "سروس کی قسم اور رفتار",
    feeTableFee: "مقررہ سرکاری فیس",
    hoursLabel: "دفتری اوقات",
    portalLabel: "سرکاری پورٹل",
    helplineLabel: "ہیلپ لائن نمبر",
    advisoryTitle: "شہریوں کے لیے اہم مشورے",
    progressTitle: "دستاویزات کی تیاری کی صورتحال",
    progressStatus: "{total} میں سے {count} لازمی کاغذات تیار ہیں ({percent}%)",
    footerText: "مددگار پاکستانی شہریوں کے لیے ایک شفاف اور آسان پبلک سروس معلوماتی پورٹل ہے۔",
    copyright: "© 2026 مددگار • پاکستانی شہریوں کے لیے وقف",
    tooltips: {
      theme: "لائٹ اور ڈارک موڈ تبدیل کریں",
      lang: "زبان منتخب کریں: انگریزی، رومن اردو یا اردو",
      search: "سروس کا نام یا مطلوبہ لفظ تلاش کرنے کے لیے لکھیں",
      clearSearch: "تلاش صاف کریں",
      print: "دفتر جانے سے قبل A4 کاغذ پر فہرست پرنٹ کریں",
      closeModal: "یہ ونڈو بند کریں (Esc)",
      cardAction: "مکمل تفصیلات اور طریقہ کار دیکھنے کے لیے کلک کریں"
    }
  }
};

const SERVICES_DATA = [
  // 1. NADRA CNIC
  {
    id: "nadra-cnic",
    category: "identity",
    iconKey: "idCard",
    authorityBadge: "NADRA",
    specs: {
      docs: { en: "3 to 4 Documents", "ur-ro": "3 se 4 Documents", ur: "3 سے 4 دستاویزات" },
      time: { en: "7 to 15 Days", "ur-ro": "7 se 15 Din", ur: "7 تا 15 دن" },
      fee: { en: "Rs. 750 – 2,500", "ur-ro": "Rs. 750 – 2,500", ur: "750 تا 2,500 روپے" }
    },
    title: {
      en: "Computerized National Identity Card (CNIC / Smart Card)",
      "ur-ro": "National Identity Card (CNIC / Smart Card)",
      ur: "قومی شناختی کارڈ (CNIC / اسمارٹ کارڈ)"
    },
    issuingAuthority: {
      en: "National Database & Registration Authority (NADRA)",
      "ur-ro": "NADRA Registration Center",
      ur: "نادرا (نیشنل ڈیٹا بیس اینڈ رجسٹریشن اتھارٹی)"
    },
    shortDesc: {
      en: "Fresh card registration for 18-year-olds, 10-year renewal, marital status changes, and lost card replacement.",
      "ur-ro": "18 saal par naya CNIC banwana, 10 saal ki renewal, address tabdeeli ya gumshuda card wapas lena.",
      ur: "نیا شناختی کارڈ، 10 سالہ تجدید، پتے یا نام کی تبدیلی اور گمشدہ کارڈ کا دوبارہ حصول۔"
    },
    documents: [
      {
        name: {
          en: "Original Child Registration Certificate (Form-B / CRC)",
          "ur-ro": "Original Form-B (Child Registration Certificate)",
          ur: "اصل چائلڈ رجسٹریشن سرٹیفکیٹ (فارم-بی / CRC)"
        },
        required: true,
        note: {
          en: "Mandatory for first-time applicants turning 18. Both date of birth and father's name must match exactly.",
          "ur-ro": "18 saal ki umar par pehli dafa apply karne walon ke liye. Tareekh-e-paidaish aur walid ka naam match hona chahiye.",
          ur: "18 سال کی عمر میں پہلی بار بنوانے والوں کے لیے۔ تاریخ پیدائش اور والد کا نام بالکل درست ہونا لازمی ہے۔"
        }
      },
      {
        name: {
          en: "Original CNIC of Father, Mother, or Blood Relative (Brother/Sister)",
          "ur-ro": "Walid, Walida ya Kisi Khooni Rishtaydar ka Original CNIC",
          ur: "والد، والدہ یا خونی رشتہ دار (بھائی/بہن) کا اصل قومی شناختی کارڈ"
        },
        required: true,
        note: {
          en: "Required for on-spot biometric attestation at counter. Blood relative must physically accompany applicant.",
          "ur-ro": "Counter par biometric tasdeeq ke liye. Rishtaydar ka sath aana lazmi hai.",
          ur: "کاؤنٹر پر بائیو میٹرک تصدیق کے لیے۔ خونی رشتہ دار کا خود ساتھ موجود ہونا لازمی ہے۔"
        }
      },
      {
        name: {
          en: "Existing/Expired CNIC (if applying for renewal or modification)",
          "ur-ro": "Purana / Expired CNIC Card (Agar renewal hai)",
          ur: "موجودہ یا ایکسپائرڈ شناختی کارڈ (تجدید یا تبدیلی کی صورت میں)"
        },
        required: true,
        note: {
          en: "Original expired card will be inspected and returned after punching.",
          "ur-ro": "Original expired card counter par check hoga.",
          ur: "پرانا اصل کارڈ کاؤنٹر پر چیک کیا جائے گا۔"
        }
      },
      {
        name: {
          en: "Registered Computerized Marriage Certificate (Nikahnama)",
          "ur-ro": "Registered Computerized Nikahnama (Union Council)",
          ur: "یونین کونسل کا کمپیوٹرائزڈ نکاح نامہ (شادی شدہ خواتین کے لیے)"
        },
        required: false,
        note: {
          en: "Required for married female citizens adding husband's name or updating marital status.",
          "ur-ro": "Khawateen ke liye shohar ka naam shamil karwane ya marital status tabdeel karne ke liye.",
          ur: "خواتین کے شناختی کارڈ پر شوہر کا نام درج کروانے یا ازدواجی حیثیت تبدیل کروانے کے لیے۔"
        }
      }
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Center Arrival & Token Generation",
          "ur-ro": "NADRA Center Aamad aur Token Hasil Karna",
          ur: "نادرا سینٹر آمد اور قطار کا ٹوکن حاصل کرنا"
        },
        desc: {
          en: "Walk into your nearest NADRA Registration Center (NRC) or 24/7 Mega Center. Present your original Form-B/old CNIC at the reception desk to collect your computerized queue token number.",
          "ur-ro": "Qareebi NADRA center jayein. Reception par original Form-B ya purana card dikha kar computerized token lein.",
          ur: "قریبی نادرا رجسٹریشن سینٹر یا 24 گھنٹے کھلے میگا سینٹر تشریف لے جائیں۔ استقبالیہ پر اصل کاغذات دکھا کر ٹوکن حاصل کریں۔"
        }
      },
      {
        step: 2,
        title: {
          en: "Data Entry, Live Photo, Fingerprints & Iris Scan",
          "ur-ro": "Data Entry, Live Photo aur Biometrics Scan",
          ur: "ڈیٹا انٹری، تصویر، انگلیوں کے نشانات اور آنکھوں کا اسکین"
        },
        desc: {
          en: "When your token is called, proceed to the data entry counter. The officer records your full demographic details, captures your high-resolution digital photograph, all 10 fingerprints, and dual iris biometric scans.",
          "ur-ro": "Token aane par data entry counter par jayein. Officer aap ka data enter karega, live digital photo lega aur 10 ungliyon aur aankhon ka scan karega.",
          ur: "ٹوکن نمبر پکارے جانے پر ڈیٹا انٹری کاؤنٹر پر جائیں۔ عملہ کوائف درج کرے گا، ڈیجیٹل تصویر لے گا، اور دس انگلیوں اور آنکھوں کا اسکین مکمل کرے گا۔"
        }
      },
      {
        step: 3,
        title: {
          en: "Biometric Attestation & Fee Payment",
          "ur-ro": "Blood Relative Ki Tasdeeq aur Fee Payment",
          ur: "خونی رشتہ دار کی تصدیق اور سرکاری فیس کی ادائیگی"
        },
        desc: {
          en: "The accompanying blood relative (Father/Mother/Sibling) places their thumb on the biometric scanner to officially verify family linkage. Pay the prescribed fee (Normal: Rs. 750 / Urgent: Rs. 1,500 / Executive: Rs. 2,500) and collect your printed application form with tracking ID.",
          "ur-ro": "Sath aye walid ya walida biometric scanner par thumb laga kar tasdeeq karenge. Counter par official fee ada karein aur tracking number wali printed slip lein.",
          ur: "ساتھ موجود والد یا والدہ بائیو میٹرک اسکینر پر انگوٹھا لگا کر خاندانی تصدیق کریں گے۔ کاؤنٹر پر مقررہ سرکاری فیس جمع کروائیں اور ٹریکنگ رسید حاصل کریں۔"
        }
      },
      {
        step: 4,
        title: {
          en: "SMS Tracking & Card Collection / Home Delivery",
          "ur-ro": "8400 Par Tracking aur Card Wasooli",
          ur: "8400 پر ٹریکنگ اور شناختی کارڈ کی وصولی"
        },
        desc: {
          en: "Track your card printing progress by sending your 12-digit tracking number to 8400 via SMS. Once printed, collect the card from the NRC counter by showing your original token slip, or receive it at home via Pakistan Post registered mail.",
          "ur-ro": "Apni 12-digit tracking ID ko 8400 par SMS bhej kar status check karein. Card tayyar hone par token slip dikha kar center se lein ya postal delivery se ghar wasool karein.",
          ur: "اپنا 12 ہندسوں کا ٹریکنگ نمبر 8400 پر ایس ایم ایس کر کے تیاری کی صورتحال معلوم کریں۔ کارڈ تیار ہونے پر ٹوکن سلپ دکھا کر سینٹر سے لیں یا ڈاک سے گھر وصول کریں۔"
        }
      }
    ],
    fees: {
      "Smart Card (Normal — 15 Days)": "PKR 750",
      "Smart Card (Urgent — 7 Days)": "PKR 1,500",
      "Executive / Same-Day NRC": "PKR 2,500",
      "Lost Card Replacement": "PKR 750 (Normal) / 1,500 (Urgent)"
    },
    timing: {
      en: "Mon – Sat: 08:30 AM to 04:30 PM (Mega Centers open 24/7)",
      "ur-ro": "Peer se Hafta: 08:30 AM se 04:30 PM (Mega Centers 24 Ghantay)",
      ur: "پیر تا ہفتہ: صبح 8:30 تا شام 4:30 (میگا سینٹرز 24 گھنٹے کھلے ہیں)"
    },
    officialPortal: "https://id.nadra.gov.pk",
    helpline: "1777 (Mobile) / 051-111-786-100",
    advisoryTips: {
      en: [
        "Never hand over original CNIC to unauthorized touts standing outside registration centers.",
        "Check your tracking status via 8400 SMS before visiting to collect your physical card.",
        "You can also renew expired CNICs or change addresses online using the official Pak-ID mobile app without visiting a center."
      ],
      "ur-ro": [
        "Bahar khare kisi agent ko original documents ya paise na dein, tamam fees counter par jama hoti hai.",
        "Card collect karne jane se pehle 8400 par SMS bhej kar printing status lazmi check karein.",
        "Pak-ID mobile app ke zariye ghar bethe bhi CNIC renew karwaya ja sakta hai."
      ],
      ur: [
        "سینٹر کے باہر کھڑے ایجنٹوں کو رقم یا اصل کاغذات ہرگز نہ دیں، تمام فیس اندر کاؤنٹر پر جمع ہوتی ہے۔",
        "کارڈ وصول کرنے جانے سے قبل 8400 پر ایس ایم ایس کے ذریعے تصدیق ضرور کر لیں۔",
        "نادرا کی پاک آئی ڈی موبائل ایپ سے گھر بیٹھے بھی شناختی کارڈ کی تجدید اور پتہ تبدیل کروایا جا سکتا ہے۔"
      ]
    }
  },

  // 2. Passport
  {
    id: "passport",
    category: "travel",
    iconKey: "passport",
    authorityBadge: "DGIP Passports",
    specs: {
      docs: { en: "2 to 3 Documents", "ur-ro": "2 se 3 Documents", ur: "2 سے 3 دستاویزات" },
      time: { en: "4 to 10 Days", "ur-ro": "4 se 10 Din", ur: "4 تا 10 دن" },
      fee: { en: "Rs. 3,000 – 9,000", "ur-ro": "Rs. 3,000 – 9,000", ur: "3,000 تا 9,000 روپے" }
    },
    title: {
      en: "Machine Readable Passport & e-Passport",
      "ur-ro": "Pakistan Passport (New / Renewal)",
      ur: "مشین ریڈ ایبل پاسپورٹ اور ای-پاسپورٹ"
    },
    issuingAuthority: {
      en: "Directorate General of Immigration & Passports (DGIP)",
      "ur-ro": "Regional Passport Office",
      ur: "محکمہ پاسپورٹ اینڈ امیگریشن (DGIP)"
    },
    shortDesc: {
      en: "Step-by-step procedure for 36/72-page international passports, 5 or 10-year validity, and urgent renewals.",
      "ur-ro": "Naya 5 ya 10 saal wala passport banwane aur renewal karwane ki mukammal official guide.",
      ur: "نئے 5 یا 10 سالہ پاسپورٹ اور ارجنٹ تجدید کا مکمل سرکاری طریقہ کار۔"
    },
    documents: [
      {
        name: {
          en: "Original Valid CNIC / NICOP / Smart Card + 2 Clean Photocopies",
          "ur-ro": "Original CNIC aur 2 Photocopiyan",
          ur: "اصل قومی شناختی کارڈ اور 2 صاف نقول"
        },
        required: true,
        note: {
          en: "CNIC must be active and valid. Unexpired original card is required at the counter.",
          "ur-ro": "CNIC expired nahi hona chahiye. Original card counter par dikhana hoga.",
          ur: "شناختی کارڈ کا فعال ہونا لازمی ہے۔ کاؤنٹر پر اصل کارڈ کا معائنہ ہوگا۔"
        }
      },
      {
        name: {
          en: "Previous Original Passport + Copy of Bio Pages (if renewal)",
          "ur-ro": "Purana Passport aur Bio Pages Ki Copy (Renewal ke liye)",
          ur: "سابقہ پاسپورٹ اور بائیو پیجز کی کاپی (تجدید کی صورت میں)"
        },
        required: true,
        note: {
          en: "Mandatory for all renewal cases. Old passport will be officially stamped 'CANCELLED' and returned.",
          "ur-ro": "Renewal ke liye lazmi. Purana passport cancel ki stamp lag kar wapas mil jayega.",
          ur: "تجدید کے لیے لازمی ہے۔ پرانے پاسپورٹ پر تنسیخ کی مہر لگا کر واپس کیا جائے گا۔"
        }
      },
      {
        name: {
          en: "Paid Fee Challan or 'Passport Fee Asaan' Digital PSID Payment Receipt",
          "ur-ro": "Paid Fee Receipt (App ya NBP Bank Challan)",
          ur: "پاسپورٹ فیس آسان ایپ یا نیشنل بینک کی ادا شدہ رسید"
        },
        required: true,
        note: {
          en: "Payable via mobile banking apps, 1Link, Easypaisa, JazzCash or NBP counters.",
          "ur-ro": "Mobile banking app, Easypaisa, JazzCash ya NBP counter se direct pay karein.",
          ur: "موبائل بینکنگ ایپ، ایزی پیسہ، جاز کیش یا نیشنل بینک کاؤنٹر سے فیس جمع کروائیں۔"
        }
      }
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Generate PSID & Pay Fee via Mobile Banking",
          "ur-ro": "PSID Generate Karke Mobile Se Fee Pay Karein",
          ur: "پی ایس آئی ڈی بنائیں اور موبائل بینکنگ سے فیس ادا کریں"
        },
        desc: {
          en: "Download the official 'Passport Fee Asaan' app from Play Store/App Store or visit dgip.gov.pk. Select passport category (36/72 pages, 5/10 years, Normal/Urgent), generate the 17-digit PSID code, and pay using your mobile banking app, 1Link, or ATM.",
          "ur-ro": "'Passport Fee Asaan' app download karein. 36/72 pages aur 5/10 saal select karke 17-digit PSID banayein aur kisi bhi bank app se foran pay karein.",
          ur: "پاسپورٹ فیس آسان ایپ کھولیں، صفحات اور سال منتخب کر کے 17 ہندسوں کا پی ایس آئی ڈی بنائیں اور بینک ایپ یا اے ٹی ایم سے فیس ادا کریں۔"
        }
      },
      {
        step: 2,
        title: {
          en: "Arrival at Passport Office & Token Verification",
          "ur-ro": "Passport Office Aamad aur Token Hasil Karna",
          ur: "پاسپورٹ آفس آمد اور ٹوکن کا حصول"
        },
        desc: {
          en: "Visit your regional passport office during morning hours. Present your original CNIC and the printed digital fee payment receipt at the reception window to obtain your entry token.",
          "ur-ro": "Subah ke waqt apne zillay ke passport office jayein. Reception par original CNIC aur paid fee slip dikha kar token lein.",
          ur: "صبح کے اوقات میں اپنے ریجنل پاسپورٹ آفس جائیں۔ استقبالیہ پر اصل شناختی کارڈ اور فیس رسید دکھا کر ٹوکن حاصل کریں۔"
        }
      },
      {
        step: 3,
        title: {
          en: "Digital Photo, Fingerprints & Data Verification",
          "ur-ro": "Photo, Ungliyon Ka Scan aur Data Entry",
          ur: "ڈیجیٹل تصویر، انگلیوں کے نشانات اور کوائف کی جانچ"
        },
        desc: {
          en: "Proceed through sequential processing booths: (1) Official photograph counter, (2) 10-fingerprint biometric capture booth, and (3) Data verification desk where personal details are cross-matched with NADRA records.",
          "ur-ro": "Muntakhib counters par jayein: Digital camera se tasweer banwayein, ungliyon ke nishan dein aur screen par apne naam aur pate ki tasdeeq karein.",
          ur: "مختلف کاؤنٹرز پر مرحلہ وار جائیں: ڈیجیٹل تصویر بنوائیں، انگلیوں کے نشانات دیں اور اسکرین پر اپنے کوائف کی درستگی چیک کریں۔"
        }
      },
      {
        step: 4,
        title: {
          en: "Assistant Director Interview & Token Slip Collection",
          "ur-ro": "Assistant Director Se Interview aur Final Slip",
          ur: "اسسٹنٹ ڈائریکٹر سے انٹرویو اور حتمی رسید کا حصول"
        },
        desc: {
          en: "Appear before the Assistant Director for a brief security clearance check and document attestation. Collect your stamped token tracking slip indicating delivery date.",
          "ur-ro": "Assistant Director ke samne verification ke liye pesh hon. Stamped token slip wasool karein jis par wasooli ki tareekh likhi hogi.",
          ur: "اسسٹنٹ ڈائریکٹر کے سامنے تصدیق کے لیے پیش ہوں۔ مہر شدہ ٹوکن رسید حاصل کریں جس پر پاسپورٹ ملنے کی تاریخ درج ہوگی۔"
        }
      }
    ],
    fees: {
      "36 Pages (5 Years — Normal)": "PKR 3,000",
      "36 Pages (5 Years — Urgent)": "PKR 5,000",
      "36 Pages (10 Years — Normal)": "PKR 5,400",
      "36 Pages (10 Years — Urgent)": "PKR 9,000",
      "72 Pages (10 Years — Normal)": "PKR 9,000"
    },
    timing: {
      en: "Mon – Thu: 08:00 AM to 02:00 PM | Fri: 08:00 AM to 12:30 PM",
      "ur-ro": "Peer se Juma: 08:00 AM se 02:00 PM (Juma: 12:30 PM tak)",
      ur: "پیر تا جمعرات: صبح 8:00 تا دوپہر 2:00 | جمعہ: صبح 8:00 تا 12:30"
    },
    officialPortal: "https://dgip.gov.pk",
    helpline: "051-111-344-777",
    advisoryTips: {
      en: [
        "10-year validity passports cost significantly less per year and prevent frequent renewal hassle.",
        "Always pay fee electronically using the official 'Passport Fee Asaan' app to avoid bank branch queues.",
        "International travel requires your passport to have at least 6 months of validity remaining before departure."
      ],
      "ur-ro": [
        "10 saal wala passport banwana zyada faidamand rehta hai taake baar baar daftaron ke chakkar na lagane parein.",
        "'Passport Fee Asaan' app se fee direct jama karwayein taake bank ki lambi lineon se bach sakein.",
        "Bahar safar karne ke liye passport mein kam az kam 6 mahine ki validity baki honi chahiye."
      ],
      ur: [
        "10 سالہ پاسپورٹ بنوانا زیادہ سستا اور طویل مدت کے لیے سہولت بخش رہتا ہے۔",
        "پاسپورٹ فیس آسان ایپ سے براہ راست فیس ادا کریں تاکہ بینک کی قطاروں سے بچ سکیں۔",
        "کسی بھی بین الاقوامی سفر سے قبل پاسپورٹ کی کم از کم 6 ماہ معیاد باقی ہونا لازمی ہے۔"
      ]
    }
  },

  // 3. Driving License
  {
    id: "driving-license",
    category: "transport",
    iconKey: "license",
    authorityBadge: "Traffic Police",
    specs: {
      docs: { en: "2 to 3 Documents", "ur-ro": "2 se 3 Documents", ur: "2 سے 3 دستاویزات" },
      time: { en: "42 Days Training", "ur-ro": "42 Din Training", ur: "42 دن کی تربیتی معیاد" },
      fee: { en: "Rs. 500 – 1,800", "ur-ro": "Rs. 500 – 1,800", ur: "500 تا 1,800 روپے" }
    },
    title: {
      en: "Motor Vehicle Driving License (Motorcycle & Car)",
      "ur-ro": "Driving License (Motorcycle & Car)",
      ur: "ڈرائیونگ لائسنس (موٹر سائیکل اور کار)"
    },
    issuingAuthority: {
      en: "Provincial Traffic Police / Police Khidmat Markaz",
      "ur-ro": "Police Khidmat Markaz",
      ur: "ٹریفک پولیس اور پولیس خدمت مرکز"
    },
    shortDesc: {
      en: "Get your instant Learner Permit, prepare for traffic sign test, and clear practical driving track exam.",
      "ur-ro": "Online learner permit banwane, computerized sign test aur practical track test ka tareeqa.",
      ur: "لرنر پرمٹ، کمپیوٹرائزڈ ٹریفک سائن ٹیسٹ اور پریکٹیکل ڈرائیونگ ٹیسٹ پاس کرنے کی رہنمائی۔"
    },
    documents: [
      {
        name: {
          en: "Original CNIC (Applicant must be 18+ years of age)",
          "ur-ro": "Original CNIC Card (Umar kam az kam 18 saal)",
          ur: "اصل قومی شناختی کارڈ (امیدوار کی عمر کم از کم 18 سال)"
        },
        required: true,
        note: {
          en: "Must be active and unexpired. Digital copy on Pak-ID app is also accepted.",
          "ur-ro": "Card expired nahi hona chahiye.",
          ur: "شناختی کارڈ کا فعال اور کارآمد ہونا ضروری ہے۔"
        }
      },
      {
        name: {
          en: "Original Learner Driving Permit (Completed 42-day mandatory period)",
          "ur-ro": "Asal Learner Permit (42 din ka waqfa mukammal)",
          ur: "اصل لرنر ڈرائیونگ پرمٹ (42 دن کی لازمی مدت مکمل)"
        },
        required: true,
        note: {
          en: "Law mandates a 42-day practice period between learner issuance and permanent driving test.",
          "ur-ro": "Learner banne aur practical test ke darmian 42 din guzarna qanoonan lazmi hai.",
          ur: "لرنر پرمٹ کے اجراء اور پریکٹیکل ٹیسٹ کے درمیان 42 دن کا وقفہ قانونی طور پر لازمی ہے۔"
        }
      },
      {
        name: {
          en: "Medical Fitness Certificate Form-B (for commercial HTV or applicants aged 50+)",
          "ur-ro": "Medical Certificate (Agar umar 50+ hai ya HTV license hai)",
          ur: "میڈیکل فٹنس سرٹیفکیٹ فارم-بی (50 سال سے زائد عمر یا کمرشل لائسنس کے لیے)"
        },
        required: false,
        note: {
          en: "Signed and stamped by an authorized registered medical practitioner.",
          "ur-ro": "Registered doctor se sign shuda medical form.",
          ur: "رجسٹرڈ میڈیکل پریکٹیشنر سے تصدیق شدہ میڈیکل فارم۔"
        }
      }
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Instant Learner Permit Issuance (Online or at PKM)",
          "ur-ro": "5 Minute Mein Learner Permit Banwayein",
          ur: "آن لائن یا خدمت مرکز سے 5 منٹ میں لرنر پرمٹ کا حصول"
        },
        desc: {
          en: "Apply instantly online via your provincial portal (e.g., dlims.punjab.gov.pk) or visit any Police Khidmat Markaz. Pay nominal fee (Rs. 60–500) via e-Pay/PSID to get immediate PDF learner permit.",
          "ur-ro": "DLIMS online portal ya Police Khidmat Markaz se 5 minute mein learner permit banwayein. Fee online e-Pay se ada karein.",
          ur: "آن لائن پورٹل (dlims.punjab.gov.pk) یا پولیس خدمت مرکز سے فوری لرنر پرمٹ حاصل کریں۔ فیس آن لائن ای پے سے جمع کروائیں۔"
        }
      },
      {
        step: 2,
        title: {
          en: "42-Day Practice & Traffic Sign Study",
          "ur-ro": "42 Din Practice aur Traffic Signs Ki Tayyari",
          ur: "42 دن کی تربیتی مشق اور ٹریفک اشاروں کی تیاری"
        },
        desc: {
          en: "Complete mandatory 42 days of driving practice with a licensed driver. Study standard mandatory, cautionary, and informatory traffic road signs.",
          "ur-ro": "42 din driving practice karein aur computerized test ke liye traffic signs aur road rules yaad karein.",
          ur: "42 دن ڈرائیونگ کی باقاعدہ مشق کریں اور کمپیوٹرائزڈ ٹیسٹ کے لیے تمام ٹریفک اشارے اور قوانین یاد کریں۔"
        }
      },
      {
        step: 3,
        title: {
          en: "Computerized Sign Test (Touchscreen)",
          "ur-ro": "Screen Par Traffic Sign Test",
          ur: "کمپیوٹرائزڈ ٹچ اسکرین ٹریفک سائن ٹیسٹ"
        },
        desc: {
          en: "Visit the testing center after day 42. Answer randomized multiple-choice road sign questions on the touchscreen. Passing score is typically 80% (8/10 correct).",
          "ur-ro": "42 din baad center jayein. Touchscreen par 10 traffic signs ke sawalat aayenge, 8 theek hone par pass honge.",
          ur: "42 دن بعد ٹیسٹنگ سینٹر جائیں۔ ٹچ اسکرین پر ٹریفک اشاروں کا ٹیسٹ دیں، 80 فیصد درست جوابات پر ٹیسٹ پاس ہوگا۔"
        }
      },
      {
        step: 4,
        title: {
          en: "Practical Track Test & License Activation",
          "ur-ro": "Track Par Driving Test aur License Activation",
          ur: "ٹریک پر پریکٹیکل ڈرائیونگ امتحان اور لائسنس کا اجراء"
        },
        desc: {
          en: "Drive vehicle on designated 'L-shaped' or 'S-shaped' track with forward and reverse parallel parking maneuvers without touching cones. Upon passing, your digital QR license activates instantly on your smartphone.",
          "ur-ro": "Track par gaari chala kar reverse aur parking test pass karein. Pass hone par foran digital QR license mobile par active ho jayega aur plastic card ghar deliver hoga.",
          ur: "ٹریک پر گاڑی سیدھی اور ریورس چلا کر امتحان پاس کریں۔ کامیابی پر ڈیجیٹل کیو آر لائسنس فوری موبائل پر فعال ہو جائے گا۔"
        }
      }
    ],
    fees: {
      "Learner Driving Permit": "PKR 60 – 500",
      "Motorcycle Permanent (5 Years)": "PKR 500 – 1,200",
      "Motorcar / LTV Permanent (5 Years)": "PKR 900 – 1,800",
      "Commercial / HTV License": "PKR 1,200 – 2,500"
    },
    timing: {
      en: "Mon – Sat: 09:00 AM to 05:00 PM (Selected centers open 24/7)",
      "ur-ro": "Peer se Hafta: 09:00 AM se 05:00 PM",
      ur: "پیر تا ہفتہ: صبح 9:00 تا شام 5:00"
    },
    officialPortal: "https://dlims.punjab.gov.pk",
    helpline: "Traffic Police 15",
    advisoryTips: {
      en: [
        "The digital QR driving license stored in your official police mobile app is 100% legally recognized at all check-posts across Pakistan.",
        "Ensure the test car has fully functional side mirrors, rear-view mirror, handbrake, and indicator lights on exam day."
      ],
      "ur-ro": [
        "Mobile app wala digital license tamam traffic police check-posts par 100% legal aur qabil-e-qabool hai.",
        "Test wale din gaari ke side mirrors aur indicator lights theek halat mein honi chahiye."
      ],
      ur: [
        "موبائل ایپ میں موجود ڈیجیٹل کیو آر لائسنس تمام پولیس ناکوں پر قانونی طور پر مکمل قابل قبول ہے۔",
        "ٹیسٹ کے دن گاڑی کے شیشے، اشارے اور ہینڈ بریک درست حالت میں ہونا لازمی ہیں۔"
      ]
    }
  },

  // 4. Domicile
  {
    id: "domicile",
    category: "identity",
    iconKey: "certificate",
    authorityBadge: "DC Office",
    specs: {
      docs: { en: "4 to 5 Documents", "ur-ro": "4 se 5 Documents", ur: "4 سے 5 دستاویزات" },
      time: { en: "7 to 14 Days", "ur-ro": "7 se 14 Din", ur: "7 تا 14 دن" },
      fee: { en: "Rs. 350 – 600", "ur-ro": "Rs. 350 – 600", ur: "350 تا 600 روپے" }
    },
    title: {
      en: "Domicile & Permanent Residence Certificate (PRC)",
      "ur-ro": "Domicile & PRC Certificate",
      ur: "ڈومیسائل اور مستقل رہائشی سرٹیفکیٹ (PRC)"
    },
    issuingAuthority: {
      en: "Deputy Commissioner Office / District Administration",
      "ur-ro": "DC Office / e-Khidmat Center",
      ur: "ڈپٹی کمشنر آفس / ضلعی انتظامیہ"
    },
    shortDesc: {
      en: "Proof of permanent district residence required for public sector jobs, competitive exams (CSS/PMS), and university admissions.",
      "ur-ro": "Sarkari naukriyon aur university admissions ke liye zaroori rehaishi certificate.",
      ur: "سرکاری ملازمتوں اور کالج/یونیورسٹی داخلوں کے لیے مستقل ضلعی رہائش کا قانونی سرٹیفکیٹ۔"
    },
    documents: [
      {
        name: {
          en: "Original CNIC (or Form-B for minors under 18) + 2 Photocopies",
          "ur-ro": "Applicant ka Original CNIC ya Form-B",
          ur: "امیدوار کا اصل قومی شناختی کارڈ یا فارم-بی اور 2 نقول"
        },
        required: true,
        note: {
          en: "Permanent address on CNIC must belong to the applying district.",
          "ur-ro": "CNIC par usi zillay ka mustaqil pata hona chahiye.",
          ur: "شناختی کارڈ پر متعلقہ ضلع کا مستقل پتہ درج ہونا لازمی ہے۔"
        }
      },
      {
        name: {
          en: "Father's Original CNIC & Domicile Certificate Copy",
          "ur-ro": "Walid ka CNIC aur Domicile Copy",
          ur: "والد کے شناختی کارڈ اور ڈومیسائل کی کاپی"
        },
        required: true,
        note: {
          en: "In case father is deceased, attach computerized death certificate issued by Union Council.",
          "ur-ro": "Agar walid fot ho chuke hon toh Union Council ka death certificate lagayein.",
          ur: "اگر والد وفات پا چکے ہوں تو یونین کونسل کا ڈیتھ سرٹیفکیٹ ساتھ لگائیں۔"
        }
      },
      {
        name: {
          en: "Notarized Affidavit on e-Stamp Paper",
          "ur-ro": "e-Stamp Paper Par Notarized Bayan-e-Halafi",
          ur: "ای-اشٹام پیپر پر مصدقہ بیان حلفی"
        },
        required: true,
        note: {
          en: "Affirming that applicant does not hold domicile of any other district in Pakistan.",
          "ur-ro": "Bayan ke applicant kisi aur zillay ka domicile nahi rakhta.",
          ur: "اس بات کا قانونی اقرار کہ امیدوار کے پاس کسی دوسرے ضلع کا ڈومیسائل موجود نہیں۔"
        }
      },
      {
        name: {
          en: "Educational Documents (Matric / FSc / Degree Marksheet)",
          "ur-ro": "Matric / FSc ki Sanad ya Result Card",
          ur: "میٹرک یا ایف ایس سی کی تعلیمی اسناد"
        },
        required: true,
        note: {
          en: "Serving as documentary proof of local schooling history.",
          "ur-ro": "Local school/college ki parhai ka saboot.",
          ur: "مقامی سکول یا کالج کی تعلیم کا دستاویزی ثبوت۔"
        }
      }
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Obtain Form P-1 & e-Stamp Affidavit",
          "ur-ro": "Form P-1 aur e-Stamp Paper Hasil Karein",
          ur: "فارم P-1 اور ای-اشٹام پیپر حاصل کرنا"
        },
        desc: {
          en: "Collect application Form P-1 from the citizen facilitation center or DC revenue office. Purchase an e-Stamp paper (Rs. 100) and draft the standard non-dual domicile declaration affidavit.",
          "ur-ro": "DC office ya e-Khidmat center se Form P-1 lein aur 100 rupay ka e-Stamp paper le kar affidavit tayyar karein.",
          ur: "ای-خدمت مرکز یا ڈی سی آفس سے فارم P-1 حاصل کریں اور اشٹام پیپر پر بیان حلفی تحریر کروائیں۔"
        }
      },
      {
        step: 2,
        title: {
          en: "Oath Commissioner Attestation",
          "ur-ro": "Oath Commissioner Se Tasdeeq Karwayein",
          ur: "اووتھ کمشنر سے تصدیق کروانا"
        },
        desc: {
          en: "Get the affidavit attested, signed, and stamped by an authorized court Oath Commissioner or Notary Public.",
          "ur-ro": "Affidavit par Oath Commissioner ke sign aur official stamp lagwayein.",
          ur: "بیان حلفی پر اووتھ کمشنر کے دستخط اور مہر لگوائیں۔"
        }
      },
      {
        step: 3,
        title: {
          en: "Dossier Submission & Revenue Branch Verification",
          "ur-ro": "File Jama Karwayein aur Patwari/Tehsildar Verification",
          ur: "فائل جمع کروانا اور ریونیو ریکارڈ کی تصدیق"
        },
        desc: {
          en: "Submit the complete file along with educational proofs and bank challan at the facilitation desk. Tehsildar/Patwari verifies physical residential standing in revenue records.",
          "ur-ro": "Tamam documents aur challan counter par jama karein. Revenue staff pate ki tasdeeq karega.",
          ur: "تمام دستاویزات کاؤنٹر پر جمع کروائیں، ریونیو عملہ پتے کی تصدیق مکمل کرے گا۔"
        }
      },
      {
        step: 4,
        title: {
          en: "Deputy Commissioner Seal & Certificate Delivery",
          "ur-ro": "Signed Domicile Certificate Wasool Karein",
          ur: "ڈپٹی کمشنر کے دستخط شدہ ڈومیسائل کی وصولی"
        },
        desc: {
          en: "Upon approval, the permanent domicile certificate is signed by the Additional Deputy Commissioner (General) and embossed with the official district seal. Collect by presenting submission slip.",
          "ur-ro": "ADC ki sign shuda aur sarkari mohar wali original certificate slip dikha kar collect karein.",
          ur: "ڈپٹی کمشنر کے دستخط شدہ ڈومیسائل کی اصل کاپی رسید دکھا کر حاصل کریں۔"
        }
      }
    ],
    fees: {
      "Government Domicile Fee": "PKR 200 – 300 (Challan)",
      "E-Stamp Paper & Affidavit": "PKR 100 – 150",
      "Total Estimated Administrative Cost": "PKR 350 – 600"
    },
    timing: {
      en: "Mon – Fri: 09:00 AM to 03:00 PM",
      "ur-ro": "Peer se Juma: 09:00 AM se 03:00 PM",
      ur: "پیر تا جمعہ: صبح 9:00 تا دوپہر 3:00"
    },
    officialPortal: "https://citizen.punjab.gov.pk",
    helpline: "Local DC Office Helpline",
    advisoryTips: {
      en: [
        "Holding two domiciles simultaneously is illegal under the Pakistan Citizenship Act 1951.",
        "Make multiple color photocopies immediately after collecting the original certificate and laminate the original."
      ],
      "ur-ro": [
        "Ek waqt mein do zillon ka domicile rakhna qanoonan jurm hai.",
        "Original milne par uski color photocopiyan karwa kar sambhal lein."
      ],
      ur: [
        "ایک وقت میں دو اضلاع کا ڈومیسائل رکھنا شہریت ایکٹ 1951 کے تحت جرم ہے۔",
        "اصل ڈومیسائل ملتے ہی اس کی رنگین فوٹو کاپیاں کروا کر محفوظ کر لیں۔"
      ]
    }
  },

  // 5. FBR Tax Filer
  {
    id: "fbr-tax",
    category: "finance",
    iconKey: "tax",
    authorityBadge: "FBR IRIS",
    specs: {
      docs: { en: "1 to 2 Documents", "ur-ro": "1 se 2 Documents", ur: "1 سے 2 دستاویزات" },
      time: { en: "Instant Online", "ur-ro": "Instant Online", ur: "فوری آن لائن" },
      fee: { en: "100% Free (Rs. 0)", "ur-ro": "100% Free (Rs. 0)", ur: "100% مفت (0 روپے)" }
    },
    title: {
      en: "FBR NTN Registration & Active Taxpayer List (ATL)",
      "ur-ro": "FBR Tax Filer & NTN Registration",
      ur: "ایف بی آر ٹیکس فائلر اور این ٹی این رجسٹریشن"
    },
    issuingAuthority: {
      en: "Federal Board of Revenue (FBR) — IRIS Portal",
      "ur-ro": "FBR IRIS Portal",
      ur: "فیڈرل بورڈ آف ریونیو (FBR)"
    },
    shortDesc: {
      en: "Register your free NTN and file income tax returns to get 50% lower withholding taxes on banking, vehicles, and property.",
      "ur-ro": "Ghar bethe free NTN banayein aur tax return file karke active tax filer bano.",
      ur: "گاڑی، پراپرٹی اور بینکنگ پر ٹیکس بچت کے لیے فعال فائلر بننے کا مکمل طریقہ کار۔"
    },
    documents: [
      {
        name: {
          en: "13-Digit CNIC Number (Your CNIC serves as your individual NTN)",
          "ur-ro": "13-Digit CNIC Number",
          ur: "13 ہندسوں پر مشتمل قومی شناختی کارڈ نمبر"
        },
        required: true,
        note: {
          en: "No separate physical NTN card is issued to individual salaried/business persons.",
          "ur-ro": "Aap ka CNIC number hi aap ka official NTN hota hai.",
          ur: "شناختی کارڈ نمبر ہی بذات خود قومی ٹیکس نمبر (NTN) ہے۔"
        }
      },
      {
        name: {
          en: "Mobile SIM Registered on Applicant's Own CNIC",
          "ur-ro": "Apne Naam Par Registered Mobile SIM",
          ur: "اپنے شناختی کارڈ پر رجسٹرڈ موبائل سم"
        },
        required: true,
        note: {
          en: "Mandatory to receive secure SMS OTP codes for registration and PIN creation.",
          "ur-ro": "OTP verification code aane ke liye SIM applicant ke naam hona zaroori hai.",
          ur: "او ٹی پی (OTP) کوڈ کی وصولی کے لیے سم کا امیدوار کے اپنے نام ہونا لازمی ہے۔"
        }
      },
      {
        name: {
          en: "Personal Bank Account IBAN / 12-Month Bank Statement",
          "ur-ro": "Bank Account IBAN / 12-Month Statement",
          ur: "بینک اکاؤنٹ کا آئی بی اے این (IBAN) اور سالانہ اسٹیٹمنٹ"
        },
        required: true,
        note: {
          en: "To declare closing bank balance and wealth assets under Section 116.",
          "ur-ro": "Bank balance aur account details declare karne ke liye.",
          ur: "بینک بیلنس اور سالانہ لین دین کے اندراج کے لیے۔"
        }
      }
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Online Portal Account Creation (IRIS)",
          "ur-ro": "IRIS Portal Par Online Account Banao",
          ur: "آئرس (IRIS) پورٹل پر رجسٹریشن"
        },
        desc: {
          en: "Open iris.fbr.gov.pk on your computer or mobile. Click 'Registration for Unregistered Person'. Enter your 13-digit CNIC, mobile network provider, registered phone number, and email address.",
          "ur-ro": "iris.fbr.gov.pk par jayein. 'Registration for Unregistered Person' par click karke CNIC, mobile number aur email darj karein.",
          ur: "ویب سائٹ پر جائیں، 'Registration for Unregistered Person' منتخب کر کے شناختی کارڈ اور موبائل نمبر درج کریں۔"
        }
      },
      {
        step: 2,
        title: {
          en: "Dual OTP Authentication & Password Setup",
          "ur-ro": "Dual OTP Verify Karke Password Set Karein",
          ur: "او ٹی پی تصدیق اور لاگ ان پاس ورڈ کا تعین"
        },
        desc: {
          en: "Enter the SMS verification code received on your phone and the email code received in your inbox. IRIS generates your login username (CNIC) and password.",
          "ur-ro": "SMS aur email par aane wale verification codes enter karein. IRIS aap ka login password bana dega.",
          ur: "موبائل اور ای میل پر موصول تصدیقی کوڈ درج کر کے اپنا لاگ ان مکمل کریں۔"
        }
      },
      {
        step: 3,
        title: {
          en: "Fill Annual Income Return & Wealth Statement",
          "ur-ro": "Saalana Aamdani aur Wealth Statement Fill Karein",
          ur: "سالانہ آمدن اور اثاثوں کا گوشوارہ پر کرنا"
        },
        desc: {
          en: "Log into IRIS. Select the active tax year. Input your annual salary/business income, withholding taxes deducted by banks/employers, and declare your personal assets (bank accounts, vehicles, property) under Wealth Statement Form 116.",
          "ur-ro": "Login karein. Apni saalana aamdani, katoti shuda tax aur property/bank balance ki maloomat likhein.",
          ur: "لاگ ان کر کے سالانہ آمدن، تنخواہ، منہا شدہ ٹیکس اور اثاثہ جات کی تفصیلات درج کریں۔"
        }
      },
      {
        step: 4,
        title: {
          en: "PIN Verification & Instant Active Taxpayer Status (ATL)",
          "ur-ro": "4-Digit PIN Laga Kar Submit Karein",
          ur: "پن کوڈ درج کر کے جمع کروانا اور فعال فائلر بننا"
        },
        desc: {
          en: "Enter your 4-digit electronic PIN to sign and submit the return. Check your status instantly by sending 'ATL [space] 13-digit CNIC' to 9966 via SMS. You are now officially an Active Taxpayer.",
          "ur-ro": "4-digit PIN enter karke submit karein. Status check karne ke liye 'ATL [CNIC]' likh kar 9966 par SMS karein.",
          ur: "4 ہندسوں کا پن کوڈ لگا کر فارم جمع کروائیں۔ 'ATL شناختی کارڈ نمبر' لکھ کر 9966 پر ایس ایم ایس بھیج کر فعال اسٹیٹس چیک کریں۔"
        }
      }
    ],
    fees: {
      "Individual NTN Registration": "PKR 0 (100% Free Government Service)",
      "Online Return Filing": "PKR 0 (100% Free on IRIS Portal)",
      "Late Surcharge for ATL (if filing past deadline)": "PKR 1,000"
    },
    timing: {
      en: "Online Portal: Available 24/7",
      "ur-ro": "Online Portal 24 Ghantay Available Hai",
      ur: "آن لائن پورٹل 24 گھنٹے ہر وقت فعال ہے"
    },
    officialPortal: "https://iris.fbr.gov.pk",
    helpline: "051-111-772-772",
    advisoryTips: {
      en: [
        "Active Taxpayers enjoy 50% lower withholding tax rates on banking cash withdrawals, vehicle token taxes, and property purchase/sale.",
        "Even if your annual earnings are below taxable limits, you can file a 'Nil Return' to maintain Active Taxpayer status for free."
      ],
      "ur-ro": [
        "Filer banne se gaari, property aur bank transactions par aadha tax lagta hai.",
        "Aamdani taxable limit se kam ho tab bhi Nil Return file karke muft mein active filer ban sakte hain."
      ],
      ur: [
        "فائلر بننے سے پراپرٹی، گاڑی اور بینک لین دین پر ودہولڈنگ ٹیکس 50 فیصد تک کم ہو جاتا ہے۔",
        "کم آمدن والے شہری بغیر کسی فیس کے نل ریٹرن (Nil Return) جمع کروا کر فعال فائلر بن سکتے ہیں۔"
      ]
    }
  },

  // 6. Child Registration (Form-B)
  {
    id: "birth-certificate",
    category: "identity",
    iconKey: "child",
    authorityBadge: "NADRA & UC",
    specs: {
      docs: { en: "2 Documents", "ur-ro": "2 Documents", ur: "2 دستاویزات" },
      time: { en: "1 to 3 Days", "ur-ro": "1 se 3 Din", ur: "1 تا 3 دن" },
      fee: { en: "Rs. 50 – 500", "ur-ro": "Rs. 50 – 500", ur: "50 تا 500 روپے" }
    },
    title: {
      en: "Child Registration Certificate (Form-B / CRC)",
      "ur-ro": "Form-B / Child Registration Certificate",
      ur: "چائلڈ رجسٹریشن سرٹیفکیٹ (فارم-بی / CRC)"
    },
    issuingAuthority: {
      en: "NADRA & Local Union Councils",
      "ur-ro": "NADRA & Union Council",
      ur: "نادرا اور متعلقہ یونین کونسل"
    },
    shortDesc: {
      en: "Official computerized birth registration required for school admissions, child passport issuance, and family tree records.",
      "ur-ro": "Bachon ke school admission aur passport ke liye zaroori computerized Form-B.",
      ur: "سکول داخلے اور بچوں کے پاسپورٹ کے لیے نادرا کا کمپیوٹرائزڈ ب-فارم اور پیدائش کا اندراج۔"
    },
    documents: [
      {
        name: {
          en: "Official Hospital Birth Slip or Union Council Computerized Birth Certificate",
          "ur-ro": "Hospital Birth Slip ya Union Council Certificate",
          ur: "ہسپتال کا پیدائشی کارڈ یا یونین کونسل کمپیوٹرائزڈ برتھ سرٹیفکیٹ"
        },
        required: true,
        note: {
          en: "Must clearly state child's full name, exact birth date, and parents' names.",
          "ur-ro": "Paidaish ki tareekh, waqt aur parents ka naam wazeh ho.",
          ur: "بچے کی تاریخ پیدائش، وقت اور والدین کے نام واضح درج ہوں۔"
        }
      },
      {
        name: {
          en: "Original CNIC of Both Parents",
          "ur-ro": "Walid aur Walida ke Original CNIC",
          ur: "والد اور والدہ کے اصل قومی شناختی کارڈ"
        },
        required: true,
        note: {
          en: "Parents must have updated marriage link in NADRA family records.",
          "ur-ro": "Parents ka shadi shuda record NADRA mein link hona chahiye.",
          ur: "والدین کا نکاح کا باقاعدہ ریکارڈ نادرا میں درج ہونا لازمی ہے۔"
        }
      }
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Register Birth with Local Union Council",
          "ur-ro": "Union Council Mein Paidaish Ka Indraj",
          ur: "یونین کونسل میں پیدائش کا باقاعدہ اندراج"
        },
        desc: {
          en: "Present hospital birth slip within 60 days to the Secretary Union Council. Obtain the official computerized birth certificate with tracking QR.",
          "ur-ro": "Hospital slip 60 din ke andar Union Council mein jama karein aur computerized birth certificate lein.",
          ur: "60 دن کے اندر ہسپتال کی سلپ یونین کونسل میں جمع کروا کر برتھ سرٹیفکیٹ حاصل کریں۔"
        }
      },
      {
        step: 2,
        title: {
          en: "Visit NADRA Center with Child Details",
          "ur-ro": "NADRA Center Tashreef Lein",
          ur: "نادرا سینٹر تشریف لے جانا"
        },
        desc: {
          en: "Either parent visits NADRA registration center with their original CNICs and the computerized birth certificate. (Presence of minor child is not mandatory).",
          "ur-ro": "Walid ya Walida original CNIC aur Union Council certificate le kar NRC counter par jayein.",
          ur: "والدین میں سے کوئی ایک اصل دستاویزات کے ساتھ نادرا کاؤنٹر پر جائے۔ چھوٹے بچے کا ساتھ آنا ضروری نہیں۔"
        }
      },
      {
        step: 3,
        title: {
          en: "Biometric Attestation & Instant Printing",
          "ur-ro": "Thumb Tasdeeq aur Form-B Printing",
          ur: "بائیو میٹرک تصدیق اور فارم-بی کا فوری اجراء"
        },
        desc: {
          en: "Parent completes thumb biometric verification. Officer reviews English/Urdu name spellings and instantly prints official Form-B on security watermarked paper.",
          "ur-ro": "Parent ki thumb tasdeeq hogi. Name ke spelling verify karein aur security paper par Form-B foran wasool karein.",
          ur: "بائیو میٹرک تصدیق کے بعد سرکاری واٹر مارک سیکیورٹی پیپر پر فارم-بی فوری پرنٹ ہو کر مل جائے گا۔"
        }
      }
    ],
    fees: {
      "Form-B Standard Processing": "PKR 50",
      "Executive Counter / Urgent": "PKR 500",
      "Late Registration (After 60 Days)": "PKR 100 – 300"
    },
    timing: {
      en: "Mon – Sat: 08:30 AM to 04:30 PM",
      "ur-ro": "Peer se Hafta: 08:30 AM se 04:30 PM",
      ur: "پیر تا ہفتہ: صبح 8:30 تا شام 4:30"
    },
    officialPortal: "https://www.nadra.gov.pk",
    helpline: "1777 (Mobile)",
    advisoryTips: {
      en: [
        "Thoroughly double-check the spelling of child's name in both English and Urdu before final printout.",
        "Registering within 60 days of birth saves you from late fee penalties."
      ],
      "ur-ro": [
        "Bache ke naam ke spelling English aur Urdu dono mein dhyan se check karein.",
        "Paidaish ke 60 din ke andar register karwayein taake late fee se bacha ja sake."
      ],
      ur: [
        "بچے کے نام کے ہجے (Spelling) اردو اور انگریزی دونوں میں اچھی طرح چیک کریں۔",
        "پیدائش کے 60 دن کے اندر اندراج کروانے سے اضافی جرمانے سے بچا جا سکتا ہے۔"
      ]
    }
  },

  // 7. Police Character Certificate
  {
    id: "police-character",
    category: "security",
    iconKey: "police",
    authorityBadge: "Police PKM",
    specs: {
      docs: { en: "2 to 3 Documents", "ur-ro": "2 se 3 Documents", ur: "2 سے 3 دستاویزات" },
      time: { en: "3 to 7 Days", "ur-ro": "3 se 7 Din", ur: "3 تا 7 دن" },
      fee: { en: "Rs. 350 – 1,000", "ur-ro": "Rs. 350 – 1,000", ur: "350 تا 1,000 روپے" }
    },
    title: {
      en: "Police Character & Security Clearance Certificate",
      "ur-ro": "Police Character Certificate (Clearance)",
      ur: "پولیس کیریکٹر و سیکیورٹی کلیرنس سرٹیفکیٹ"
    },
    issuingAuthority: {
      en: "City Police Department / Police Khidmat Markaz",
      "ur-ro": "Police Khidmat Markaz",
      ur: "ضلعی پولیس اور پولیس خدمت مرکز"
    },
    shortDesc: {
      en: "Official verified certificate showing clear criminal record for study visas, work abroad, and sensitive jobs.",
      "ur-ro": "Bahar mulk study, work visa ya naukri ke liye police clearance certificate.",
      ur: "بیرون ملک تعلیم، ورک ویزا یا نوکری کے لیے پولیس سے کریکٹر اور سیکیورٹی کلیرنس سرٹیفکیٹ۔"
    },
    documents: [
      {
        name: {
          en: "Original CNIC & 2 Clear Photocopies",
          "ur-ro": "Original CNIC aur 2 Copies",
          ur: "اصل شناختی کارڈ اور 2 صاف نقول"
        },
        required: true,
        note: {
          en: "Applicant must legally reside in the police station's jurisdiction.",
          "ur-ro": "Applicant usi area ka rehaishi ho.",
          ur: "امیدوار متعلقہ پولیس تھانے کی حدود کا رہائشی ہو۔"
        }
      },
      {
        name: {
          en: "Original Valid Passport + Copy of Bio Pages",
          "ur-ro": "Original Passport aur Bio Pages Copy",
          ur: "اصل پاسپورٹ اور بائیو پیجز کی نقل"
        },
        required: true,
        note: {
          en: "Mandatory if certificate is requested for foreign visa or embassy submission.",
          "ur-ro": "Foreign visa ke liye passport lazmi hai.",
          ur: "بیرون ملک ویزا یا سفارت خانے کے لیے پاسپورٹ لازمی ہے۔"
        }
      },
      {
        name: {
          en: "Authority Letter (if applicant is residing abroad)",
          "ur-ro": "Authority Letter (Agar applicant bahar mulk hai)",
          ur: "اتھارٹی لیٹر (اگر امیدوار بیرون ملک مقیم ہو)"
        },
        required: false,
        note: {
          en: "Attested by Pakistani Embassy/Consulate authorizing blood relative in Pakistan.",
          "ur-ro": "Pakistani Embassy se tasdeeq shuda authority letter.",
          ur: "پاکستانی سفارت خانے سے تصدیق شدہ اتھارٹی لیٹر۔"
        }
      }
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Walk-in to Police Khidmat Markaz (PKM)",
          "ur-ro": "Police Khidmat Markaz Jayein",
          ur: "پولیس خدمت مرکز تشریف لے جائیں"
        },
        desc: {
          en: "Visit your nearest Police Khidmat Markaz (PKM) or facilitation booth. Submit original CNIC and passport copies at the reception counter.",
          "ur-ro": "Qareebi Police Khidmat Markaz jayein aur documents counter par jama karein.",
          ur: "قریبی پولیس خدمت مرکز جائیں اور اصل دستاویزات کاؤنٹر پر پیش کریں۔"
        }
      },
      {
        step: 2,
        title: {
          en: "Live Biometrics & Crime Record Management Query",
          "ur-ro": "Biometric Scan aur CRMS Record Check",
          ur: "بائیو میٹرک اسکین اور کرائم ریکارڈ میں تلاش"
        },
        desc: {
          en: "Live 10-fingerprint biometric scan queries the central Crime Record Management System (CRMS) database across all districts for any active FIRs or court warrants.",
          "ur-ro": "Ungliyon ke nishan se CRMS database mein candidate ka record check kiya jata hai.",
          ur: "انگلیوں کے نشانات سے کمپیوٹرائزڈ کرائم ریکارڈ میں کسی بھی ایف آئی آر کی تصدیق کی جائے گی۔"
        }
      },
      {
        step: 3,
        title: {
          en: "Local Police Station Address Verification",
          "ur-ro": "Thana Se Rehaish Ki Verification",
          ur: "متعلقہ تھانے سے رہائش کی توثیق"
        },
        desc: {
          en: "Dossier is routed to the local police station (Thana) where the beat officer confirms the applicant's residential address and community standing.",
          "ur-ro": "Thana se candidate ke pate aur character ki tasdeeq ki jati hai.",
          ur: "متعلقہ تھانے سے امیدوار کے پتے اور کردار کی جانچ مکمل کی جاتی ہے۔"
        }
      },
      {
        step: 4,
        title: {
          en: "Senior Superintendent of Police (SSP) Digital QR Issuance",
          "ur-ro": "SSP Ki Sign Shuda QR Certificate Wasool Karein",
          ur: "ایس ایس پی کے دستخط شدہ کیو آر سرٹیفکیٹ کا اجراء"
        },
        desc: {
          en: "Upon clearance, the Senior Superintendent of Police signs the computerized certificate containing a secure verification QR code. Collect from PKM or receive via courier.",
          "ur-ro": "Clearance ke baad QR code wala official certificate PKM se collect karein.",
          ur: "توثیق مکمل ہونے پر ایس ایس پی کے دستخط شدہ کیو آر کوڈ سیکیورٹی سرٹیفکیٹ حاصل کریں۔"
        }
      }
    ],
    fees: {
      "Standard Verification Fee": "PKR 350 – 500",
      "Urgent Processing (PKM)": "PKR 1,000"
    },
    timing: {
      en: "Mon – Sat: 09:00 AM to 05:00 PM",
      "ur-ro": "Peer se Hafta: 09:00 AM se 05:00 PM",
      ur: "پیر تا ہفتہ: صبح 9:00 تا شام 5:00"
    },
    officialPortal: "https://punjabpolice.gov.pk",
    helpline: "Emergency: 15 | Citizen Center: 8787",
    advisoryTips: {
      en: [
        "Accurately specify the destination embassy or country name on application form as it is permanently printed on the certificate.",
        "Foreign consulates typically mandate that character certificates be dated within the last 6 months."
      ],
      "ur-ro": [
        "Form mein us mulk ya embassy ka naam wazeh likhein jahan certificate jama karwana hai.",
        "Visas ke liye 6 mahine se zyada purana certificate qabil-e-qabool nahi hota."
      ],
      ur: [
        "فارم میں اس مخصوص ملک یا سفارت خانے کا نام درست درج کریں جہاں یہ سرٹیفکیٹ جمع ہونا ہے۔",
        "زیادہ تر سفارت خانے 6 ماہ سے پرانا کیریکٹر سرٹیفکیٹ قبول نہیں کرتے۔"
      ]
    }
  },

  // 8. Electricity Connection
  {
    id: "electricity-connection",
    category: "utilities",
    iconKey: "power",
    authorityBadge: "WAPDA / DISCO",
    specs: {
      docs: { en: "3 Documents", "ur-ro": "3 Documents", ur: "3 دستاویزات" },
      time: { en: "14 to 30 Days", "ur-ro": "14 se 30 Din", ur: "14 تا 30 دن" },
      fee: { en: "Rs. 5,500 – 18,000", "ur-ro": "Rs. 5,500 – 18,000", ur: "5,500 تا 18,000 روپے" }
    },
    title: {
      en: "New Electricity Connection (Domestic Single & Three Phase)",
      "ur-ro": "Bijli Ka Naya Connection (WAPDA / DISCOs)",
      ur: "بجلی کا نیا میٹر / کنکشن (سنگل اور تھری فیز)"
    },
    issuingAuthority: {
      en: "Power Distribution Companies (LESCO, IESCO, K-Electric, MEPCO, PESCO)",
      "ur-ro": "LESCO / IESCO / K-Electric",
      ur: "بجلی کی تقسیم کار کمپنیاں (لیسکو، آئیسکو، کے-الیکٹرک، میپکو)"
    },
    shortDesc: {
      en: "Official ENC portal procedure to apply for residential or commercial electricity meter installation.",
      "ur-ro": "Ghar ya dukan ke liye naya bijli meter lagwane ka online aur official tareeqa.",
      ur: "گھر یا دکان پر نیا سنگل یا تھری فیز بجلی کا میٹر لگوانے کا سرکاری اور آن لائن طریقہ کار۔"
    },
    documents: [
      {
        name: {
          en: "CNIC of Property Owner / Applicant + Photocopies",
          "ur-ro": "Ghar Ke Malik Ka CNIC aur Copies",
          ur: "جائیداد کے مالک کا شناختی کارڈ اور تصدیق شدہ نقول"
        },
        required: true,
        note: {
          en: "Applicant must be the legally registered owner of the premises.",
          "ur-ro": "Applicant property ka legal owner hona chahiye.",
          ur: "درخواست گزار کا جائیداد کا قانونی مالک ہونا لازمی ہے۔"
        }
      },
      {
        name: {
          en: "Proof of Ownership (Registered Sale Deed, Fard Malkiat, Allotment Letter)",
          "ur-ro": "Malkiat Ka Saboot (Registry / Allotment Letter / Fard)",
          ur: "ملکیت کا دستاویزی ثبوت (رجسٹری، فرد ملکیت یا الاٹمنٹ لیٹر)"
        },
        required: true,
        note: {
          en: "Must clearly state full property address, plot number, and boundary details.",
          "ur-ro": "Plot ya makan ka number wazeh ho.",
          ur: "پلاٹ یا مکان کا نمبر اور حدود اربعہ واضح درج ہوں۔"
        }
      },
      {
        name: {
          en: "Neighboring Active Electricity Bill Copy",
          "ur-ro": "Hamsaye Ke Bijli Bill Ki Copy",
          ur: "قریبی ہمسائے کے فعال بجلی کے بل کی نقل"
        },
        required: true,
        note: {
          en: "Used by the line staff to identify the nearest distribution transformer and feeder code.",
          "ur-ro": "Qareebi khambay aur transformer ki nishandehi ke liye.",
          ur: "قریبی ٹرانسفارمر، پول اور فیڈر کوڈ کی نشاندہی کے لیے۔"
        }
      }
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Online Application Submission on ENC Portal",
          "ur-ro": "ENC Portal Par Online Form Fill Karein",
          ur: "سرکاری ای این سی (ENC) پورٹل پر آن لائن درخواست"
        },
        desc: {
          en: "Visit the Electricity New Connection portal at enc.com.pk. Select your local distribution company (LESCO, IESCO, K-Electric, MEPCO), choose connection category (Domestic Single Phase / Three Phase), input requested load (kW), and submit.",
          "ur-ro": "enc.com.pk par jayein. Apni bijli company aur connection type select karke online form fill karein.",
          ur: "سرکاری ویب سائٹ enc.com.pk پر جائیں، اپنی بجلی کمپنی اور لوڈ منتخب کر کے فارم پر کریں۔"
        }
      },
      {
        step: 2,
        title: {
          en: "Dossier Submission to Sub-Divisional Officer (SDO)",
          "ur-ro": "SDO Office Mein File Jama Karwayein",
          ur: "ایس ڈی او (SDO) آفس میں فائل جمع کروانا"
        },
        desc: {
          en: "Print the generated online application form. Attach property ownership documents, CNIC copy, and neighbor bill copy. Submit file to the respective SDO office.",
          "ur-ro": "Form print karke property papers ke sath SDO office mein jama karein.",
          ur: "فارم کا پرنٹ لے کر ملکیتی کاغذات اور ہمسائے کے بل کے ساتھ متعلقہ ایس ڈی او آفس جمع کروائیں۔"
        }
      },
      {
        step: 3,
        title: {
          en: "Site Feasibility Inspection & Demand Notice Payment",
          "ur-ro": "Site Survey aur Demand Notice Fee Bank Mein Jama",
          ur: "سائٹ معائنہ اور ڈیمانڈ نوٹس فیس کی بینک میں ادائیگی"
        },
        desc: {
          en: "Technical team inspects the site for distance from transformer and line load. SDO approves and issues a Demand Notice challan. Deposit the fee at designated bank branch.",
          "ur-ro": "Field survey ke baad Demand Notice aayega, uski fee bank mein ada karein aur paid challan SDO office jama karein.",
          ur: "سائٹ معائنے کے بعد ڈیمانڈ نوٹس جاری ہوگا۔ مقررہ فیس بینک میں جمع کروا کر رسید ایس ڈی او آفس دیں۔"
        }
      },
      {
        step: 4,
        title: {
          en: "Wiring Test Report & Digital Meter Installation",
          "ur-ro": "Wiring Test Report aur Meter Installation",
          ur: "وائرنگ ٹیسٹ رپورٹ اور نئے میٹر کی تنصیب"
        },
        desc: {
          en: "Submit internal wiring test report signed by a licensed electrician. Lineman installs the digital meter and seals the connection at your property.",
          "ur-ro": "Electrician ki test report jama karein, lineman aa kar digital meter install kar dega.",
          ur: "وائرنگ ٹیسٹ رپورٹ جمع کروائیں، جس کے بعد عملہ آ کر نیا ڈیجیٹل میٹر نصب کر دے گا۔"
        }
      }
    ],
    fees: {
      "Single-Phase Domestic Connection": "PKR 5,500 – 9,500",
      "Three-Phase Domestic Connection": "PKR 18,000 – 35,000",
      "Commercial Connection": "Calculated on basis of load (kW)"
    },
    timing: {
      en: "Mon – Fri: 09:00 AM to 04:00 PM",
      "ur-ro": "Peer se Juma: 09:00 AM se 04:00 PM",
      ur: "پیر تا جمعہ: صبح 9:00 تا شام 4:00"
    },
    officialPortal: "https://enc.com.pk",
    helpline: "Power Emergency: 118",
    advisoryTips: {
      en: [
        "Always apply through the official ENC online portal to prevent touts from claiming illegal service charges.",
        "Ensure internal wiring is properly grounded with an earthing rod before meter installation inspection."
      ],
      "ur-ro": [
        "Hamesha ENC online portal se apply karein taake kisi agent ko rishwat na deni pare.",
        "Meter lagwane se pehle ghar ki wiring mein proper earthing rod lazmi lagwayein."
      ],
      ur: [
        "ہمیشہ سرکاری ای این سی پورٹل سے آن لائن اپلائی کریں تاکہ کسی ایجنٹ کو اضافی پیسے نہ دینے پڑیں۔",
        "میٹر لگوانے سے قبل گھر کی وائرنگ میں ارتھنگ (Earthing) راڈ درست طریقے سے نصب کروائیں۔"
      ]
    }
  }
];
