// Eugene Solutions LLC — Global Site Configuration
// Build Date: February 23, 2026
// Source: https://eugenesolutionsllc.net/

export const COMPANY = {
  name: "Eugene Solutions LLC",
  tagline: "Your Complete Accounting, Tax & Financial Solutions Partner",
  subTagline: "IRS Authorized E-File Provider | PTIN Verified | GLBA Compliant",
  phone: "(407) 810-5368",
  phoneRaw: "4078105368",
  email: "Support@Eugenesolutionsllc.net",
  website: "https://eugenesolutionsllc.net",
  newSite: "https://eugenesolutions.com",
  address: {
    region: "Southeast United States",
    serviceArea: "All 50 States (Virtual) | Southeast Physical Locations",
    full: "Southeast Region — Serving All 50 States Virtually"
  },
  hours: {
    monday: "9:00 AM — 5:00 PM",
    tuesday: "9:00 AM — 5:00 PM",
    wednesday: "9:00 AM — 5:00 PM",
    thursday: "9:00 AM — 5:00 PM",
    friday: "9:00 AM — 5:00 PM",
    saturday: "By Appointment",
    sunday: "By Appointment",
    standard: "Mon–Fri 9:00 AM — 5:00 PM",
    weekends: "Sat–Sun By Appointment",
    taxSeason: "Mon–Sat 8:00 AM — 9:00 PM, Sun 10:00 AM — 6:00 PM (Jan 15 – Apr 15)",
    offSeason: "Mon–Fri 9:00 AM — 5:00 PM | Sat–Sun By Appointment"
  },
  social: {
    facebook: "https://facebook.com/eugenesolutionsllc",
    twitter: "https://twitter.com/eugenesolutions",
    linkedin: "https://linkedin.com/company/eugene-solutions-llc",
    instagram: "https://instagram.com/eugenesolutions"
  },
  credentials: {
    ptin: "Active — Renewed 2026",
    efin: "Authorized IRS E-File Provider",
    glba: "GLBA Safeguards Rule Compliant",
    wisp: "Written Information Security Plan Active",
    insurance: "E&O Insurance Active",
    irs_circular_230: "Subject to IRS Circular 230",
    coverage: "Certified to Service All 50 States"
  },
  disclaimer: `IRS Circular 230 Disclosure: Eugene Solutions LLC is a licensed tax preparation and accounting services agency. Information provided on this website is for general informational purposes only and does not constitute tax, legal, or accounting advice. Tax situations vary — consult a qualified tax professional before making financial decisions. Eugene Solutions LLC is subject to IRS Circular 230.`,
  privacy_disclosure: `Eugene Solutions LLC collects and safeguards your personal and financial information in accordance with the Gramm-Leach-Bliley Act (GLBA) and the FTC Safeguards Rule. We do not sell your personal information. See our full Privacy Notice for details.`,
  referral: "Ask about our referral program today! Refer a friend and earn rewards."
}

export const PRICING = {
  individual: [
    { form: "1040 (Simple — W-2 only)", price: 175, description: "Single or MFJ, W-2 income only" },
    { form: "1040 (Standard)", price: 250, description: "Itemized deductions, multiple W-2s" },
    { form: "1040 (Complex)", price: 350, description: "Multiple income sources, credits" },
    { form: "1040 + Schedule A", price: 320, description: "Itemized deductions" },
    { form: "1040 + Schedule B", price: 295, description: "Interest and dividend income" },
    { form: "1040 + Schedule D", price: 395, description: "Capital gains and losses" },
    { form: "1040 + Schedule E", price: 450, description: "Rental income and royalties" },
  ],
  business: [
    { form: "Schedule C (Self-Employed)", price: 450, description: "Sole proprietor / freelancer" },
    { form: "Schedule C (Complex)", price: 850, description: "High revenue, multiple categories" },
    { form: "S-Corporation (1120-S)", price: 1200, description: "S-Corp with K-1 distribution" },
    { form: "Partnership (1065)", price: 1100, description: "Partnership return with K-1s" },
    { form: "C-Corporation (1120)", price: 1400, description: "C-Corp federal return" },
    { form: "Non-Profit (990)", price: 950, description: "Tax-exempt organization return" },
  ],
  addons: [
    { service: "State Tax Return (per state)", price: 75, note: "" },
    { service: "ITIN Application (W-7)", price: 150, note: "" },
    { service: "Amended Return (1040-X)", price: 200, note: "" },
    { service: "IRS Audit Representation", price: 350, note: "per hour" },
    { service: "Tax Planning Consultation", price: 200, note: "per hour" },
    { service: "Prior Year Return (per year)", price: 275, note: "" },
    { service: "Bank Product (RAC)", price: 45, note: "" },
    { service: "Refund Transfer", price: 45, note: "" },
    { service: "Government Contracting Consultation", price: 300, note: "per hour" },
  ]
}

