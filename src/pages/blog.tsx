import type { Context } from 'hono'
import { Navbar, Footer } from '../components'
import { BLOG_POSTS, COMPANY } from '../constants'

// ─────────────────────────────────────────────────────────────
// FULL BLOG POST CONTENT — every article written in full
// ─────────────────────────────────────────────────────────────
const BLOG_CONTENT: Record<string, { sections: { heading: string; body: string }[]; keyTakeaways: string[]; cta: string }> = {

  "2025-tax-filing-deadlines": {
    sections: [
      {
        heading: "Why Tax Deadlines Matter More Than Ever",
        body: `Missing a tax deadline can trigger penalties, interest charges, and unnecessary stress. For the 2025 tax year (filed in early 2026), the IRS has established key dates that every individual and business taxpayer needs to know. Whether you're filing a simple W-2 return or a multi-entity business filing, understanding these dates is the first step to a smooth tax season. Eugene Solutions LLC tracks every deadline so our clients never pay a late-filing penalty.`
      },
      {
        heading: "Q4 2025 Estimated Tax Payment — January 15, 2026",
        body: `If you're self-employed, a freelancer, or earn income that isn't subject to withholding (rental income, investment gains, side-gig earnings), your fourth-quarter estimated tax payment for 2025 is due on January 15, 2026. This payment covers income earned between October 1 and December 31, 2025. Use IRS Form 1040-ES to calculate your payment. Underpayment can result in penalties calculated on Form 2210. Eugene Solutions helps self-employed clients calculate accurate quarterly estimates to avoid any surprises.`
      },
      {
        heading: "IRS E-File Opens — January 27, 2026",
        body: `The IRS is projected to begin accepting electronically filed 2025 tax returns on January 27, 2026. Filing early has significant advantages: you get your refund faster (typically 10–21 days with direct deposit and e-file), you reduce the window for identity thieves to file a fraudulent return in your name, and you beat the April rush. Eugene Solutions offers same-day e-filing for qualified returns — bring your documents in the morning, and we can file by end of day.`
      },
      {
        heading: "W-2 and 1099 Forms Due — January 31, 2026",
        body: `Employers must furnish W-2 forms to employees and file them with the Social Security Administration by January 31, 2026. Similarly, businesses that paid independent contractors $600 or more must issue 1099-NEC forms by this date. If you're a small business owner, missing this deadline can result in penalties of $60 to $310 per form, depending on how late you file. Our bookkeeping team ensures your W-2 and 1099 filings are accurate and on time.`
      },
      {
        heading: "Business Returns — March 15, 2026",
        body: `S-Corporations (Form 1120-S) and Partnerships (Form 1065) must file their returns by March 15, 2026. These entities also issue Schedule K-1 forms to their owners, which are needed to complete individual returns. Late filing penalties for business returns are steep: $220 per partner/shareholder per month, up to 12 months. If you need more time, file Form 7004 for an automatic 6-month extension — but remember, an extension to file is not an extension to pay.`
      },
      {
        heading: "Individual Returns & C-Corp Returns — April 15, 2026",
        body: `The most important date on the tax calendar: April 15, 2026 is the deadline for individual Form 1040 returns and C-Corporation Form 1120 returns. This is also the deadline for your first-quarter 2026 estimated tax payment. If you can't file by April 15, you can request an automatic 6-month extension using Form 4868, which moves your filing deadline to October 15, 2026. However, you must pay any estimated tax owed by April 15 to avoid interest and penalties.`
      },
      {
        heading: "Extension Deadlines — September & October 2026",
        body: `Extended S-Corp and Partnership returns are due September 15, 2026, along with the third-quarter estimated payment. Extended individual and C-Corp returns are due October 15, 2026. If you filed an extension, don't wait until the last minute — the closer you get to the deadline, the harder it is to get an appointment with a qualified preparer. Schedule your review appointment with Eugene Solutions at least 2–3 weeks before the extension deadline.`
      }
    ],
    keyTakeaways: [
      "January 15: Q4 2025 estimated payment due",
      "January 27: IRS e-file season opens",
      "January 31: W-2 and 1099-NEC due to recipients",
      "March 15: S-Corp and Partnership returns due",
      "April 15: Individual 1040 and C-Corp 1120 returns due",
      "October 15: Extended individual and C-Corp returns due",
      "File early to get refunds faster and prevent identity theft"
    ],
    cta: "Don't risk penalties. Schedule your 2025 tax appointment with Eugene Solutions today."
  },

  "maximize-eitc-2025": {
    sections: [
      {
        heading: "What Is the Earned Income Tax Credit?",
        body: `The Earned Income Tax Credit (EITC) is one of the federal government's most powerful anti-poverty tools — and one of the most valuable tax credits available to working individuals and families. For the 2025 tax year, the maximum EITC can be worth up to $7,830 for a family with three or more qualifying children. Unlike a deduction, which only reduces your taxable income, a credit reduces your actual tax bill dollar-for-dollar. And since the EITC is refundable, you can receive it even if you owe zero tax — it comes back to you as a refund.`
      },
      {
        heading: "2025 EITC Income Limits and Credit Amounts",
        body: `For the 2025 tax year, the EITC income thresholds and maximum credit amounts are as follows: With three or more qualifying children, the maximum credit is $7,830 with an income limit of approximately $63,398 (married filing jointly). With two children, the maximum credit is $6,960 with an income limit of approximately $59,478. With one child, the maximum credit is $4,213 with an income limit of approximately $53,120. With no qualifying children, workers between ages 25 and 64 can receive up to $632 with an income limit of approximately $18,591 (single) or $25,511 (married filing jointly). These amounts are adjusted annually for inflation — Eugene Solutions uses the latest IRS figures to ensure you receive every dollar you're entitled to.`
      },
      {
        heading: "Who Qualifies? The 7 Key Requirements",
        body: `To claim the EITC, you must meet all of the following: (1) You must have earned income from employment or self-employment. (2) Your investment income must be $11,600 or less for 2025. (3) You must have a valid Social Security number. (4) You must be a U.S. citizen or resident alien for the entire year. (5) You cannot file as Married Filing Separately. (6) You cannot be a qualifying child of another taxpayer. (7) If claiming children, they must meet the relationship, age, residency, and joint return tests. Many taxpayers don't realize they qualify — especially single filers without children, part-time workers, self-employed individuals, and gig economy workers.`
      },
      {
        heading: "Common Mistakes That Cost You Money",
        body: `The IRS estimates that 20% of eligible taxpayers fail to claim the EITC each year, leaving billions of dollars on the table. The most common mistakes include: filing as Married Filing Separately (which disqualifies you completely), incorrectly reporting income (especially cash tips and side-gig income), failing to include all qualifying children, using an incorrect Social Security number, and not filing at all because you think you don't owe taxes. Even if your income was too low to require filing, you should still file to claim your EITC refund.`
      },
      {
        heading: "EITC Due Diligence — What Your Preparer Must Do",
        body: `Tax preparers are required by law (IRC Section 6695(g)) to perform due diligence on every EITC claim. This includes verifying your identity, confirming your qualifying children's relationship and residency, reviewing your income documentation, and completing Form 8867 (Paid Preparer's Due Diligence Checklist). Preparers who fail to meet these requirements face penalties of $560 per return. Eugene Solutions takes due diligence seriously — we verify every detail to protect both you and our firm. This thoroughness is why our IRS acceptance rate is 99.8%.`
      },
      {
        heading: "How Eugene Solutions Maximizes Your EITC",
        body: `Our tax preparation process is designed to optimize every available credit. We review your filing status to ensure you're using the most advantageous option. We verify all qualifying children meet the IRS tests. We check for additional credits that stack with EITC — including the Child Tax Credit (up to $2,000 per child), the Additional Child Tax Credit, and the Child and Dependent Care Credit. We also look at whether your earned income falls in the EITC phase-in range where a small increase in reported income could actually increase your credit. This is the kind of optimization that only an experienced preparer can provide.`
      }
    ],
    keyTakeaways: [
      "Maximum EITC for 2025: up to $7,830 with 3+ children",
      "You can receive EITC even if you owe $0 in tax — it's fully refundable",
      "20% of eligible taxpayers fail to claim EITC each year",
      "Investment income must be $11,600 or less to qualify",
      "You cannot file Married Filing Separately and claim EITC",
      "File even if your income is low — you may qualify for a refund",
      "Eugene Solutions performs full due diligence on every EITC claim"
    ],
    cta: "Think you might qualify for EITC? Schedule a free eligibility review with Eugene Solutions."
  },

  "self-employed-deductions-guide": {
    sections: [
      {
        heading: "Self-Employment Tax: Understanding Your Obligation",
        body: `When you're self-employed, you're responsible for both the employee and employer portions of Social Security and Medicare taxes — a combined rate of 15.3% on net self-employment income (12.4% for Social Security on the first $168,600 of income in 2025, plus 2.9% for Medicare on all income). This is reported on Schedule SE and is in addition to your regular income tax. The good news? You can deduct the employer-equivalent portion (7.65%) as an adjustment to income on your 1040. Eugene Solutions calculates this automatically for every self-employed client.`
      },
      {
        heading: "The Home Office Deduction (Form 8829)",
        body: `If you use a dedicated space in your home exclusively and regularly for business, you can deduct a portion of your home expenses. There are two methods: The Simplified Method allows a deduction of $5 per square foot of your home office, up to 300 square feet (maximum $1,500). The Regular Method calculates the actual percentage of your home used for business and applies it to mortgage interest or rent, utilities, insurance, repairs, and depreciation. For example, if your office is 200 sq ft of a 2,000 sq ft home, you can deduct 10% of qualifying expenses. Eugene Solutions helps you determine which method yields the larger deduction.`
      },
      {
        heading: "Vehicle and Mileage Deductions",
        body: `If you use your personal vehicle for business, you have two options: the Standard Mileage Rate (67 cents per mile for 2025) or Actual Expenses (gas, insurance, maintenance, depreciation, parking, tolls). You must keep a contemporaneous mileage log — the IRS requires documentation of date, destination, business purpose, and miles driven. Apps like MileIQ can help track automatically. Commuting miles (home to your regular office) are never deductible, but driving from your home office to a client site is. Eugene Solutions reviews your mileage log and recommends the method that gives you the biggest deduction.`
      },
      {
        heading: "Health Insurance Premium Deduction",
        body: `Self-employed individuals can deduct 100% of health insurance premiums paid for themselves, their spouse, and dependents — including dental and long-term care premiums. This is an "above-the-line" deduction (claimed on Schedule 1, Line 17), meaning you get it even if you don't itemize. The deduction cannot exceed your net self-employment income, and you cannot claim it for any month you were eligible for an employer-sponsored plan (including through a spouse's employer). This deduction alone can save self-employed taxpayers thousands of dollars annually.`
      },
      {
        heading: "Retirement Contributions: SEP-IRA and Solo 401(k)",
        body: `Self-employed individuals have access to powerful retirement savings vehicles. A SEP-IRA allows contributions of up to 25% of net self-employment income (after the SE tax deduction), with a maximum of $69,000 for 2025. A Solo 401(k) allows employee deferrals of up to $23,500 ($31,000 if age 50+) plus employer contributions of up to 25% of net income. These contributions reduce your taxable income dollar-for-dollar. Example: A self-employed consultant earning $150,000 net could contribute up to $37,500 to a SEP-IRA, reducing their taxable income to $112,500 — a potential tax savings of $8,250 or more at the 22% bracket.`
      },
      {
        heading: "Business Expenses: What's Deductible (and What's Not)",
        body: `Common deductible business expenses include: office supplies, software subscriptions, professional development and courses, business insurance, legal and accounting fees, advertising and marketing, website hosting, phone and internet (business-use percentage), travel expenses (airfare, hotels, 50% of meals for business purposes), contract labor and subcontractor payments, tools and equipment (Section 179 allows immediate expensing up to $1,220,000 in 2025), and bank fees for business accounts. NOT deductible: personal expenses, clothing (unless it's a uniform or protective gear), commuting costs, fines and penalties, and political contributions.`
      },
      {
        heading: "Quarterly Estimated Tax Payments",
        body: `Self-employed taxpayers must make quarterly estimated payments if they expect to owe $1,000 or more in tax. The due dates for 2026 payments are: Q1 — April 15, Q2 — June 15, Q3 — September 15, Q4 — January 15 (following year). Underpayment penalties are calculated on Form 2210. The safe harbor rule: if you pay at least 100% of last year's tax liability (110% if AGI exceeded $150,000) through estimated payments and withholding, you won't owe an underpayment penalty even if you owe additional tax at filing. Eugene Solutions calculates your estimated payments quarterly to keep you on track.`
      }
    ],
    keyTakeaways: [
      "Self-employment tax rate is 15.3% — deduct half as an income adjustment",
      "Home office: $5/sq ft simplified method or actual expenses — use whichever is larger",
      "Standard mileage rate for 2025: 67 cents per mile",
      "100% of health insurance premiums are deductible above the line",
      "SEP-IRA contributions up to 25% of net income ($69K max) for 2025",
      "Section 179 allows immediate expensing of equipment up to $1,220,000",
      "Quarterly estimated payments prevent underpayment penalties"
    ],
    cta: "Self-employed? Let Eugene Solutions find every deduction you're entitled to. Book your appointment now."
  },

  "irs-audit-what-to-do": {
    sections: [
      {
        heading: "Don't Panic — Here's What an IRS Audit Actually Means",
        body: `Receiving an IRS audit notice can feel terrifying, but most audits are routine verifications — not criminal investigations. The IRS audits approximately 0.4% of individual returns each year, and the vast majority are correspondence audits handled entirely by mail. There are three types of IRS audits: Correspondence Audits (the most common) are conducted by mail — the IRS requests specific documentation to verify items on your return. Office Audits require you to visit an IRS office with your records. Field Audits are the most comprehensive, where an IRS agent visits your home or business. Regardless of type, you have rights under the Taxpayer Bill of Rights, and you can have professional representation at every stage.`
      },
      {
        heading: "Step 1: Read the Notice Carefully",
        body: `The first thing to do is read the notice thoroughly. Identify the type of audit, what tax year is involved, which specific items are being questioned, and the deadline to respond. The IRS notice will include a phone number and the name of the examining agent. Do not call the IRS immediately — instead, contact a qualified tax professional first. Note the response deadline (usually 30 days). Do not ignore the notice — failing to respond will result in the IRS making changes to your return unilaterally, which almost always increases your tax bill.`
      },
      {
        heading: "Step 2: Gather Your Documentation",
        body: `The IRS will specify exactly what they need — typically receipts, bank statements, invoices, mileage logs, or proof of income. Organize everything by category and make copies (never send originals). Key documents often requested include: W-2s and 1099s, bank and brokerage statements, receipts for charitable donations, home office measurements and expenses, vehicle mileage logs, child care provider information (name, address, EIN), and educational expense records. If you can't find a receipt, bank and credit card statements can serve as secondary evidence. Eugene Solutions maintains organized client files specifically for audit preparedness.`
      },
      {
        heading: "Step 3: Get Professional Representation",
        body: `You have the right to have a qualified representative handle your audit. Enrolled Agents (EAs), CPAs, and tax attorneys can represent you before the IRS under Power of Attorney (Form 2848). A qualified representative communicates directly with the IRS on your behalf, can attend audit meetings so you don't have to, knows what information to provide (and what not to volunteer), can negotiate penalties and settlements, and can appeal unfavorable decisions. Eugene Solutions provides full IRS audit representation — we've successfully resolved hundreds of audits and saved our clients thousands in penalties and additional assessments.`
      },
      {
        heading: "Step 4: Respond Within the Deadline",
        body: `Always respond by the deadline stated in the notice. If you need more time, request an extension in writing before the deadline expires. When responding to a correspondence audit, send your documents via certified mail with return receipt requested so you have proof of timely response. Include the notice number, your SSN, the tax year in question, and a clear cover letter referencing each item. Do not include extra documentation that wasn't requested — volunteering additional information can open new lines of inquiry.`
      },
      {
        heading: "What Happens After the Audit",
        body: `After reviewing your documentation, the IRS will issue one of three outcomes: No Change — the IRS agrees with your return as filed. Agreed — changes are proposed and you agree with them; you sign the agreement and pay any additional tax. Disagreed — you don't agree with the proposed changes and can request a conference with an IRS manager or file a formal appeal with the IRS Office of Appeals. If the amount in question exceeds $25,000, you may petition the U.S. Tax Court. You generally have 30 days to appeal an unfavorable decision. Eugene Solutions handles the entire appeal process for our clients.`
      },
      {
        heading: "How to Reduce Your Audit Risk",
        body: `While audits can't always be avoided, you can minimize your risk: report all income (the IRS matches your return against W-2s, 1099s, and K-1s), be accurate with deductions (exaggerated deductions are the #1 audit trigger), maintain organized records, file electronically (e-filed returns have lower error rates), and use a qualified preparer with a valid PTIN. Our 99.8% IRS acceptance rate means your return is prepared accurately the first time, significantly reducing your audit exposure.`
      }
    ],
    keyTakeaways: [
      "Most audits are routine correspondence audits handled by mail",
      "Never ignore an IRS audit notice — respond by the deadline",
      "Gather all requested documentation before responding",
      "You have the right to professional representation (EA, CPA, or attorney)",
      "Don't volunteer extra information — only provide what's requested",
      "You can appeal any unfavorable audit decision within 30 days",
      "E-filing with a qualified preparer reduces audit risk significantly"
    ],
    cta: "Received an audit notice? Don't face the IRS alone. Call Eugene Solutions at (407) 810-5368 for immediate help."
  },

  "government-contracting-tax-guide": {
    sections: [
      {
        heading: "The Unique Tax Landscape for Government Contractors",
        body: `Government contracting presents unique tax challenges that differ significantly from standard business operations. Whether you hold a federal, state, or local contract, the tax implications touch everything from revenue recognition to cost accounting, contract classification, and compliance reporting. The Federal Acquisition Regulation (FAR) imposes specific requirements on how costs are tracked, allocated, and reported. Failure to comply can result in contract termination, financial penalties, or even debarment from future government work. Eugene Solutions specializes in helping government contractors navigate this complex landscape while maximizing legitimate tax benefits.`
      },
      {
        heading: "Contract Types and Their Tax Implications",
        body: `The type of government contract you hold directly affects how income and expenses are recognized for tax purposes. Fixed-Price Contracts require you to deliver goods or services at a predetermined price — you recognize revenue as work is completed (typically using the percentage-of-completion method under IRC Section 460). Cost-Reimbursement Contracts reimburse your allowable costs plus a fee — revenue recognition follows the costs incurred. Time-and-Materials Contracts pay for labor hours at fixed rates plus materials at cost — each invoice is recognized as income when billed. Indefinite Delivery/Indefinite Quantity (IDIQ) contracts present additional complexity as revenue depends on task order issuance. Each type requires different accounting treatment, and getting it wrong can trigger IRS scrutiny.`
      },
      {
        heading: "Cost Accounting Standards (CAS) Compliance",
        body: `Contractors with government contracts exceeding certain thresholds must comply with Cost Accounting Standards (CAS). These standards govern how costs are measured, assigned, and allocated. Key CAS requirements include: consistent treatment of direct and indirect costs, proper allocation of overhead and G&A expenses, disclosure of accounting practices via the DS-2 (Disclosure Statement), and adjustment of contract prices when accounting changes occur. Even if your contracts fall below CAS thresholds, following these principles demonstrates fiscal responsibility and can prevent disputes during audits. Eugene Solutions sets up CAS-compliant accounting systems for our contractor clients from day one.`
      },
      {
        heading: "SAM.gov Registration and Tax ID Requirements",
        body: `Every government contractor must be registered in the System for Award Management (SAM.gov). Registration requires your Employer Identification Number (EIN), DUNS number (now UEI — Unique Entity Identifier), NAICS codes for your service categories, your Taxpayer Identification Number, and banking information for electronic fund transfers. Your SAM registration must be renewed annually. Letting it lapse can delay payments and make you ineligible for new awards. Eugene Solutions assists with initial SAM registration and annual renewals, ensuring your tax and entity information is always current.`
      },
      {
        heading: "Tax Deductions Specific to Government Contractors",
        body: `Government contractors have access to several industry-specific deductions and credits: Bid and Proposal (B&P) Costs — expenses incurred in preparing contract proposals are generally deductible as ordinary business expenses. Independent Research and Development (IR&D) costs may qualify for the R&D Tax Credit (IRC Section 41). Performance bond premiums are deductible. Travel expenses for contract performance at government sites are deductible. Security clearance costs, including investigation fees and secure facility expenses, are deductible. Small Business Set-Aside compliance costs are deductible. Our tax team ensures every allowable cost is properly captured and deducted.`
      },
      {
        heading: "Avoiding Common Compliance Pitfalls",
        body: `The most frequent tax and compliance mistakes we see from government contractors include: commingling personal and business expenses (especially dangerous for sole proprietors), failing to segregate costs by contract (required for multi-contract operations), incorrectly classifying subcontractors as employees (triggers significant payroll tax liability), missing the 1099-NEC filing deadline for subcontractors (penalty: $60–$310 per form), and failing to maintain adequate documentation for claimed costs. During a DCAA (Defense Contract Audit Agency) audit, every cost must be backed by documentation. If it's not documented, it didn't happen — and the cost will be disallowed.`
      },
      {
        heading: "State and Local Tax Considerations",
        body: `Performing government contracts across state lines creates nexus — the obligation to file tax returns in each state where you have a physical presence or significant economic activity. Many contractors unknowingly create nexus in states where they perform on-site work. This can trigger state income tax, franchise tax, sales tax, and even local business license requirements. Eugene Solutions tracks our contractor clients' multi-state activity and ensures they're compliant in every jurisdiction — avoiding costly assessments and penalties from state revenue departments.`
      }
    ],
    keyTakeaways: [
      "Contract type (fixed-price, cost-reimbursement, T&M) determines revenue recognition method",
      "Cost Accounting Standards (CAS) apply to contracts above certain thresholds",
      "SAM.gov registration must be renewed annually — lapse delays payments",
      "Bid & proposal costs, security clearance costs, and bond premiums are deductible",
      "Properly classify workers — subcontractor vs. employee misclassification is high-risk",
      "Multi-state contract work creates tax filing obligations in each state",
      "DCAA audits require documentation for every claimed cost"
    ],
    cta: "Government contractor? Eugene Solutions navigates procurement and tax compliance across all 50 states. Let's talk."
  },

  "s-corp-vs-llc-tax-comparison": {
    sections: [
      {
        heading: "Understanding the Basics: LLC vs. S-Corporation",
        body: `When entrepreneurs form a business entity, the two most popular choices are the LLC (Limited Liability Company) and the S-Corporation. Both provide personal liability protection, separating your business debts from your personal assets. However, their tax treatment differs significantly. An LLC is a state-level legal entity that, by default, is taxed as a sole proprietorship (single-member) or partnership (multi-member) — all income passes through to your personal tax return. An S-Corp is a tax election (filed via IRS Form 2553) that can be applied to either an LLC or a corporation. The key difference lies in how self-employment tax is applied to your income.`
      },
      {
        heading: "The Self-Employment Tax Advantage of S-Corps",
        body: `This is where S-Corps shine. As an LLC owner, all your net business income is subject to self-employment tax (15.3% on the first $168,600, then 2.9% Medicare on amounts above). As an S-Corp shareholder-employee, you pay yourself a "reasonable salary" (subject to payroll taxes), and any remaining profit is distributed as a shareholder distribution — which is NOT subject to self-employment tax. Example: Your business earns $120,000 net profit. As an LLC, you'd pay approximately $16,956 in self-employment tax (after the above-the-line deduction). As an S-Corp paying yourself a $60,000 salary, you'd pay about $9,180 in payroll taxes — saving approximately $7,776 per year. That's real money.`
      },
      {
        heading: "When Does S-Corp Election Make Sense?",
        body: `The S-Corp election generally makes financial sense when your net business income consistently exceeds $50,000–$60,000 annually. Below that threshold, the additional costs of S-Corp compliance (payroll processing, quarterly 941 filings, W-2 issuance, potentially higher accounting fees) may offset the tax savings. Other factors to consider: you must pay yourself a "reasonable salary" — the IRS scrutinizes S-Corp owners who pay themselves below-market wages to minimize payroll taxes. The salary must be comparable to what you'd pay someone else to do the same work. Eugene Solutions helps clients determine the optimal salary level that maximizes savings while staying compliant.`
      },
      {
        heading: "The Compliance Cost of S-Corp Status",
        body: `S-Corps come with additional administrative requirements: you must run payroll (monthly or semi-monthly) and withhold employment taxes, file quarterly payroll tax returns (Form 941) and annual returns (Form 940), issue W-2s to shareholder-employees by January 31, file Form 1120-S (S-Corp tax return) by March 15, issue Schedule K-1 to all shareholders, and maintain corporate formalities (minutes, resolutions). These requirements add approximately $1,500–$3,000 annually in accounting and payroll costs. If your tax savings exceed this amount, the S-Corp election is worthwhile. Eugene Solutions provides full payroll and S-Corp compliance services to make this seamless.`
      },
      {
        heading: "The QBI Deduction: A Game-Changer for Both",
        body: `The Qualified Business Income (QBI) deduction under IRC Section 199A allows eligible pass-through business owners to deduct up to 20% of their qualified business income. This applies to both LLCs and S-Corps. For 2025, the income thresholds are approximately $191,950 (single) and $383,900 (married filing jointly) — below these thresholds, the deduction is generally available in full. Above these thresholds, limitations based on W-2 wages and/or property apply. Here's where it gets interesting for S-Corp owners: the W-2 wages you pay yourself count toward the QBI wage limitation, which can actually increase your QBI deduction at higher income levels. This interaction is complex and is exactly the kind of optimization Eugene Solutions specializes in.`
      },
      {
        heading: "Real-World Comparison: Side-by-Side Numbers",
        body: `Let's compare a freelance consultant earning $150,000 net profit under both structures. LLC (Schedule C): Net income $150,000, SE tax (before deduction) ~$21,194, QBI deduction ~$25,761 (20% of qualified income), total federal tax approximately $25,000–$30,000. S-Corp ($70,000 salary, $80,000 distribution): Payroll taxes on salary ~$10,710, QBI deduction on K-1 income ~$16,000, no SE tax on $80,000 distribution, total federal tax approximately $20,000–$24,000. Net savings with S-Corp: approximately $5,000–$7,000 per year. Over 10 years, that's $50,000–$70,000 in tax savings — enough to fund a retirement account or reinvest in your business.`
      },
      {
        heading: "Making the Switch: How and When to Elect S-Corp",
        body: `To elect S-Corp status, file IRS Form 2553 by March 15 of the tax year you want the election to take effect (or within 75 days of forming the entity). Late elections may be accepted with reasonable cause. Requirements: the entity must be a domestic corporation or LLC, have no more than 100 shareholders, have only one class of stock, and all shareholders must be U.S. citizens or residents. If you miss the deadline, you can still elect for the following year. Eugene Solutions handles the entire S-Corp election process, including payroll setup, reasonable salary determination, and quarterly compliance.`
      }
    ],
    keyTakeaways: [
      "S-Corps save money by avoiding self-employment tax on distributions",
      "Tax savings typically kick in at $50K–$60K+ net business income",
      "S-Corp owners must pay themselves a 'reasonable salary' — IRS watches this closely",
      "Additional compliance costs run $1,500–$3,000/year — savings must exceed this",
      "QBI deduction (20%) applies to both LLCs and S-Corps — but interacts differently",
      "A $150K earner can save $5,000–$7,000/year switching from LLC to S-Corp",
      "File Form 2553 by March 15 of the election year"
    ],
    cta: "Wondering if S-Corp election is right for you? Schedule a free entity analysis with Eugene Solutions."
  }
}

