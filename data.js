// =========================================================================
// Madadgar — Multilingual Citizen Services Data (English, Roman Urdu, Urdu)
// =========================================================================

const ICONS = {
  idCard: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><line x1="15" y1="8" x2="17" y2="8"/><line x1="15" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="17" y2="16"/></svg>`,
  passport: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M12 13v4"/><path d="M8 21h8"/></svg>`,
  license: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="8" x2="7.01" y2="8"/><line x1="11" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="13" y2="16"/></svg>`,
  certificate: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  tax: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  child: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/></svg>`,
  police: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
  power: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  check: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  info: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  externalLink: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  download: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`
};

// UI Translations Dictionaries
const UI_STRINGS = {
  en: {
    topBarStatus: "Verified Citizen Guidance Portal • Updated for Fiscal Year 2025–2026",
    topBarServices: "8 Verified Services",
    topBarNoFees: "No Unofficial Agent Fees",
    brandTitle: "Madadgar",
    brandSub: "Citizen Services Directory",
    navServices: "Browse Services",
    navRights: "Citizen Rights",
    navHelplines: "Helplines",
    heroTag: "Independent, Verified Citizen Resource",
    heroHeading: "Step-by-Step Pakistan <br><span class='highlight-text'>Government Service Guides</span>",
    heroLead: "Eliminate middlemen commissions and procedural confusion. Access accurate document checklists, certified government fee schedules, and verified office workflows.",
    searchPlaceholder: "Search by service name, document, or authority (e.g. NADRA, Passport, FBR)...",
    allServices: "All Services",
    catIdentity: "Identity & Civil",
    catTravel: "Passport & Travel",
    catTransport: "Driving & Transport",
    catFinance: "Taxation & FBR",
    catUtilities: "Public Utilities",
    dirTitle: "Government Services Directory",
    dirDesc: "Select any service to view required documents checklist, fees, timelines, and step-by-step submission steps.",
    showingResults: "Showing {count} of {total} verified services",
    viewGuide: "View Guide",
    noResultsTitle: "No Matching Services Found",
    noResultsDesc: "Try searching for different keywords or select a different category filter.",
    resetFilter: "Reset All Filters",
    guidelinesTitle: "Citizen Rights & Counter-Fraud Guidelines",
    guidelinesSub: "Safeguard your documents and avoid paying unauthorized commissions",
    guide1Title: "Never Hand Over Original CNIC to Touts",
    guide1Desc: "Official registration centers only view originals on desk for verification and scan copies. Never surrender originals to unauthorized agents outside offices.",
    guide2Title: "Verify Electronic PSID Payments",
    guide2Desc: "All modern state fees (Passports, e-Challan, FBR) now support direct 1Link/e-Pay digital bank transfers. Always pay directly from your banking app using standard PSID numbers.",
    guide3Title: "Insist on Official Machine Receipts",
    guide3Desc: "Ensure every token, form submission, and fee deposit provides a computerized computer-printed tracking receipt with a timestamp and official serial number.",
    helplinesTitle: "Verified Government Portals & Helplines",
    helplinesDesc: "Direct official contact channels for inquiries and escalation.",
    tabDocs: "Document Checklist",
    tabProcess: "Step-by-Step Procedure",
    tabFees: "Fees, Timings & Portals",
    printBtn: "Print",
    reqDocsTitle: "Mandatory Required Documents",
    reqDocsSub: "Check off items as you prepare",
    optDocsTitle: "Conditional / Case-Specific Documents",
    requiredBadge: "Required",
    conditionalBadge: "Conditional",
    feeTableType: "Service Type / Tier",
    feeTableFee: "Prescribed Official Fee",
    hoursLabel: "Working Hours",
    portalLabel: "Official Portal",
    helplineLabel: "Inquiry Helpline",
    advisoryTitle: "Official Citizen Advisory & Best Practices",
    progressTitle: "Document Readiness Checklist",
    progressStatus: "{count} of {total} mandatory items ready ({percent}%)",
    footerText: "An independent, non-governmental public service initiative providing structured information for Pakistani citizens.",
    disclaimer: "Disclaimer: Procedural requirements and official fee structures are compiled from official gazettes and portals. Verify with local departments for real-time updates.",
    copyright: "© 2026 Madadgar • Built for Pakistani Citizens"
  },
  "ur-ro": {
    topBarStatus: "Tasdeeq Shuda Sarkari Rehnumai Portal • Mali Saal 2025–2026",
    topBarServices: "8 Tasdeeq Shuda Services",
    topBarNoFees: "Agent Ki Koi Zaroorat Nahi",
    brandTitle: "Madadgar",
    brandSub: "Sarkari Kaam Asaan Directory",
    navServices: "Services Dekhein",
    navRights: "Shehri Haqooq",
    navHelplines: "Helplines",
    heroTag: "Ghair Janibdar, Tasdeeq Shuda Rehnumai",
    heroHeading: "Pakistan Ke Tamam <br><span class='highlight-text'>Sarkari Kaamon Ka Asaan Guide</span>",
    heroLead: "Agenton aur dushwario se nijaat payein. Zaroori documents ki list, official fees, aur step-by-step tareeqa-e-kaar ek jagah dekhein.",
    searchPlaceholder: "Service, department ya document talash karein (maslan: NADRA, Passport, License)...",
    allServices: "Tamam Services",
    catIdentity: "Shanakht & Civil",
    catTravel: "Passport & Safar",
    catTransport: "Driving & Gaari",
    catFinance: "Tax & FBR",
    catUtilities: "Bijli & Gas",
    dirTitle: "Sarkari Services Directory",
    dirDesc: "Apni zaroorat ki service par click karein aur required documents, fees aur poora process dekhein.",
    showingResults: "{total} mein se {count} services nazar aa rahi hain",
    viewGuide: "Poora Guide Dekhein",
    noResultsTitle: "Koi Service Nahi Mili",
    noResultsDesc: "Mukhtalif lafz likh kar search karein ya category filter change karein.",
    resetFilter: "Filters Reset Karein",
    guidelinesTitle: "Shehri Haqooq & Fraud Se Bachne Ki Hidayat",
    guidelinesSub: "Apne documents mehfooz rakhain aur ghair qanooni commission se bachein",
    guide1Title: "Original CNIC Bahar Khare Agent Ko Mat Dain",
    guide1Desc: "Sarkari centers par staff sirf desk par original document dekh kar wapas karta hai. Bahar khare kisi shakhs ko original mat dein.",
    guide2Title: "Electronic PSID Se Direct Payment Karein",
    guide2Desc: "Passport, e-Challan aur FBR fees ab 1Link/e-Pay se mobile banking app se ada ho sakti hain. Direct pay karein.",
    guide3Title: "Computerized Machine Receipt Lazmi Lein",
    guide3Desc: "Har token, form jama karwane ya fee ada karne par printed slip lein jis par official tracking number ho.",
    helplinesTitle: "Tasdeeq Shuda Government Portals & Helplines",
    helplinesDesc: "Maloomat aur shikayat ke liye direct official rabta number.",
    tabDocs: "Documents Checklist",
    tabProcess: "Step-by-Step Tareeqa",
    tabFees: "Fees, Auqaat & Rabta",
    printBtn: "Print Karein",
    reqDocsTitle: "Lazmi Zaroori Documents",
    reqDocsSub: "Tayyari ke sath tick lagate jayein",
    optDocsTitle: "Zaroorat Ke Mutabiq Documents",
    requiredBadge: "Lazmi",
    conditionalBadge: "Hasb-e-Zaroorat",
    feeTableType: "Service Ki Qisam",
    feeTableFee: "Sarkari Fee",
    hoursLabel: "Daftari Auqaat",
    portalLabel: "Official Website",
    helplineLabel: "Helpline Number",
    advisoryTitle: "Aham Mushwaray & Pro Tips",
    progressTitle: "Documents Tayyari Progress",
    progressStatus: "{total} mein se {count} lazmi documents tayyar hain ({percent}%)",
    footerText: "Pakistan ke shehriyon ke liye ek aam public service portal taake sarkari kaam baghair agenton ke asaani se hon.",
    disclaimer: "Wazahat: Yeh maloomat official government notifications se jama ki gayi hain. Asal waqt par fees mein tabdeeli ho sakti hai.",
    copyright: "© 2026 Madadgar • Pakistani Shehriyon Ke Liye"
  },
  ur: {
    topBarStatus: "تصدیق شدہ حکومتی معلوماتی پورٹل • برائے مالی سال 2025–2026",
    topBarServices: "8 تصدیق شدہ خدمات",
    topBarNoFees: "کسی ایجنٹ یا فیس کی ضرورت نہیں",
    brandTitle: "مددگار",
    brandSub: "شہری رہنمائی ڈائریکٹری",
    navServices: "تمام خدمات",
    navRights: "شہری حقوق",
    navHelplines: "ہیلپ لائنز",
    heroTag: "مستند اور تصدیق شدہ رہنمائی",
    heroHeading: "پاکستان میں تمام <br><span class='highlight-text'>سرکاری امور کی مرحلہ وار رہنمائی</span>",
    heroLead: "ایجنٹوں اور اضافی اخراجات سے نجات حاصل کریں۔ شناختی کارڈ، پاسپورٹ، لائسنس اور ٹیکس فائلنگ کے مطلوبہ کاغذات، سرکاری فیس اور مکمل طریقہ کار ایک جگہ دیکھیں۔",
    searchPlaceholder: "سروس، ادارہ یا دستاویز تلاش کریں (مثلاً نادرا، پاسپورٹ، لائسنس، ٹیکس)...",
    allServices: "تمام خدمات",
    catIdentity: "شناخت اور سول امور",
    catTravel: "پاسپورٹ اور سفر",
    catTransport: "ڈرائیونگ اور ٹرانسپورٹ",
    catFinance: "ٹیکس اور ایف بی آر",
    catUtilities: "بجلی و یوٹیلیٹیز",
    dirTitle: "سرکاری خدمات کی ڈائریکٹری",
    dirDesc: "مطلوبہ سروس پر کلک کریں اور ضروری کاغذات، سرکاری فیس اور مرحلہ وار طریقہ کار جانیں۔",
    showingResults: "کل {total} میں سے {count} خدمات دستیاب ہیں",
    viewGuide: "مکمل رہنمائی دیکھیں",
    noResultsTitle: "کوئی سروس نہیں ملی",
    noResultsDesc: "مختلف الفاظ لکھ کر تلاش کریں یا کیٹیگری تبدیل کریں۔",
    resetFilter: "فلٹرز دوبارہ ترتیب دیں",
    guidelinesTitle: "شہری حقوق اور فراڈ سے بچاؤ کی ہدایات",
    guidelinesSub: "اپنی دستاویزات کو محفوظ رکھیں اور غیر مجاز کمیشن دینے سے گریز کریں",
    guide1Title: "اصل شناختی کارڈ کبھی کسی ایجنٹ کے حوالے نہ کریں",
    guide1Desc: "سرکاری دفاتر میں صرف کاؤنٹر پر اہلکار کو اصل دستاویز دکھائیں۔ دفاتر کے باہر کھڑے افراد کو اصل کارڈ ہرگز نہ دیں۔",
    guide2Title: "الیکٹرانک پی ایس آئی ڈی (PSID) سے ادائیگی کریں",
    guide2Desc: "پاسپورٹ، ای چالان اور ایف بی آر فیس موبائل بینکنگ ایپ اور ون لنک سے باآسانی براہ راست ادا کی جا سکتی ہے۔",
    guide3Title: "کمپیوٹرائزڈ مشین رسید لازمی حاصل کریں",
    guide3Desc: "فارم جمع کروانے یا فیس جمع کرنے پر سرکاری مہر اور ٹریکنگ نمبر والی کمپیوٹرائزڈ سلپ ضرور لیں۔",
    helplinesTitle: "تصدیق شدہ حکومتی پورٹلز اور ہیلپ لائنز",
    helplinesDesc: "معلومات اور شکایات کے لیے براہ راست سرکاری رابطے کے ذرائع۔",
    tabDocs: "دستاویزات کی فہرست",
    tabProcess: "مرحلہ وار طریقہ کار",
    tabFees: "فیس، اوقات اور ویب سائٹس",
    printBtn: "پرنٹ کریں",
    reqDocsTitle: "لازمی مطلوبہ دستاویزات",
    reqDocsSub: "تیاری کے ساتھ ٹک لگاتے جائیں",
    optDocsTitle: "ضرورت کے مطابق اضافی دستاویزات",
    requiredBadge: "لازمی",
    conditionalBadge: "حسبِ ضرورت",
    feeTableType: "سروس کی قسم",
    feeTableFee: "مقررہ سرکاری فیس",
    hoursLabel: "دفتری اوقات",
    portalLabel: "سرکاری ویب سائٹ",
    helplineLabel: "ہیلپ لائن نمبر",
    advisoryTitle: "اہم مشورے اور مفید تجاویز",
    progressTitle: "دستاویزات کی تیاری کی صورتحال",
    progressStatus: "{total} میں سے {count} لازمی دستاویزات تیار ہیں ({percent}%)",
    footerText: "پاکستانی شہریوں کی سہولت کے لیے ایک آزاد اور مفت معلوماتی پورٹل تاکہ تمام سرکاری امور شفافیت کے ساتھ حل ہوں۔",
    disclaimer: "وضاحت: یہ تمام معلومات سرکاری گزٹ اور آفیشل ذرائع سے مرتب کی گئی ہیں۔ فیس اور ضوابط میں وقت کے ساتھ تبدیلی ممکن ہے۔",
    copyright: "© 2026 مددگار • پاکستانی شہریوں کے لیے وقف"
  }
};

const SERVICES_DATA = [
  // 1. NADRA CNIC
  {
    id: "nadra-cnic",
    category: "identity",
    iconKey: "idCard",
    tag: { en: "Most Requested", "ur-ro": "Sabse Zyada Zaroori", ur: "سب سے زیادہ مطلوب" },
    title: {
      en: "National Identity Card (CNIC / Smart NIC)",
      "ur-ro": "National Identity Card (CNIC / Smart Card)",
      ur: "قومی شناختی کارڈ (CNIC / اسمارٹ کارڈ)"
    },
    issuingAuthority: {
      en: "National Database & Registration Authority (NADRA)",
      "ur-ro": "NADRA (National Database & Registration Authority)",
      ur: "نادرا (نیشنل ڈیٹا بیس اینڈ رجسٹریشن اتھارٹی)"
    },
    shortDesc: {
      en: "Complete procedure for Fresh Registration, 10-Year Renewal, Modification, or Lost Card Replacement.",
      "ur-ro": "Naya CNIC banana, 10 saal ki renewal, tabdeeli ya gumshuda card wapas hasil karne ka tareeqa.",
      ur: "نیا شناختی کارڈ بنوانے، تجدید (Renewal)، کوائف میں تبدیلی یا گمشدہ کارڈ کے دوبارہ حصول کا مکمل طریقہ کار۔"
    },
    documents: [
      {
        name: {
          en: "Original Child Registration Certificate (Form-B) or Matric Certificate",
          "ur-ro": "Original Form-B ya Matric Certificate",
          ur: "اصل چائلڈ رجسٹریشن سرٹیفکیٹ (فارم-بی) یا میٹرک کی سند"
        },
        required: true,
        note: {
          en: "Mandatory for first-time applicants turning 18",
          "ur-ro": "18 saal ki umar par pehli dafa apply karne walon ke liye lazmi",
          ur: "18 سال کی عمر میں پہلی بار بنوانے والوں کے لیے لازمی"
        }
      },
      {
        name: {
          en: "Original CNIC of Father or Mother",
          "ur-ro": "Walid ya Walida ka Original CNIC",
          ur: "والد یا والدہ کا اصل قومی شناختی کارڈ"
        },
        required: true,
        note: {
          en: "Parent must accompany applicant for biometric attestation or provide attested copy",
          "ur-ro": "Biometric verification ke liye kisi ek ka sath aana zaroori hai",
          ur: "بائیو میٹرک تصدیق کے لیے والدین میں سے کسی ایک کا ہمراہ ہونا ضروری ہے"
        }
      },
      {
        name: {
          en: "Existing/Expired CNIC or Smart Card",
          "ur-ro": "Purana / Expired CNIC ya Smart Card",
          ur: "موجودہ یا معیاد ختم شدہ (Expired) شناختی کارڈ"
        },
        required: true,
        note: {
          en: "Only required if applying for renewal or modification",
          "ur-ro": "Sirf renewal ya tabdeeli ke case mein zaroori hai",
          ur: "صرف تجدید یا تبدیلی کی صورت میں درکار ہے"
        }
      },
      {
        name: {
          en: "Registered Marriage Certificate (Nikahnama)",
          "ur-ro": "Registered Nikahnama / Marriage Certificate",
          ur: "رجسٹرڈ نکاح نامہ (شادی شدہ خواتین کے لیے)"
        },
        required: false,
        note: {
          en: "Required for married female citizens updating marital status",
          "ur-ro": "Khawateen ke liye shohar ka naam ya marital status update karne ke liye",
          ur: "خواتین کے شناختی کارڈ پر شوہر کا نام درج کروانے کے لیے"
        }
      },
      {
        name: {
          en: "Valid Proof of Residence (Utility Bill / Rent Agreement)",
          "ur-ro": "Rehaish ka Saboot (Bijli/Gas Bill ya Kirayanama)",
          ur: "رہائش کا دستاویزی ثبوت (یوٹیلٹی بل یا کرایہ نامہ)"
        },
        required: false,
        note: {
          en: "Only needed if changing permanent/present residential address",
          "ur-ro": "Sirf us soorat mein jab naya pata likhwana ho",
          ur: "صرف مستقل یا موجودہ پتہ تبدیل کروانے کی صورت میں"
        }
      }
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Visit Nearest NADRA Center or Pak-ID App",
          "ur-ro": "Qareebi NADRA Center ya Pak-ID App Use Karein",
          ur: "قریبی نادرا سینٹر تشریف لے جائیں یا پاک آئی ڈی ایپ استعمال کریں"
        },
        desc: {
          en: "Locate your nearest NADRA Registration Center (NRC) or download the official Pak-ID mobile app.",
          "ur-ro": "Apne qareeb tareen NRC center jayein ya mobile app se ghar bethe apply karein.",
          ur: "اپنے قریبی نادرا رجسٹریشن سینٹر جائیں یا پاک آئی ڈی ایپ سے آن لائن درخواست دیں۔"
        }
      },
      {
        step: 2,
        title: {
          en: "Token Generation & Verification",
          "ur-ro": "Token Hasil Karein",
          ur: "ٹوکن کا حصول اور کاؤنٹر تصدیق"
        },
        desc: {
          en: "Obtain a registration token at the reception desk. Proceed to counter when called.",
          "ur-ro": "Reception se token lein aur apni baari aane par counter par tashreef le jayein.",
          ur: "ریسپشن سے ٹوکن حاصل کریں اور نمبر آنے پر متعلقہ کاؤنٹر پر تشریف لے جائیں۔"
        }
      },
      {
        step: 3,
        title: {
          en: "Biometric Capture & Data Entry",
          "ur-ro": "Biometrics aur Data Entry",
          ur: "بائیو میٹرک فنگر پرنٹ اور تصویر"
        },
        desc: {
          en: "The officer will capture ten-finger biometrics, digital facial photograph, and electronic iris scan.",
          "ur-ro": "Data entry officer aap ki digital photo, ungliyon ke nishan aur data register karega.",
          ur: "ڈیٹا اینٹری افسر آپ کی تصویر، انگلیوں کے نشانات اور آنکھوں کے اسکین لے گا۔"
        }
      },
      {
        step: 4,
        title: {
          en: "Attestation & Fee Clearance",
          "ur-ro": "Tasdeeq aur Fee Jama Karwayein",
          ur: "تصدیق اور سرکاری فیس کی ادائیگی"
        },
        desc: {
          en: "If a direct blood relative is present with CNIC, biometric attestation is completed on spot. Pay official fee.",
          "ur-ro": "Walid ya walida ki biometric tasdeeq hogi aur counter par official fee ada karein.",
          ur: "والدین میں سے کسی ایک کی موقع پر بائیو میٹرک تصدیق ہوگی اور فیس وصول کی جائے گی۔"
        }
      },
      {
        step: 5,
        title: {
          en: "Tracking & Delivery",
          "ur-ro": "Tracking aur Card Delivery",
          ur: "ٹریکنگ اور کارڈ کی وصولی"
        },
        desc: {
          en: "Collect your printed tracking slip. Track status via SMS (send tracking ID to 8400) or nadra.gov.pk.",
          "ur-ro": "Tracking slip lein. 8400 par SMS bhej kar ya website se status check karein.",
          ur: "ٹریکنگ سلپ حاصل کریں۔ 8400 پر ایس ایم ایس کے ذریعے کارڈ کی صورتحال معلوم کریں۔"
        }
      }
    ],
    fees: {
      "Normal Delivery (Smart NIC)": "PKR 750 (Approx. 15 working days)",
      "Urgent Delivery (Smart NIC)": "PKR 1,500 (Approx. 7 working days)",
      "Executive / Same-Day NRC": "PKR 2,500 (Priority queue & fast-track printing)",
      "Modification / Data Correction": "PKR 750 (Regular schedule)"
    },
    timing: {
      en: "Monday to Saturday: 08:30 AM - 04:30 PM (24/7 at Mega Centers in Karachi, Lahore, Islamabad, Peshawar)",
      "ur-ro": "Peer se Hafta: 08:30 AM se 04:30 PM (Mega Centers 24 Ghantay Khulay Hain)",
      ur: "پیر تا ہفتہ: صبح 8:30 تا شام 4:30 (بڑے شہروں کے میگا سینٹرز 24 گھنٹے کھلے ہیں)"
    },
    officialPortal: "https://id.nadra.gov.pk",
    helpline: "1777 (Mobile) / +92 51 111 786 100",
    advisoryTips: {
      en: [
        "Avoid unofficial commission agents standing outside centers. All data submission happens directly inside.",
        "Married women can legally retain their father's name or choose to switch to husband's name.",
        "Check your tracking ID on Pak-ID app before visiting the center for collection."
      ],
      "ur-ro": [
        "Center ke bahar khare kisi agent ko paise mat dein, sab kaam andar counter par hota hai.",
        "Shadi shuda khawateen apna walid ka naam ya shohar ka naam rakh sakti hain, dono qanooni hain.",
        "Card collect karne se pehle 8400 par SMS bhej kar tasdeeq zaroor kar lein."
      ],
      ur: [
        "سینٹرز کے باہر کھڑے ایجنٹوں سے بچیں۔ تمام اندراج کاؤنٹر پر خود کروائیں۔",
        "شادی شدہ خواتین اپنے والد یا شوہر میں سے کسی کا بھی نام منتخب کر سکتی ہیں۔",
        "کارڈ وصول کرنے سے قبل 8400 پر میسج بھیج کر تیاری کی تصدیق کر لیں۔"
      ]
    }
  },

  // 2. Passport
  {
    id: "passport",
    category: "travel",
    iconKey: "passport",
    tag: { en: "High Demand", "ur-ro": "Zaroori Safar", ur: "بین الاقوامی سفر" },
    title: {
      en: "Machine Readable Passport & e-Passport",
      "ur-ro": "Machine Readable Passport & e-Passport",
      ur: "مشین ریڈ ایبل پاسپورٹ اور ای-پاسپورٹ"
    },
    issuingAuthority: {
      en: "Directorate General of Immigration & Passports (DGIP)",
      "ur-ro": "DGIP (Directorate General Immigration & Passports)",
      ur: "محکمہ پاسپورٹ اینڈ امیگریشن (DGIP)"
    },
    shortDesc: {
      en: "Official guidelines for issuing standard 36/72-page travel passports or new biometric e-Passports.",
      "ur-ro": "Naya passport banwane ya renewal karwane ka mukammal step-by-step tareeqa.",
      ur: "نئے 36 یا 72 صفحات کے پاسپورٹ یا بائیو میٹرک ای-پاسپورٹ کے اجراء اور تجدید کی مکمل رہنمائی۔"
    },
    documents: [
      {
        name: {
          en: "Original Valid CNIC / NICOP / Smart Card + 2 Clean Copies",
          "ur-ro": "Original CNIC aur 2 Photocopiyan",
          ur: "اصل کمپیوٹرائزڈ شناختی کارڈ اور 2 صاف نقول"
        },
        required: true,
        note: {
          en: "CNIC must be strictly valid and not expired",
          "ur-ro": "CNIC expired nahi hona chahiye",
          ur: "شناختی کارڈ کا فعال اور نان-ایکسپائرڈ ہونا لازمی ہے"
        }
      },
      {
        name: {
          en: "Previous Original Passport & Photocopy of Info Pages",
          "ur-ro": "Purana Passport (Agar renewal hai)",
          ur: "سابقہ پاسپورٹ (تجدید کی صورت میں)"
        },
        required: true,
        note: {
          en: "Mandatory if applying for renewal or page extension",
          "ur-ro": "Sirf renewal ke liye zaroori",
          ur: "صرف تجدید کے لیے درکار"
        }
      },
      {
        name: {
          en: "Official Bank Fee Challan or 'Passport Fee Asaan' App Receipt",
          "ur-ro": "'Passport Fee Asaan' App Receipt ya Bank Challan",
          ur: "پاسپورٹ فیس آسان موبائل ایپ کی ادا شدہ رسید یا بینک چالان"
        },
        required: true,
        note: {
          en: "Paid via National Bank of Pakistan (NBP) or 1Link Online",
          "ur-ro": "1Link ya NBP branch se ada karein",
          ur: "ون لنک، آن لائن بینکنگ یا نیشنل بینک سے ادائیگی"
        }
      },
      {
        name: {
          en: "Official Departmental NOC (No Objection Certificate)",
          "ur-ro": "Sarkari Mulazmeen Ke Liye NOC",
          ur: "سرکاری ملازمین کے لیے محکمانہ این او سی (NOC)"
        },
        required: false,
        note: {
          en: "Compulsory for Federal/Provincial Government Employees",
          "ur-ro": "Sirf sarkari mulazmeen ke liye lazmi",
          ur: "صرف سرکاری و نیم سرکاری ملازمین کے لیے"
        }
      }
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Fee Payment via 'Passport Fee Asaan' App",
          "ur-ro": "Fee Asaan App Se Payment Karein",
          ur: "پاسپورٹ فیس آسان ایپ سے فیس کی ادائیگی"
        },
        desc: {
          en: "Generate your digital PSID via the official DGIP portal or Passport Fee Asaan App, and pay via mobile banking.",
          "ur-ro": "App se PSID banayein aur mobile banking se direct fee pay karein.",
          ur: "ایپ سے پی ایس آئی ڈی بنائیں اور بینکنگ ایپ سے فیس ادا کریں۔"
        }
      },
      {
        step: 2,
        title: {
          en: "Arrival & Customer Service Desk",
          "ur-ro": "Passport Office Jayein aur Token Lein",
          ur: "پاسپورٹ آفس آمد اور ٹوکن کا حصول"
        },
        desc: {
          en: "Arrive at your regional passport office with original CNIC and fee receipt. Get queue token generated.",
          "ur-ro": "Subah passport office jayein, original CNIC aur fee slip dikha kar token lein.",
          ur: "اصل شناختی کارڈ اور فیس رسید کے ساتھ پاسپورٹ آفس پہنچ کر ٹوکن لیں۔"
        }
      },
      {
        step: 3,
        title: {
          en: "Digital Photo & Biometric Station",
          "ur-ro": "Live Photo aur Fingerprint",
          ur: "لائیو تصویر اور بائیو میٹرک فنگر پرنٹس"
        },
        desc: {
          en: "Proceed to the live digital capture room for portrait photograph acquisition and 10-finger biometric imprint.",
          "ur-ro": "Live digital camera se photo aur ungliyon ke nishan liye jayenge.",
          ur: "ڈیجیٹل کیمرے سے تصویر اور انگلیوں کے نشانات لیے جائیں گے۔"
        }
      },
      {
        step: 4,
        title: {
          en: "Assistant Director Interview",
          "ur-ro": "Assistant Director Interview",
          ur: "اسسٹنٹ ڈائریکٹر سے تصدیقی انٹرویو"
        },
        desc: {
          en: "Review printed bio-data form. Face a brief verification interview before Assistant Director desk.",
          "ur-ro": "Bio-data form check karein aur Assistant Director ke samne verification karwayein.",
          ur: "فارم کی تصدیق کے بعد اسسٹنٹ ڈائریکٹر کے سامنے مختصر تصدیقی انٹرویو ہوگا۔"
        }
      },
      {
        step: 5,
        title: {
          en: "Collection via Tracking Slip",
          "ur-ro": "Passport Wasool Karein",
          ur: "پاسپورٹ کی وصولی"
        },
        desc: {
          en: "SMS notification received upon printing. Visit office with token slip to collect passport.",
          "ur-ro": "SMS aane par token slip le ja kar passport collect karein.",
          ur: "ایس ایم ایس موصول ہونے پر ٹوکن سلپ دکھا کر پاسپورٹ وصول کریں۔"
        }
      }
    ],
    fees: {
      "36 Pages (5 Years) — Normal": "PKR 3,000",
      "36 Pages (5 Years) — Urgent": "PKR 5,000",
      "36 Pages (10 Years) — Normal": "PKR 5,400",
      "36 Pages (10 Years) — Urgent": "PKR 9,000",
      "72 Pages (10 Years) — Normal": "PKR 9,000",
      "e-Passport (Biometric 5-Year)": "PKR 9,000 - 15,000"
    },
    timing: {
      en: "Monday to Thursday: 08:00 AM - 02:00 PM | Friday: 08:00 AM - 12:30 PM",
      "ur-ro": "Peer se Juma: 08:00 AM se 02:00 PM (Juma ko 12:30 PM tak)",
      ur: "پیر تا جمعرات: صبح 8:00 تا دوپہر 2:00 | جمعہ: صبح 8:00 تا 12:30"
    },
    officialPortal: "https://dgip.gov.pk",
    helpline: "+92 51 111 344 777",
    advisoryTips: {
      en: [
        "10-year validity offers better value and saves frequent visa re-endorsement hassles.",
        "Most foreign embassies require at least 6 months of validity before visa approval.",
        "Always pay fee electronically using official PSID to prevent fake challan scams."
      ],
      "ur-ro": [
        "10 saal wala passport banwana behtar hai taake baar baar daftaron ke chakkar na lagane parein.",
        "Bahar safar karne ke liye passport mein kam az kam 6 mahine ki validity baki honi chahiye.",
        "Online app se fee ada karein taake bank ki lambi lines se bacha ja sake."
      ],
      ur: [
        "10 سالہ معیاد والا پاسپورٹ بنوانا زیادہ فائدہ مند اور سستا پڑتا ہے۔",
        "کسی بھی غیر ملکی ویزا کے لیے پاسپورٹ کی کم از کم 6 ماہ معیاد باقی ہونا لازمی ہے۔",
        "فیس کی ادائیگی ہمیشہ سرکاری ایپ کے ذریعے پی ایس آئی ڈی سے کریں۔"
      ]
    }
  },

  // 3. Driving License
  {
    id: "driving-license",
    category: "transport",
    iconKey: "license",
    tag: { en: "Essential", "ur-ro": "Road Safety", ur: "ڈرائیونگ لائسنس" },
    title: {
      en: "Motor Vehicle Driving License (Learner & Regular)",
      "ur-ro": "Driving License (Learner & Permanent)",
      ur: "موٹر وہیکل ڈرائیونگ لائسنس (لرنر اور مستقل)"
    },
    issuingAuthority: {
      en: "Provincial Traffic Police (Punjab, Sindh, KP, Balochistan, ICT)",
      "ur-ro": "Provincial Traffic Police & Police Khidmat Markaz",
      ur: "ٹریفک پولیس اور پولیس خدمت مرکز"
    },
    shortDesc: {
      en: "End-to-end steps to obtain motorcycle, motorcar/jeep (LTV), or heavy transport (HTV) driving licenses.",
      "ur-ro": "Motorcycle, LTV Car ya HTV ka learner aur permanent license banwane ka tareeqa.",
      ur: "موٹر سائیکل، کار (LTV) یا ہیوی وہیکل (HTV) کا لرنر اور مستقل لائسنس حاصل کرنے کا مکمل طریقہ۔"
    },
    documents: [
      {
        name: {
          en: "Original Computerized National Identity Card (CNIC)",
          "ur-ro": "Original CNIC Card",
          ur: "اصل قومی شناختی کارڈ (CNIC)"
        },
        required: true,
        note: {
          en: "Applicant must be minimum 18 years of age",
          "ur-ro": "Umar kam az kam 18 saal honi chahiye",
          ur: "عمر کم از کم 18 سال ہونا لازمی ہے"
        }
      },
      {
        name: {
          en: "Medical Fitness Certificate (Form B signed by Doctor)",
          "ur-ro": "Medical Fitness Certificate",
          ur: "میڈیکل فٹنس سرٹیفکیٹ (ڈاکٹر سے تصدیق شدہ)"
        },
        required: true,
        note: {
          en: "Required for applicants over 50 years or commercial vehicles",
          "ur-ro": "HTV ya 50 saal se zayed umar walon ke liye lazmi",
          ur: "کمرشل گاڑیوں یا 50 سال سے زائد عمر کے شہریوں کے لیے"
        }
      },
      {
        name: {
          en: "Valid Learner Driving Permit",
          "ur-ro": "Asal Learner Permit Slip",
          ur: "کارآمد لرنر ڈرائیونگ پرمٹ"
        },
        required: true,
        note: {
          en: "Must have completed minimum 42 days holding period before practical exam",
          "ur-ro": "Practical test se pehle 42 din guzarna lazmi hain",
          ur: "پریکٹیکل ٹیسٹ سے قبل 42 دن کا وقفہ لازمی ہے"
        }
      }
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Issue Learner Permit (Online or Khidmat Markaz)",
          "ur-ro": "Learner Permit Banwayein",
          ur: "لرنر پرمٹ کا فوری حصول (آن لائن یا خدمت مرکز)"
        },
        desc: {
          en: "Apply online via provincial portal (e.g. dlims.punjab.gov.pk) or walk into any Police Khidmat Markaz.",
          "ur-ro": "DLIMS website ya Police Khidmat Markaz se 5 minute mein learner permit lein.",
          ur: "آن لائن پورٹل یا خدمت مرکز جا کر 5 منٹ میں لرنر پرمٹ بنوائیں۔"
        }
      },
      {
        step: 2,
        title: {
          en: "42-Day Training Period",
          "ur-ro": "42 Din Ki Practice",
          ur: "42 دن کی لازمی تربیتی معیاد"
        },
        desc: {
          en: "Law mandates a 42-day practice period. Study traffic signs and defensive driving rules.",
          "ur-ro": "42 din driving practice karein aur traffic rules yad karein.",
          ur: "ٹریفک اشاروں اور ڈرائیونگ کے اصولوں کی باقاعدہ مشق کریں۔"
        }
      },
      {
        step: 3,
        title: {
          en: "Theoretical Sign Test",
          "ur-ro": "Computerized Ishara Test",
          ur: "کمپیوٹرائزڈ ٹریفک سائن ٹیسٹ"
        },
        desc: {
          en: "Clear the computerized visual traffic sign and road regulatory multiple-choice test.",
          "ur-ro": "Screen par traffic ke nishanat aur sawalat ka sahi jawab dein.",
          ur: "ٹچ اسکرین پر ٹریفک اشاروں کے درست جوابات دیں۔"
        }
      },
      {
        step: 4,
        title: {
          en: "Practical Track Driving Test",
          "ur-ro": "Practical Driving Test",
          ur: "عملی ڈرائیونگ ٹیسٹ (آن ٹریک)"
        },
        desc: {
          en: "Demonstrate vehicle control on test track: parallel parking, 'L' reverse, and road discipline.",
          "ur-ro": "Track par gaari chala kar 'L' shape reverse aur parking pass karein.",
          ur: "ٹریک پر گاڑی چلا کر ریورس اور پارکنگ کا امتحان پاس کریں۔"
        }
      },
      {
        step: 5,
        title: {
          en: "License Issued & Digital Activation",
          "ur-ro": "License Ka Ajra",
          ur: "ڈیجیٹل لائسنس اور کارڈ کا اجراء"
        },
        desc: {
          en: "Digital license activated immediately in app; physical plastic card posted to your address.",
          "ur-ro": "Digital license foran mobile par active hoga aur plastic card ghar deliver ho jayega.",
          ur: "ڈیجیٹل لائسنس فوری موبائل پر فعال جبکہ اصل کارڈ بذریعہ ڈاک موصول ہوگا۔"
        }
      }
    ],
    fees: {
      "Learner Driving Permit": "PKR 60 - 500",
      "Motorcycle Permanent License (5 Yrs)": "PKR 500 - 1,200",
      "Motorcar / LTV License (5 Yrs)": "PKR 900 - 1,800",
      "Commercial / HTV License": "PKR 1,200 - 2,500",
      "International Driving Permit (IDP)": "PKR 2,000 - 3,500"
    },
    timing: {
      en: "Monday to Saturday: 09:00 AM - 04:00 PM (Selected 24/7 Khidmat Markaz)",
      "ur-ro": "Peer se Hafta: 09:00 AM se 04:00 PM (Khidmat Markaz raat ko bhi khulay hain)",
      ur: "پیر تا ہفتہ: صبح 9:00 تا شام 4:00 (بڑے خدمت مراکز 24 گھنٹے فعال ہیں)"
    },
    officialPortal: "https://dlims.punjab.gov.pk",
    helpline: "Traffic Police Helpline 15",
    advisoryTips: {
      en: [
        "Digital license on your official police app is legally valid for all traffic checks.",
        "If you fail the practical test, you can re-appear after 14 days.",
        "Ensure all vehicle lights, indicators, and mirrors are fully working when bringing car for test."
      ],
      "ur-ro": [
        "Mobile app wala digital license har naakey par qanooni taur par qabil-e-qabool hai.",
        "Agar practical test fail ho jaye toh 14 din baad dobara test diya ja sakta hai.",
        "Test ke liye jo gaari le jayein uske indicators aur mirrors theek hone chahiye."
      ],
      ur: [
        "موبائل ایپ میں موجود ڈیجیٹل لائسنس پولیس چیکنگ کے دوران مکمل طور پر قابل قبول ہے۔",
        "ٹیسٹ فیل ہونے کی صورت میں 14 دن بعد دوبارہ ٹیسٹ دیا جا سکتا ہے۔",
        "ٹیسٹ کے لیے لائی جانے والی گاڑی کے تمام اشارے اور شیشے درست حالت میں ہونے چاہئیں۔"
      ]
    }
  },

  // 4. Domicile
  {
    id: "domicile",
    category: "identity",
    iconKey: "certificate",
    tag: { en: "Public Sector Requirement", "ur-ro": "Naukri & Taleem", ur: "سرکاری ملازمت اور داخلے" },
    title: {
      en: "Domicile & Permanent Residence Certificate (PRC)",
      "ur-ro": "Domicile & PRC Certificate",
      ur: "ڈومیسائل اور پرماننٹ ریذیڈنس سرٹیفکیٹ (PRC)"
    },
    issuingAuthority: {
      en: "Deputy Commissioner Office / District Administration",
      "ur-ro": "DC Office / District Administration",
      ur: "ڈپٹی کمشنر آفس / ضلعی انتظامیہ"
    },
    shortDesc: {
      en: "Official proof of permanent district residence required for provincial admissions and government jobs.",
      "ur-ro": "Sarkari naukriyon aur university admissions ke liye zaroori rehaishi certificate.",
      ur: "سرکاری ملازمتوں اور کالج/یونیورسٹی داخلوں کے لیے مستقل ضلعی رہائش کا قانونی سرٹیفکیٹ۔"
    },
    documents: [
      {
        name: {
          en: "Original CNIC of Applicant (or Form-B) + Copies",
          "ur-ro": "Applicant ka Original CNIC ya Form-B",
          ur: "امیدوار کا اصل قومی شناختی کارڈ یا فارم-بی"
        },
        required: true,
        note: {
          en: "Permanent address on CNIC must match application district",
          "ur-ro": "CNIC par usi zillay ka permanent pata hona chahiye",
          ur: "شناختی کارڈ پر اسی ضلع کا مستقل پتہ درج ہونا ضروری ہے"
        }
      },
      {
        name: {
          en: "Father's CNIC Copy & Domicile Copy",
          "ur-ro": "Walid ka CNIC aur Domicile",
          ur: "والد کے شناختی کارڈ اور ڈومیسائل کی نقل"
        },
        required: true,
        note: {
          en: "If father is deceased, Death Certificate is mandatory",
          "ur-ro": "Walid fot ho chuke hon toh Death Certificate lazmi hai",
          ur: "والد وفات پا چکے ہوں تو ڈیتھ سرٹیفکیٹ درکار ہوگا"
        }
      },
      {
        name: {
          en: "Notarized Affidavit on Official Stamp Paper",
          "ur-ro": "Stamp Paper Par Bayan-e-Halafi (Affidavit)",
          ur: "اشٹام پیپر پر مصدقہ بیان حلفی"
        },
        required: true,
        note: {
          en: "Declaring applicant holds no other district domicile",
          "ur-ro": "Bayan ke kisi aur zillay ka domicile nahi hai",
          ur: "اس بات کا اقرار کہ کسی دوسرے ضلع کا ڈومیسائل موجود نہیں"
        }
      }
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Obtain Form P-1 & e-Stamp Paper",
          "ur-ro": "Form P-1 aur Stamp Paper Lein",
          ur: "فارم P-1 اور ای-اشٹام پیپر کا حصول"
        },
        desc: {
          en: "Collect application form from e-Khidmat center or DC Office revenue branch.",
          "ur-ro": "e-Khidmat Markaz ya DC office se form lein aur affidavit banwayein.",
          ur: "ضلعی ای-خدمت مرکز یا ڈی سی آفس سے فارم اور اشٹام حاصل کریں۔"
        }
      },
      {
        step: 2,
        title: {
          en: "Attestation by Oath Commissioner",
          "ur-ro": "Oath Commissioner Se Tasdeeq",
          ur: "اووتھ کمشنر سے تصدیق"
        },
        desc: {
          en: "Have affidavit signed and verified by a licensed Oath Commissioner.",
          "ur-ro": "Affidavit par Oath Commissioner ki mohar lagwayein.",
          ur: "بیان حلفی پر اووتھ کمشنر کے دستخط اور مہر لگوائیں۔"
        }
      },
      {
        step: 3,
        title: {
          en: "Submission & Revenue Inquiry",
          "ur-ro": "Documents Jama Karwayein",
          ur: "دستاویزات جمع کروانا اور پٹواری تصدیق"
        },
        desc: {
          en: "Submit file at revenue branch. Tehsildar/Patwari verifies permanent address.",
          "ur-ro": "File counter par jama karein, Patwari/Tehsildar pata verify karega.",
          ur: "فائل کاؤنٹر پر جمع کروائیں، ریونیو عملہ پتے کی تصدیق کرے گا۔"
        }
      },
      {
        step: 4,
        title: {
          en: "Final Seal & Collection",
          "ur-ro": "Domicile Wasool Karein",
          ur: "سرکاری مہر شدہ ڈومیسائل کی وصولی"
        },
        desc: {
          en: "Additional Deputy Commissioner signs. Collect certificate with embossed seal.",
          "ur-ro": "ADC ki sign shuda original certificate slip dikha kar collect karein.",
          ur: "ڈپٹی کمشنر کے دستخط شدہ ڈومیسائل کی اصل کاپی حاصل کریں۔"
        }
      }
    ],
    fees: {
      "Government Domicile Fee": "PKR 200 - 300 (Treasury Challan)",
      "E-Stamp Paper & Affidavit": "PKR 100 - 150",
      "Total Estimated Cost": "PKR 350 - 600"
    },
    timing: {
      en: "Monday to Friday: 09:00 AM - 03:00 PM",
      "ur-ro": "Peer se Juma: 09:00 AM se 03:00 PM",
      ur: "پیر تا جمعہ: صبح 9:00 تا دوپہر 3:00"
    },
    officialPortal: "https://citizen.punjab.gov.pk",
    helpline: "Local DC Office Helpline",
    advisoryTips: {
      en: [
        "Holding two domiciles at once is an offense under Pakistan Citizenship Act 1951.",
        "Married women can transfer domicile to husband's district using registered Nikahnama.",
        "Make multiple color photocopies immediately after collecting the original."
      ],
      "ur-ro": [
        "Ek waqt mein do zillon ka domicile rakhna qanoonan jurm hai.",
        "Shadi shuda khawateen Nikahnama dikha kar shohar ke zillay ka domicile banwa sakti hain.",
        "Original milne par uski color photocopiyan karwa kar sambhal lein."
      ],
      ur: [
        "ایک وقت میں دو اضلاع کا ڈومیسائل رکھنا شہریت ایکٹ 1951 کے تحت جرم ہے۔",
        "شادی شدہ خواتین نکاح نامے کی بنیاد پر شوہر کے ضلع کا ڈومیسائل حاصل کر سکتی ہیں۔",
        "اصل ڈومیسائل ملتے ہی اس کی رنگین فوٹو کاپیاں کروا کر محفوظ کر لیں۔"
      ]
    }
  },

  // 5. FBR Tax Filer
  {
    id: "fbr-tax",
    category: "finance",
    iconKey: "tax",
    tag: { en: "High Value Benefit", "ur-ro": "Filer Baniye", ur: "ٹیکس فائلر" },
    title: {
      en: "FBR NTN Registration & Active Taxpayer Status (ATL)",
      "ur-ro": "FBR Tax Filer & NTN Registration",
      ur: "ایف بی آر ٹیکس فائلر اور این ٹی این رجسٹریشن"
    },
    issuingAuthority: {
      en: "Federal Board of Revenue (FBR) — IRIS Portal",
      "ur-ro": "FBR IRIS Portal (Federal Board of Revenue)",
      ur: "فیڈرل بورڈ آف ریونیو (FBR)"
    },
    shortDesc: {
      en: "Complete guide to register your NTN and file annual income returns for Active Taxpayer List (ATL) tax cuts.",
      "ur-ro": "Free NTN registration aur tax return jama karwa kar filer banne ka tareeqa.",
      ur: "گاڑی، پراپرٹی اور بینکنگ پر ٹیکس بچت کے لیے فعال فائلر بننے کا مکمل طریقہ کار۔"
    },
    documents: [
      {
        name: {
          en: "13-Digit CNIC Number (Your CNIC is your NTN)",
          "ur-ro": "13-Digit CNIC Number",
          ur: "13 ہندسوں پر مشتمل قومی شناختی کارڈ نمبر"
        },
        required: true,
        note: {
          en: "For Pakistani individuals, your CNIC is automatically your NTN",
          "ur-ro": "Aap ka CNIC number hi aap ka NTN hai",
          ur: "شناختی کارڈ نمبر ہی بذات خود این ٹی این (NTN) ہے"
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
          en: "Critical for receiving digital verification OTP codes",
          "ur-ro": "OTP verification code aane ke liye zaroori",
          ur: "او ٹی پی (OTP) کوڈ کی وصولی کے لیے"
        }
      },
      {
        name: {
          en: "Personal Bank Account IBAN / 12-Month Statement",
          "ur-ro": "Bank Account IBAN / Statement",
          ur: "بینک اکاؤنٹ کا آئی بی اے این (IBAN) اور اسٹیٹمنٹ"
        },
        required: true,
        note: {
          en: "To declare closing balance and bank account ownership",
          "ur-ro": "Bank balance aur account details declare karne ke liye",
          ur: "بینک بیلنس اور اکاؤنٹ کی تفصیلات کے اندراج کے لیے"
        }
      }
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Register on FBR IRIS Portal",
          "ur-ro": "IRIS Portal Par Register Karein",
          ur: "ایف بی آر آئرس (IRIS) پورٹل پر رجسٹریشن"
        },
        desc: {
          en: "Visit iris.fbr.gov.pk, click 'Registration for Unregistered Person', input CNIC and mobile number.",
          "ur-ro": "iris.fbr.gov.pk par jayein aur apna CNIC aur mobile number enter karein.",
          ur: "ویب سائٹ پر جائیں، شناختی کارڈ اور موبائل نمبر درج کریں۔"
        }
      },
      {
        step: 2,
        title: {
          en: "Dual OTP Authentication",
          "ur-ro": "OTP Code Verify Karein",
          ur: "موبائل اور ای میل او ٹی پی تصدیق"
        },
        desc: {
          en: "Enter the SMS and Email verification codes to activate your login credentials.",
          "ur-ro": "Mobile SMS aur email par aane wale codes enter karke password banayein.",
          ur: "موبائل اور ای میل پر موصول کوڈ درج کر کے پاس ورڈ بنائیں اور لاگ ان کریں۔"
        }
      },
      {
        step: 3,
        title: {
          en: "Fill Annual Income Return & Wealth Statement",
          "ur-ro": "Income aur Assets Enter Karein",
          ur: "آمدن اور اثاثوں کا گوشوارہ (ویلتھ اسٹیٹمنٹ)"
        },
        desc: {
          en: "Input your annual salary/earnings, withholding taxes paid, and declare assets under Section 116.",
          "ur-ro": "Apni saalana aamdani, katoti shuda tax aur property/assets ki maloomat likhein.",
          ur: "سالانہ تنخواہ/آمدن، منہا شدہ ٹیکس اور اثاثہ جات کی تفصیلات درج کریں۔"
        }
      },
      {
        step: 4,
        title: {
          en: "Submit & Instant ATL Activation",
          "ur-ro": "Submit Karein aur Filer Baniye",
          ur: "فارم جمع کروانا اور فائلر لسٹ میں شمولیت"
        },
        desc: {
          en: "Enter your 4-digit PIN and submit. Your status updates to Active Taxpayer (ATL).",
          "ur-ro": "4-digit PIN enter karke submit karein. Aap Active Taxpayer List (ATL) mein aa jayenge.",
          ur: "پن کوڈ درج کر کے فارم جمع کروائیں، آپ کا نام فوری فعال لسٹ میں شامل ہو جائے گا۔"
        }
      }
    ],
    fees: {
      "Individual NTN Registration": "PKR 0 (100% Free Official Government Service)",
      "Online Return Filing Submission": "PKR 0 (Free via official Iris Portal)",
      "Late Surcharge for ATL Inclusion": "PKR 1,000 (Section 182A surcharge if filed after due date)"
    },
    timing: {
      en: "Online Portal: Available 24/7 (Offices: Mon-Fri 09:00 AM - 05:00 PM)",
      "ur-ro": "Online Portal 24 Ghantay Available Hai",
      ur: "آن لائن پورٹل 24 گھنٹے ہر وقت فعال ہے"
    },
    officialPortal: "https://iris.fbr.gov.pk",
    helpline: "051-111-772-772 / helpline@fbr.gov.pk",
    advisoryTips: {
      en: [
        "Active Taxpayers pay up to 50% less tax on banking, car tokens, property, and cash withdrawals.",
        "Salaried persons earning below the taxable limit can file a 'Nil Return' to stay Active.",
        "Never share your Iris PIN or password with unverified third parties."
      ],
      "ur-ro": [
        "Filer banne se gaari ki khareedari, property aur bank transactions par aadha tax lagta hai.",
        "Agar aamdani taxable limit se kam hai tab bhi Nil Return file karke filer bana ja sakta hai.",
        "Apna Iris PIN aur password kisi anjan shakhs ko mat dein."
      ],
      ur: [
        "فائلر بننے سے پراپرٹی، گاڑی اور بینک لین دین پر ودہولڈنگ ٹیکس 50 فیصد تک کم لگتا ہے۔",
        "کم آمدن والے افراد نل ریٹرن (Nil Return) جمع کروا کر فائلر کا درجہ برقرار رکھ سکتے ہیں۔",
        "اپنا آئرس لاگ ان پن اور پاس ورڈ کسی غیر متعلقہ شخص کے ساتھ شیئر نہ کریں۔"
      ]
    }
  },

  // 6. Form-B / Child Registration
  {
    id: "birth-certificate",
    category: "identity",
    iconKey: "child",
    tag: { en: "Child Welfare", "ur-ro": "Bachon Ki Shanakht", ur: "بچوں کا اندراج" },
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
      en: "Official computerized birth registration required for school admissions and minor travel passports.",
      "ur-ro": "Bachon ke school admission aur passport ke liye zaroori computerized Form-B.",
      ur: "سکول داخلے اور بچوں کے پاسپورٹ کے لیے نادرا کا کمپیوٹرائزڈ ب-فارم اور پیدائش کا اندراج۔"
    },
    documents: [
      {
        name: {
          en: "Official Birth Slip from Hospital / Union Council",
          "ur-ro": "Hospital Birth Slip ya Union Council Certificate",
          ur: "ہسپتال کا پیدائشی کارڈ یا یونین کونسل برتھ سرٹیفکیٹ"
        },
        required: true,
        note: {
          en: "Must show date, exact time, and place of child birth",
          "ur-ro": "Paidaish ki tareekh aur maqam wazeh ho",
          ur: "تاریخ، وقت اور مقام پیدائش درج ہونا ضروری ہے"
        }
      },
      {
        name: {
          en: "Original CNIC of Father and Mother",
          "ur-ro": "Walid aur Walida ke Original CNIC",
          ur: "والد اور والدہ کے اصل قومی شناختی کارڈ"
        },
        required: true,
        note: {
          en: "Both parents must have updated marital records at NADRA",
          "ur-ro": "Dono parents ka shadi ka record NADRA mein update ho",
          ur: "والدین کا نکاح کا ریکارڈ نادرا میں درست ہونا ضروری ہے"
        }
      }
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Register Birth at Union Council",
          "ur-ro": "Union Council Mein Name Register Karein",
          ur: "یونین کونسل میں پیدائش کا اندراج"
        },
        desc: {
          en: "Submit hospital birth record slip within 60 days to obtain computerized birth entry.",
          "ur-ro": "Hospital slip 60 din ke andar Union Council mein jama karein.",
          ur: "60 دن کے اندر ہسپتال کی سلپ یونین کونسل میں جمع کروا کر برتھ سرٹیفکیٹ لیں۔"
        }
      },
      {
        step: 2,
        title: {
          en: "Visit NADRA Registration Center",
          "ur-ro": "NADRA Center Jayein",
          ur: "نادرا رجسٹریشن سینٹر تشریف لے جائیں"
        },
        desc: {
          en: "Either parent visits the center with original CNICs and the Union Council birth certificate.",
          "ur-ro": "Walid ya Walida original CNIC aur Union Council certificate le kar jayein.",
          ur: "والدین میں سے کوئی ایک اصل دستاویزات کے ساتھ نادرا کاؤنٹر پر جائے۔"
        }
      },
      {
        step: 3,
        title: {
          en: "Family Tree Verification & Form-B Printing",
          "ur-ro": "Form-B Printing",
          ur: "شجرہ نسب تصدیق اور فارم-بی پرنٹنگ"
        },
        desc: {
          en: "Biometric attestation is completed and official CRC / Form-B is printed.",
          "ur-ro": "Biometric tasdeeq ke baad computerized Form-B print ho kar mil jayega.",
          ur: "بائیو میٹرک تصدیق کے بعد سرکاری سیکیورٹی پیپر پر فارم-بی فوری پرنٹ ہو جائے گا۔"
        }
      }
    ],
    fees: {
      "CRC / Form-B Standard Fee": "PKR 50",
      "Executive / Priority Counter": "PKR 500",
      "Late Registration (After 60 Days)": "PKR 100 - 300 nominal fee"
    },
    timing: {
      en: "Monday to Saturday: 08:30 AM - 04:30 PM",
      "ur-ro": "Peer se Hafta: 08:30 AM se 04:30 PM",
      ur: "پیر تا ہفتہ: صبح 8:30 تا شام 4:30"
    },
    officialPortal: "https://www.nadra.gov.pk",
    helpline: "1777 (Mobile) / +92 51 111 786 100",
    advisoryTips: {
      en: [
        "Ensure child's name spelling in English and Urdu matches school documents exactly.",
        "Registering within 60 days of birth avoids late penalties and extra scrutiny.",
        "Form-B is mandatory for obtaining child's first international travel passport."
      ],
      "ur-ro": [
        "Bache ke naam ke spelling English aur Urdu dono mein dhyan se check karein.",
        "Paidaish ke 60 din ke andar register karwayein taake late fee se bacha ja sake.",
        "Form-B ke baghair bache ka passport nahi ban sakta."
      ],
      ur: [
        "بچے کے نام کے ہجے (Spelling) اردو اور انگریزی دونوں میں اچھی طرح چیک کریں۔",
        "پیدائش کے 60 دن کے اندر اندراج کروانے سے جرمانے سے بچا جا سکتا ہے۔",
        "بچوں کا پاسپورٹ بنوانے کے لیے فارم-بی کا ہونا لازمی ہے۔"
      ]
    }
  },

  // 7. Police Clearance
  {
    id: "police-character",
    category: "security",
    iconKey: "police",
    tag: { en: "Immigration & Employment", "ur-ro": "Visa & Naukri", ur: "امیگریشن اور سیکیورٹی کلیرنس" },
    title: {
      en: "Police Character & Security Clearance Certificate",
      "ur-ro": "Police Character Certificate (Clearance)",
      ur: "پولیس کیریکٹر و سیکیورٹی کلیرنس سرٹیفکیٹ"
    },
    issuingAuthority: {
      en: "City Police Department / Police Khidmat Markaz",
      "ur-ro": "Police Khidmat Markaz / District Police",
      ur: "ضلعی پولیس اور پولیس خدمت مرکز"
    },
    shortDesc: {
      en: "Official verified certificate demonstrating clear criminal background required for foreign study, work visas, and sensitive security jobs.",
      "ur-ro": "Bahar mulk study, work visa ya naukri ke liye police clearance certificate.",
      ur: "بیرون ملک تعلیم، ورک ویزا یا نوکری کے لیے پولیس سے کریکٹر اور سیکیورٹی کلیرنس سرٹیفکیٹ۔"
    },
    documents: [
      {
        name: {
          en: "Original CNIC & 2 Clean Color Copies",
          "ur-ro": "Original CNIC aur 2 Photocopiyan",
          ur: "اصل شناختی کارڈ اور 2 رنگین نقول"
        },
        required: true,
        note: {
          en: "Applicant must reside in issuing police jurisdiction",
          "ur-ro": "Applicant usi sheher/area ka rehaishi ho",
          ur: "امیدوار متعلقہ پولیس تھانے کے دائرہ اختیار کا رہائشی ہو"
        }
      },
      {
        name: {
          en: "Original Passport & Copy of Page 1 and 2",
          "ur-ro": "Passport Photocopy (Agar visa ke liye chahiye)",
          ur: "اصل پاسپورٹ اور پہلے دو صفحات کی نقل"
        },
        required: true,
        note: {
          en: "Mandatory if applying for foreign visa/immigration",
          "ur-ro": "Visa aur immigration ke liye lazmi",
          ur: "بیرون ملک ویزا یا امیگریشن کے لیے لازمی"
        }
      }
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Visit Police Khidmat Markaz",
          "ur-ro": "Police Khidmat Markaz Jayein",
          ur: "پولیس خدمت مرکز تشریف لے جائیں"
        },
        desc: {
          en: "Walk into any PKM center or submit digital application via provincial police portals.",
          "ur-ro": "Qareebi Police Khidmat Markaz jayein aur documents counter par jama karein.",
          ur: "قریبی پولیس خدمت مرکز جائیں اور درخواست جمع کروائیں۔"
        }
      },
      {
        step: 2,
        title: {
          en: "Biometric Record Search",
          "ur-ro": "Biometric Record Search",
          ur: "بائیو میٹرک کرائم ریکارڈ تلاش"
        },
        desc: {
          en: "Officer conducts live biometric fingerprint scan to query the Crime Record Management System (CRMS).",
          "ur-ro": "Ungliyon ke nishan se CRMS police record mein clear status check hoga.",
          ur: "انگلیوں کے نشانات سے کمپیوٹرائزڈ کرائم ریکارڈ میں تصدیق کی جائے گی۔"
        }
      },
      {
        step: 3,
        title: {
          en: "Local Thana Inquiry & QR Certificate Issue",
          "ur-ro": "Thana Inquiry & Certificate Wasooli",
          ur: "تھانہ انکوائری اور سرٹیفکیٹ کا اجراء"
        },
        desc: {
          en: "Local police confirms address and Senior Superintendent of Police (SSP) issues the digital QR certificate.",
          "ur-ro": "Thana se tasdeeq ke baad QR-code wala official certificate jari ho jayega.",
          ur: "تھانے کی توثیق کے بعد ایس ایس پی کے دستخط شدہ کیو آر کوڈ سرٹیفکیٹ جاری ہوگا۔"
        }
      }
    ],
    fees: {
      "Standard Verification Fee": "PKR 350 - 500",
      "Urgent Processing (Metropolitan PKM)": "PKR 1,000"
    },
    timing: {
      en: "Monday to Saturday: 09:00 AM - 05:00 PM (Select urban PKM operate 24/7)",
      "ur-ro": "Peer se Hafta: 09:00 AM se 05:00 PM",
      ur: "پیر تا ہفتہ: صبح 9:00 تا شام 5:00"
    },
    officialPortal: "https://punjabpolice.gov.pk",
    helpline: "Police Emergency: 15 | Call Center: 8787",
    advisoryTips: {
      en: [
        "Specify the exact embassy or country name on the application form as printed on the final certificate.",
        "Overseas Pakistanis can authorize blood relatives via embassy attested Power of Attorney.",
        "Most foreign consulates require the character certificate to be issued within the last 6 months."
      ],
      "ur-ro": [
        "Form mein us mulk ya embassy ka naam wazeh likhein jahan certificate jama karwana hai.",
        "Bahar rehne wale Pakistani apne rishtedaar ko authority letter de kar banwa sakte hain.",
        "Visas ke liye aam taur par 6 mahine se zyada purana certificate qabil-e-qabool nahi hota."
      ],
      ur: [
        "فارم میں اس مخصوص ملک یا سفارت خانے کا نام درست درج کریں جہاں یہ سرٹیفکیٹ جمع ہونا ہے۔",
        "اوورسیز پاکستانی سفارت خانے سے تصدیق شدہ اتھارٹی لیٹر کے ذریعے بنوا سکتے ہیں۔",
        "زیادہ تر سفارت خانے 6 ماہ سے پرانا کیریکٹر سرٹیفکیٹ قبول نہیں کرتے۔"
      ]
    }
  },

  // 8. Electricity Connection
  {
    id: "electricity-connection",
    category: "utilities",
    iconKey: "power",
    tag: { en: "Essential Utility", "ur-ro": "Bijli Connection", ur: "بجلی کا نیا کنکشن" },
    title: {
      en: "New Electricity Connection (Single & Three Phase)",
      "ur-ro": "Bijli Ka Naya Connection (WAPDA / DISCOs)",
      ur: "بجلی کا نیا میٹر / کنکشن (سنگل اور تھری فیز)"
    },
    issuingAuthority: {
      en: "Power Distribution Companies (LESCO, IESCO, K-Electric, MEPCO, PESCO, GEPCO)",
      "ur-ro": "DISCOs (LESCO, IESCO, K-Electric, MEPCO wagaira)",
      ur: "بجلی کی تقسیم کار کمپنیاں (لیسکو، آئیسکو، کے-الیکٹرک، میپکو)"
    },
    shortDesc: {
      en: "Step-by-step procedure to get an approved domestic or commercial power meter installed at your property.",
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
          en: "Must be legally registered owner of the premises",
          "ur-ro": "Property ka legal owner ho",
          ur: "درخواست گزار کا جائیداد کا قانونی مالک ہونا لازمی ہے"
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
          en: "Must clearly specify plot/house number",
          "ur-ro": "Plot ya makan ka number wazeh ho",
          ur: "پلاٹ یا مکان کا نمبر واضح درج ہو"
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
          en: "Used by lineman to locate nearest transformer and pole",
          "ur-ro": "Qareebi khambay aur transformer ki nishandehi ke liye",
          ur: "قریبی ٹرانسفارمر اور کھمبے کی نشاندہی کے لیے"
        }
      }
    ],
    process: [
      {
        step: 1,
        title: {
          en: "Online Application on ENC Portal",
          "ur-ro": "ENC Portal Par Online Apply Karein",
          ur: "ای این سی (ENC) پورٹل پر آن لائن درخواست"
        },
        desc: {
          en: "Submit application digitally at enc.com.pk. Select your distribution company (DISCO) and load.",
          "ur-ro": "enc.com.pk par form fill karein aur apni bijli company select karein.",
          ur: "enc.com.pk پر آن لائن فارم پر کر کے اپنی بجلی کمپنی اور لوڈ منتخب کریں۔"
        }
      },
      {
        step: 2,
        title: {
          en: "Submit Dossier to SDO Office",
          "ur-ro": "SDO Office Mein File Jama Karein",
          ur: "ایس ڈی او (SDO) آفس میں فائل جمع کروانا"
        },
        desc: {
          en: "Print the generated application form and attach property documents to submit to Sub-Divisional Officer (SDO).",
          "ur-ro": "Form print karke property papers ke sath SDO office mein jama karein.",
          ur: "فارم کا پرنٹ لے کر ملکیتی کاغذات کے ساتھ متعلقہ ایس ڈی او آفس جمع کروائیں۔"
        }
      },
      {
        step: 3,
        title: {
          en: "Field Survey & Demand Notice Payment",
          "ur-ro": "Site Survey aur Demand Notice Fee",
          ur: "سائٹ معائنہ اور ڈیمانڈ نوٹس فیس کی ادائیگی"
        },
        desc: {
          en: "Survey team inspects site load feasibility. SDO issues Demand Notice. Pay at bank.",
          "ur-ro": "Field survey ke baad Demand Notice aayega, uski fee bank mein ada karein.",
          ur: "موقع کے معائنے کے بعد ڈیمانڈ نوٹس جاری ہوگا، فیس بینک میں جمع کروائیں۔"
        }
      },
      {
        step: 4,
        title: {
          en: "Wiring Test Report & Meter Installation",
          "ur-ro": "Meter Installation",
          ur: "وائرنگ ٹیسٹ رپورٹ اور میٹر کی تنصیب"
        },
        desc: {
          en: "Submit wiring test report. Lineman installs the digital meter at your premises.",
          "ur-ro": "Electrician ki test report jama karein, lineman aa kar meter install kar dega.",
          ur: "وائرنگ ٹیسٹ رپورٹ جمع کروائیں اور عملہ آ کر میٹر نصب کر دے گا۔"
        }
      }
    ],
    fees: {
      "Single-Phase Domestic Connection": "PKR 5,500 - 9,500 (Subject to cable distance)",
      "Three-Phase Domestic Connection": "PKR 18,000 - 35,000",
      "Commercial Connection": "Calculated on basis of requested load (kW)"
    },
    timing: {
      en: "Monday to Friday: 09:00 AM - 04:00 PM",
      "ur-ro": "Peer se Juma: 09:00 AM se 04:00 PM",
      ur: "پیر تا جمعہ: صبح 9:00 تا شام 4:00"
    },
    officialPortal: "https://enc.com.pk",
    helpline: "Central Power Emergency: 118 | LESCO: 042-99201925",
    advisoryTips: {
      en: [
        "Always apply through official ENC portal to eliminate middlemen commissions.",
        "If planning for rooftop solar, inquire with SDO about transformer Net-Metering capacity.",
        "Verify the meter serial number against the initial inspection slip."
      ],
      "ur-ro": [
        "Hamesha ENC online portal se apply karein taake kisi ko rishwat na deni pare.",
        "Solar panel lagwane ke khwahishmand pehle se Green Meter (Net-metering) ki maloomat lein.",
        "Meter lagte waqt serial number receipt se zaroor match karein."
      ],
      ur: [
        "ہمیشہ سرکاری ای این سی پورٹل سے آن لائن اپلائی کریں تاکہ کسی ایجنٹ کو پیسے نہ دینے پڑیں۔",
        "سولر پینل لگوانے والے پہلے سے نیٹ میٹرنگ کے لیے ٹرانسفارمر گنجائش معلوم کر لیں۔",
        "میٹر لگتے وقت اس کا سیریل نمبر جاری شدہ سلپ سے لازمی چیک کریں۔"
      ]
    }
  }
];
