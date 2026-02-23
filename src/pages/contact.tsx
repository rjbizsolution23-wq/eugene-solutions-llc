import type { Context } from 'hono'
import { Navbar, Footer } from '../components'
import { COMPANY } from '../constants'

export const contactPage = (c: Context) => {
  return c.render(
    <div>
      <Navbar />
      
      {/* Hero */}
      <section class="bg-blue-950 py-24 pt-40">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-5xl md:text-6xl font-black text-white mb-6 font-space">Contact Us</h1>
          <p class="text-xl text-blue-200 max-w-2xl mx-auto">
            Schedule an appointment, ask a question, or walk in today. We're ready to help with your tax needs.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section class="py-24 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
          <div class="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h2 class="text-2xl font-black text-gray-900 mb-2 font-space">Schedule an Appointment</h2>
              <p class="text-gray-600 mb-8">Fill out the form below and we'll contact you within 1 business day to confirm.</p>
              
              <form id="contact-form" class="space-y-5" onsubmit="handleContactSubmit(event)">
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1">First Name *</label>
                    <input type="text" name="firstName" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1">Last Name *</label>
                    <input type="text" name="lastName" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                  <input type="email" name="email" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
                  <input type="tel" name="phone" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1">Service Needed *</label>
                  <select name="service" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors bg-white">
                    <option value="">Select a service...</option>
                    <option value="individual">Individual Tax Return (1040)</option>
                    <option value="business">Business Tax Return (S-Corp, LLC, Partnership)</option>
                    <option value="tax-planning">Tax Planning Consultation</option>
                    <option value="irs-audit">IRS Audit Representation</option>
                    <option value="bookkeeping">Bookkeeping & Payroll</option>
                    <option value="itin">ITIN Application</option>
                    <option value="amended">Amended Return (1040-X)</option>
                    <option value="prior-year">Prior Year Returns</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1">Preferred Appointment Type</label>
                  <div class="flex gap-4">
                    <label class="flex items-center cursor-pointer">
                      <input type="radio" name="appointmentType" value="in-person" class="mr-2 accent-emerald-500" checked />
                      <span class="text-sm text-gray-700">In-Person</span>
                    </label>
                    <label class="flex items-center cursor-pointer">
                      <input type="radio" name="appointmentType" value="virtual" class="mr-2 accent-emerald-500" />
                      <span class="text-sm text-gray-700">Virtual</span>
                    </label>
                    <label class="flex items-center cursor-pointer">
                      <input type="radio" name="appointmentType" value="drop-off" class="mr-2 accent-emerald-500" />
                      <span class="text-sm text-gray-700">Drop-Off</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                  <textarea name="message" rows={4} class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors resize-none" placeholder="Tell us about your tax situation or any questions..."></textarea>
                </div>
                <button type="submit" class="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 rounded-xl text-lg transition-colors shadow-lg shadow-emerald-500/20">
                  <i class="fa-solid fa-calendar-check mr-2"></i>Request Appointment
                </button>
                <p class="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our <a href="/privacy" class="text-blue-600 underline">Privacy Notice</a> and <a href="/terms" class="text-blue-600 underline">Terms of Service</a>.
                </p>
              </form>
              <div id="form-success" class="hidden bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 text-center mt-6">
                <i class="fa-solid fa-circle-check text-emerald-500 text-4xl mb-3"></i>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Appointment Request Received!</h3>
                <p class="text-gray-600">We'll contact you within 1 business day to confirm your appointment.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div class="space-y-8">
              <div class="bg-white rounded-2xl p-8 border-2 border-gray-100">
                <h3 class="text-xl font-bold text-gray-900 mb-6 font-space">Contact Information</h3>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="bg-blue-50 rounded-lg p-2.5 mr-4 flex-shrink-0">
                      <i class="fa-solid fa-location-dot text-blue-600"></i>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">Address</div>
                      <div class="text-gray-600 text-sm">{COMPANY.address.full}</div>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="bg-emerald-50 rounded-lg p-2.5 mr-4 flex-shrink-0">
                      <i class="fa-solid fa-phone text-emerald-600"></i>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">Phone</div>
                      <a href={`tel:${COMPANY.phone}`} class="text-emerald-600 font-medium">{COMPANY.phone}</a>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="bg-purple-50 rounded-lg p-2.5 mr-4 flex-shrink-0">
                      <i class="fa-solid fa-envelope text-purple-600"></i>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">Email</div>
                      <a href={`mailto:${COMPANY.email}`} class="text-purple-600 font-medium">{COMPANY.email}</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-8 border-2 border-gray-100">
                <h3 class="text-xl font-bold text-gray-900 mb-6 font-space">Office Hours</h3>
                <div class="space-y-4">
                  <div>
                    <div class="flex items-center mb-2">
                      <span class="inline-flex items-center bg-amber-100 text-amber-700 text-xs px-2.5 py-1 rounded-full font-bold">TAX SEASON</span>
                      <span class="text-gray-500 text-xs ml-2">Jan 15 – Apr 15</span>
                    </div>
                    <div class="text-gray-700 font-medium">{COMPANY.hours.taxSeason}</div>
                  </div>
                  <div>
                    <div class="flex items-center mb-2">
                      <span class="inline-flex items-center bg-blue-100 text-blue-700 text-xs px-2.5 py-1 rounded-full font-bold">OFF-SEASON</span>
                      <span class="text-gray-500 text-xs ml-2">Apr 16 – Jan 14</span>
                    </div>
                    <div class="text-gray-700 font-medium">{COMPANY.hours.offSeason}</div>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-8 border-2 border-gray-100">
                <h3 class="text-xl font-bold text-gray-900 mb-4 font-space">Quick Contact</h3>
                <div class="space-y-3">
                  <a href={`tel:${COMPANY.phone}`} class="flex items-center justify-center bg-blue-950 hover:bg-blue-900 text-white font-bold py-3 rounded-xl transition-colors w-full">
                    <i class="fa-solid fa-phone mr-2"></i> Call Now
                  </a>
                  <a href={`mailto:${COMPANY.email}`} class="flex items-center justify-center border-2 border-gray-200 hover:border-emerald-300 text-gray-700 font-bold py-3 rounded-xl transition-colors w-full">
                    <i class="fa-solid fa-envelope mr-2"></i> Send Email
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <div class="bg-gray-200 rounded-2xl h-64 flex items-center justify-center border-2 border-gray-100">
                <div class="text-center text-gray-500">
                  <i class="fa-solid fa-map-location-dot text-4xl mb-2"></i>
                  <p class="font-medium">Google Maps Integration</p>
                  <p class="text-sm">{COMPANY.address.full}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>,
    { title: 'Contact Us', description: 'Schedule a tax preparation appointment with Eugene Solutions LLC. In-person, virtual, or drop-off options available.' }
  )
}
