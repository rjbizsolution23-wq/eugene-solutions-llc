import { Hono } from 'hono'
import { renderer } from './renderer'

// Import page routes
import { homePage } from './pages/home'
import { servicesPage } from './pages/services'
import { pricingPage } from './pages/pricing'
import { aboutPage } from './pages/about'
import { contactPage } from './pages/contact'
import { blogPage, blogPostPage } from './pages/blog'
import { faqPage } from './pages/faq'
import { taxResourcesPage } from './pages/tax-resources'
import { privacyPage } from './pages/privacy'
import { termsPage } from './pages/terms'
import { accessibilityPage } from './pages/accessibility'
import { careersPage } from './pages/careers'
import { portalPage, portalDashboard, portalDocuments, portalReturns, portalAppointments, portalMessages, portalBilling } from './pages/portal'
import { adminDashboard, adminClients, adminReturns, adminStaff, adminAnalytics, adminCompliance } from './pages/admin'

const app = new Hono()

app.use(renderer)

// ══ PUBLIC MARKETING PAGES ══
app.get('/', homePage)
app.get('/services', servicesPage)
app.get('/pricing', pricingPage)
app.get('/about', aboutPage)
app.get('/contact', contactPage)
app.get('/blog', blogPage)
app.get('/blog/:slug', blogPostPage)
app.get('/faq', faqPage)
app.get('/tax-resources', taxResourcesPage)
app.get('/careers', careersPage)

// ══ LEGAL & COMPLIANCE PAGES ══
app.get('/privacy', privacyPage)
app.get('/terms', termsPage)
app.get('/accessibility', accessibilityPage)

// ══ CLIENT PORTAL PAGES ══
app.get('/portal', portalPage)
app.get('/portal/login', portalPage)
app.get('/portal/dashboard', portalDashboard)
app.get('/portal/documents', portalDocuments)
app.get('/portal/returns', portalReturns)
app.get('/portal/appointments', portalAppointments)
app.get('/portal/messages', portalMessages)
app.get('/portal/billing', portalBilling)

// ══ ADMIN PORTAL PAGES ══
app.get('/admin', adminDashboard)
app.get('/admin/dashboard', adminDashboard)
app.get('/admin/clients', adminClients)
app.get('/admin/returns', adminReturns)
app.get('/admin/staff', adminStaff)
app.get('/admin/analytics', adminAnalytics)
app.get('/admin/compliance', adminCompliance)

// ══ API ROUTES ══
app.post('/api/contact', async (c) => {
  const body = await c.req.json()
  // In production, this would send email, create CRM entry, etc.
  return c.json({ success: true, message: 'Thank you! We will contact you within 1 business day.' })
})

app.post('/api/appointment', async (c) => {
  const body = await c.req.json()
  return c.json({ success: true, message: 'Appointment request received. We will confirm via email within 24 hours.' })
})

app.get('/api/health', (c) => {
  return c.json({ status: 'healthy', timestamp: new Date().toISOString(), service: 'Eugene Solutions LLC Website' })
})

export default app
