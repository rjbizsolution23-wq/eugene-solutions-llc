import type { Context } from 'hono'
import { Navbar, Footer } from '../components'
import { COMPANY, TEAM_MEMBERS } from '../constants'

export const aboutPage = (c: Context) => {
  return c.render(
    <div>
      <Navbar />
      
      {/* Hero */}
      <section class="bg-blue-950 py-24 pt-40">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-5xl md:text-6xl font-black text-white mb-6 font-space">About Eugene Solutions LLC</h1>
          <p class="text-xl text-blue-200 max-w-2xl mx-auto">
            15+ years of excellence in tax preparation. Meet the team that sets the standard for accuracy, compliance, and client service.
          </p>
        </div>
      </section>

      {/* Story */}
      <section class="py-24 bg-white">
        <div class="max-w-4xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-black text-gray-900 mb-6 font-space">Our Story</h2>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              Founded in 2010 in Eugene, Oregon, Eugene Solutions LLC was built on a simple principle: every taxpayer deserves expert-level tax preparation regardless of the complexity of their situation. What started as a small practice preparing individual returns has grown into a full-service tax agency handling over 10,000 returns annually.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              Our founder, Katherine Mitchell, EA, spent 8 years as an IRS auditor before switching sides to help taxpayers. She understood firsthand what makes a return accurate, what triggers audits, and how to ensure every client is protected. That IRS-insider knowledge became the foundation of Eugene Solutions LLC.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              Today, our team of licensed professionals serves individuals, families, self-employed entrepreneurs, S-Corps, partnerships, and nonprofits. We maintain the highest standards of compliance — PTIN verified, EFIN authorized, GLBA compliant, and E&O insured. We don't just prepare taxes. We set the standard.
            </p>
          </div>

          {/* Values */}
          <div class="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { icon: "fa-bullseye", title: "Accuracy First", desc: "99.8% IRS acceptance rate. Every return reviewed by a second pair of eyes before filing." },
              { icon: "fa-shield-halved", title: "Compliance Always", desc: "Full adherence to IRS Circular 230, GLBA, FTC Safeguards Rule, and PTIN requirements." },
              { icon: "fa-heart", title: "Client Focused", desc: "Year-round support, transparent pricing, and personalized service for every tax situation." }
            ].map((v) => (
              <div class="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div class="w-14 h-14 bg-blue-950 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i class={`fa-solid ${v.icon} text-white text-xl`}></i>
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
            <h2 class="text-4xl font-black text-gray-900 mb-4 font-space">Meet Our Team</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">Every team member is PTIN-verified and committed to IRS compliance and client excellence.</p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div class="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all">
                <div class="w-20 h-20 bg-blue-950 rounded-2xl flex items-center justify-center mb-6">
                  <i class="fa-solid fa-user text-white text-3xl"></i>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-1 font-space">{member.name}</h3>
                <p class="text-emerald-600 font-semibold text-sm mb-3">{member.role}</p>
                <p class="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div class="flex flex-wrap gap-2">
                  {member.credentials.map((cred) => (
                    <span class="inline-flex items-center bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full font-medium">
                      <i class="fa-solid fa-circle-check mr-1 text-[10px]"></i>{cred}
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
          <h2 class="text-3xl font-black text-gray-900 mb-8 text-center font-space">Our Credentials</h2>
          <div class="grid md:grid-cols-2 gap-6">
            {Object.entries(COMPANY.credentials).map(([key, value]) => (
              <div class="flex items-center bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div class="bg-emerald-100 rounded-lg p-2.5 mr-4">
                  <i class="fa-solid fa-circle-check text-emerald-600"></i>
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
          <h2 class="text-3xl font-black text-white mb-4 font-space">Join 10,000+ Clients Who Trust Eugene Solutions</h2>
          <p class="text-emerald-100 text-lg mb-8">Experience the difference that expertise and compliance make.</p>
          <a href="/contact" class="inline-flex items-center bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-emerald-50 transition-colors">
            Schedule Your Appointment <i class="fa-solid fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>

      <Footer />
    </div>,
    { title: 'About Us', description: 'Meet the Eugene Solutions LLC team — 15+ years of IRS-authorized tax preparation excellence. PTIN verified, GLBA compliant, E&O insured.' }
  )
}
