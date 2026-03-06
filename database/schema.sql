-- Eugene Solutions LLC D1 Database Schema
-- Contact form submissions table

CREATE TABLE IF NOT EXISTS contact_submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  appointment_type TEXT DEFAULT 'virtual',
  message TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'new'
);

CREATE TABLE IF NOT EXISTS appointment_requests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  appointment_type TEXT DEFAULT 'virtual',
  preferred_date TEXT,
  preferred_time TEXT,
  notes TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'pending'
);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'active'
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_appointment_created ON appointment_requests(created_at DESC);
