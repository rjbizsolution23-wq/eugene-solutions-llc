import type { Context } from 'hono'
import { Navbar, Footer } from '../components'
import { COMPANY } from '../constants'

export const contactPage = (c: Context) => {
  return c.render(
    <div>
      <Navbar />
      
      <section class="bg-blue-950 py-24 pt-40">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-5xl md:text-6xl font-black text-white mb-6 font-space">Contact Us</h1>
          <p class="text-xl text-blue-200 max-w-2xl mx-auto">
            Send us a message and tell us more about your financial goals and needs. We'll get back to you soon to schedule a consultation.
          </p>
        </div>
      </section>

      <section class="py-24 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
          <div class="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h2 class="text-2xl font-black text-gray-900 mb-2 font-space">Request A Consultation</h2>
              <p class="text-gray-600 mb-8">Fill out the form below and we'll contact you within 1 business day to confirm.</p>
              
              <form id="contact-form" class="space-y-5" onsubmit="handleContactSubmit(event)">
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label for="firstName" class="block text-sm font-semibold text-gray-700 mb-1">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label for="lastName" class="block text-sm font-semibold text-gray-700 mb-1">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label for="email" class="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                  <input type="email" id="email" name="email" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label for="phone" class="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
                  <input type="tel" id="phone" name="phone" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors" placeholder="(407) 555-1234" />
                </div>
                <div>
                  <label for="service" class="block text-sm font-semibold text-gray-700 mb-1">Service Needed *</label>
                  <select id="service" name="service" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors bg-white">
                    <option value="">Select a service...</option>
                    <option value="tax-preparation">Tax Preparation</option>
                    <option value="bookkeeping">Bookkeeping</option>
                    <option value="accounting">Accounting</option>
                    <option value="government-contracting">Government Contracting</option>
                    <option value="business-tax">Business Tax Return (S-Corp, LLC, Partnership)</option>
                    <option value="tax-planning">Tax Planning Consultation</option>
                    <option value="irs-representation">IRS Audit Representation</option>
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
                      <input type="radio" name="appointmentType" value="virtual" class="mr-2 accent-emerald-500" checked />
                      <span class="text-sm text-gray-700">Virtual</span>
                    </label>
                    <label class="flex items-center cursor-pointer">
                      <input type="radio" name="appointmentType" value="in-person" class="mr-2 accent-emerald-500" />
                      <span class="text-sm text-gray-700">In-Person</span>
                    </label>
                    <label class="flex items-center cursor-pointer">
                      <input type="radio" name="appointmentType" value="phone" class="mr-2 accent-emerald-500" />
                      <span class="text-sm text-gray-700">Phone</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label for="message" class="block text-sm font-semibold text-gray-700 mb-1">Tell us about your financial goals and needs</label>
                  <textarea id="message" name="message" rows={4} class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors resize-none" placeholder="Tell us about your tax situation, business needs, or any questions..."></textarea>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1">Attach Files (optional)</label>
                  <div class="w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-xl text-center text-gray-500 text-sm">
                    <i class="fa-solid fa-cloud-arrow-up text-2xl mb-2 block" aria-hidden="true"></i>
                    Drag files here or <span class="text-emerald-600 font-semibold cursor-pointer">browse</span>
                    <p class="text-xs text-gray-400 mt-1">PDF, JPG, PNG — Max 10MB per file</p>
                  </div>
                </div>
                <button type="submit" class="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 rounded-xl text-lg transition-colors shadow-lg shadow-emerald-500/20">
                  <i class="fa-solid fa-calendar-check mr-2" aria-hidden="true"></i>Request Consultation
                </button>
                <p class="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our <a href="/privacy" class="text-blue-600 underline">Privacy Notice</a> and <a href="/terms" class="text-blue-600 underline">Terms of Service</a>.
                </p>
              </form>
              <div id="form-success" class="hidden bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 text-center mt-6">
                <i class="fa-solid fa-circle-check text-emerald-500 text-4xl mb-3" aria-hidden="true"></i>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Consultation Request Received!</h3>
                <p class="text-gray-600">We'll contact you within 1 business day to confirm your appointment.</p>
              </div>
            </div>

            {/* Contact Info */}
            <div class="space-y-8">
              <div class="bg-white rounded-2xl p-8 border-2 border-gray-100">
                <h3 class="text-xl font-bold text-gray-900 mb-2 font-space">Better Yet, See Us In Person!</h3>
                <p class="text-gray-600 mb-6 text-sm">We love our customers, so feel free to visit during normal business hours.</p>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="bg-emerald-50 rounded-lg p-2.5 mr-4 flex-shrink-0">
                      <i class="fa-solid fa-phone text-emerald-600" aria-hidden="true"></i>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">Phone</div>
                      <a href={`tel:${COMPANY.phoneRaw}`} class="text-emerald-600 font-medium text-lg">{COMPANY.phone}</a>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="bg-purple-50 rounded-lg p-2.5 mr-4 flex-shrink-0">
                      <i class="fa-solid fa-envelope text-purple-600" aria-hidden="true"></i>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">Email</div>
                      <a href={`mailto:${COMPANY.email}`} class="text-purple-600 font-medium">{COMPANY.email}</a>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="bg-blue-50 rounded-lg p-2.5 mr-4 flex-shrink-0">
                      <i class="fa-solid fa-globe text-blue-600" aria-hidden="true"></i>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">Service Area</div>
                      <div class="text-gray-600 text-sm">{COMPANY.address.serviceArea}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-8 border-2 border-gray-100">
                <h3 class="text-xl font-bold text-gray-900 mb-6 font-space">Office Hours</h3>
                <div class="space-y-3">
                  {[
                    { day: "Monday", hours: COMPANY.hours.monday },
                    { day: "Tuesday", hours: COMPANY.hours.tuesday },
                    { day: "Wednesday", hours: COMPANY.hours.wednesday },
                    { day: "Thursday", hours: COMPANY.hours.thursday },
                    { day: "Friday", hours: COMPANY.hours.friday },
                    { day: "Saturday", hours: COMPANY.hours.saturday },
                    { day: "Sunday", hours: COMPANY.hours.sunday },
                  ].map((d) => (
                    <div class="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                      <span class="font-medium text-gray-900 text-sm">{d.day}</span>
                      <span class={`text-sm ${d.hours === 'By Appointment' ? 'text-amber-600 font-medium' : 'text-gray-600'}`}>{d.hours}</span>
                    </div>
                  ))}
                </div>
                <div class="mt-4 bg-amber-50 rounded-lg p-3">
                  <p class="text-amber-700 text-xs font-medium">
                    <i class="fa-solid fa-clock mr-1" aria-hidden="true"></i>
                    <strong>Tax Season Hours (Jan 15 — Apr 15):</strong> Extended hours Mon-Sat 8AM-9PM, Sun 10AM-6PM
                  </p>
                </div>
              </div>

              <div class="bg-white rounded-2xl p-8 border-2 border-gray-100">
                <h3 class="text-xl font-bold text-gray-900 mb-4 font-space">Quick Contact</h3>
                <div class="space-y-3">
                  <a href={`tel:${COMPANY.phoneRaw}`} class="flex items-center justify-center bg-blue-950 hover:bg-blue-900 text-white font-bold py-3 rounded-xl transition-colors w-full">
                    <i class="fa-solid fa-phone mr-2" aria-hidden="true"></i> Call {COMPANY.phone}
                  </a>
                  <a href={`mailto:${COMPANY.email}`} class="flex items-center justify-center border-2 border-gray-200 hover:border-emerald-300 text-gray-700 font-bold py-3 rounded-xl transition-colors w-full">
                    <i class="fa-solid fa-envelope mr-2" aria-hidden="true"></i> Email Us
                  </a>
                </div>
              </div>

              {/* Referral box */}
              <div class="bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200">
                <div class="flex items-center mb-3">
                  <i class="fa-solid fa-gift text-emerald-600 text-xl mr-3" aria-hidden="true"></i>
                  <h3 class="text-lg font-bold text-emerald-900 font-space">Tell a Friend!</h3>
                </div>
                <p class="text-emerald-800 text-sm">{COMPANY.referral}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>,
    { title: 'Contact Us', description: 'Contact Eugene Solutions LLC — (407) 810-5368 — Schedule a consultation for tax preparation, bookkeeping, accounting, or government contracting. Virtual and in-person available.' }
  )
}
