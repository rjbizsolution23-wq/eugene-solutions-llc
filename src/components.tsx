import type { FC } from 'hono/jsx'
import { COMPANY, NAV_LINKS } from './constants'

export const Navbar: FC = () => {
  return (
    <nav id="navbar" class="fixed top-8 left-0 right-0 z-50 transition-all duration-300 bg-transparent" role="navigation" aria-label="Main navigation">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" class="flex items-center group" aria-label="Eugene Solutions LLC - Home">
            <div class="bg-blue-950 text-white font-black text-xl px-3 py-2 rounded-lg mr-3 font-space tracking-tight group-hover:bg-emerald-600 transition-colors">ES</div>
            <div>
              <div class="nav-text font-black text-lg font-space leading-tight text-white">Eugene Solutions</div>
              <div class="nav-subtext text-xs font-medium leading-tight text-blue-200">LLC &middot; Tax &middot; Accounting &middot; Contracting</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div class="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div class="relative group">
                <a href={link.href} class="nav-link flex items-center px-4 py-2 rounded-lg font-medium transition-colors text-sm text-white/90 hover:text-white hover:bg-white/10">
                  {link.label}
                  {link.dropdown && <i class="fa-solid fa-chevron-down ml-1 text-[10px]" aria-hidden="true"></i>}
                </a>
                {link.dropdown && (
                  <div class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0" role="menu">
                    {link.dropdown.map((item) => (
                      <a href={item.href} class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors" role="menuitem">
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div class="hidden lg:flex items-center gap-3">
            <a href={`tel:${COMPANY.phoneRaw}`} class="nav-phone flex items-center text-sm font-semibold text-white" aria-label={`Call us at ${COMPANY.phone}`}>
              <i class="fa-solid fa-phone w-4 h-4 mr-1.5 text-xs" aria-hidden="true"></i>
              {COMPANY.phone}
            </a>
            <a href="/portal" class="nav-portal flex items-center text-white border border-white/20 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              <i class="fa-solid fa-lock mr-1.5 text-xs" aria-hidden="true"></i>
              Client Login
            </a>
            <a href="/contact" class="bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-lg shadow-emerald-500/20">
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button id="mobile-toggle" class="lg:hidden text-white p-2" onclick="toggleMobileMenu()" aria-label="Toggle mobile menu" aria-expanded="false">
            <i class="fa-solid fa-bars text-xl" id="menu-icon" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-gray-100 shadow-xl" role="menu">
        <div class="max-w-7xl mx-auto px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <div>
              <a href={link.href} class="block px-4 py-3 text-gray-800 font-semibold hover:bg-emerald-50 rounded-lg" role="menuitem">{link.label}</a>
              {link.dropdown?.map((item) => (
                <a href={item.href} class="block px-8 py-2 text-gray-600 text-sm hover:text-emerald-600" role="menuitem">{item.label}</a>
              ))}
            </div>
          ))}
          <div class="pt-4 space-y-2 border-t border-gray-100">
            <a href={`tel:${COMPANY.phoneRaw}`} class="flex items-center justify-center text-emerald-700 font-bold py-2 text-sm">
              <i class="fa-solid fa-phone mr-2" aria-hidden="true"></i>{COMPANY.phone}
            </a>
            <a href="/portal" class="flex items-center justify-center border-2 border-blue-950 text-blue-950 font-bold py-3 rounded-xl">
              <i class="fa-solid fa-lock mr-2" aria-hidden="true"></i> Client Portal Login
            </a>
            <a href="/contact" class="flex items-center justify-center bg-emerald-500 text-white font-bold py-3 rounded-xl">
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export const Footer: FC = () => {
  return (
    <footer class="bg-blue-950 text-white" role="contentinfo">
      <div class="max-w-7xl mx-auto px-4 py-16">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div class="lg:col-span-1">
            <div class="flex items-center mb-4">
              <div class="bg-white text-blue-950 font-black text-xl px-3 py-2 rounded-lg mr-3 font-space">ES</div>
              <div>
                <div class="font-black text-lg font-space">Eugene Solutions</div>
                <div class="text-blue-300 text-xs">LLC &middot; Tax &middot; Accounting &middot; Contracting</div>
              </div>
            </div>
            <p class="text-blue-200 text-sm leading-relaxed mb-6">
              All of your accounting and bookkeeping needs can be met in one location. We assist you in developing a funding strategy from the ground up. Certified to service all 50 states.
            </p>
            <div class="space-y-2">
              <a href={`tel:${COMPANY.phoneRaw}`} class="flex items-center text-blue-200 hover:text-white text-sm" aria-label={`Call ${COMPANY.phone}`}>
                <i class="fa-solid fa-phone w-4 mr-2 text-xs" aria-hidden="true"></i>{COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} class="flex items-center text-blue-200 hover:text-white text-sm" aria-label={`Email ${COMPANY.email}`}>
                <i class="fa-solid fa-envelope w-4 mr-2 text-xs" aria-hidden="true"></i>{COMPANY.email}
              </a>
              <div class="flex items-start text-blue-200 text-sm">
                <i class="fa-solid fa-location-dot w-4 mr-2 text-xs mt-1" aria-hidden="true"></i>
                {COMPANY.address.serviceArea}
              </div>
            </div>
            {/* Social */}
            <div class="flex gap-3 mt-6">
              <a href={COMPANY.social.facebook} class="w-9 h-9 bg-blue-900 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fa-brands fa-facebook-f text-sm" aria-hidden="true"></i></a>
              <a href={COMPANY.social.twitter} class="w-9 h-9 bg-blue-900 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="fa-brands fa-x-twitter text-sm" aria-hidden="true"></i></a>
              <a href={COMPANY.social.linkedin} class="w-9 h-9 bg-blue-900 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in text-sm" aria-hidden="true"></i></a>
              <a href={COMPANY.social.instagram} class="w-9 h-9 bg-blue-900 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fa-brands fa-instagram text-sm" aria-hidden="true"></i></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 class="font-bold text-white mb-4 font-space">Services</h3>
            <ul class="space-y-2">
              <li><a href="/services#tax-preparation" class="text-blue-200 hover:text-white text-sm transition-colors">Tax Preparation</a></li>
              <li><a href="/services#bookkeeping" class="text-blue-200 hover:text-white text-sm transition-colors">Bookkeeping</a></li>
              <li><a href="/services#accounting" class="text-blue-200 hover:text-white text-sm transition-colors">Accounting</a></li>
              <li><a href="/services#government-contracting" class="text-blue-200 hover:text-white text-sm transition-colors">Government Contracting</a></li>
              <li><a href="/services#business-tax" class="text-blue-200 hover:text-white text-sm transition-colors">Business Tax Returns</a></li>
              <li><a href="/services#tax-planning" class="text-blue-200 hover:text-white text-sm transition-colors">Tax Planning & Strategy</a></li>
              <li><a href="/services#irs-representation" class="text-blue-200 hover:text-white text-sm transition-colors">IRS Audit Representation</a></li>
              <li><a href="/services#itin-services" class="text-blue-200 hover:text-white text-sm transition-colors">ITIN & Notary Services</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 class="font-bold text-white mb-4 font-space">Resources</h3>
            <ul class="space-y-2">
              <li><a href="/tax-resources" class="text-blue-200 hover:text-white text-sm transition-colors">Tax Resource Center</a></li>
              <li><a href="/blog" class="text-blue-200 hover:text-white text-sm transition-colors">Blog & Tax Tips</a></li>
              <li><a href="/faq" class="text-blue-200 hover:text-white text-sm transition-colors">FAQ</a></li>
              <li><a href="https://irs.gov" target="_blank" rel="noopener noreferrer" class="text-blue-200 hover:text-white text-sm transition-colors">IRS.gov <i class="fa-solid fa-arrow-up-right-from-square text-[10px]" aria-hidden="true"></i></a></li>
              <li><a href="https://www.irs.gov/publications" target="_blank" rel="noopener noreferrer" class="text-blue-200 hover:text-white text-sm transition-colors">IRS Publications <i class="fa-solid fa-arrow-up-right-from-square text-[10px]" aria-hidden="true"></i></a></li>
              <li><a href="https://www.irs.gov/newsroom/heres-a-short-checklist-to-help-taxpayers-choose-a-tax-preparer-for-the-upcoming-filing-season" target="_blank" rel="noopener noreferrer" class="text-blue-200 hover:text-white text-sm transition-colors">Choose a Tax Preparer <i class="fa-solid fa-arrow-up-right-from-square text-[10px]" aria-hidden="true"></i></a></li>
            </ul>
          </div>

          {/* Company & Compliance */}
          <div>
            <h3 class="font-bold text-white mb-4 font-space">Company</h3>
            <ul class="space-y-2 mb-6">
              <li><a href="/about" class="text-blue-200 hover:text-white text-sm transition-colors">About Us</a></li>
              <li><a href="/careers" class="text-blue-200 hover:text-white text-sm transition-colors">Careers</a></li>
              <li><a href="/contact" class="text-blue-200 hover:text-white text-sm transition-colors">Contact</a></li>
              <li><a href="/portal" class="text-blue-200 hover:text-white text-sm transition-colors">Client Portal</a></li>
              <li><a href="/privacy" class="text-blue-200 hover:text-white text-sm transition-colors">Privacy Notice (GLBA)</a></li>
              <li><a href="/terms" class="text-blue-200 hover:text-white text-sm transition-colors">Terms of Service</a></li>
              <li><a href="/accessibility" class="text-blue-200 hover:text-white text-sm transition-colors">Accessibility (WCAG 2.1 AA)</a></li>
            </ul>
            <div class="space-y-2">
              <div class="flex items-center text-xs text-emerald-400"><i class="fa-solid fa-shield-halved mr-2" aria-hidden="true"></i>IRS Authorized E-File Provider</div>
              <div class="flex items-center text-xs text-emerald-400"><i class="fa-solid fa-lock mr-2" aria-hidden="true"></i>GLBA Safeguards Compliant</div>
              <div class="flex items-center text-xs text-emerald-400"><i class="fa-solid fa-shield-halved mr-2" aria-hidden="true"></i>PTIN & EFIN Verified</div>
              <div class="flex items-center text-xs text-emerald-400"><i class="fa-solid fa-globe mr-2" aria-hidden="true"></i>All 50 States Certified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Referral Banner */}
      <div class="border-t border-blue-900 bg-blue-900/50">
        <div class="max-w-7xl mx-auto px-4 py-4 text-center">
          <p class="text-blue-200 text-sm">
            <i class="fa-solid fa-gift text-emerald-400 mr-2" aria-hidden="true"></i>
            <strong class="text-white">Referral Program:</strong> {COMPANY.referral}
            <a href="/contact" class="text-emerald-400 hover:text-emerald-300 underline ml-2">Learn More</a>
          </p>
        </div>
      </div>

      {/* Bottom compliance bar */}
      <div class="border-t border-blue-900">
        <div class="max-w-7xl mx-auto px-4 py-6">
          <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <p class="text-blue-400 text-xs text-center md:text-left">
              &copy; {new Date().getFullYear()} Eugene Solutions LLC. All rights reserved. Licensed tax preparation & accounting agency. Subject to IRS Circular 230.
            </p>
            <p class="text-blue-500 text-xs text-center max-w-2xl">
              <strong class="text-blue-400">IRS Circular 230 Disclosure:</strong>{' '}
              {COMPANY.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export const TrustBadges: FC = () => {
  return (
    <section class="py-8 bg-white border-b border-gray-100" aria-label="Trust and compliance badges">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <div class="flex items-center gap-3 text-gray-600">
            <div class="bg-blue-50 p-3 rounded-xl"><i class="fa-solid fa-file-signature text-blue-700 text-xl" aria-hidden="true"></i></div>
            <div><div class="font-bold text-gray-900 text-sm">IRS E-File Authorized</div><div class="text-xs text-gray-500">EFIN Verified Provider</div></div>
          </div>
          <div class="flex items-center gap-3 text-gray-600">
            <div class="bg-emerald-50 p-3 rounded-xl"><i class="fa-solid fa-id-card text-emerald-700 text-xl" aria-hidden="true"></i></div>
            <div><div class="font-bold text-gray-900 text-sm">PTIN Verified</div><div class="text-xs text-gray-500">All Preparers Licensed</div></div>
          </div>
          <div class="flex items-center gap-3 text-gray-600">
            <div class="bg-purple-50 p-3 rounded-xl"><i class="fa-solid fa-lock text-purple-700 text-xl" aria-hidden="true"></i></div>
            <div><div class="font-bold text-gray-900 text-sm">GLBA Compliant</div><div class="text-xs text-gray-500">FTC Safeguards Rule</div></div>
          </div>
          <div class="flex items-center gap-3 text-gray-600">
            <div class="bg-amber-50 p-3 rounded-xl"><i class="fa-solid fa-shield-halved text-amber-700 text-xl" aria-hidden="true"></i></div>
            <div><div class="font-bold text-gray-900 text-sm">E&O Insured</div><div class="text-xs text-gray-500">Errors & Omissions</div></div>
          </div>
          <div class="flex items-center gap-3 text-gray-600">
            <div class="bg-red-50 p-3 rounded-xl"><i class="fa-solid fa-gavel text-red-700 text-xl" aria-hidden="true"></i></div>
            <div><div class="font-bold text-gray-900 text-sm">Circular 230</div><div class="text-xs text-gray-500">IRS Standards</div></div>
          </div>
          <div class="flex items-center gap-3 text-gray-600">
            <div class="bg-cyan-50 p-3 rounded-xl"><i class="fa-solid fa-globe text-cyan-700 text-xl" aria-hidden="true"></i></div>
            <div><div class="font-bold text-gray-900 text-sm">All 50 States</div><div class="text-xs text-gray-500">Virtual & In-Person</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
