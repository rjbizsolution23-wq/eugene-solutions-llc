// Eugene Solutions LLC — Global Site Configuration
// Build Date: February 23, 2026

export const COMPANY = {
  name: "Eugene Solutions LLC",
  tagline: "America's Most Trusted Tax Preparation Agency",
  subTagline: "IRS Authorized E-File Provider • PTIN Verified • GLBA Compliant",
  phone: "(555) 394-8362",
  email: "info@eugenesolutions.com",
  address: {
    street: "123 Main Street, Suite 200",
    city: "Eugene",
    state: "OR",
    zip: "97401",
    full: "123 Main Street, Suite 200, Eugene, OR 97401"
  },
  hours: {
    taxSeason: "Mon–Sat 8AM–9PM, Sun 10AM–6PM",
    offSeason: "Mon–Fri 9AM–5PM"
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
    irs_circular_230: "Subject to IRS Circular 230"
  },
  disclaimer: `IRS Circular 230 Disclosure: Eugene Solutions LLC is a licensed tax preparation agency. Information provided on this website is for general informational purposes only and does not constitute tax advice. Tax situations vary. Consult a qualified tax professional before making tax decisions. Eugene Solutions LLC is subject to IRS Circular 230.`,
  privacy_disclosure: `Eugene Solutions LLC collects and safeguards your personal and financial information in accordance with the Gramm-Leach-Bliley Act (GLBA) and the FTC Safeguards Rule. We do not sell your personal information. See our full Privacy Notice for details.`
}

export const PRICING = {
  individual: [
    { form: "1040 (Simple – W-2 only)", price: 175, description: "Single or MFJ, W-2 income only" },
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
  ]
}

export const SERVICES = [
  {
    id: "individual-tax",
    title: "Individual Tax Preparation",
    icon: "fa-solid fa-user",
    emoji: "👤",
    description: "Expert preparation of Form 1040 and all schedules. We maximize your refund while ensuring full IRS compliance.",
    features: ["All 1040 schedules", "EITC optimization", "OBBBA deductions (tips, overtime)", "E-file same day", "Audit protection"]
  },
  {
    id: "business-tax",
    title: "Business Tax Returns",
    icon: "fa-solid fa-building",
    emoji: "🏢",
    description: "Comprehensive business tax preparation for sole proprietors, S-Corps, partnerships, and C-Corps.",
    features: ["Schedule C through 1120", "Entity selection advice", "Payroll tax compliance", "Quarterly estimates", "Multi-state filings"]
  },
  {
    id: "tax-planning",
    title: "Tax Planning & Strategy",
    icon: "fa-solid fa-chart-line",
    emoji: "📊",
    description: "Year-round proactive tax planning to minimize your tax liability legally and maximize savings.",
    features: ["Year-round planning", "Retirement planning", "Investment tax strategy", "OBBBA optimization", "Business structure review"]
  },
  {
    id: "irs-representation",
    title: "IRS Audit Representation",
    icon: "fa-solid fa-shield-halved",
    emoji: "🛡️",
    description: "Licensed professional representation before the IRS for audits, appeals, and collections.",
    features: ["Power of Attorney (2848)", "Audit defense", "Offer in Compromise", "Installment agreements", "Penalty abatement"]
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping & Payroll",
    icon: "fa-solid fa-book",
    emoji: "📚",
    description: "Monthly bookkeeping and payroll processing to keep your business financially organized all year.",
    features: ["Monthly bookkeeping", "Payroll processing", "941/944 filing", "W-2/1099 issuance", "QuickBooks integration"]
  },
  {
    id: "itin-services",
    title: "ITIN & Notary Services",
    icon: "fa-solid fa-globe",
    emoji: "🌐",
    description: "IRS-approved Certifying Acceptance Agent for ITIN applications. Serving all communities.",
    features: ["W-7 ITIN applications", "CAA certified", "Document certification", "Multi-language support", "Notary services"]
  }
]