// ─────────────────────────────────────────────────────────────
// Blog listing page
// ─────────────────────────────────────────────────────────────
export const blogPage = (c: Context) => {
  return c.render(
    <div>
      <Navbar />
      
      <section class="bg-blue-950 py-24 pt-40">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <div class="inline-flex items-center bg-white/10 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <i class="fa-solid fa-pen-fancy mr-2"></i>Expert Tax Insights from Licensed Professionals
          </div>
          <h1 class="text-5xl md:text-6xl font-black text-white mb-6 font-space">Tax Tips & Insights</h1>
          <p class="text-xl text-blue-200 max-w-2xl mx-auto">
            Expert tax advice, IRS updates, and strategies to help you save money and stay compliant — written by the Eugene Solutions LLC tax team.
          </p>
        </div>
      </section>

      <section class="py-24 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
          {/* Featured post */}
          <div class="mb-12">
            <a href={`/blog/${BLOG_POSTS[0].slug}`} class="block bg-white rounded-3xl border-2 border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all overflow-hidden group">
              <div class="grid md:grid-cols-2">
                <div class="bg-gradient-to-br from-blue-100 to-emerald-100 p-12 flex items-center justify-center">
                  <div class="text-center">
                    <i class="fa-solid fa-calendar-days text-blue-950/20 text-8xl group-hover:scale-110 transition-transform mb-4"></i>
                    <div class="text-blue-950/40 font-bold text-sm">FEATURED ARTICLE</div>
                  </div>
                </div>
                <div class="p-8 md:p-12 flex flex-col justify-center">
                  <div class="flex items-center gap-3 mb-4">
                    <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">{BLOG_POSTS[0].category}</span>
                    <span class="text-xs text-gray-400">{BLOG_POSTS[0].readTime}</span>
                  </div>
                  <h2 class="text-2xl md:text-3xl font-black text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors font-space">{BLOG_POSTS[0].title}</h2>
                  <p class="text-gray-600 mb-6 leading-relaxed">{BLOG_POSTS[0].excerpt}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-400">{BLOG_POSTS[0].date}</span>
                    <span class="text-emerald-600 font-bold">Read Full Article →</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* All posts grid */}
          <h2 class="text-2xl font-black text-gray-900 mb-8 font-space">All Articles</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <a href={`/blog/${post.slug}`} class="bg-white rounded-2xl border-2 border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all overflow-hidden group">
                <div class="bg-gradient-to-br from-blue-100 to-emerald-100 h-48 flex items-center justify-center">
                  <i class="fa-solid fa-newspaper text-blue-950/20 text-6xl group-hover:scale-110 transition-transform"></i>
                </div>
                <div class="p-6">
                  <div class="flex items-center gap-3 mb-3">
                    <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">{post.category}</span>
                    <span class="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors font-space">{post.title}</h3>
                  <p class="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-xs text-gray-400">{post.date}</span>
                    <span class="text-emerald-600 text-sm font-semibold">Read More →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Newsletter signup */}
          <div class="mt-16 bg-blue-950 rounded-3xl p-10 text-center">
            <i class="fa-solid fa-envelope text-emerald-400 text-3xl mb-4"></i>
            <h2 class="text-2xl font-black text-white mb-3 font-space">Get Tax Tips Delivered to Your Inbox</h2>
            <p class="text-blue-200 mb-6 max-w-xl mx-auto">Join thousands of taxpayers who receive our weekly insights on deductions, deadlines, and IRS updates.</p>
            <div class="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" class="flex-1 px-4 py-3 rounded-xl border-2 border-blue-800 bg-blue-900/50 text-white placeholder-blue-400 focus:border-emerald-500 focus:outline-none" />
              <button class="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>,
    { title: 'Blog & Tax Tips', description: 'Expert tax advice, IRS updates, and financial strategies from the Eugene Solutions LLC team. Tips on EITC, self-employment deductions, audit defense, and more.' }
  )
}

