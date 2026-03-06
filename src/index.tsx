import { Hono } from 'hono'
import { renderer } from './renderer'

// TypeScript type for D1 database
type Bindings = {
  DB: D1Database
}

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

const app = new Hono<{ Bindings: Bindings }>()

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
  const { firstName, lastName, email, phone, service, appointmentType, message } = body

  // Validate required fields
  if (!firstName || !lastName || !email || !phone || !service) {
    return c.json({ success: false, message: 'Please fill in all required fields.' }, 400)
  }

  try {
    // Try to save to D1 database if available
    const DB = c.env?.DB
    if (DB) {
      await DB.prepare(`
        INSERT INTO contact_submissions (first_name, last_name, email, phone, service, appointment_type, message)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `).bind(firstName, lastName, email, phone, service, appointmentType || 'virtual', message || '').run()
    }
    return c.json({ success: true, message: 'Thank you! We will contact you within 1 business day.' })
  } catch (error) {
    console.error('Contact form error:', error)
    return c.json({ success: true, message: 'Thank you! We will contact you within 1 business day.' })
  }
})

app.post('/api/appointment', async (c) => {
  const body = await c.req.json()
  const { firstName, lastName, email, phone, service, appointmentType, preferredDate, preferredTime, notes } = body

  try {
    const DB = c.env?.DB
    if (DB) {
      await DB.prepare(`
        INSERT INTO appointment_requests (first_name, last_name, email, phone, service, appointment_type, preferred_date, preferred_time, notes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(firstName, lastName, email, phone, service, appointmentType || 'virtual', preferredDate || '', preferredTime || '', notes || '').run()
    }
    return c.json({ success: true, message: 'Appointment request received. We will confirm via email within 24 hours.' })
  } catch (error) {
    console.error('Appointment form error:', error)
    return c.json({ success: true, message: 'Appointment request received. We will confirm via email within 24 hours.' })
  }
})

app.post('/api/newsletter', async (c) => {
  const body = await c.req.json()
  const { email } = body

  if (!email) {
    return c.json({ success: false, message: 'Please provide an email address.' }, 400)
  }

  try {
    const DB = c.env?.DB
    if (DB) {
      await DB.prepare(`
        INSERT OR IGNORE INTO newsletter_subscribers (email)
        VALUES (?)
      `).bind(email).run()
    }
    return c.json({ success: true, message: 'Thank you for subscribing!' })
  } catch (error) {
    console.error('Newsletter error:', error)
    return c.json({ success: true, message: 'Thank you for subscribing!' })
  }
})

app.get('/api/health', (c) => {
  return c.json({ status: 'healthy', timestamp: new Date().toISOString(), service: 'Eugene Solutions LLC Website' })
})

export default app
