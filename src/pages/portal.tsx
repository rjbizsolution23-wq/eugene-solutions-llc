import type { Context } from 'hono'
import { Navbar, Footer } from '../components'
import { COMPANY } from '../constants'

// Portal login / landing page
export const portalPage = (c: Context) => {
  return c.render(
    <div>
      <Navbar />
      <section class="min-h-screen flex items-center justify-center bg-gray-50 pt-24">
        <div class="max-w-md w-full mx-4">
          <div class="text-center mb-8">
            <div class="bg-blue-950 text-white font-black text-2xl w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 font-space">ES</div>
            <h1 class="text-3xl font-black text-gray-900 font-space">Client Portal</h1>
            <p class="text-gray-600 mt-2">Secure login to your Eugene Solutions account</p>
          </div>
          <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <form class="space-y-5" onsubmit="event.preventDefault(); alert('Portal authentication would connect to your auth provider in production.');">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <input type="email" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors" placeholder="you@example.com" />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                <input type="password" required class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors" placeholder="••••••••" />
              </div>
              <div class="flex items-center justify-between">
                <label class="flex items-center cursor-pointer">
                  <input type="checkbox" class="mr-2 accent-emerald-500" />
                  <span class="text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" class="text-sm text-emerald-600 hover:underline">Forgot password?</a>
              </div>
              <button type="submit" class="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3.5 rounded-xl transition-colors">
                <i class="fa-solid fa-lock mr-2"></i>Sign In
              </button>
            </form>
            <p class="text-center text-xs text-gray-500 mt-6">
              <i class="fa-solid fa-shield-halved mr-1"></i>
              Protected by AES-256 encryption &bull; GLBA Compliant
            </p>
          </div>
          <p class="text-center text-sm text-gray-500 mt-6">
            New client? <a href="/contact" class="text-emerald-600 font-semibold hover:underline">Schedule your first appointment</a>
          </p>
        </div>
      </section>
      <Footer />
    </div>,
    { title: 'Client Portal Login', description: 'Secure login to your Eugene Solutions LLC client portal. Track returns, upload documents, and manage your tax account.' }
  )
}

