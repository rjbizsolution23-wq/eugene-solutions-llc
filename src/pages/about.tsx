import type { Context } from 'hono'
import { Navbar, Footer } from '../components'
import { COMPANY, TEAM_MEMBERS } from '../constants'

export const aboutPage = (c: Context) => {
  return c.render(
    <div>
      <Navbar />
      
      <section class="bg-blue-950 py-24 pt-40">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-5xl md:text-6xl font-black text-white mb-6 font-space">About Eugene Solutions LLC</h1>
          <p class="text-xl text-blue-200 max-w-3xl mx-auto">
            All of your accounting and bookkeeping needs can be met in one location. We assist you in developing a funding strategy from the ground up so that you can achieve your personal and professional goals.
          </p>
        </div>
      </section>

      {/* Story — from live site */}
      <section class="py-24 bg-white">
        <div class="max-w-4xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-black text-gray-900 mb-6 font-space">Generate Wealth</h2>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              Don't waste time trying to figure out the confusing and ever-changing tax world when you have a business to run or a family to raise. Leave it to the experts at Eugene Solutions. We will put our eager and qualified personnel to work for your specific requirements.
            </p>

            <h2 class="text-3xl font-black text-gray-900 mb-6 font-space mt-12">Service All 50 States</h2>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              We are certified to cover all 50 states virtually and have physical locations in the Southeast region. We specialize in personal, state, and business income tax returns, ensuring that your business runs efficiently and your personal assets are secure year after year.
            </p>

            <h2 class="text-3xl font-black text-gray-900 mb-6 font-space mt-12">All Your Needs</h2>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              We'll conduct your tax preparation, bookkeeping, and payroll services so you don't have to! Let us help you save time, energy, and, most importantly, money. There is no one more equipped to keep your money in order. You may rely on us for state income tax returns, tax audit assistance, bookkeeping services, and much more!
            </p>
          </div>

          {/* Values */}
          <div class="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { icon: "fa-bullseye", title: "Accuracy First", desc: "99.8% IRS acceptance rate. Every return reviewed before filing to ensure maximum accuracy." },
              { icon: "fa-shield-halved", title: "Compliance Always", desc: "Full adherence to IRS Circular 230, GLBA, FTC Safeguards Rule, and PTIN requirements." },
              { icon: "fa-heart", title: "Client Focused", desc: "Year-round support, transparent pricing, and personalized service for every financial situation." }
            ].map((v) => (
              <div class="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div class="w-14 h-14 bg-blue-950 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i class={`fa-solid ${v.icon} text-white text-xl`} aria-hidden="true"></i>
                </div>
                <h3 class="font-bold text-gray-900 mb-2 font-space">{v.title}</h3>
                <p class="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section class="py-24 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-black text-gray-900 mb-4 font-space">Meet Our Experts Today</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">Get matched with one of our experts to help you reach your goals. With our team, know you will get every dollar you deserve.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div class="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all">
                <div class="w-20 h-20 bg-blue-950 rounded-2xl flex items-center justify-center mb-6">
                  <i class="fa-solid fa-user-tie text-white text-3xl" aria-hidden="true"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-1 font-space">{member.name}</h3>
                <p class="text-emerald-600 font-semibold text-sm mb-3">{member.role}</p>
                <p class="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div class="flex flex-wrap gap-2">
                  {member.credentials.map((cred) => (
                    <span class="inline-flex items-center bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full font-medium">
                      <i class="fa-solid fa-circle-check mr-1 text-[10px]" aria-hidden="true"></i>{cred}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4">
          <h2 class="text-3xl font-black text-gray-900 mb-8 text-center font-space">Our Credentials & Compliance</h2>
          <div class="grid md:grid-cols-2 gap-6">
            {Object.entries(COMPANY.credentials).map(([key, value]) => (
              <div class="flex items-center bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div class="bg-emerald-100 rounded-lg p-2.5 mr-4 flex-shrink-0">
                  <i class="fa-solid fa-circle-check text-emerald-600" aria-hidden="true"></i>
                </div>
                <div>
                  <div class="font-semibold text-gray-900 text-sm">{key.replace(/_/g, ' ').toUpperCase()}</div>
                  <div class="text-gray-600 text-sm">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="py-16 bg-emerald-600">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-black text-white mb-4 font-space">Ready to Plan Your Brighter Future?</h2>
          <p class="text-emerald-100 text-lg mb-8">Send us a message and tell us about your financial goals and needs. We'll get back to you soon to schedule a consultation.</p>
          <a href="/contact" class="inline-flex items-center bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-emerald-50 transition-colors">
            Request A Consultation <i class="fa-solid fa-arrow-right ml-2" aria-hidden="true"></i>
          </a>
        </div>
      </section>

      <Footer />
    </div>,
    { title: 'About Us', description: 'About Eugene Solutions LLC — Your complete accounting, tax, bookkeeping, and government contracting partner. Serving all 50 states. (407) 810-5368' }
  )
}
