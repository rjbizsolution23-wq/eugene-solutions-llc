import type { Context } from 'hono'
import { Navbar, Footer } from '../components'
import { COMPANY } from '../constants'

export const privacyPage = (c: Context) => {
  return c.render(
    <div>
      <Navbar />
      
      <section class="bg-blue-950 py-24 pt-40">
        <div class="max-w-4xl mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-black text-white mb-4 font-space">Privacy Notice</h1>
          <p class="text-blue-200 text-lg">
            <strong class="text-white">Eugene Solutions LLC</strong> — Required disclosure under the Gramm-Leach-Bliley Act (GLBA), 15 U.S.C. &sect; 6801 et seq., and the FTC Financial Privacy Rule (16 C.F.R. Part 313).
          </p>
          <p class="text-blue-300 text-sm mt-3">
            Last Updated: February 23, 2026 | Source: <a href="https://www.ftc.gov/business-guidance/privacy-security/gramm-leach-bliley-act" class="underline text-blue-200" target="_blank" rel="noopener">FTC GLBA Compliance Guide</a>
          </p>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 space-y-12">
          
          {/* What We Collect */}
          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">What Personal Information We Collect</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              To provide tax preparation services, Eugene Solutions LLC may collect the following categories of nonpublic personal information:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Name, address, date of birth, and Social Security Number (SSN) or ITIN</li>
              <li>Income information (W-2s, 1099s, K-1s, business income)</li>
              <li>Financial account information for refund direct deposit or payment</li>
              <li>Prior year tax return information</li>
              <li>Dependent information (name, SSN, relationship, dates of birth)</li>
              <li>Employment and self-employment information</li>
              <li>Investment and retirement account information</li>
            </ul>
          </div>

          {/* How We Use It */}
          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">How We Use Your Information</h2>
            <p class="text-gray-600 leading-relaxed mb-4">We use your personal financial information solely to:</p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Prepare, review, and e-file your federal and state tax returns</li>
              <li>Communicate with you about your tax return and appointment</li>
              <li>Provide year-round tax planning services when requested</li>
              <li>Comply with IRS and legal requirements (3-year document retention)</li>
              <li>Process payments for our services</li>
            </ul>
          </div>

          {/* Sharing */}
          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">Information Sharing</h2>
            <div class="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mb-4">
              <p class="font-bold text-emerald-900 text-lg">
                <i class="fa-solid fa-circle-check text-emerald-500 mr-2"></i>
                We do NOT sell your personal information to anyone. Ever.
              </p>
            </div>
            <p class="text-gray-600 leading-relaxed mb-4">We share your information only in these limited circumstances:</p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>IRS and state tax authorities</strong> — for filing your tax returns (with your signed Form 8879 authorization)</li>
              <li><strong>Bank product providers</strong> — only if you elect a Refund Anticipation Check (RAC) or similar product</li>
              <li><strong>Legal compliance</strong> — when required by law, subpoena, or valid court order</li>
              <li><strong>Service providers</strong> — secure cloud infrastructure providers operating under strict data protection agreements</li>
            </ul>
          </div>

          {/* Data Security */}
          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">Data Security (FTC Safeguards Rule)</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              Eugene Solutions LLC maintains a Written Information Security Plan (WISP) as required by the FTC Safeguards Rule (16 C.F.R. Part 314) and IRS Publication 4557. Our security measures include:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>AES-256 encryption for all stored personal and financial data</li>
              <li>TLS 1.3 encryption for all data in transit</li>
              <li>Multi-factor authentication (MFA) required for all staff access</li>
              <li>Role-based access controls — staff access only their assigned clients</li>
              <li>Annual risk assessments per NIST Cybersecurity Framework</li>
              <li>Regular staff security training and WISP compliance reviews</li>
              <li>Incident response plan with FTC notification within 30 days if required</li>
            </ul>
            <p class="text-gray-500 text-sm mt-4">
              Source: <a href="https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know" class="text-blue-600 underline" target="_blank" rel="noopener">FTC Safeguards Rule Compliance Guide</a> | <a href="https://www.irs.gov/pub/irs-pdf/p4557.pdf" class="text-blue-600 underline" target="_blank" rel="noopener">IRS Publication 4557</a>
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">Your Rights</h2>
            <ul class="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your records (subject to IRS 3-year retention requirement)</li>
              <li>Opt out of marketing communications at any time</li>
              <li>File a complaint with the FTC: <a href="https://reportfraud.ftc.gov" class="text-blue-600 underline" target="_blank" rel="noopener">reportfraud.ftc.gov</a></li>
            </ul>
          </div>

          {/* Cookies & Analytics */}
          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">Cookies & Website Analytics</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              Our website uses essential cookies for functionality and analytics cookies to improve user experience. We use:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Essential cookies for site navigation and security</li>
              <li>Google Analytics (anonymized IP addresses) for website usage data</li>
              <li>No advertising or third-party tracking cookies</li>
            </ul>
            <p class="text-gray-600 mt-4">You may disable cookies in your browser settings at any time.</p>
          </div>

          {/* Contact */}
          <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h2 class="text-xl font-bold text-gray-900 mb-3 font-space">Privacy Questions or Requests</h2>
            <p class="text-gray-600 mb-2">Eugene Solutions LLC | Privacy Officer</p>
            <p class="text-gray-600">{COMPANY.address.full}</p>
            <p class="text-gray-600">{COMPANY.phone} | {COMPANY.email}</p>
            <p class="text-gray-500 text-sm mt-4">
              This notice is provided pursuant to the Gramm-Leach-Bliley Act (15 U.S.C. &sect; 6801 et seq.) and the FTC Financial Privacy Rule (16 C.F.R. Part 313). IRS Circular 230 applies to all tax services rendered.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>,
    { title: 'Privacy Notice (GLBA)', description: 'Eugene Solutions LLC GLBA Privacy Notice — how we collect, use, and protect your financial information under the Gramm-Leach-Bliley Act.' }
  )
}