// ─────────────────────────────────────────────────────────────
// Individual blog post page — FULL CONTENT
// ─────────────────────────────────────────────────────────────
export const blogPostPage = (c: Context) => {
  const slug = c.req.param('slug')
  const post = BLOG_POSTS.find(p => p.slug === slug)
  
  if (!post) {
    return c.render(
      <div>
        <Navbar />
        <section class="py-40 text-center">
          <h1 class="text-4xl font-black text-gray-900 mb-4 font-space">Post Not Found</h1>
          <p class="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <a href="/blog" class="inline-flex items-center bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl">
            <i class="fa-solid fa-arrow-left mr-2"></i> Back to Blog
          </a>
        </section>
        <Footer />
      </div>,
      { title: 'Post Not Found' }
    )
  }

  const content = BLOG_CONTENT[slug]

  return c.render(
    <div>
      <Navbar />
      
      {/* Hero */}
      <section class="bg-blue-950 py-24 pt-40">
        <div class="max-w-4xl mx-auto px-4">
          <a href="/blog" class="inline-flex items-center text-blue-300 hover:text-white mb-6 text-sm transition-colors">
            <i class="fa-solid fa-arrow-left mr-2"></i> Back to Blog
          </a>
          <div class="flex items-center gap-3 mb-4">
            <span class="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-full">{post.category}</span>
            <span class="text-xs text-blue-300">{post.readTime}</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-black text-white mb-4 font-space leading-tight">{post.title}</h1>
          <div class="flex items-center text-blue-300 text-sm">
            <i class="fa-solid fa-user-pen mr-2"></i>
            <span>{post.author}</span>
            <span class="mx-2">&bull;</span>
            <i class="fa-solid fa-calendar mr-2"></i>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4">
          
          {/* Lead paragraph */}
          <p class="text-xl text-gray-700 leading-relaxed mb-8 font-medium">{post.excerpt}</p>

          {/* Info banner */}
          <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-10">
            <p class="text-blue-900 font-medium">
              <i class="fa-solid fa-lightbulb text-blue-500 mr-2"></i>
              This article is provided for general informational purposes by Eugene Solutions LLC. For personalized tax advice specific to your situation, please <a href="/contact" class="text-blue-700 underline font-bold">schedule a consultation</a> with one of our licensed tax professionals.
            </p>
          </div>

          {/* Table of Contents */}
          {content && (
            <div class="bg-gray-50 rounded-2xl p-6 mb-10 border border-gray-100">
              <h2 class="font-bold text-gray-900 mb-3 font-space"><i class="fa-solid fa-list mr-2 text-emerald-600"></i>In This Article</h2>
              <ul class="space-y-2">
                {content.sections.map((section, i) => (
                  <li>
                    <a href={`#section-${i}`} class="text-emerald-600 hover:text-emerald-700 text-sm font-medium hover:underline">
                      {i + 1}. {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Full article content */}
          {content ? (
            <div class="prose prose-lg max-w-none">
              {content.sections.map((section, i) => (
                <div id={`section-${i}`} class="mb-10">
                  <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">{section.heading}</h2>
                  <p class="text-gray-700 leading-relaxed whitespace-pre-line">{section.body}</p>
                </div>
              ))}

              {/* Key Takeaways */}
              <div class="bg-emerald-50 rounded-2xl p-8 mb-10 border border-emerald-100">
                <h2 class="text-xl font-black text-emerald-900 mb-4 font-space">
                  <i class="fa-solid fa-check-double mr-2"></i>Key Takeaways
                </h2>
                <ul class="space-y-3">
                  {content.keyTakeaways.map((takeaway) => (
                    <li class="flex items-start">
                      <i class="fa-solid fa-circle-check text-emerald-600 mr-3 mt-1 flex-shrink-0"></i>
                      <span class="text-emerald-900">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div class="bg-blue-950 rounded-2xl p-8 text-center mb-10">
                <h2 class="text-2xl font-black text-white mb-3 font-space">Ready to Take Action?</h2>
                <p class="text-blue-200 mb-6">{content.cta}</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" class="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl transition-colors">
                    <i class="fa-solid fa-calendar-check mr-2"></i>Schedule Appointment
                  </a>
                  <a href={`tel:${COMPANY.phone}`} class="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl transition-colors">
                    <i class="fa-solid fa-phone mr-2"></i>{COMPANY.phone}
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div class="prose prose-lg max-w-none">
              <p class="text-gray-600 leading-relaxed mb-6">
                For detailed guidance on this topic, contact our team at <a href="/contact" class="text-emerald-600 font-semibold hover:underline">Eugene Solutions LLC</a> or call us at <a href={`tel:${COMPANY.phone}`} class="text-emerald-600 font-semibold hover:underline">{COMPANY.phone}</a>.
              </p>
            </div>
          )}

          {/* Author box */}
          <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-10">
            <div class="flex items-start">
              <div class="bg-blue-950 text-white w-14 h-14 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <i class="fa-solid fa-users text-lg"></i>
              </div>
              <div>
                <div class="font-bold text-gray-900">{post.author}</div>
                <div class="text-gray-500 text-sm mb-2">Eugene Solutions LLC — Licensed Tax Professionals</div>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Our team of PTIN-verified, IRS-authorized tax professionals publishes weekly insights to help individuals and businesses navigate the tax code. Serving all 50 states virtually with physical offices in the Southeast.
                </p>
              </div>
            </div>
          </div>

          {/* Compliance disclaimer */}
          <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-10">
            <p class="text-xs text-gray-500 italic">
              <strong>IRS Circular 230 Disclosure:</strong> Eugene Solutions LLC provides this content for general informational purposes. It does not constitute tax, legal, or accounting advice. Individual tax situations vary. Consult a qualified tax professional for advice specific to your circumstances. Eugene Solutions LLC is subject to IRS Circular 230 professional standards.
            </p>
          </div>

          {/* Related posts */}
          <div class="mt-12">
            <h2 class="text-2xl font-black text-gray-900 mb-6 font-space">Related Articles</h2>
            <div class="grid md:grid-cols-3 gap-6">
              {BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3).map((p) => (
                <a href={`/blog/${p.slug}`} class="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all group">
                  <span class="text-xs font-bold text-emerald-600 mb-2 block">{p.category}</span>
                  <h3 class="font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{p.title}</h3>
                  <p class="text-gray-500 text-sm mb-3 line-clamp-2">{p.excerpt}</p>
                  <span class="text-xs text-gray-400">{p.date}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>,
    { title: post.title, description: post.excerpt }
  )
}
