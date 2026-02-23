import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title, description }) => {
  const pageTitle = title 
    ? `${title} | Eugene Solutions LLC` 
    : 'Eugene Solutions LLC | Tax Preparation, Bookkeeping, Accounting & Government Contracting'
  const pageDescription = description || 
    'Eugene Solutions LLC — Your complete accounting, tax & financial solutions partner. Tax preparation, bookkeeping, accounting, and government contracting services. Serving all 50 states. (407) 810-5368'

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="tax preparation, bookkeeping, accounting, government contracting, IRS authorized, Eugene Solutions LLC, tax agency, e-file, 1040, business taxes, tax planning, EITC, all 50 states" />
        <meta name="author" content="Eugene Solutions LLC" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://eugenesolutions.com" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:site_name" content="Eugene Solutions LLC" />
        <meta property="og:url" content="https://eugenesolutions.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = {
            theme: {
              extend: {
                fontFamily: {
                  'space': ['Space Grotesk', 'sans-serif'],
                  'inter': ['Inter', 'sans-serif'],
                },
                colors: {
                  'brand': {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#10b981',
                    600: '#059669',
                    700: '#047857',
                    800: '#065f46',
                    900: '#064e3b',
                  },
                  'navy': {
                    800: '#1e2a4a',
                    900: '#172042',
                    950: '#0f172a',
                  }
                }
              }
            }
          }
        `}} />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Font Awesome */}
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" rel="stylesheet" />

        {/* Custom styles */}
        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body class="font-inter bg-white text-gray-900 antialiased">
        {/* Skip Navigation — ADA WCAG 2.1 AA */}
        <a href="#main-content" class="skip-nav">Skip to main content</a>

        {/* IRS Circular 230 Compliance Banner — Required on ALL pages */}
        <div class="bg-blue-950 text-white text-xs py-2 px-4 text-center leading-relaxed" role="banner" aria-label="IRS Circular 230 compliance notice">
          <span class="font-semibold">IRS Circular 230 Notice:</span>{' '}
          Eugene Solutions LLC is a licensed tax preparation and accounting services agency. Information on this site is for general purposes only and does not constitute tax, legal, or accounting advice.{' '}
          <a href="/privacy" class="underline hover:text-blue-200 ml-1">Privacy Notice (GLBA)</a>{' '}|{' '}
          <a href="tel:4078105368" class="underline hover:text-blue-200">(407) 810-5368</a>
        </div>
        <main id="main-content">
          {children}
        </main>
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
