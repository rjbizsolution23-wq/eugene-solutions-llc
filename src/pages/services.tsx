import type { Context } from 'hono'
import { Navbar, Footer } from '../components'
import { SERVICES, COMPANY } from '../constants'

export const servicesPage = (c: Context) => {
  return c.render(
    <div>
      <Navbar />
      
      {/* Hero */}
      <section class="bg-blue-950 py-24 pt-40">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <div class="inline-flex items-center bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-2 mb-6">
            <i class="fa-solid fa-shield-halved text-emerald-400 mr-2 text-sm"></i>
            <span class="text-emerald-300 text-sm">IRS Authorized E-File Provider</span>
          </div>
          <h1 class="text-5xl md:text-6xl font-black text-white mb-6 font-space">Complete Tax Services</h1>
          <p class="text-xl text-blue-200 max-w-2xl mx-auto">
            From individual W-2 returns to complex multi-entity business filings — Eugene Solutions LLC handles it all with licensed professionals and guaranteed accuracy.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section class="py-24 bg-white">
        <div class="max-w-6xl mx-auto px-4">
          {SERVICES.map((service, index) => (
            <div id={service.id} class={`flex flex-col lg:flex-row gap-12 items-center mb-24 last:mb-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div class="flex-1">
                <div class="text-5xl mb-6"><i class={`${service.icon} text-blue-950`}></i></div>
                <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-4 font-space">{service.title}</h2>
                <p class="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul class="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li class="flex items-center">
                      <i class="fa-solid fa-circle-check text-emerald-500 mr-3"></i>
                      <span class="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="/contact" class="inline-flex items-center bg-blue-950 hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                  Schedule a Consultation <i class="fa-solid fa-arrow-right ml-2"></i>
                </a>
              </div>
              <div class="flex-1 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-8 border-2 border-gray-100">
                <div class="text-center">
                  <div class="text-8xl mb-4"><i class={`${service.icon} text-blue-950/20`}></i></div>
                  <h3 class="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p class="text-gray-500 text-sm mb-6">IRS Compliant &bull; Licensed Professionals</p>
                  <div class="bg-white rounded-xl p-4 border border-gray-100">
                    <p class="text-xs text-gray-500 italic leading-relaxed">
                      {COMPANY.disclaimer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section class="py-16 bg-emerald-600">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-black text-white mb-4 font-space">Ready to Get Started?</h2>
          <p class="text-emerald-100 text-lg mb-8">Schedule your consultation today. Most returns completed in 24-48 hours.</p>
          <a href="/contact" class="inline-flex items-center bg-white text-emerald-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-emerald-50 transition-colors">
            Book Appointment <i class="fa-solid fa-arrow-right ml-2"></i>
          </a>
        </div>
      </section>

      <Footer />
    </div>,
    { title: 'Tax Preparation Services', description: 'Complete tax services: individual returns, business returns, tax planning, IRS audit representation, ITIN applications, and bookkeeping.' }
  )
}