export const SERVICES = [
  {
    id: "tax-preparation",
    title: "Tax Preparation",
    icon: "fa-solid fa-file-invoice-dollar",
    emoji: "📋",
    description: "Expert preparation of Form 1040 and all schedules for individuals and families. We maximize your refund while ensuring full IRS compliance. Rely on us for your state income tax returns, tax audit help, and most importantly, maximizing your return.",
    features: [
      "All 1040 schedules (A, B, C, D, E, SE)",
      "EITC & Child Tax Credit optimization",
      "State income tax returns — all 50 states",
      "Same-day IRS e-filing",
      "Tax audit assistance",
      "Refund maximization guaranteed"
    ],
    extendedDescription: "Checklist to help Taxpayers choose Tax Preparer — visit IRS.gov for guidance.",
    irsLink: "https://www.irs.gov/newsroom/heres-a-short-checklist-to-help-taxpayers-choose-a-tax-preparer-for-the-upcoming-filing-season"
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping",
    icon: "fa-solid fa-book-open",
    emoji: "📚",
    description: "Bookkeeping is an essential part of money management in business. Bookkeepers are in charge of day-to-day tactical tasks — they record and track a company's financial transactions to ensure that records are accurate and well-organized, taking you out of the task.",
    features: [
      "Day-to-day financial transaction recording",
      "Accurate record organization",
      "Monthly bookkeeping services",
      "Payroll processing & compliance",
      "941/944 quarterly filing",
      "W-2/1099 issuance",
      "QuickBooks integration"
    ]
  },
  {
    id: "accounting",
    title: "Accounting",
    icon: "fa-solid fa-calculator",
    emoji: "🧮",
    description: "Accounting is the future of finance. An accountant is essential in a company — they keep track of income and expenses and maintain statutory compliance, which can help in future business decisions.",
    features: [
      "Income & expense tracking",
      "Statutory compliance management",
      "Financial statement preparation",
      "Business decision support",
      "Tax planning & strategy",
      "Year-end financial reviews"
    ]
  },
  {
    id: "government-contracting",
    title: "Government Contracting",
    icon: "fa-solid fa-landmark",
    emoji: "🏛️",
    description: "We specialize in delivering comprehensive government contracting services targeted to the specific requirements of businesses seeking to engage with federal, state, or local government entities. Our staff specializes in negotiating the complexity of government procurement processes, ensuring regulatory compliance, and optimizing prospects for successful bids.",
    features: [
      "Federal, state & local contracting",
      "Government procurement navigation",
      "Regulatory compliance assurance",
      "Bid optimization & strategy",
      "Contract execution support",
      "SAM.gov registration assistance"
    ]
  },
  {
    id: "business-tax",
    title: "Business Tax Returns",
    icon: "fa-solid fa-building",
    emoji: "🏢",
    description: "Comprehensive business tax preparation for sole proprietors, S-Corps, partnerships, C-Corps, and non-profits. We specialize in personal, state, and business income tax returns, ensuring your business runs efficiently.",
    features: [
      "Schedule C through Form 1120",
      "S-Corp (1120-S) & Partnership (1065)",
      "Entity selection advice",
      "Payroll tax compliance",
      "Quarterly estimates",
      "Multi-state filings — all 50 states"
    ]
  },
  {
    id: "tax-planning",
    title: "Tax Planning & Strategy",
    icon: "fa-solid fa-chart-line",
    emoji: "📊",
    description: "Year-round proactive tax planning to minimize your tax liability legally and maximize savings. We'll help you develop a funding strategy from the ground up so you can achieve your personal and professional goals.",
    features: [
      "Year-round proactive planning",
      "Retirement planning",
      "Investment tax strategy",
      "Business structure optimization",
      "Funding strategy development",
      "Personal & professional goal alignment"
    ]
  },
  {
    id: "irs-representation",
    title: "IRS Audit Representation",
    icon: "fa-solid fa-shield-halved",
    emoji: "🛡️",
    description: "Licensed professional representation before the IRS for audits, appeals, and collections. Don't face the IRS alone — our experts negotiate on your behalf.",
    features: [
      "Power of Attorney (Form 2848)",
      "Full audit defense",
      "Offer in Compromise",
      "Installment agreements",
      "Penalty abatement",
      "Back tax resolution"
    ]
  },
  {
    id: "itin-services",
    title: "ITIN & Notary Services",
    icon: "fa-solid fa-globe",
    emoji: "🌐",
    description: "IRS-approved Certifying Acceptance Agent for ITIN applications. Serving all communities with multi-language support.",
    features: [
      "W-7 ITIN applications",
      "CAA certified agent",
      "Document certification",
      "Multi-language support",
      "Notary services"
    ]
  }
]

