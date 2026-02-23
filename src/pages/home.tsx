import type { Context } from 'hono'
import { Navbar, Footer, TrustBadges } from '../components'
import { COMPANY, SERVICES, TESTIMONIALS } from '../constants'

export const homePage = (c: Context) => {
  return c.render(
    <div>
      <Navbar />
      
      {/* ══ HERO SECTION ══ */}
      <section class="relative min-h-screen flex items-center overflow-hidden" style="background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #064e3b 100%);">
        {/* Animated grid bg */}
        <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px); background-size: 60px 60px;"></div>
        
        {/* Glowing orbs */}
        <div class="absolute top-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
        
        <div class="max-w-7xl mx-auto px-4 relative z-10 py-24 w-full">
          <div class="max-w-4xl mx-auto text-center">
            {/* Trust badge pill */}
            <div class="inline-flex items-center bg-emerald-500/20 border border-emerald-400/30 rounded-full px-5 py-2.5 mb-8 backdrop-blur-sm">
              <i class="fa-solid fa-shield-halved text-emerald-400 mr-2 text-sm"></i>
              <span class="text-emerald-300 text-sm font-medium">IRS Authorized E-File Provider &bull; PTIN Verified &bull; GLBA Compliant</span>
            </div>

            {/* Main headline */}
            <h1 class="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.05] font-space tracking-tight">
              The Tax Agency That{' '}
              <span class="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text" style="color: transparent; -webkit-background-clip: text;">Sets the Standard</span>
            </h1>

            {/* Subheadline */}
            <p class="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Eugene Solutions LLC delivers expert, IRS-compliant tax preparation for individuals and businesses — maximizing your refund while protecting you from every angle.
            </p>

            {/* CTA buttons */}
            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a href="/contact" class="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5">
                Start My Return Today
                <i class="fa-solid fa-arrow-right ml-2"></i>
              </a>
              <a href="/portal" class="inline-flex items-center justify-center border-2 border-white/30 hover:border-white/60 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 backdrop-blur-sm hover:bg-white/10">
                <i class="fa-solid fa-lock mr-2"></i>
                Client Portal Login
              </a>
            </div>

            {/* Quick trust stats */}
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { value: "10,000+", label: "Returns Filed" },
                { value: "99.8%", label: "IRS Acceptance Rate" },
                { value: "$2.4M+", label: "Refunds Secured" },
                { value: "15+", label: "Years of Excellence" }
              ].map((stat) => (
                <div class="text-center">
                  <div class="text-3xl font-black text-white font-space">{stat.value}</div>
                  <div class="text-blue-300 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div class="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div class="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* ══ TRUST BADGES ══ */}
      <TrustBadges />

      {/* ══ SERVICES OVERVIEW ══ */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4 font-space">Complete Tax Solutions</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">From simple W-2 returns to complex business filings — we handle it all with precision, compliance, and speed.</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div class="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-50 transition-all duration-300 hover:-translate-y-1">
                <div class="text-4xl mb-4"><i class={`${service.icon} text-blue-950`}></i></div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 font-space">{service.title}</h3>
                <p class="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
                <ul class="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li class="flex items-center text-sm text-gray-700">
                      <i class="fa-solid fa-circle-check text-emerald-500 mr-2 text-xs"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href={`/services#${service.id}`} class="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 group-hover:underline text-sm">
                  Learn More <i class="fa-solid fa-arrow-right ml-1 text-xs"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6 font-space">
                Why Eugene Solutions LLC Is <span class="text-emerald-600">The Standard</span>
              </h2>
              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                We don't just prepare taxes — we build financial confidence. Every return is prepared by a PTIN-verified professional, reviewed for accuracy, and e-filed with same-day confirmation.
              </p>
              <div class="space-y-4">
                {[
                  { icon: "fa-shield-halved", title: "PTIN & EFIN Verified", desc: "Every preparer holds a current IRS Preparer Tax Identification Number", color: "emerald" },
                  { icon: "fa-lock", title: "Bank-Grade Data Security", desc: "AES-256 encryption, MFA, and GLBA Safeguards Rule compliance", color: "purple" },
                  { icon: "fa-circle-check", title: "99.8% IRS Acceptance Rate", desc: "Our returns are accurate the first time, every time", color: "blue" },
                  { icon: "fa-clock", title: "Same-Day E-Filing", desc: "Most returns e-filed within 24 hours of document receipt", color: "amber" },
                  { icon: "fa-arrow-trend-up", title: "Maximum Refund Guaranteed", desc: "We find every deduction and credit you legally qualify for", color: "red" },
                  { icon: "fa-users", title: "Year-Round Support", desc: "We're here 365 days/year — not just during tax season", color: "cyan" }
                ].map((item) => (
                  <div class="flex items-start">
                    <div class={`bg-${item.color}-100 rounded-lg p-2.5 mr-4 flex-shrink-0`}>
                      <i class={`fa-solid ${item.icon} text-${item.color}-600`}></i>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">{item.title}</div>
                      <div class="text-gray-600 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process steps */}
            <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 class="text-2xl font-bold text-gray-900 mb-8 font-space">How It Works</h3>
              {[
                { step: "01", title: "Schedule or Walk In", desc: "Book online, call us, or drop by. We're flexible for your schedule." },
                { step: "02", title: "Secure Document Upload", desc: "Upload your documents through our encrypted client portal or bring them in." },
                { step: "03", title: "Expert Preparation", desc: "A PTIN-verified preparer reviews, prepares, and optimizes your return." },
                { step: "04", title: "Review & Sign", desc: "You review your completed return and sign electronically (Form 8879)." },
                { step: "05", title: "E-File & Track", desc: "We e-file your return and you track acceptance status in real time." }
              ].map((step, i) => (
                <div class="flex items-start mb-6 last:mb-0 relative">
                  <div class="bg-blue-950 text-white font-black text-sm w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 relative z-10">{step.step}</div>
                  <div>
                    <div class="font-semibold text-gray-900">{step.title}</div>
                    <div class="text-gray-500 text-sm mt-1">{step.desc}</div>
                  </div>
                </div>
              ))}
              <a href="/contact" class="mt-6 w-full inline-flex items-center justify-center bg-blue-950 hover:bg-blue-900 text-white font-bold px-6 py-4 rounded-xl transition-colors">
                Get Started Now <i class="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section class="py-20 bg-blue-950">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "fa-file-invoice", value: "10,000+", label: "Returns Filed", color: "emerald" },
              { icon: "fa-circle-check", value: "99.8%", label: "IRS Acceptance Rate", color: "cyan" },
              { icon: "fa-dollar-sign", value: "$2.4M+", label: "Refunds Secured for Clients", color: "amber" },
              { icon: "fa-award", value: "15+", label: "Years of Excellence", color: "purple" }
            ].map((stat) => (
              <div class="p-6">
                <div class={`w-16 h-16 bg-${stat.color}-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <i class={`fa-solid ${stat.icon} text-${stat.color}-400 text-2xl`}></i>
                </div>
                <div class="text-4xl font-black text-white font-space mb-1">{stat.value}</div>
                <div class="text-blue-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section class="py-24 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4 font-space">Real Results from Real Clients</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">Don't take our word for it. Here's what our clients have to say about Eugene Solutions LLC.</p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div class="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all">
                {/* Rating */}
                <div class="flex mb-4">
                  {[1,2,3,4,5].map(() => (
                    <i class="fa-solid fa-star text-amber-400 text-sm mr-0.5"></i>
                  ))}
                </div>
                <p class="text-gray-600 mb-6 italic leading-relaxed">"{t.quote}"</p>
                <div class="bg-emerald-50 rounded-lg p-3 mb-5">
                  <div class="text-emerald-700 font-bold text-sm"><i class="fa-solid fa-arrow-trend-up mr-1"></i> {t.result}</div>
                </div>
                <div class="flex items-center">
                  <div class="w-11 h-11 bg-blue-950 rounded-full flex items-center justify-center mr-3">
                    <span class="text-white font-bold text-sm">{t.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <div class="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div class="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TAX SEASON URGENCY ══ */}
      <section class="py-16 bg-amber-50 border-y-2 border-amber-200">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <div class="inline-flex items-center bg-amber-100 rounded-full px-4 py-2 mb-4">
            <i class="fa-solid fa-clock text-amber-700 mr-2 text-sm"></i>
            <span class="text-amber-700 font-semibold text-sm">2025 Tax Filing Season — Deadline April 15, 2026</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-4 font-space">Don't Miss the Deadline</h2>
          <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            File on time and avoid IRS penalties. Our team is ready to prepare your 2025 return today. Same-day e-filing available.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-amber-500/20">
              Book Appointment Now
            </a>
            <a href={`tel:${COMPANY.phone}`} class="inline-flex items-center justify-center border-2 border-amber-500 text-amber-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-amber-100 transition-all">
              <i class="fa-solid fa-phone mr-2"></i>
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section class="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-900 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px); background-size: 40px 40px;"></div>
        <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 class="text-4xl md:text-5xl font-black text-white mb-6 font-space">Ready to File With Confidence?</h2>
          <p class="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join 10,000+ clients who trust Eugene Solutions LLC with their taxes. Expert preparation, guaranteed accuracy, maximum refund.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" class="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-10 py-5 rounded-xl text-lg transition-all shadow-lg shadow-emerald-500/30">
              Start My Return <i class="fa-solid fa-arrow-right ml-2"></i>
            </a>
            <a href="/pricing" class="inline-flex items-center justify-center border-2 border-white/30 text-white font-bold px-10 py-5 rounded-xl text-lg hover:bg-white/10 transition-all">
              View Pricing
            </a>
          </div>
          <p class="text-blue-300 text-sm mt-8">
            <i class="fa-solid fa-shield-halved mr-1"></i> IRS Authorized E-File &bull; PTIN Verified &bull; GLBA Compliant &bull; E&O Insured
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
