import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { sanityClient } from '@/sanity/sanity.client'
import { siteSettingsQuery } from '@/lib/queries'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Elaine Hankinson | Wedding Celebrant West Yorkshire',
  description: 'Bespoke wedding ceremonies crafted around your story. Fun, personal and vibrant ceremonies in West Yorkshire and beyond.',
  metadataBase: new URL('https://www.elaineweddings.com'),
}

export const revalidate = 3600

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = await sanityClient.fetch(siteSettingsQuery).catch(() => null)

  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        {settings?.promoBannerEnabled && settings.promoBannerText && (
          <div style={{
            background: 'linear-gradient(90deg, #F13A7B, #7A3EB1)',
            color: '#fff',
            textAlign: 'center',
            padding: '0.8rem 2rem',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-sans)',
            letterSpacing: '0.05em',
          }}>
            {settings.promoBannerText}
            {settings.promoBannerCtaLabel && settings.promoBannerCtaHref && (
              <a href={settings.promoBannerCtaHref} style={{ marginLeft: '1.2rem', color: '#fff', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.6)' }}>
                {settings.promoBannerCtaLabel}
              </a>
            )}
          </div>
        )}
        <Navbar settings={settings} />
        <main>{children}</main>
        <Footer settings={settings} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Elaine Hankinson Wedding Celebrant',
              url: 'https://www.elaineweddings.com',
              email: 'hello@elaineweddings.com',
              description: 'Bespoke wedding ceremonies crafted around your story. Fun, personal and vibrant ceremonies in West Yorkshire and beyond.',
              address: { '@type': 'PostalAddress', addressRegion: 'West Yorkshire', addressCountry: 'GB' },
            }),
          }}
        />
      </body>
    </html>
  )
}
