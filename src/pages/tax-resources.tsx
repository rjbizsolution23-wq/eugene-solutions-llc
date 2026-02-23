import type { Context } from 'hono'
import { Navbar, Footer } from '../components'
import { COMPANY } from '../constants'

export const taxResourcesPage = (c: Context) => {
  return c.render(
    <div>
      <Navbar />
      
      <section class="bg-blue-950 py-24 pt-40">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-5xl md:text-6xl font-black text-white mb-6 font-space">Tax Resource Center</h1>
          <p class="text-xl text-blue-200 max-w-2xl mx-auto">
            Essential tools, deadlines, and IRS resources to help you navigate tax season with confidence.
          </p>
        </div>
      </section>

      {/* Deadlines */}
      <section id="deadlines" class="py-24 bg-white">
        <div class="max-w-6xl mx-auto px-4">
          <h2 class="text-3xl font-black text-gray-900 mb-8 font-space">
            <i class="fa-solid fa-calendar-days text-blue-600 mr-3"></i>2025 Tax Filing Deadlines
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            {[
              { date: "January 15, 2026", desc: "Q4 2025 estimated tax payment due", type: "Estimated Tax" },
              { date: "January 27, 2026", desc: "IRS begins accepting 2025 e-filed returns", type: "Filing Season" },
              { date: "January 31, 2026", desc: "W-2 and 1099-NEC forms due to recipients", type: "Employer" },
              { date: "March 15, 2026", desc: "S-Corp (1120-S) and Partnership (1065) returns due", type: "Business" },
              { date: "April 15, 2026", desc: "Individual (1040) returns and Q1 2026 estimated payments due", type: "Individual" },
              { date: "April 15, 2026", desc: "C-Corp (1120) returns due", type: "Business" },
              { date: "June 15, 2026", desc: "Q2 2026 estimated tax payment due", type: "Estimated Tax" },
              { date: "September 15, 2026", desc: "Extended S-Corp and Partnership returns due / Q3 estimated payment", type: "Extension" },
              { date: "October 15, 2026", desc: "Extended individual (1040) and C-Corp (1120) returns due", type: "Extension" },
            ].map((deadline) => (
              <div class="flex items-start bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-blue-200 transition-colors">
                <div class="bg-blue-950 text-white text-xs font-bold px-3 py-1.5 rounded-lg mr-4 flex-shrink-0 whitespace-nowrap">{deadline.date.split(',')[0].split(' ').slice(0,2).join(' ')}</div>
                <div>
                  <div class="font-semibold text-gray-900 text-sm">{deadline.desc}</div>
                  <span class="text-xs text-blue-600 font-medium">{deadline.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Calculators */}
      <section id="calculators" class="py-24 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
          <h2 class="text-3xl font-black text-gray-900 mb-8 font-space">
            <i class="fa-solid fa-calculator text-emerald-600 mr-3"></i>Tax Tools & Calculators
          </h2>
          <div class="grid md:grid-cols-3 gap-6">
            {[
              { title: "Tax Withholding Estimator", desc: "Check if you're withholding enough from your paycheck.", url: "https://www.irs.gov/individuals/tax-withholding-estimator", icon: "fa-money-check-dollar" },
              { title: "EITC Assistant", desc: "Find out if you qualify for the Earned Income Tax Credit.", url: "https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit/use-the-eitc-assistant", icon: "fa-hand-holding-dollar" },
              { title: "Where's My Refund?", desc: "Track the status of your federal tax refund.", url: "https://www.irs.gov/refunds", icon: "fa-magnifying-glass-dollar" },
              { title: "IRS Free File", desc: "Free tax preparation software for qualifying taxpayers.", url: "https://www.irs.gov/filing/free-file-do-your-federal-taxes-for-free", icon: "fa-file-invoice" },
              { title: "Standard Deduction Lookup", desc: "Find the current standard deduction for your filing status.", url: "https://www.irs.gov/help/ita/how-much-is-my-standard-deduction", icon: "fa-file-pen" },
              { title: "Tax Bracket Calculator", desc: "Understand which tax bracket your income falls into.", url: "https://www.irs.gov/newsroom/irs-provides-tax-inflation-adjustments-for-tax-year-2025", icon: "fa-chart-simple" }
            ].map((tool) => (
              <a href={tool.url} target="_blank" rel="noopener noreferrer" class="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all group">
                <div class="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                  <i class={`fa-solid ${tool.icon} text-emerald-600 text-xl`}></i>
                </div>
                <h3 class="font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{tool.title}</h3>
                <p class="text-gray-600 text-sm mb-3">{tool.desc}</p>
                <span class="text-emerald-600 text-sm font-semibold">Visit IRS.gov →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* IRS Resources */}
      <section class="py-24 bg-white">
        <div class="max-w-6xl mx-auto px-4">
          <h2 class="text-3xl font-black text-gray-900 mb-8 font-space">
            <i class="fa-solid fa-link text-blue-600 mr-3"></i>Official IRS Resources
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            {[
              { title: "IRS.gov — Official Website", url: "https://irs.gov", desc: "The official Internal Revenue Service website." },
              { title: "IRS Publications", url: "https://www.irs.gov/publications", desc: "Official IRS tax publications and instructions." },
              { title: "IRS Forms & Instructions", url: "https://www.irs.gov/forms-instructions", desc: "Download any IRS form or instruction booklet." },
              { title: "Taxpayer Bill of Rights", url: "https://www.irs.gov/taxpayer-bill-of-rights", desc: "Know your rights when dealing with the IRS." },
              { title: "IRS Publication 4557", url: "https://www.irs.gov/pub/irs-pdf/p4557.pdf", desc: "Safeguarding Taxpayer Data — security requirements for tax preparers." },
              { title: "FTC GLBA Compliance", url: "https://www.ftc.gov/business-guidance/privacy-security/gramm-leach-bliley-act", desc: "Gramm-Leach-Bliley Act compliance information." },
            ].map((resource) => (
              <a href={resource.url} target="_blank" rel="noopener noreferrer" class="flex items-start bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-blue-200 transition-colors group">
                <i class="fa-solid fa-arrow-up-right-from-square text-blue-500 mr-4 mt-1"></i>
                <div>
                  <div class="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{resource.title}</div>
                  <div class="text-gray-600 text-sm">{resource.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="py-16 bg-blue-950">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-black text-white mb-4 font-space">Need Expert Help?</h2>
          <p class="text-blue-200 text-lg mb-8">Our licensed professionals are here to answer your tax questions and prepare your return.</p>
          <a href="/contact" class="inline-flex items-center bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors">
            Schedule a Consultation <i class="fa-solid fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>

      <Footer />
    </div>,
    { title: 'Tax Resource Center', description: 'Tax filing deadlines, IRS tools, calculators, and official resources. Stay informed with Eugene Solutions LLC.' }
  )
}
