import type { Context } from 'hono'
import { Navbar, Footer } from '../components'
import { COMPANY } from '../constants'

// Admin sidebar layout
const AdminLayout = ({ children, active }: { children: any; active: string }) => {
  const links = [
    { label: "Dashboard", href: "/admin/dashboard", icon: "fa-gauge-high" },
    { label: "Clients", href: "/admin/clients", icon: "fa-users" },
    { label: "Tax Returns", href: "/admin/returns", icon: "fa-file-invoice" },
    { label: "Staff", href: "/admin/staff", icon: "fa-user-tie" },
    { label: "Analytics", href: "/admin/analytics", icon: "fa-chart-line" },
    { label: "Compliance", href: "/admin/compliance", icon: "fa-shield-halved" },
  ]

  return (
    <div>
      <div class="flex min-h-screen bg-gray-50">
        {/* Admin Sidebar */}
        <aside class="w-64 bg-blue-950 text-white p-6 hidden lg:block">
          <div class="mb-8">
            <div class="flex items-center mb-4">
              <div class="bg-white text-blue-950 font-black text-lg px-2.5 py-1.5 rounded-lg mr-3 font-space">ES</div>
              <div>
                <div class="font-bold text-sm font-space">Admin Portal</div>
                <div class="text-blue-300 text-xs">Eugene Solutions LLC</div>
              </div>
            </div>
          </div>
          <nav class="space-y-1">
            {links.map((link) => (
              <a href={link.href} class={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${active === link.label ? 'bg-white/15 text-white font-bold' : 'text-blue-200 hover:bg-white/10 hover:text-white'}`}>
                <i class={`fa-solid ${link.icon} w-5 mr-3 text-sm`}></i>
                {link.label}
              </a>
            ))}
          </nav>
          <div class="mt-8 pt-6 border-t border-blue-900">
            <a href="/" class="flex items-center px-4 py-3 rounded-xl text-sm text-blue-300 hover:text-white hover:bg-white/10 transition-colors">
              <i class="fa-solid fa-arrow-left w-5 mr-3 text-sm"></i>Back to Website
            </a>
          </div>
        </aside>

        {/* Main content */}
        <main class="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

export const adminDashboard = (c: Context) => {
  return c.render(
    <AdminLayout active="Dashboard">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h1 class="text-3xl font-black text-gray-900 font-space">Admin Dashboard</h1>
          <p class="text-gray-600">2025 Tax Season Overview — {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>
        <div class="flex gap-3">
          <button class="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors">
            <i class="fa-solid fa-plus mr-2"></i>New Client
          </button>
        </div>
      </div>

      {/* Stats */}
      <div class="grid md:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Returns in Progress", value: "142", change: "+12 this week", icon: "fa-file-pen", color: "amber" },
          { label: "Returns Filed (2025)", value: "438", change: "+28 this week", icon: "fa-circle-check", color: "emerald" },
          { label: "Revenue (Season)", value: "$142,850", change: "+$18.5K this week", icon: "fa-dollar-sign", color: "blue" },
          { label: "Active Clients", value: "623", change: "+15 new", icon: "fa-users", color: "purple" },
        ].map((stat) => (
          <div class="bg-white rounded-2xl p-6 border-2 border-gray-100">
            <div class="flex items-center justify-between mb-3">
              <div class={`bg-${stat.color}-50 rounded-xl p-2.5`}><i class={`fa-solid ${stat.icon} text-${stat.color}-600`}></i></div>
            </div>
            <div class="text-2xl font-black text-gray-900 font-space">{stat.value}</div>
            <div class="text-gray-500 text-sm">{stat.label}</div>
            <div class="text-xs text-emerald-600 font-medium mt-2"><i class="fa-solid fa-arrow-up mr-1"></i>{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Pipeline */}
      <div class="bg-white rounded-2xl border-2 border-gray-100 mb-8">
        <div class="p-6 border-b border-gray-100">
          <h2 class="text-xl font-bold text-gray-900 font-space">Return Pipeline</h2>
        </div>
        <div class="grid md:grid-cols-5 divide-x divide-gray-100">
          {[
            { stage: "Documents Received", count: 45, color: "blue" },
            { stage: "In Preparation", count: 62, color: "amber" },
            { stage: "Under Review", count: 23, color: "purple" },
            { stage: "Awaiting Signature", count: 12, color: "orange" },
            { stage: "E-Filed", count: 438, color: "emerald" },
          ].map((stage) => (
            <div class="p-4 text-center">
              <div class={`text-2xl font-black text-${stage.color}-600 font-space`}>{stage.count}</div>
              <div class="text-xs text-gray-500 mt-1">{stage.stage}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Returns */}
      <div class="bg-white rounded-2xl border-2 border-gray-100">
        <div class="p-6 border-b border-gray-100">
          <h2 class="text-xl font-bold text-gray-900 font-space">Recent Returns</h2>
        </div>
        <table class="w-full">
          <thead class="bg-gray-50 text-xs text-gray-500 uppercase">
            <tr>
              <th class="px-6 py-3 text-left">Client</th>
              <th class="px-6 py-3 text-left">Form</th>
              <th class="px-6 py-3 text-left">Preparer</th>
              <th class="px-6 py-3 text-left">Status</th>
              <th class="px-6 py-3 text-right">Fee</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            {[
              { client: "Maria Gonzalez", form: "1040 + Sch A", preparer: "Marcus J.", status: "In Review", fee: "$320" },
              { client: "David Chen", form: "1040 + Sch C", preparer: "Elena R.", status: "Awaiting Docs", fee: "$450" },
              { client: "Thompson LLC", form: "1120-S", preparer: "David N.", status: "In Prep", fee: "$1,200" },
              { client: "Sandra Williams", form: "1040 (Simple)", preparer: "Marcus J.", status: "E-Filed", fee: "$175" },
              { client: "Ramirez Family", form: "1040 + EITC", preparer: "Elena R.", status: "Signature", fee: "$250" },
            ].map((ret) => (
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-3 text-sm font-medium text-gray-900">{ret.client}</td>
                <td class="px-6 py-3 text-sm text-gray-600">{ret.form}</td>
                <td class="px-6 py-3 text-sm text-gray-600">{ret.preparer}</td>
                <td class="px-6 py-3"><span class="text-xs font-bold px-2 py-1 rounded-full bg-amber-50 text-amber-600">{ret.status}</span></td>
                <td class="px-6 py-3 text-sm font-bold text-gray-900 text-right">{ret.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>,
    { title: 'Admin Dashboard' }
  )
}

export const adminClients = (c: Context) => {
  return c.render(
    <AdminLayout active="Clients">
      <h1 class="text-3xl font-black text-gray-900 mb-2 font-space">Client Management</h1>
      <p class="text-gray-600 mb-8">Manage client records, contact information, and tax history.</p>

      <div class="flex items-center justify-between mb-6">
        <div class="relative">
          <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
          <input type="text" placeholder="Search clients..." class="pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none w-80" />
        </div>
        <button class="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-4 py-2.5 rounded-lg text-sm transition-colors">
          <i class="fa-solid fa-plus mr-2"></i>Add Client
        </button>
      </div>

      <div class="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden">
        <table class="w-full">
          <thead class="bg-gray-50 text-xs text-gray-500 uppercase">
            <tr>
              <th class="px-6 py-3 text-left">Client Name</th>
              <th class="px-6 py-3 text-left">Email</th>
              <th class="px-6 py-3 text-left">Phone</th>
              <th class="px-6 py-3 text-left">Returns</th>
              <th class="px-6 py-3 text-left">Status</th>
              <th class="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            {[
              { name: "Maria Gonzalez", email: "maria@example.com", phone: "(555) 123-4567", returns: 3, status: "Active" },
              { name: "David Chen", email: "david@example.com", phone: "(555) 234-5678", returns: 2, status: "Active" },
              { name: "Sandra Williams", email: "sandra@example.com", phone: "(555) 345-6789", returns: 4, status: "Active" },
              { name: "James Mitchell", email: "james@example.com", phone: "(555) 456-7890", returns: 5, status: "Active" },
              { name: "Patricia Ramirez", email: "patricia@example.com", phone: "(555) 567-8901", returns: 2, status: "Pending Docs" },
            ].map((client) => (
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4">
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-blue-950 rounded-full flex items-center justify-center mr-3">
                      <span class="text-white text-xs font-bold">{client.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <span class="font-medium text-gray-900 text-sm">{client.name}</span>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-gray-600">{client.email}</td>
                <td class="px-6 py-4 text-sm text-gray-600">{client.phone}</td>
                <td class="px-6 py-4 text-sm text-gray-600">{client.returns}</td>
                <td class="px-6 py-4"><span class="text-xs font-bold px-2 py-1 rounded-full bg-emerald-50 text-emerald-600">{client.status}</span></td>
                <td class="px-6 py-4 text-right">
                  <button class="text-gray-400 hover:text-gray-600 text-sm"><i class="fa-solid fa-ellipsis"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>,
    { title: 'Client Management' }
  )
}

export const adminReturns = (c: Context) => {
  return c.render(
    <AdminLayout active="Tax Returns">
      <h1 class="text-3xl font-black text-gray-900 mb-2 font-space">Return Workflow</h1>
      <p class="text-gray-600 mb-8">Manage the tax return preparation pipeline.</p>

      {/* Kanban-style columns */}
      <div class="grid md:grid-cols-4 gap-4">
        {[
          { stage: "Awaiting Documents", color: "blue", items: ["Maria G. — 1040", "Chen Family — 1040+C"] },
          { stage: "In Preparation", color: "amber", items: ["Thompson LLC — 1120-S", "Williams — 1040", "Ramirez — 1040+EITC"] },
          { stage: "Review & Sign", color: "purple", items: ["Mitchell Corp — 1065", "Johnson — 1040+E"] },
          { stage: "E-Filed", color: "emerald", items: ["38 returns filed this week"] },
        ].map((col) => (
          <div class="bg-gray-100 rounded-2xl p-4">
            <div class="flex items-center justify-between mb-4">
              <h3 class={`font-bold text-${col.color}-700 text-sm`}>{col.stage}</h3>
              <span class={`bg-${col.color}-100 text-${col.color}-700 text-xs font-bold px-2 py-0.5 rounded-full`}>{col.items.length}</span>
            </div>
            <div class="space-y-2">
              {col.items.map((item) => (
                <div class="bg-white rounded-xl p-3 border border-gray-200 text-sm text-gray-700 hover:shadow-md transition-shadow cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>,
    { title: 'Return Workflow' }
  )
}

export const adminStaff = (c: Context) => {
  return c.render(
    <AdminLayout active="Staff">
      <h1 class="text-3xl font-black text-gray-900 mb-2 font-space">Staff Management</h1>
      <p class="text-gray-600 mb-8">Manage team members, credentials, and access levels.</p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Katherine Mitchell, EA", role: "Principal", returns: 87, ptin: "Active", access: "Admin" },
          { name: "David Nakamura, CPA", role: "Business Tax Director", returns: 62, ptin: "Active", access: "Senior" },
          { name: "Elena Rodriguez", role: "Senior Preparer", returns: 95, ptin: "Active", access: "Preparer" },
          { name: "Marcus Johnson", role: "Tax Preparer", returns: 108, ptin: "Active", access: "Preparer" },
          { name: "Rachel Kim", role: "Bookkeeping Manager", returns: 0, ptin: "Active", access: "Staff" },
        ].map((staff) => (
          <div class="bg-white rounded-2xl p-6 border-2 border-gray-100">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-950 rounded-xl flex items-center justify-center mr-4">
                <i class="fa-solid fa-user text-white"></i>
              </div>
              <div>
                <div class="font-bold text-gray-900 text-sm">{staff.name}</div>
                <div class="text-gray-500 text-xs">{staff.role}</div>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-2 text-center">
              <div class="bg-gray-50 rounded-lg p-2">
                <div class="text-lg font-black text-gray-900 font-space">{staff.returns}</div>
                <div class="text-[10px] text-gray-400">Returns</div>
              </div>
              <div class="bg-emerald-50 rounded-lg p-2">
                <div class="text-xs font-bold text-emerald-600">{staff.ptin}</div>
                <div class="text-[10px] text-gray-400">PTIN</div>
              </div>
              <div class="bg-blue-50 rounded-lg p-2">
                <div class="text-xs font-bold text-blue-600">{staff.access}</div>
                <div class="text-[10px] text-gray-400">Access</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>,
    { title: 'Staff Management' }
  )
}

export const adminAnalytics = (c: Context) => {
  return c.render(
    <AdminLayout active="Analytics">
      <h1 class="text-3xl font-black text-gray-900 mb-2 font-space">Analytics</h1>
      <p class="text-gray-600 mb-8">Revenue, performance, and operational metrics.</p>

      {/* Revenue stats */}
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <div class="text-sm text-gray-500 mb-1">Season Revenue</div>
          <div class="text-3xl font-black text-gray-900 font-space">$142,850</div>
          <div class="text-xs text-emerald-600 font-medium mt-1"><i class="fa-solid fa-arrow-up mr-1"></i>+23% vs last year</div>
        </div>
        <div class="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <div class="text-sm text-gray-500 mb-1">Average Fee</div>
          <div class="text-3xl font-black text-gray-900 font-space">$326</div>
          <div class="text-xs text-emerald-600 font-medium mt-1"><i class="fa-solid fa-arrow-up mr-1"></i>+8% vs last year</div>
        </div>
        <div class="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <div class="text-sm text-gray-500 mb-1">Client Satisfaction</div>
          <div class="text-3xl font-black text-gray-900 font-space">4.9/5.0</div>
          <div class="flex mt-1">{[1,2,3,4,5].map(() => <i class="fa-solid fa-star text-amber-400 text-xs mr-0.5"></i>)}</div>
        </div>
      </div>

      {/* Charts placeholder */}
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <h3 class="font-bold text-gray-900 mb-4 font-space">Revenue by Month</h3>
          <div class="h-64 bg-gradient-to-t from-emerald-50 to-white rounded-xl flex items-end justify-between px-4 pb-4">
            {[20, 35, 45, 80, 95, 100, 60, 30, 25, 20, 15, 28].map((h, i) => (
              <div class="flex flex-col items-center gap-1 flex-1">
                <div class={`w-full max-w-8 bg-emerald-500 rounded-t-lg ${i === 4 || i === 5 ? 'opacity-100' : 'opacity-60'}`} style={`height: ${h * 2}px`}></div>
                <span class="text-[10px] text-gray-400">{['J','F','M','A','M','J','J','A','S','O','N','D'][i]}</span>
              </div>
            ))}
          </div>
        </div>
        <div class="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <h3 class="font-bold text-gray-900 mb-4 font-space">Returns by Type</h3>
          <div class="space-y-4">
            {[
              { type: "1040 (Simple)", count: 210, pct: 48 },
              { type: "1040 (Complex)", count: 95, pct: 22 },
              { type: "Schedule C", count: 68, pct: 15 },
              { type: "S-Corp / Partnership", count: 42, pct: 10 },
              { type: "C-Corp / Non-Profit", count: 23, pct: 5 },
            ].map((item) => (
              <div>
                <div class="flex items-center justify-between text-sm mb-1">
                  <span class="text-gray-700">{item.type}</span>
                  <span class="font-bold text-gray-900">{item.count} ({item.pct}%)</span>
                </div>
                <div class="w-full bg-gray-100 rounded-full h-2">
                  <div class="bg-blue-950 h-2 rounded-full" style={`width: ${item.pct}%`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>,
    { title: 'Analytics' }
  )
}

export const adminCompliance = (c: Context) => {
  return c.render(
    <AdminLayout active="Compliance">
      <h1 class="text-3xl font-black text-gray-900 mb-2 font-space">Compliance Dashboard</h1>
      <p class="text-gray-600 mb-8">Monitor PTIN, EFIN, GLBA, and security compliance status.</p>

      {/* Compliance status */}
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[
          { title: "PTIN Status", status: "Active", detail: "All 5 preparers verified", icon: "fa-id-card", ok: true },
          { title: "EFIN Status", status: "Active", detail: "Authorized IRS e-file provider", icon: "fa-file-signature", ok: true },
          { title: "GLBA Compliance", status: "Compliant", detail: "FTC Safeguards Rule met", icon: "fa-lock", ok: true },
          { title: "WISP", status: "Current", detail: "Last reviewed: Jan 2026", icon: "fa-shield-halved", ok: true },
          { title: "E&O Insurance", status: "Active", detail: "Renewed through Dec 2026", icon: "fa-umbrella", ok: true },
          { title: "Security Training", status: "Due Mar 15", detail: "Annual staff training required", icon: "fa-graduation-cap", ok: false },
        ].map((item) => (
          <div class={`bg-white rounded-2xl p-6 border-2 ${item.ok ? 'border-emerald-200' : 'border-amber-200'}`}>
            <div class="flex items-center justify-between mb-3">
              <div class={`${item.ok ? 'bg-emerald-50' : 'bg-amber-50'} rounded-xl p-2.5`}>
                <i class={`fa-solid ${item.icon} ${item.ok ? 'text-emerald-600' : 'text-amber-600'}`}></i>
              </div>
              <span class={`text-xs font-bold px-2.5 py-1 rounded-full ${item.ok ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                {item.ok ? <><i class="fa-solid fa-circle-check mr-1"></i></> : <><i class="fa-solid fa-clock mr-1"></i></>}
                {item.status}
              </span>
            </div>
            <h3 class="font-bold text-gray-900 text-sm">{item.title}</h3>
            <p class="text-gray-500 text-xs mt-1">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* PTIN Expiry tracker */}
      <div class="bg-white rounded-2xl border-2 border-gray-100">
        <div class="p-6 border-b border-gray-100">
          <h2 class="text-xl font-bold text-gray-900 font-space">PTIN Renewal Tracker</h2>
        </div>
        <table class="w-full">
          <thead class="bg-gray-50 text-xs text-gray-500 uppercase">
            <tr>
              <th class="px-6 py-3 text-left">Staff Member</th>
              <th class="px-6 py-3 text-left">PTIN</th>
              <th class="px-6 py-3 text-left">Expiry</th>
              <th class="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            {[
              { name: "Katherine Mitchell, EA", ptin: "P0XXXXXXX", expiry: "Dec 31, 2026", ok: true },
              { name: "David Nakamura, CPA", ptin: "P0XXXXXXX", expiry: "Dec 31, 2026", ok: true },
              { name: "Elena Rodriguez", ptin: "P0XXXXXXX", expiry: "Dec 31, 2026", ok: true },
              { name: "Marcus Johnson", ptin: "P0XXXXXXX", expiry: "Dec 31, 2026", ok: true },
              { name: "Rachel Kim", ptin: "P0XXXXXXX", expiry: "Dec 31, 2026", ok: true },
            ].map((staff) => (
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-3 text-sm font-medium text-gray-900">{staff.name}</td>
                <td class="px-6 py-3 text-sm text-gray-600 font-mono">{staff.ptin}</td>
                <td class="px-6 py-3 text-sm text-gray-600">{staff.expiry}</td>
                <td class="px-6 py-3">
                  <span class="text-xs font-bold px-2 py-1 rounded-full bg-emerald-50 text-emerald-600">
                    <i class="fa-solid fa-circle-check mr-1"></i>Active
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>,
    { title: 'Compliance Dashboard' }
  )
}