export const TESTIMONIALS = [
  {
    name: "Maria G.",
    role: "Small Business Owner",
    quote: "Eugene Solutions found deductions I never knew existed. My refund was $3,200 more than what I got last year. They really know how to maximize every dollar you deserve.",
    rating: 5,
    result: "$3,200 additional refund"
  },
  {
    name: "David C.",
    role: "Freelance Contractor",
    quote: "As a self-employed contractor, my taxes are complicated. The team handled everything — Schedule C, estimated payments, home office deduction. Completely stress-free.",
    rating: 5,
    result: "100% IRS compliance"
  },
  {
    name: "Sandra W.",
    role: "Retiree",
    quote: "I was being audited and terrified. Eugene Solutions represented me before the IRS and resolved everything. They saved me over $8,000 in penalties. True professionals.",
    rating: 5,
    result: "$8,000+ in penalties saved"
  },
  {
    name: "James M.",
    role: "S-Corp Owner",
    quote: "Switched to Eugene Solutions for my S-Corp returns. The difference in quality is night and day. They actually understand business tax law and government contracting requirements.",
    rating: 5,
    result: "Optimized S-Corp distributions"
  },
  {
    name: "Patricia R.",
    role: "Single Mother",
    quote: "They helped me claim EITC and child tax credits I didn't even know I qualified for. Got my refund in 10 days. My kids' lives changed because of this team.",
    rating: 5,
    result: "EITC + CTC optimized"
  },
  {
    name: "Robert T.",
    role: "Government Contractor",
    quote: "Eugene Solutions helped me navigate government contracting requirements and ensured all my tax filings were compliant. Their expertise across all 50 states is unmatched.",
    rating: 5,
    result: "Full government compliance"
  }
]

