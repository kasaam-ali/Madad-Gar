// =========================================================================
// PakGov Navigator — Comprehensive Pakistan Citizen Services Directory
// Professional English Edition with Structured Categories & Official Info
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

const SERVICES_DATA = [
  // -------------------------------------------------------------------------
  // 1. NADRA CNIC
  // -------------------------------------------------------------------------
  {
    id: "nadra-cnic",
    category: "identity",
    title: "National Identity Card (CNIC / Smart NIC)",
    issuingAuthority: "National Database & Registration Authority (NADRA)",
    iconKey: "idCard",
    tag: "Most Requested",
    shortDesc: "Complete procedure for Fresh Registration, 10-Year Renewal, Modification, or Lost Card Replacement.",
    estimatedDays: "10 - 15 Working Days",
    documents: [
      { name: "Original Child Registration Certificate (Form-B) or Matric Certificate", required: true, note: "Mandatory for first-time applicants turning 18" },
      { name: "Original CNIC of Father or Mother", required: true, note: "Parent must accompany applicant for biometric attestation or provide attested copy" },
      { name: "Existing/Expired CNIC or Smart Card", required: true, note: "Only required if applying for renewal or modification" },
      { name: "Registered Marriage Certificate (Nikahnama)", required: false, note: "Required for married female citizens updating marital status" },
      { name: "Valid Proof of Residence (Utility Bill / Rent Agreement)", required: false, note: "Only needed if changing permanent/present residential address" }
    ],
    process: [
      {
        step: 1,
        title: "Visit Nearest NADRA Center or Pak-ID Mobile App",
        desc: "Locate your nearest NADRA Registration Center (NRC) or download the official Pak-ID mobile app for digital doorstep verification."
      },
      {
        step: 2,
        title: "Token Generation & Verification",
        desc: "Obtain a registration token at the reception desk. Proceed to the designated data-entry counter when your number is called."
      },
      {
        step: 3,
        title: "Biometric Capture & Data Entry",
        desc: "The officer will capture ten-finger biometrics, digital facial photograph, and electronic iris scan, followed by personal details verification."
      },
      {
        step: 4,
        title: "Attestation & Fee Clearance",
        desc: "If a direct blood relative (Father/Mother/Sibling) is present with their valid CNIC, biometric attestation is completed on spot. Pay official fee at counter."
      },
      {
        step: 5,
        title: "Tracking & Delivery",
        desc: "Collect your printed tracking slip with the unique Application Tracking ID. Track status via SMS (send tracking ID to 8400) or nadra.gov.pk."
      }
    ],
    fees: {
      "Normal Delivery (Smart NIC)": "PKR 750 (Approx. 15 working days)",
      "Urgent Delivery (Smart NIC)": "PKR 1,500 (Approx. 7 working days)",
      "Executive / Same-Day NRC": "PKR 2,500 (Priority queue & fast-track printing)",
      "Modification / Data Correction": "PKR 750 (Regular schedule)"
    },
    timing: "Monday to Saturday: 08:30 AM - 04:30 PM (24/7 at Mega Centers in Karachi, Lahore, Islamabad, Rawalpindi, Peshawar)",
    officialPortal: "https://id.nadra.gov.pk",
    helpline: "1777 (Mobile) / +92 51 111 786 100",
    advisoryTips: [
      "Avoid unofficial commission agents standing outside centers. All data submission and verification must happen directly inside NADRA counters.",
      "Married women can retain their father's name or choose to switch to husband's name; both are officially recognized under current NADRA regulations.",
      "Check your tracking ID on Pak-ID app before visiting the center for collection."
    ]
  },

  // -------------------------------------------------------------------------
  // 2. Machine Readable Passport (MRP & e-Passport)
  // -------------------------------------------------------------------------
  {
    id: "passport",
    category: "travel",
    title: "Machine Readable Passport & e-Passport",
    issuingAuthority: "Directorate General of Immigration & Passports (DGIP)",
    iconKey: "passport",
    tag: "High Demand",
    shortDesc: "Official guidelines for issuing standard 36/72-page travel passports or new biometric e-Passports.",
    estimatedDays: "4 - 10 Working Days",
    documents: [
      { name: "Original Valid CNIC / NICOP / Smart Card + 2 Clean Photocopies", required: true, note: "CNIC must be strictly valid and not expired" },
      { name: "Previous Original Passport & Photocopy of Info Pages", required: true, note: "Mandatory if applying for renewal or page extension" },
      { name: "Official Bank Fee Challan or 'Passport Fee Asaan' Mobile App Receipt", required: true, note: "Paid via National Bank of Pakistan (NBP) or 1Link Online" },
      { name: "Official Departmental NOC (No Objection Certificate)", required: false, note: "Compulsory for Federal/Provincial Government Employees" },
      { name: "Lost Passport Police Report / FIR Certificate", required: false, note: "Compulsory only if previous passport was lost or misplaced" }
    ],
    process: [
      {
        step: 1,
        title: "Fee Payment via 'Passport Fee Asaan' App / 1Link",
        desc: "Generate your digital PSID via the official DGIP portal or Passport Fee Asaan App, and pay via mobile banking, ATM, or any NBP branch."
      },
      {
        step: 2,
        title: "Arrival & Customer Service Desk",
        desc: "Arrive at your regional passport office with your original CNIC and fee payment receipt. Get your queue token generated."
      },
      {
        step: 3,
        title: "Digital Photo & Biometric Station",
        desc: "Proceed to the live digital capture room for portrait photograph acquisition and 10-finger biometric imprint collection."
      },
      {
        step: 4,
        title: "Data Verification & Assistant Director Interview",
        desc: "Review your printed bio-data form thoroughly. Face a brief verification interview before the Assistant Director desk for final sign-off."
      },
      {
        step: 5,
        title: "Collection via Tracking Slip",
        desc: "Retain your token slip. Receive an automated SMS notification once your passport is printed and dispatched to your local branch for pickup."
      }
    ],
    fees: {
      "36 Pages (5 Years) — Normal": "PKR 3,000",
      "36 Pages (5 Years) — Urgent": "PKR 5,000",
      "36 Pages (10 Years) — Normal": "PKR 5,400",
      "36 Pages (10 Years) — Urgent": "PKR 9,000",
      "72 Pages (10 Years) — Normal": "PKR 9,000",
      "e-Passport (Biometric 5-Year)": "PKR 9,000 - 15,000 (Based on speed & page count)"
    },
    timing: "Monday to Thursday: 08:00 AM - 02:00 PM | Friday: 08:00 AM - 12:30 PM",
    officialPortal: "https://dgip.gov.pk",
    helpline: "+92 51 111 344 777",
    advisoryTips: [
      "Select 10-year validity if you travel regularly; it offers superior cost-per-year value and avoids frequent visa re-endorsement headaches.",
      "Most international visa applications require at least 6 months of passport validity remaining before travel date.",
      "Do not laminate the data pages or tamper with barcode stitching."
    ]
  },

  // -------------------------------------------------------------------------
  // 3. Driving License
  // -------------------------------------------------------------------------
  {
    id: "driving-license",
    category: "transport",
    title: "Motor Vehicle Driving License (Learner & Regular)",
    issuingAuthority: "Provincial Traffic Police (Punjab, Sindh, KP, Balochistan, ICT)",
    iconKey: "license",
    tag: "Essential",
    shortDesc: "End-to-end steps to obtain motorcycle, motorcar/jeep (LTV), or heavy transport (HTV) driving licenses.",
    estimatedDays: "42 Days Mandatory Learner Period",
    documents: [
      { name: "Original Computerized National Identity Card (CNIC)", required: true, note: "Applicant must be minimum 18 years of age" },
      { name: "Medical Fitness Certificate (Form B signed by Authorized Medical Officer)", required: true, note: "Required for applicants over 50 years or heavy vehicle categories" },
      { name: "Valid Learner Driving Permit", required: true, note: "Must have completed minimum 42 days holding period before practical exam" },
      { name: "Two Passport-Sized Photographs (Plain Background)", required: true, note: "Required for manual archiving files" },
      { name: "Prescribed Traffic Ticket / E-Challan Fee Slip", required: true, note: "Purchased at designated postal centers or digital e-pay portals" }
    ],
    process: [
      {
        step: 1,
        title: "Issue Learner Permit (DLIMS / Police Khidmat Markaz)",
        desc: "Apply online via provincial portal (e.g. dlims.punjab.gov.pk) or walk into any Police Khidmat Markaz with your CNIC to get your Learner Permit issued instantly."
      },
      {
        step: 2,
        title: "42-Day Mandatory Training Period",
        desc: "Law mandates a 42-day practice period. Study standard road safety signs, right-of-way regulations, and defensive driving techniques."
      },
      {
        step: 3,
        title: "Theoretical Sign Test (Touchscreen / Paper)",
        desc: "Book your appointment after 42 days. Clear the computerized visual traffic sign and road regulatory multiple-choice test."
      },
      {
        step: 4,
        title: "Practical On-Track Driving Test",
        desc: "Demonstrate vehicle control on the test track: parallel parking, 'L' shape reverse maneuvers, smooth gradient start, and road lane discipline."
      },
      {
        step: 5,
        title: "Automated Card Dispatch",
        desc: "Upon clearing both exams, your digital driving license is activated immediately on the mobile app, and the physical plastic card is posted to your address."
      }
    ],
    fees: {
      "Learner Driving Permit": "PKR 60 - 500 (Varies by province/category)",
      "Motorcycle Permanent License (5 Yrs)": "PKR 500 - 1,200",
      "Motorcar / LTV License (5 Yrs)": "PKR 900 - 1,800",
      "Commercial / HTV License": "PKR 1,200 - 2,500",
      "International Driving Permit (IDP)": "PKR 2,000 - 3,500 (Valid for 1 year abroad)"
    },
    timing: "Monday to Saturday: 09:00 AM - 04:00 PM (Khidmat Markaz facilities operate extended/night shifts in major metropolitan areas)",
    officialPortal: "https://dlims.punjab.gov.pk",
    helpline: "Provincial Traffic Police Helpline 15 or 042-99201390",
    advisoryTips: [
      "You can now carry the digital QR-verified license on your smartphone via official provincial police apps.",
      "Failing the practical test allows a re-take opportunity typically after 14 days without re-paying complete registration fee.",
      "Bring your own vehicle in clean working order (functioning indicators, mirrors, brake lights) for the practical test."
    ]
  },

  // -------------------------------------------------------------------------
  // 4. Domicile & Permanent Residence Certificate
  // -------------------------------------------------------------------------
  {
    id: "domicile",
    category: "identity",
    title: "Domicile & Permanent Residence Certificate (PRC)",
    issuingAuthority: "Deputy Commissioner Office / District Administration",
    iconKey: "certificate",
    tag: "Public Sector Requirement",
    shortDesc: "Official proof of permanent district residence required for provincial admissions, CSS/PMS exams, and civil service quota jobs.",
    estimatedDays: "7 - 14 Working Days",
    documents: [
      { name: "Original CNIC of Applicant (or Form-B if under 18) + Copies", required: true, note: "Permanent address on CNIC should correspond to the application district" },
      { name: "Father's CNIC Copy & Domicile Copy", required: true, note: "If father is deceased, Death Certificate is mandatory" },
      { name: "Matriculation Certificate / Academic Degree Copies", required: true, note: "Proof of schooling within the district" },
      { name: "Registered Property Document / Allotment Letter / Electricity Bill", required: true, note: "Authentic physical evidence of residential standing" },
      { name: "Notarized Affidavit on Official Stamp Paper (PKR 50 - 100)", required: true, note: "Declaring applicant holds no other district domicile in Pakistan" },
      { name: "Two Respectable Local Resident Attestations / Copies of CNICs", required: true, note: "To establish community lineage and verification" }
    ],
    process: [
      {
        step: 1,
        title: "Download or Collect Domicile Application Form 'P-1'",
        desc: "Obtain Form P-1 from your district Citizen Facilitation Center (e-Khidmat) or Deputy Commissioner's revenue office."
      },
      {
        step: 2,
        title: "Affidavit & Notary Clearance",
        desc: "Purchase an e-stamp paper from the Treasury/Bank counter. Have the affidavit stamped and signed by an authorized Oath Commissioner."
      },
      {
        step: 3,
        title: "Document Submission & Challan Payment",
        desc: "Submit your dossier along with required passport photographs at the revenue branch. Pay the standard treasury receipt."
      },
      {
        step: 4,
        title: "Field Inquiry & Revenue Officer Verification",
        desc: "The file is routed to the local Halqa Patwari or Tehsildar for address verification to ensure no dual-domicile fraud."
      },
      {
        step: 5,
        title: "Final Seal & Collection",
        desc: "The Additional Deputy Commissioner (General) signs the certificate. Collect the signed document with official embossed security seal."
      }
    ],
    fees: {
      "Government Domicile Fee": "PKR 200 - 300 (Treasury Challan)",
      "E-Stamp Paper & Affidavit": "PKR 100 - 150",
      "Total Estimated Administrative Cost": "PKR 350 - 600"
    },
    timing: "Monday to Friday: 09:00 AM - 03:00 PM",
    officialPortal: "https://citizen.punjab.gov.pk",
    helpline: "Local District Administration / DC Office Exchange",
    advisoryTips: [
      "Holding two domiciles simultaneously is an offense punishable under the Pakistan Citizenship Act 1951.",
      "For female candidates married to residents of another district, you can legally transfer domicile to husband's district using your Nikahnama.",
      "Get multiple attested color copies immediately after receiving the original document."
    ]
  },

  // -------------------------------------------------------------------------
  // 5. FBR NTN & Income Tax Filer Status
  // -------------------------------------------------------------------------
  {
    id: "fbr-tax",
    category: "finance",
    title: "FBR NTN Registration & Active Taxpayer Filer Status",
    issuingAuthority: "Federal Board of Revenue (FBR) — IRIS Portal",
    iconKey: "tax",
    tag: "High Value Benefit",
    shortDesc: "Complete guide to register your National Tax Number (NTN) and file annual income returns for Active Taxpayer List (ATL) benefits.",
    estimatedDays: "Instant Digital Enrollment",
    documents: [
      { name: "13-Digit Computerized National Identity Card (CNIC)", required: true, note: "For Pakistani individuals, your CNIC is automatically your NTN" },
      { name: "Personal Mobile Number (Must be registered on applicant's own CNIC)", required: true, note: "Critical for receiving digital verification OTP codes" },
      { name: "Active Personal Email Address", required: true, note: "Official system credentials and acknowledgment slips are emailed here" },
      { name: "Personal Bank Account IBAN / 12-Month Bank Statement", required: true, note: "To declare closing balance and bank account ownership" },
      { name: "Employer Salary Certificate or Annual Income Proof", required: true, note: "Showing gross salary, tax deducted under Section 149, and allowances" },
      { name: "Personal Asset Details (Vehicles, Real Estate, Gold, Shares)", required: false, note: "Required when filing Wealth Statement under Section 116" }
    ],
    process: [
      {
        step: 1,
        title: "Digital Enrollment on FBR IRIS Portal",
        desc: "Navigate to iris.fbr.gov.pk and select 'Registration for Unregistered Person'. Input your CNIC, cell service provider, phone number, and email."
      },
      {
        step: 2,
        title: "OTP Dual Authentication",
        desc: "Input the two distinct 6-digit authentication codes received on your mobile SMS and registered email address to receive your Iris Login PIN."
      },
      {
        step: 3,
        title: "Access 'Declaration' Form (Salary / Business Return)",
        desc: "Log in with your CNIC and password. Open 'Declaration' -> 'Annual Return for Individual (Salary / Business)'. Select the relevant tax year."
      },
      {
        step: 4,
        title: "Input Receipts, Taxes Deducted & Wealth Statement",
        desc: "Enter your annual earnings, withholding taxes paid (mobile balance deductions, vehicle token tax, bank withholding), and balance your net wealth."
      },
      {
        step: 5,
        title: "Verification PIN & Instant Submission",
        desc: "Enter your 4-digit electronic signature PIN and hit Submit. Download the CPR and official Acknowledgment Slip. Your status updates to Active (ATL)."
      }
    ],
    fees: {
      "Individual NTN Registration": "PKR 0 (100% Free Official Government Service)",
      "Online Return Filing Submission": "PKR 0 (Free via official Iris Portal)",
      "Late Surcharge for ATL Inclusion (Post-Deadline)": "PKR 1,000 (Section 182A surcharge to instantly reactivate filer status)"
    },
    timing: "Online IRIS Portal: Available 24 Hours / 7 Days a Week",
    officialPortal: "https://iris.fbr.gov.pk",
    helpline: "051-111-772-772 / helpline@fbr.gov.pk",
    advisoryTips: [
      "Active Taxpayer List (ATL) members pay up to 50% lower withholding tax on banking transactions, vehicle token tax, property purchase, and prize winnings.",
      "Salary persons whose income is below the statutory taxable threshold are still strongly advised to file a 'Nil Return' to maintain Active status.",
      "Never share your Iris PIN or password with third parties without keeping personal oversight."
    ]
  },

  // -------------------------------------------------------------------------
  // 6. NADRA Form-B / Child Registration Certificate (CRC)
  // -------------------------------------------------------------------------
  {
    id: "birth-certificate",
    category: "identity",
    title: "Child Registration Certificate (Form-B / CRC)",
    issuingAuthority: "NADRA & Local Union Councils",
    iconKey: "child",
    tag: "Child Welfare",
    shortDesc: "Official birth registration and computerized child identification document required for school admissions and minor passports.",
    estimatedDays: "Same-Day to 3 Working Days",
    documents: [
      { name: "Official Birth Registration Slip issued by Hospital / Union Council", required: true, note: "Must show date, exact time, and place of child birth" },
      { name: "Original CNIC of Father and Mother", required: true, note: "Both parents must be registered with updated marital records at NADRA" },
      { name: "Registered Nikahnama / Marriage Certificate", required: true, note: "To establish lawful parental lineage" },
      { name: "Child's Physical Presence", required: false, note: "Only required if biometric facial photograph is being enrolled for minors above 10 years" }
    ],
    process: [
      {
        step: 1,
        title: "Register Birth at Union Council / Cantonment Board",
        desc: "Within 60 days of childbirth, submit hospital birth record slip to your local Union Council to obtain computerized birth entry certificate."
      },
      {
        step: 2,
        title: "Visit Nearest NADRA Registration Center",
        desc: "Either parent (Father or Mother) can visit the center with their original CNICs and the Union Council birth certificate."
      },
      {
        step: 3,
        title: "Family Tree Verification & Biometrics",
        desc: "NADRA operator enters child's exact name spelling, date of birth, and checks lineage consistency against parents' family tree."
      },
      {
        step: 4,
        title: "Attestation & Printing",
        desc: "Parent completes fingerprint attestation. The official security paper Child Registration Certificate (CRC) is printed."
      }
    ],
    fees: {
      "CRC / Form-B Standard Fee": "PKR 50",
      "Executive / Priority Counter": "PKR 500",
      "Late Union Council Registration (After 60 Days)": "PKR 100 - 300 nominal local fee"
    },
    timing: "Monday to Saturday: 08:30 AM - 04:30 PM",
    officialPortal: "https://www.nadra.gov.pk",
    helpline: "1777 (Mobile) / +92 51 111 786 100",
    advisoryTips: [
      "Ensure the spelling of the child's name in English and Urdu matches exactly with hospital and school documentation to avoid future legal name-correction petitions.",
      "Registering before 60 days of birth saves significant administrative scrutiny and late penalties.",
      "Form-B is mandatory for obtaining child's first international travel passport."
    ]
  },

  // -------------------------------------------------------------------------
  // 7. Police Character Certificate / Clearance
  // -------------------------------------------------------------------------
  {
    id: "police-character",
    category: "security",
    title: "Police Character & Security Clearance Certificate",
    issuingAuthority: "City Police Department / Police Khidmat Markaz",
    iconKey: "police",
    tag: "Immigration & Employment",
    shortDesc: "Official verified certificate demonstrating clear criminal background required for foreign study, work visas, and sensitive security jobs.",
    estimatedDays: "3 - 7 Working Days",
    documents: [
      { name: "Original CNIC & 2 Clean Color Photocopies", required: true, note: "Applicant must reside in the issuing police jurisdiction" },
      { name: "Original Passport & Copy of Page 1 and 2", required: true, note: "Mandatory if applying for foreign visa/immigration purposes" },
      { name: "Recent Passport Size Photographs (White Background)", required: true, note: "For physical certificate embossing" },
      { name: "Proof of Address (Utility Bill / Tenancy Registry)", required: true, note: "Corroborating continuous residence in police beat area" },
      { name: "Authority Letter with CNIC of Authorized Relative", required: false, note: "Only applicable if applicant is currently residing abroad" }
    ],
    process: [
      {
        step: 1,
        title: "Visit Police Khidmat Markaz (PKM) or Apply Online",
        desc: "Walk into any PKM center or submit digital application via provincial citizen police portals (e.g. punjabpolice.gov.pk)."
      },
      {
        step: 2,
        title: "Data Logging & Biometric Record Search",
        desc: "Officer conducts live biometric fingerprint scan to query the Crime Record Management System (CRMS) database across all police stations."
      },
      {
        step: 3,
        title: "Local Police Station (Thana) Inquiry",
        desc: "Your file is routed to your local police jurisdiction beat officer to confirm physical residence, moral character, and absence of pending court warrants."
      },
      {
        step: 4,
        title: "Verification & Embossed Certificate Issue",
        desc: "Upon clearance report, the Senior Superintendent of Police (SSP / DPO) issues the digital QR-authenticated Character Certificate."
      }
    ],
    fees: {
      "Standard Verification Fee": "PKR 350 - 500",
      "Urgent Processing (Metropolitan PKM)": "PKR 1,000",
      "Apostille / Ministry of Foreign Affairs Attestation": "Separate fee if attestation needed for abroad"
    },
    timing: "Monday to Saturday: 09:00 AM - 05:00 PM (Select urban PKM kiosks operate 24/7)",
    officialPortal: "https://punjabpolice.gov.pk",
    helpline: "Police Emergency: 15 | Citizen Call Center: 8787",
    advisoryTips: [
      "Ensure you specify the exact foreign country or embassy name in the application form as printed on the final certificate.",
      "Overseas Pakistanis can authorize blood relatives via embassy attested Power of Attorney.",
      "Most foreign consulates require the character certificate to be issued within the last 6 months."
    ]
  },

  // -------------------------------------------------------------------------
  // 8. New Electricity Connection
  // -------------------------------------------------------------------------
  {
    id: "electricity-connection",
    category: "utilities",
    title: "New Electricity Connection (Single & Three Phase)",
    issuingAuthority: "Power Distribution Companies (LESCO, IESCO, K-Electric, MEPCO, PESCO, GEPCO, HESCO, QESCO)",
    iconKey: "power",
    tag: "Essential Utility",
    shortDesc: "Comprehensive step-by-step procedure to get an approved domestic or commercial power meter installed at your property.",
    estimatedDays: "14 - 30 Working Days",
    documents: [
      { name: "CNIC of Property Owner / Applicant + Attested Photocopies", required: true, note: "Must be legally registered owner of the premises" },
      { name: "Proof of Ownership (Registered Sale Deed, Fard Malkiat, Allotment Order)", required: true, note: "Must clearly specify plot/house number" },
      { name: "Neighboring Active Electricity Bill Copy", required: true, note: "Used by lineman to locate nearest transformer and supply pole" },
      { name: "Owner's No Objection Certificate (NOC)", required: false, note: "Mandatory if tenant/commercial occupant is applying on owner's behalf" },
      { name: "Approved Building Map / Site Plan from Local Development Authority", required: false, note: "Required for commercial plazas or newly regularized housing societies" },
      { name: "Undertaking on Notarized Stamp Paper (PKR 50 - 100)", required: true, note: "Declaring no outstanding power theft fines on property" }
    ],
    process: [
      {
        step: 1,
        title: "Online Application via ENC Portal (Electricity New Connection)",
        desc: "Submit application digitally at enc.com.pk. Select your distribution company (DISCO), sub-division, tariff category (Domestic/Commercial), and load (kW)."
      },
      {
        step: 2,
        title: "Print & Submit Application Dossier",
        desc: "Print the generated application form, attach verified property documents, and submit to the relevant Sub-Divisional Officer (SDO) office."
      },
      {
        step: 3,
        title: "Field Survey & Site Feasibility Inspection",
        desc: "DISCO field survey team inspects the site, checks wire distance from transformer, and verifies load capacity."
      },
      {
        step: 4,
        title: "Issuance & Payment of Demand Notice",
        desc: "SDO issues the official Demand Notice containing connection fee and security deposit. Pay at any designated commercial bank."
      },
      {
        step: 5,
        title: "Wiring Test Report & Meter Installation",
        desc: "Submit approved electrician wiring test report along with paid demand notice slip. Lineman installs the digital meter."
      }
    ],
    fees: {
      "Single-Phase Domestic Connection": "PKR 5,500 - 9,500 (Subject to cable distance & DISCO tariff)",
      "Three-Phase Domestic Connection": "PKR 18,000 - 35,000 (Includes high-capacity meter & security)",
      "Commercial / Industrial Connection": "Calculated on basis of requested sanctioned load (kW)",
      "Net Metering Solar Bi-Directional Meter": "Additional application fee for two-way green meter"
    },
    timing: "Monday to Friday: 09:00 AM - 04:00 PM",
    officialPortal: "https://enc.com.pk",
    helpline: "Central Power Emergency: 118 | LESCO: 042-99201925 | IESCO: 051-9252933",
    advisoryTips: [
      "Always apply through the official ENC (Electricity New Connection) digital portal to eliminate arbitrary delays and middlemen commissions.",
      "If planning for rooftop solar setup, inquire with your SDO about transformer capacity for Net-Metering sanction during new connection stage.",
      "Check meter serial number against the initial inspection slip when the installer sets up the physical hardware."
    ]
  }
];
