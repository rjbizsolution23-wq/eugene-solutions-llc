import type { Context } from 'hono'
import { Navbar, Footer } from '../components'
import { COMPANY } from '../constants'

export const careersPage = (c: Context) => {
  return c.render(
    <div>
      <Navbar />
      
      <section class="bg-blue-950 py-24 pt-40">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-5xl md:text-6xl font-black text-white mb-6 font-space">Careers at Eugene Solutions</h1>
          <p class="text-xl text-blue-200 max-w-2xl mx-auto">
            Join a team that sets the standard for tax preparation excellence. We're always looking for talented, licensed professionals.
          </p>
        </div>
      </section>

      <section class="py-24 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4">
          {/* Open Positions */}
          <h2 class="text-3xl font-black text-gray-900 mb-8 font-space">Open Positions</h2>
          
          {[
            {
              title: "Seasonal Tax Preparer",
              type: "Seasonal (Jan–Apr)",
              location: "Southeast Region — In-Office",
              requirements: ["Active PTIN required", "2+ years tax preparation experience", "IRS AFSP or EA preferred", "EITC due diligence knowledge", "Excellent client communication skills"],
              desc: "Prepare individual Form 1040 returns including all schedules. Handle EITC, CTC, and education credit returns with due diligence compliance."
            },
            {
              title: "Senior Business Tax Preparer",
              type: "Full-Time",
              location: "Southeast Region — In-Office / Hybrid",
              requirements: ["Active PTIN required", "CPA or EA preferred", "5+ years business tax experience", "S-Corp, Partnership, C-Corp expertise", "Multi-state filing experience"],
              desc: "Prepare complex business returns (1120-S, 1065, 1120) and provide entity selection guidance. Work with our business clients year-round."
            },
            {
              title: "Client Services Coordinator",
              type: "Full-Time",
              location: "Southeast Region — In-Office",
              requirements: ["Customer service experience", "Tax office experience preferred", "Organizational skills", "Bilingual (English/Spanish) preferred", "Comfortable with technology"],
              desc: "Manage client intake, scheduling, document collection, and front-desk operations. First point of contact for all clients."
            }
          ].map((job) => (
            <div class="bg-white rounded-2xl p-8 border-2 border-gray-100 mb-6 hover:border-emerald-200 transition-colors">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 class="text-xl font-bold text-gray-900 font-space">{job.title}</h3>
                  <div class="flex items-center gap-3 mt-1">
                    <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">{job.type}</span>
                    <span class="text-xs text-gray-500"><i class="fa-solid fa-location-dot mr-1"></i>{job.location}</span>
                  </div>
                </div>
              </div>
              <p class="text-gray-600 mb-4">{job.desc}</p>
              <h4 class="font-semibold text-gray-900 mb-2">Requirements:</h4>
              <ul class="space-y-1 mb-6">
                {job.requirements.map((req) => (
                  <li class="flex items-center text-sm text-gray-700">
                    <i class="fa-solid fa-circle-check text-emerald-500 mr-2 text-xs"></i>{req}
                  </li>
                ))}
              </ul>
              <a href={`mailto:${COMPANY.email}?subject=Application: ${job.title}`} class="inline-flex items-center bg-blue-950 hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                <i class="fa-solid fa-paper-plane mr-2"></i>Apply Now
              </a>
            </div>
          ))}

          {/* Why join */}
          <div class="mt-16 bg-white rounded-3xl p-10 border-2 border-gray-100">
            <h2 class="text-2xl font-black text-gray-900 mb-6 font-space">Why Join Eugene Solutions?</h2>
            <div class="grid md:grid-cols-2 gap-6">
              {[
                { icon: "fa-dollar-sign", title: "Competitive Pay", desc: "Above-market compensation with performance bonuses" },
                { icon: "fa-graduation-cap", title: "Professional Development", desc: "CE credits, training, and credential support" },
                { icon: "fa-clock", title: "Flexible Schedule", desc: "Year-round flexibility, seasonal intensity" },
                { icon: "fa-users", title: "Great Team", desc: "Supportive, professional work environment" },
                { icon: "fa-shield-halved", title: "E&O Insurance", desc: "Full coverage for all preparers" },
                { icon: "fa-heart", title: "Make a Difference", desc: "Help families and businesses succeed financially" },
              ].map((benefit) => (
                <div class="flex items-start">
                  <div class="bg-emerald-50 rounded-lg p-2.5 mr-3 flex-shrink-0">
                    <i class={`fa-solid ${benefit.icon} text-emerald-600`}></i>
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900 text-sm">{benefit.title}</div>
                    <div class="text-gray-500 text-sm">{benefit.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>,
    { title: 'Careers', description: 'Join the Eugene Solutions LLC team. Open positions for licensed tax preparers, CPAs, and client services professionals.' }
  )
}
