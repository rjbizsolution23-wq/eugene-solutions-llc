import type { Context } from 'hono'
import { Navbar, Footer } from '../components'
import { PRICING, COMPANY } from '../constants'

export const pricingPage = (c: Context) => {
  return c.render(
    <div>
      <Navbar />
      
      {/* Hero */}
      <section class="bg-blue-950 py-24 pt-40">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h1 class="text-5xl md:text-6xl font-black text-white mb-4 font-space">Transparent Pricing</h1>
          <p class="text-xl text-blue-200 max-w-2xl mx-auto">
            No hidden fees. No surprises. Competitive, flat-rate pricing for every tax situation. You know the cost before we start.
          </p>
        </div>
      </section>

      {/* Pricing Tables */}
      <section class="py-24 bg-gray-50">
        <div class="max-w-6xl mx-auto px-4">

          {/* Individual Returns */}
          <div class="mb-16">
            <h2 class="text-3xl font-black text-gray-900 mb-2 font-space">
              <i class="fa-solid fa-user text-blue-600 mr-3"></i>Individual Returns
            </h2>
            <p class="text-gray-600 mb-8">Form 1040 and all associated schedules</p>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRICING.individual.map((item) => (
                <div class="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all">
                  <div class="text-2xl font-black text-emerald-600 mb-1 font-space">${item.price}</div>
                  <div class="font-bold text-gray-900 mb-2">{item.form}</div>
                  <div class="text-gray-500 text-sm">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Returns */}
          <div class="mb-16">
            <h2 class="text-3xl font-black text-gray-900 mb-2 font-space">
              <i class="fa-solid fa-building text-blue-600 mr-3"></i>Business Returns
            </h2>
            <p class="text-gray-600 mb-8">All entity types, federal returns</p>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRICING.business.map((item) => (
                <div class="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
                  <div class="text-2xl font-black text-blue-700 mb-1 font-space">${item.price}</div>
                  <div class="font-bold text-gray-900 mb-2">{item.form}</div>
                  <div class="text-gray-500 text-sm">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Add-Ons */}
          <div class="mb-16">
            <h2 class="text-3xl font-black text-gray-900 mb-2 font-space">
              <i class="fa-solid fa-plus text-blue-600 mr-3"></i>Add-On Services
            </h2>
            <div class="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden">
              <table class="w-full">
                <thead class="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th class="text-left px-6 py-4 font-bold text-gray-900">Service</th>
                    <th class="text-right px-6 py-4 font-bold text-gray-900">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING.addons.map((item) => (
                    <tr class="border-b border-gray-50 hover:bg-gray-50">
                      <td class="px-6 py-4 text-gray-700">{item.service}</td>
                      <td class="px-6 py-4 text-right font-bold text-gray-900">
                        ${item.price}{item.note && <span class="font-normal text-gray-500 text-sm ml-1">{item.note}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing Disclaimer */}
          <div class="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
            <div class="flex items-start">
              <i class="fa-solid fa-circle-info text-blue-600 mr-3 mt-1"></i>
              <div>
                <h3 class="font-bold text-blue-900 mb-2">Pricing Notes & Disclosures</h3>
                <ul class="text-blue-800 text-sm space-y-1">
                  <li>&bull; Prices shown are for federal returns only. State returns are billed separately ($75/state).</li>
                  <li>&bull; Final price determined at intake based on actual complexity of your tax situation.</li>
                  <li>&bull; We provide a written fee estimate before preparing your return — no surprises.</li>
                  <li>&bull; Bank products (RAC/RAL) are subject to separate third-party financial institution fees.</li>
                  <li>&bull; <strong>IRS Circular 230 Disclosure:</strong> {COMPANY.disclaimer}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div class="text-center mt-16">
            <h2 class="text-3xl font-black text-gray-900 mb-4 font-space">Ready to Get Started?</h2>
            <p class="text-gray-600 mb-8">Book your appointment today. Most returns completed in 24–48 hours.</p>
            <a href="/contact" class="inline-flex items-center bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all shadow-lg shadow-emerald-500/20">
              Schedule My Appointment
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>,
    { title: 'Transparent Pricing', description: 'Transparent, flat-rate pricing for individual and business tax preparation. No hidden fees. Written estimates before we begin.' }
  )
}