export const FAQ_DATA = [
  {
    q: "What documents do I need to bring for my tax appointment?",
    a: "Bring all W-2s, 1099s (1099-NEC, 1099-MISC, 1099-INT, 1099-DIV, 1099-B, 1099-R), your prior year tax return, Social Security cards for all filers and dependents, valid photo ID, and bank account/routing numbers for direct deposit. For business returns, also bring profit & loss statements, expense receipts, and mileage logs."
  },
  {
    q: "How long does it take to prepare my tax return?",
    a: "Most individual returns (Form 1040) are completed within 24-48 hours of receiving all documents. Complex business returns (S-Corp, Partnership) typically take 3-5 business days. We offer same-day e-filing for simple returns when you provide all documents at your appointment."
  },
  {
    q: "What is your IRS e-file acceptance rate?",
    a: "Our IRS e-file acceptance rate is 99.8% — significantly above the industry average. This means your return is prepared correctly the first time, reducing the chance of IRS delays, rejections, or audits."
  },
  {
    q: "Do you offer Refund Advance or Refund Transfer products?",
    a: "Yes. We offer Refund Anticipation Checks (RAC) which allow you to pay for tax preparation fees from your refund. Bank product fees ($45) are separate from our preparation fees. All bank products are subject to third-party financial institution approval."
  },
  {
    q: "Are your tax preparers licensed and verified?",
    a: "Absolutely. Every preparer at Eugene Solutions LLC holds a current IRS Preparer Tax Identification Number (PTIN), renewed annually. We are an IRS-authorized e-file provider (EFIN verified) and subject to IRS Circular 230 professional standards."
  },
  {
    q: "Do you serve all 50 states?",
    a: "Yes! Eugene Solutions LLC is certified to cover all 50 states virtually. We also have physical locations in the Southeast region. Whether you need in-person or virtual service, we've got you covered."
  },
  {
    q: "What is the GLBA and why does it matter to me?",
    a: "The Gramm-Leach-Bliley Act (GLBA) is a federal law that requires financial institutions — including tax preparers — to protect your personal financial information. Eugene Solutions LLC is fully GLBA compliant, maintaining a Written Information Security Plan (WISP), AES-256 encryption, and strict access controls. Your data is safe with us."
  },
  {
    q: "Can you help if I'm being audited by the IRS?",
    a: "Yes. We provide full IRS audit representation. We will prepare all documentation, communicate with the IRS on your behalf using Power of Attorney (Form 2848), and represent you at audit meetings. Our audit defense team has resolved hundreds of cases successfully."
  },
  {
    q: "Do you offer government contracting services?",
    a: "Yes. We specialize in delivering comprehensive government contracting services for businesses seeking to engage with federal, state, or local government entities. Our staff navigates government procurement processes, ensures regulatory compliance, and optimizes your prospects for successful bids."
  },
  {
    q: "Do you prepare returns for previous tax years?",
    a: "Yes. We prepare prior year returns going back up to 6 years. Each prior year return is $275. This is important for clients who need to catch up on unfiled returns or amend previous filings."
  },
  {
    q: "What if I'm self-employed or have a side hustle?",
    a: "We specialize in self-employment tax (Schedule C). We'll ensure you claim all legitimate business deductions — home office, mileage, equipment, health insurance, retirement contributions, and more. We also help with quarterly estimated tax payments to avoid underpayment penalties."
  },
  {
    q: "Do you have a referral program?",
    a: "Yes! Ask about our referral program today. Refer a friend to Eugene Solutions LLC and earn rewards. Contact us for full details on our referral incentives."
  },
  {
    q: "Do you offer payment plans for your services?",
    a: "Yes. We offer several payment options: pay at time of service, deduct fees from your refund via RAC ($45 bank product fee), or set up a payment plan for larger business returns. We provide a written fee estimate before we begin any work."
  },
  {
    q: "How do I know my information is secure?",
    a: "Eugene Solutions LLC maintains a comprehensive Written Information Security Plan (WISP) as required by the FTC Safeguards Rule and IRS Publication 4557. We use AES-256 encryption for stored data, TLS 1.3 for all data in transit, multi-factor authentication for all staff access, and role-based access controls. We conduct annual security risk assessments."
  },
  {
    q: "What is your pricing structure?",
    a: "We use transparent, flat-rate pricing based on the complexity of your return. Simple 1040 with W-2 income starts at $175. Business returns start at $450. State returns are $75 each. We always provide a written fee estimate before beginning preparation — no surprises. Visit our Pricing page for the complete fee schedule."
  }
]

