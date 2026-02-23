import type { Context } from 'hono'
import { Navbar, Footer } from '../components'
import { FAQ_DATA, COMPANY } from '../constants'

export const faqPage = (c: Context) => {
  return c.render(
    <div>
      <Navbar />
      
      <section class="bg-blue-950 py-24 pt-40">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-5xl md:text-6xl font-black text-white mb-6 font-space">Frequently Asked Questions</h1>
          <p class="text-xl text-blue-200 max-w-2xl mx-auto">
            Answers to common questions about our tax preparation services, pricing, security, and compliance.
          </p>
        </div>
      </section>

      <section class="py-24 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4">
          <div class="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <div class="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden faq-item">
                <button class="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors" onclick={`toggleFaq(${i})`}>
                  <span class="font-bold text-gray-900 pr-4">{faq.q}</span>
                  <i class={`fa-solid fa-chevron-down text-gray-400 transition-transform duration-200 faq-icon-${i}`}></i>
                </button>
                <div id={`faq-answer-${i}`} class="hidden px-6 pb-5">
                  <p class="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions? */}
          <div class="mt-16 text-center bg-white rounded-3xl p-10 border-2 border-gray-100">
            <i class="fa-solid fa-message-question text-4xl text-emerald-500 mb-4"></i>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">Still Have Questions?</h2>
            <p class="text-gray-600 mb-6">Our team is here to help. Contact us by phone, email, or schedule a consultation.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" class="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                <i class="fa-solid fa-calendar mr-2"></i> Schedule Consultation
              </a>
              <a href={`tel:${COMPANY.phone}`} class="inline-flex items-center justify-center border-2 border-gray-200 hover:border-emerald-300 text-gray-700 font-bold px-6 py-3 rounded-xl transition-colors">
                <i class="fa-solid fa-phone mr-2"></i> {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>,
    { title: 'FAQ', description: 'Frequently asked questions about Eugene Solutions LLC tax preparation services, pricing, security, and IRS compliance.' }
  )
}