// Portal sidebar helper
const PortalLayout = ({ children, active }: { children: any; active: string }) => {
  const links = [
    { label: "Dashboard", href: "/portal/dashboard", icon: "fa-gauge-high" },
    { label: "Documents", href: "/portal/documents", icon: "fa-folder-open" },
    { label: "Tax Returns", href: "/portal/returns", icon: "fa-file-invoice" },
    { label: "Appointments", href: "/portal/appointments", icon: "fa-calendar-check" },
    { label: "Messages", href: "/portal/messages", icon: "fa-comments" },
    { label: "Billing", href: "/portal/billing", icon: "fa-credit-card" },
  ]

  return (
    <div>
      <Navbar />
      <div class="flex min-h-screen pt-28 bg-gray-50">
        {/* Sidebar */}
        <aside class="w-64 bg-white border-r border-gray-200 p-6 hidden lg:block">
          <div class="mb-8">
            <div class="bg-blue-950 text-white font-black px-3 py-2 rounded-lg text-center font-space mb-2">ES Portal</div>
            <div class="text-center text-xs text-gray-500">Welcome back, Client</div>
          </div>
          <nav class="space-y-1">
            {links.map((link) => (
              <a href={link.href} class={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${active === link.label ? 'bg-emerald-50 text-emerald-700 font-bold' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
                <i class={`fa-solid ${link.icon} w-5 mr-3 text-sm`}></i>
                {link.label}
              </a>
            ))}
          </nav>
          <div class="mt-8 pt-6 border-t border-gray-100">
            <a href="/" class="flex items-center px-4 py-3 rounded-xl text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors">
              <i class="fa-solid fa-arrow-left w-5 mr-3 text-sm"></i>
              Back to Website
            </a>
          </div>
        </aside>

        {/* Main content */}
        <main class="flex-1 p-8">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export const portalDashboard = (c: Context) => {
  return c.render(
    <PortalLayout active="Dashboard">
      <h1 class="text-3xl font-black text-gray-900 mb-2 font-space">Dashboard</h1>
      <p class="text-gray-600 mb-8">Welcome back! Here's an overview of your tax account.</p>

      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <div class="flex items-center justify-between mb-4">
            <div class="bg-emerald-50 rounded-xl p-3"><i class="fa-solid fa-file-invoice text-emerald-600 text-xl"></i></div>
            <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">Active</span>
          </div>
          <div class="text-2xl font-black text-gray-900 font-space">2025 Return</div>
          <div class="text-gray-500 text-sm mt-1">Status: In Preparation</div>
          <div class="w-full bg-gray-200 rounded-full h-2 mt-4"><div class="bg-emerald-500 h-2 rounded-full" style="width: 60%"></div></div>
          <div class="text-xs text-gray-400 mt-1">60% Complete</div>
        </div>
        <div class="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <div class="flex items-center justify-between mb-4">
            <div class="bg-blue-50 rounded-xl p-3"><i class="fa-solid fa-clock text-blue-600 text-xl"></i></div>
          </div>
          <div class="text-2xl font-black text-gray-900 font-space">Feb 28</div>
          <div class="text-gray-500 text-sm mt-1">Next Appointment</div>
          <div class="text-xs text-gray-400 mt-2">10:00 AM — In-Person</div>
        </div>
        <div class="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <div class="flex items-center justify-between mb-4">
            <div class="bg-purple-50 rounded-xl p-3"><i class="fa-solid fa-bell text-purple-600 text-xl"></i></div>
            <span class="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full">2 New</span>
          </div>
          <div class="text-2xl font-black text-gray-900 font-space">Messages</div>
          <div class="text-gray-500 text-sm mt-1">2 unread messages</div>
        </div>
      </div>

      {/* Recent activity */}
      <div class="bg-white rounded-2xl border-2 border-gray-100">
        <div class="p-6 border-b border-gray-100">
          <h2 class="text-xl font-bold text-gray-900 font-space">Recent Activity</h2>
        </div>
        <div class="divide-y divide-gray-50">
          {[
            { icon: "fa-upload", text: "W-2 document uploaded", time: "2 hours ago", color: "emerald" },
            { icon: "fa-message", text: "New message from your tax preparer", time: "Yesterday", color: "blue" },
            { icon: "fa-file-circle-check", text: "2024 return copy available for download", time: "Feb 15", color: "purple" },
            { icon: "fa-calendar-plus", text: "Appointment confirmed for Feb 28", time: "Feb 12", color: "amber" },
          ].map((item) => (
            <div class="px-6 py-4 flex items-center hover:bg-gray-50 transition-colors">
              <div class={`bg-${item.color}-50 rounded-lg p-2 mr-4`}>
                <i class={`fa-solid ${item.icon} text-${item.color}-600 text-sm`}></i>
              </div>
              <div class="flex-1">
                <div class="text-sm text-gray-900">{item.text}</div>
                <div class="text-xs text-gray-400">{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PortalLayout>,
    { title: 'Client Dashboard' }
  )
}

export const portalDocuments = (c: Context) => {
  return c.render(
    <PortalLayout active="Documents">
      <h1 class="text-3xl font-black text-gray-900 mb-2 font-space">Documents</h1>
      <p class="text-gray-600 mb-8">Securely upload and manage your tax documents.</p>

      {/* Upload area */}
      <div class="bg-white rounded-2xl border-2 border-dashed border-emerald-300 p-12 text-center mb-8 hover:border-emerald-500 transition-colors cursor-pointer">
        <i class="fa-solid fa-cloud-arrow-up text-emerald-400 text-5xl mb-4"></i>
        <h3 class="text-lg font-bold text-gray-900 mb-2">Upload Documents</h3>
        <p class="text-gray-500 text-sm mb-4">Drag & drop your W-2s, 1099s, and other tax documents here</p>
        <button class="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-3 rounded-xl transition-colors">
          <i class="fa-solid fa-folder-open mr-2"></i>Browse Files
        </button>
        <p class="text-xs text-gray-400 mt-4"><i class="fa-solid fa-lock mr-1"></i>AES-256 encrypted • GLBA compliant</p>
      </div>

      {/* Document list */}
      <div class="bg-white rounded-2xl border-2 border-gray-100">
        <div class="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 class="text-xl font-bold text-gray-900 font-space">My Documents</h2>
          <span class="text-sm text-gray-500">4 files</span>
        </div>
        <div class="divide-y divide-gray-50">
          {[
            { name: "W-2_2025_Employer.pdf", date: "Feb 20, 2026", size: "245 KB", status: "Received" },
            { name: "1099-INT_BankOfAmerica.pdf", date: "Feb 18, 2026", size: "120 KB", status: "Received" },
            { name: "Mortgage_Interest_1098.pdf", date: "Feb 15, 2026", size: "180 KB", status: "Processing" },
            { name: "Prior_Year_2024_Return.pdf", date: "Feb 10, 2026", size: "1.2 MB", status: "Received" },
          ].map((doc) => (
            <div class="px-6 py-4 flex items-center hover:bg-gray-50">
              <div class="bg-red-50 rounded-lg p-2.5 mr-4">
                <i class="fa-solid fa-file-pdf text-red-500"></i>
              </div>
              <div class="flex-1">
                <div class="font-medium text-gray-900 text-sm">{doc.name}</div>
                <div class="text-xs text-gray-400">{doc.date} • {doc.size}</div>
              </div>
              <span class={`text-xs font-bold px-2.5 py-1 rounded-full ${doc.status === 'Received' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                {doc.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PortalLayout>,
    { title: 'Documents' }
  )
}

export const portalReturns = (c: Context) => {
  return c.render(
    <PortalLayout active="Tax Returns">
      <h1 class="text-3xl font-black text-gray-900 mb-2 font-space">Tax Returns</h1>
      <p class="text-gray-600 mb-8">View the status and download your filed tax returns.</p>

      <div class="space-y-4">
        {[
          { year: "2025", status: "In Preparation", progress: 60, color: "amber", filed: "-", refund: "Pending" },
          { year: "2024", status: "Accepted by IRS", progress: 100, color: "emerald", filed: "Mar 15, 2025", refund: "$3,245.00" },
          { year: "2023", status: "Accepted by IRS", progress: 100, color: "emerald", filed: "Apr 2, 2024", refund: "$2,891.00" },
        ].map((ret) => (
          <div class="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-emerald-200 transition-colors">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
              <div class="flex items-center mb-4 md:mb-0">
                <div class="bg-blue-950 text-white font-black text-lg w-14 h-14 rounded-xl flex items-center justify-center mr-4 font-space">{ret.year}</div>
                <div>
                  <h3 class="font-bold text-gray-900">Form 1040 — Tax Year {ret.year}</h3>
                  <span class={`text-xs font-bold px-2.5 py-1 rounded-full bg-${ret.color}-50 text-${ret.color}-600`}>{ret.status}</span>
                </div>
              </div>
              <div class="flex items-center gap-6 text-sm">
                <div><span class="text-gray-400">Filed:</span> <span class="font-medium text-gray-900">{ret.filed}</span></div>
                <div><span class="text-gray-400">Refund:</span> <span class="font-bold text-emerald-600">{ret.refund}</span></div>
                {ret.progress === 100 && (
                  <button class="bg-blue-950 hover:bg-blue-900 text-white font-bold px-4 py-2 rounded-lg transition-colors text-xs">
                    <i class="fa-solid fa-download mr-1"></i>Download
                  </button>
                )}
              </div>
            </div>
            {ret.progress < 100 && (
              <div class="mt-4">
                <div class="w-full bg-gray-200 rounded-full h-2"><div class={`bg-${ret.color}-500 h-2 rounded-full`} style={`width: ${ret.progress}%`}></div></div>
                <div class="text-xs text-gray-400 mt-1">{ret.progress}% Complete</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </PortalLayout>,
    { title: 'Tax Returns' }
  )
}

export const portalAppointments = (c: Context) => {
  return c.render(
    <PortalLayout active="Appointments">
      <h1 class="text-3xl font-black text-gray-900 mb-2 font-space">Appointments</h1>
      <p class="text-gray-600 mb-8">View and manage your scheduled appointments.</p>

      <div class="flex gap-4 mb-8">
        <a href="/contact" class="inline-flex items-center bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-3 rounded-xl transition-colors">
          <i class="fa-solid fa-plus mr-2"></i>Book New Appointment
        </a>
      </div>

      <div class="space-y-4">
        <div class="bg-white rounded-2xl p-6 border-2 border-emerald-200">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div class="bg-emerald-500 text-white font-black px-4 py-3 rounded-xl mr-4 text-center">
                <div class="text-xs">FEB</div><div class="text-xl font-space">28</div>
              </div>
              <div>
                <h3 class="font-bold text-gray-900">2025 Tax Return Review & Sign</h3>
                <div class="text-gray-500 text-sm">10:00 AM – 11:00 AM • In-Person</div>
                <div class="text-gray-400 text-xs mt-1">With: Marcus Johnson, Tax Preparer</div>
              </div>
            </div>
            <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">Confirmed</span>
          </div>
        </div>
        <div class="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <div class="flex items-center">
            <div class="bg-gray-200 text-gray-500 font-black px-4 py-3 rounded-xl mr-4 text-center">
              <div class="text-xs">FEB</div><div class="text-xl font-space">15</div>
            </div>
            <div>
              <h3 class="font-bold text-gray-500">Document Drop-Off</h3>
              <div class="text-gray-400 text-sm">Completed • In-Person</div>
            </div>
          </div>
        </div>
      </div>
    </PortalLayout>,
    { title: 'Appointments' }
  )
}

export const portalMessages = (c: Context) => {
  return c.render(
    <PortalLayout active="Messages">
      <h1 class="text-3xl font-black text-gray-900 mb-2 font-space">Messages</h1>
      <p class="text-gray-600 mb-8">Secure communication with your tax preparer.</p>

      <div class="bg-white rounded-2xl border-2 border-gray-100">
        <div class="divide-y divide-gray-50">
          {[
            { from: "Marcus Johnson", subject: "Missing 1099-DIV — Action Required", time: "Today 9:30 AM", unread: true },
            { from: "Eugene Solutions Team", subject: "Your 2025 return is 60% complete", time: "Yesterday", unread: true },
            { from: "Marcus Johnson", subject: "Document received — W-2 confirmed", time: "Feb 20", unread: false },
            { from: "Eugene Solutions Team", subject: "Welcome to the 2025 tax season!", time: "Jan 27", unread: false },
          ].map((msg) => (
            <div class={`px-6 py-4 flex items-center hover:bg-gray-50 cursor-pointer ${msg.unread ? 'bg-blue-50/50' : ''}`}>
              <div class="bg-blue-950 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span class="text-xs font-bold">{msg.from.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2">
                  <span class={`font-semibold text-sm ${msg.unread ? 'text-gray-900' : 'text-gray-600'}`}>{msg.from}</span>
                  {msg.unread && <span class="w-2 h-2 bg-blue-500 rounded-full"></span>}
                </div>
                <div class={`text-sm truncate ${msg.unread ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>{msg.subject}</div>
              </div>
              <div class="text-xs text-gray-400 ml-4 whitespace-nowrap">{msg.time}</div>
            </div>
          ))}
        </div>
      </div>

      <p class="text-xs text-gray-400 text-center mt-6">
        <i class="fa-solid fa-lock mr-1"></i>All messages are encrypted end-to-end. GLBA compliant.
      </p>
    </PortalLayout>,
    { title: 'Messages' }
  )
}

export const portalBilling = (c: Context) => {
  return c.render(
    <PortalLayout active="Billing">
      <h1 class="text-3xl font-black text-gray-900 mb-2 font-space">Billing & Invoices</h1>
      <p class="text-gray-600 mb-8">View invoices, payment history, and manage payment methods.</p>

      {/* Balance */}
      <div class="bg-white rounded-2xl p-6 border-2 border-gray-100 mb-8">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm text-gray-500">Current Balance</div>
            <div class="text-3xl font-black text-gray-900 font-space">$0.00</div>
            <div class="text-xs text-emerald-600 font-medium mt-1"><i class="fa-solid fa-circle-check mr-1"></i>All paid</div>
          </div>
          <button class="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-3 rounded-xl transition-colors">
            <i class="fa-solid fa-credit-card mr-2"></i>Make Payment
          </button>
        </div>
      </div>

      {/* Invoices */}
      <div class="bg-white rounded-2xl border-2 border-gray-100">
        <div class="p-6 border-b border-gray-100">
          <h2 class="text-xl font-bold text-gray-900 font-space">Invoice History</h2>
        </div>
        <div class="divide-y divide-gray-50">
          {[
            { id: "INV-2025-001", date: "Feb 28, 2026", desc: "2025 Form 1040 + Schedule A", amount: "$320.00", status: "Pending", color: "amber" },
            { id: "INV-2024-003", date: "Mar 15, 2025", desc: "2024 Form 1040 (Standard)", amount: "$250.00", status: "Paid", color: "emerald" },
            { id: "INV-2024-002", date: "Mar 15, 2025", desc: "State Return — Florida", amount: "$75.00", status: "Paid", color: "emerald" },
            { id: "INV-2023-001", date: "Apr 2, 2024", desc: "2023 Form 1040 (Simple)", amount: "$175.00", status: "Paid", color: "emerald" },
          ].map((inv) => (
            <div class="px-6 py-4 flex items-center hover:bg-gray-50">
              <div class="flex-1">
                <div class="font-medium text-gray-900 text-sm">{inv.desc}</div>
                <div class="text-xs text-gray-400">{inv.id} • {inv.date}</div>
              </div>
              <div class="text-right">
                <div class="font-bold text-gray-900">{inv.amount}</div>
                <span class={`text-xs font-bold px-2 py-0.5 rounded-full bg-${inv.color}-50 text-${inv.color}-600`}>{inv.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PortalLayout>,
    { title: 'Billing & Invoices' }
  )
}