export const BLOG_POSTS = [
  {
    slug: "2025-tax-filing-deadlines",
    title: "2025 Tax Filing Deadlines You Can't Afford to Miss",
    excerpt: "Key dates for the 2025 tax season including individual, business, and extension deadlines. Mark your calendar now.",
    date: "January 15, 2026",
    author: "Eugene Solutions Tax Team",
    category: "Tax Deadlines",
    readTime: "4 min read"
  },
  {
    slug: "maximize-eitc-2025",
    title: "How to Maximize Your Earned Income Tax Credit (EITC) in 2025",
    excerpt: "The EITC is one of the most valuable tax credits available. Here's how to ensure you're claiming every dollar you deserve.",
    date: "January 28, 2026",
    author: "Eugene Solutions Tax Team",
    category: "Tax Credits",
    readTime: "6 min read"
  },
  {
    slug: "self-employed-deductions-guide",
    title: "The Complete Guide to Self-Employed Tax Deductions",
    excerpt: "From home office to mileage to health insurance — every deduction available to self-employed taxpayers in 2025.",
    date: "February 5, 2026",
    author: "Eugene Solutions Tax Team",
    category: "Business Taxes",
    readTime: "8 min read"
  },
  {
    slug: "irs-audit-what-to-do",
    title: "Received an IRS Audit Notice? Here's Exactly What to Do",
    excerpt: "Don't panic. Follow these steps immediately after receiving an IRS audit letter. Professional representation can save thousands.",
    date: "February 12, 2026",
    author: "Eugene Solutions Tax Team",
    category: "IRS Audits",
    readTime: "5 min read"
  },
  {
    slug: "government-contracting-tax-guide",
    title: "Tax Guide for Government Contractors: What You Need to Know",
    excerpt: "Navigate the unique tax requirements for federal, state, and local government contracts. Compliance is critical.",
    date: "February 18, 2026",
    author: "Eugene Solutions Tax Team",
    category: "Government Contracting",
    readTime: "7 min read"
  },
  {
    slug: "s-corp-vs-llc-tax-comparison",
    title: "S-Corp vs. LLC: Which Saves You More on Taxes?",
    excerpt: "A detailed comparison of S-Corporation and LLC tax treatment, self-employment tax savings, and when to make the switch.",
    date: "February 20, 2026",
    author: "Eugene Solutions Tax Team",
    category: "Business Structure",
    readTime: "7 min read"
  }
]

export const TEAM_MEMBERS = [
  {
    name: "Eugene Solutions Leadership",
    role: "Founder & Principal",
    bio: "Founded on the principle that all accounting and bookkeeping needs can be met in one location. We help develop funding strategies from the ground up so clients achieve their personal and professional goals.",
    credentials: ["PTIN Active", "IRS Circular 230", "All 50 States Certified", "Government Contracting"]
  },
  {
    name: "Tax Preparation Team",
    role: "Senior Tax Preparers",
    bio: "Our eager and qualified personnel work for your specific requirements. From simple W-2 returns to complex multi-entity business filings, our tax team ensures every dollar you deserve is claimed.",
    credentials: ["PTIN Active", "EFIN Authorized", "EITC Due Diligence", "Multi-State Expert"]
  },
  {
    name: "Bookkeeping & Accounting Team",
    role: "Financial Services Specialists",
    bio: "Day-to-day bookkeeping, payroll processing, and full accounting services. We keep track of income, expenses, and statutory compliance so you don't have to.",
    credentials: ["QuickBooks ProAdvisor", "Payroll Compliance", "GAAP Standards", "Monthly Reporting"]
  },
  {
    name: "Government Contracting Team",
    role: "Procurement & Compliance Specialists",
    bio: "Specialized in navigating the complexity of government procurement processes for federal, state, and local entities. From initial consultation to contract execution and beyond.",
    credentials: ["Federal Procurement", "SAM.gov Registered", "Regulatory Compliance", "Bid Strategy"]
  }
]

export const NAV_LINKS = [
  { label: "Services", href: "/services", 
    dropdown: [
      { label: "Tax Preparation", href: "/services#tax-preparation" },
      { label: "Bookkeeping", href: "/services#bookkeeping" },
      { label: "Accounting", href: "/services#accounting" },
      { label: "Government Contracting", href: "/services#government-contracting" },
      { label: "Business Tax Returns", href: "/services#business-tax" },
      { label: "Tax Planning & Strategy", href: "/services#tax-planning" },
      { label: "IRS Representation", href: "/services#irs-representation" },
      { label: "ITIN Services", href: "/services#itin-services" },
    ]
  },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/tax-resources",
    dropdown: [
      { label: "Tax Resource Center", href: "/tax-resources" },
      { label: "Blog & Tax Tips", href: "/blog" },
      { label: "FAQ", href: "/faq" },
    ]
  },
  { label: "Contact", href: "/contact" },
]
