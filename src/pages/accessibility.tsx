import type { Context } from 'hono'
import { Navbar, Footer } from '../components'
import { COMPANY } from '../constants'

export const accessibilityPage = (c: Context) => {
  return c.render(
    <div>
      <Navbar />
      
      <section class="bg-blue-950 py-24 pt-40">
        <div class="max-w-4xl mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-black text-white mb-4 font-space">Accessibility Statement</h1>
          <p class="text-blue-200">WCAG 2.1 Level AA Compliance | Last Updated: February 23, 2026</p>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 space-y-10">
          
          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">Our Commitment</h2>
            <p class="text-gray-600 leading-relaxed">
              Eugene Solutions LLC is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards. Our website strives to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA published by the World Wide Web Consortium (W3C).
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">Accessibility Features</h2>
            <ul class="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Semantic HTML markup for screen reader compatibility</li>
              <li>ARIA labels on all interactive elements</li>
              <li>Keyboard-navigable throughout the entire site</li>
              <li>Color contrast ratios meeting WCAG 2.1 AA standards (minimum 4.5:1)</li>
              <li>Scalable text that supports browser zoom up to 200%</li>
              <li>Alt text on all meaningful images</li>
              <li>Skip navigation links</li>
              <li>Focus indicators on all interactive elements</li>
              <li>Form labels and error messages associated with input fields</li>
              <li>Responsive design that works on all screen sizes and devices</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">Assistive Technology Support</h2>
            <p class="text-gray-600 leading-relaxed mb-4">Our website is designed to be compatible with:</p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software (Dragon NaturallySpeaking)</li>
              <li>Keyboard-only navigation</li>
              <li>High contrast and inverted color modes</li>
            </ul>
          </div>

          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">Alternative Service Access</h2>
            <p class="text-gray-600 leading-relaxed">
              If you have difficulty accessing any part of our website or need assistance with our services, we offer the following alternatives:
            </p>
            <div class="grid md:grid-cols-2 gap-4 mt-4">
              <div class="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <i class="fa-solid fa-phone text-blue-600 mr-2"></i>
                <strong>Phone:</strong> {COMPANY.phone}
              </div>
              <div class="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <i class="fa-solid fa-envelope text-blue-600 mr-2"></i>
                <strong>Email:</strong> {COMPANY.email}
              </div>
              <div class="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <i class="fa-solid fa-location-dot text-blue-600 mr-2"></i>
                <strong>In Person:</strong> Walk-in available
              </div>
              <div class="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <i class="fa-solid fa-tty text-blue-600 mr-2"></i>
                <strong>TTY:</strong> Oregon Relay 7-1-1
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">Feedback</h2>
            <p class="text-gray-600 leading-relaxed">
              We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 mt-4">
              <p class="text-gray-700"><strong>Eugene Solutions LLC — Accessibility Coordinator</strong></p>
              <p class="text-gray-600">{COMPANY.address.full}</p>
              <p class="text-gray-600">{COMPANY.phone} | {COMPANY.email}</p>
              <p class="text-gray-500 text-sm mt-3">We will respond to accessibility feedback within 5 business days.</p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-black text-gray-900 mb-4 font-space">Legal Standards</h2>
            <p class="text-gray-600 leading-relaxed">
              This accessibility statement conforms to the Americans with Disabilities Act (ADA), Section 508 of the Rehabilitation Act, and WCAG 2.1 Level AA guidelines. Eugene Solutions LLC regularly audits our website for accessibility compliance.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>,
    { title: 'Accessibility Statement', description: 'Eugene Solutions LLC accessibility statement — WCAG 2.1 Level AA compliance for all users.' }
  )
}
