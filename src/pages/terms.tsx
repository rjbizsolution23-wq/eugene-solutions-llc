import type { Context } from 'hono'
import { Navbar, Footer } from '../components'
import { COMPANY } from '../constants'

export const termsPage = (c: Context) => {
  return c.render(
    <div>
      <Navbar />
      
      <section class="bg-blue-950 py-24 pt-40">
        <div class="max-w-4xl mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-black text-white mb-4 font-space">Terms of Service</h1>
          <p class="text-blue-200">Last Updated: February 23, 2026</p>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 space-y-10">
          
          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">1. Agreement to Terms</h2>
            <p class="text-gray-600 leading-relaxed">
              By accessing or using the Eugene Solutions LLC website and services ("Services"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the Services. These terms apply to all visitors, users, and clients of Eugene Solutions LLC.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">2. Tax Preparation Services</h2>
            <p class="text-gray-600 leading-relaxed mb-4">Eugene Solutions LLC provides tax preparation, tax planning, bookkeeping, accounting, government contracting, and related financial services. By engaging our services, you agree that:</p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>You will provide complete, accurate, and truthful information for your tax return</li>
              <li>You are responsible for reviewing your completed tax return before signing</li>
              <li>Your electronic signature (Form 8879) authorizes us to e-file your return with the IRS</li>
              <li>We will prepare your return in accordance with applicable tax law and IRS regulations</li>
              <li>Final preparation fees are determined at intake based on complexity</li>
              <li>A written fee estimate will be provided before preparation begins</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">3. Fees & Payment</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              Our fee schedule is available on our <a href="/pricing" class="text-emerald-600 underline">Pricing page</a>. Payment is due upon completion of services unless you elect a bank product (Refund Anticipation Check). Bank products are subject to separate third-party fees and approval. We accept cash, check, credit card, and debit card.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">4. Document Retention</h2>
            <p class="text-gray-600 leading-relaxed">
              Eugene Solutions LLC retains copies of your tax return and supporting documents for a minimum of 3 years as required by IRS regulations. You may request deletion of your records after this mandatory retention period. All documents are stored in AES-256 encrypted storage per our WISP.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">5. Client Portal</h2>
            <p class="text-gray-600 leading-relaxed">
              Access to our Client Portal requires a unique username and password. You are responsible for maintaining the confidentiality of your login credentials. All data transmitted through the portal is encrypted using TLS 1.3. You must not share your portal credentials with anyone.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">6. Limitation of Liability</h2>
            <p class="text-gray-600 leading-relaxed">
              Eugene Solutions LLC will prepare your tax return with professional care and in accordance with applicable tax law. However, we are not responsible for IRS processing delays, changes in tax law after filing, or penalties resulting from inaccurate information provided by the client. Our liability is limited to the fee paid for the specific service in question. We maintain Errors & Omissions (E&O) insurance for additional protection.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">7. IRS Circular 230 Disclosure</h2>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <p class="text-blue-900 leading-relaxed">
                {COMPANY.disclaimer}
              </p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">8. Privacy</h2>
            <p class="text-gray-600 leading-relaxed">
              Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our <a href="/privacy" class="text-emerald-600 underline">Privacy Notice (GLBA)</a>, which complies with the Gramm-Leach-Bliley Act and FTC Safeguards Rule.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">9. Dispute Resolution</h2>
            <p class="text-gray-600 leading-relaxed">
              Any disputes arising from these Terms or our Services shall first be addressed through good-faith negotiation. If unresolved, disputes shall be submitted to binding arbitration in the State of Florida, under the rules of the American Arbitration Association. The prevailing party shall be entitled to reasonable attorneys' fees.
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">10. Changes to Terms</h2>
            <p class="text-gray-600 leading-relaxed">
              Eugene Solutions LLC reserves the right to modify these Terms at any time. Material changes will be posted on this page with an updated revision date. Continued use of our Services after changes constitutes acceptance of the new Terms.
            </p>
          </div>

          <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h2 class="text-xl font-bold text-gray-900 mb-3 font-space">Questions About These Terms?</h2>
            <p class="text-gray-600 mb-2">Eugene Solutions LLC</p>
            <p class="text-gray-600">{COMPANY.address.full}</p>
            <p class="text-gray-600">{COMPANY.phone} | {COMPANY.email}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>,
    { title: 'Terms of Service', description: 'Terms of Service for Eugene Solutions LLC tax preparation and financial services.' }
  )
}