export const TESTIMONIALS = [
  {
    name: "Maria Gonzalez",
    role: "Small Business Owner",
    quote: "Eugene Solutions found deductions I never knew existed. My refund was $3,200 more than what I got last year with TurboTax. Absolutely worth every penny.",
    rating: 5,
    result: "$3,200 additional refund"
  },
  {
    name: "David Chen",
    role: "Freelance Developer",
    quote: "As a self-employed contractor, my taxes are complicated. The team at Eugene Solutions handled everything — Schedule C, estimated payments, home office deduction. Stress-free.",
    rating: 5,
    result: "100% IRS compliance"
  },
  {
    name: "Sandra Williams",
    role: "Retiree",
    quote: "I was being audited and terrified. Eugene Solutions represented me before the IRS and resolved everything. They saved me over $8,000 in penalties. True professionals.",
    rating: 5,
    result: "$8,000+ in penalties saved"
  },
  {
    name: "James Mitchell",
    role: "S-Corp Owner",
    quote: "Switched from H&R Block to Eugene Solutions for my S-Corp returns. The difference in quality is night and day. They actually understand business tax law.",
    rating: 5,
    result: "Optimized S-Corp distributions"
  },
  {
    name: "Patricia Ramirez",
    role: "Single Mother",
    quote: "They helped me claim EITC and child tax credits I didn't even know I qualified for. Got my refund in 10 days. My kids' lives changed because of this team.",
    rating: 5,
    result: "EITC + CTC optimized"
  },
  {
    name: "Robert Thompson",
    role: "Real Estate Investor",
    quote: "Managing rental properties across three states — Eugene Solutions handled all my Schedule E filings flawlessly. Multi-state expertise is rare and they nail it.",
    rating: 5,
    result: "Multi-state compliance"
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
    q: "What is the GLBA and why does it matter to me?",
    a: "The Gramm-Leach-Bliley Act (GLBA) is a federal law that requires financial institutions — including tax preparers — to protect your personal financial information. Eugene Solutions LLC is fully GLBA compliant, maintaining a Written Information Security Plan (WISP), AES-256 encryption, and strict access controls. Your data is safe with us."
  },
  {
    q: "Can you help if I'm being audited by the IRS?",
    a: "Yes. We provide full IRS audit representation. We will prepare all documentation, communicate with the IRS on your behalf using Power of Attorney (Form 2848), and represent you at audit meetings. Our audit defense team has resolved hundreds of cases successfully."
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
    name: "Katherine Mitchell, EA",
    role: "Founder & Principal Tax Advisor",
    bio: "IRS Enrolled Agent with 20+ years of experience in individual and business tax preparation. Former IRS auditor turned taxpayer advocate.",
    credentials: ["Enrolled Agent (EA)", "PTIN Active", "IRS Circular 230", "AFSP Participant"]
  },
  {
    name: "David Nakamura, CPA",
    role: "Director of Business Tax Services",
    bio: "Licensed CPA specializing in S-Corp, Partnership, and C-Corp tax returns. Expert in multi-state compliance and entity selection strategy.",
    credentials: ["CPA (Oregon)", "PTIN Active", "S-Corp Specialist", "Multi-State Expert"]
  },
  {
    name: "Elena Rodriguez",
    role: "Senior Tax Preparer & ITIN Specialist",
    bio: "10+ years preparing individual returns. IRS Certifying Acceptance Agent (CAA) for ITIN applications. Bilingual (English/Spanish).",
    credentials: ["PTIN Active", "CAA Certified", "EITC Due Diligence", "Bilingual"]
  },
  {
    name: "Marcus Johnson",
    role: "Tax Preparer & Client Services Manager",
    bio: "Expert in EITC, Child Tax Credit, and education credits. Ensures every client receives the maximum legal refund.",
    credentials: ["PTIN Active", "AFSP Record of Completion", "EITC Specialist"]
  },
  {
    name: "Rachel Kim",
    role: "Bookkeeping & Payroll Manager",
    bio: "QuickBooks ProAdvisor managing monthly bookkeeping and payroll processing for 50+ business clients. Payroll tax compliance specialist.",
    credentials: ["QuickBooks ProAdvisor", "PTIN Active", "Payroll Compliance"]
  }
]

export const NAV_LINKS = [
  { label: "Services", href: "/services", 
    dropdown: [
      { label: "Individual Tax Returns", href: "/services#individual-tax" },
      { label: "Business Tax Returns", href: "/services#business-tax" },
      { label: "Tax Planning", href: "/services#tax-planning" },
      { label: "IRS Representation", href: "/services#irs-representation" },
      { label: "Bookkeeping & Payroll", href: "/services#bookkeeping" },
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
