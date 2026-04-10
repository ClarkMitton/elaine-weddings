import type { Metadata } from 'next'
import { sanityClient } from '@/sanity/sanity.client'
import { packagesPageQuery } from '@/lib/queries'
import { CTASection } from '@/components/ui/CTASection'
import Link from 'next/link'
import styles from './page.module.css'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityClient.fetch(packagesPageQuery).catch(() => null)
  return {
    title: data?.seoTitle ?? 'Packages & Prices | Elaine Hankinson Wedding Celebrant',
    description: data?.seoDescription ?? 'Simple, transparent pricing for bespoke wedding ceremonies in West Yorkshire. The Signature Ceremony from £475 and Wedding Day Host from £400.',
  }
}

const DEFAULT_PACKAGES = [
  {
    packageName: 'The Signature Ceremony',
    tagline: 'A fully bespoke ceremony, crafted around your story.',
    pricePrefix: 'From',
    priceAmount: '£475',
    accentColor: 'pink',
    includedItems: [
      'Informal chat to make sure we\'re the perfect fit',
      'In-depth consultation diving into your story and vision',
      'Completely bespoke ceremony handcrafted from scratch',
      'Ceremony run-through meeting',
      'Guidance on writing your vows, selecting poems, readings and music',
      'Support with legal essentials (notice of marriage, registrar booking)',
      'Recommendations for wedding suppliers',
      'Keepsake copy of your ceremony script and certificate',
    ],
    onTheDayItems: [
      'Welcome your guests warmly as they arrive',
      'Liaise with your venue coordinator and wedding party',
      'Deliver the ceremony your guests will treasure for years to come',
    ],
    ctaLabel: 'Check Availability',
  },
  {
    packageName: 'The Wedding Day Host',
    tagline: 'A smooth, seamless and joyful wedding day — from start to finish.',
    pricePrefix: 'From',
    priceAmount: '£400',
    accentColor: 'teal',
    includedItems: [
      'Help fine-tune your order of service',
      'Coordinate with your venue and suppliers',
      'Handle any unexpected moments smoothly and discreetly',
      'Keep guests together and in the right place at the right time',
      'Introduce the entrance, speeches, cake cutting and first dance',
    ],
    ctaLabel: 'Check Availability',
  },
]

const DEFAULT_FEATURED_EXTRAS = ['Handfasting Ritual', 'Ring Warming Ritual', 'Jumping the Broom Ritual']
const DEFAULT_SECONDARY_EXTRAS = ['Quaich Sharing Ceremony', 'Blended Sand Ceremony', 'Unity Candle Ceremony', 'Tree Planting Ritual']

const ACCENT_STYLES: Record<string, { background: string; color: string }> = {
  pink: { background: 'linear-gradient(135deg, #F13A7B 0%, #FF8C3A 100%)', color: '#fff' },
  teal: { background: 'linear-gradient(135deg, #1FA9B6 0%, #2BA6E2 100%)', color: '#fff' },
  navy: { background: 'linear-gradient(135deg, #1e3a8a 0%, #2d4fa0 100%)', color: '#fff' },
}

export default async function PackagesPage() {
  const data = await sanityClient.fetch(packagesPageQuery).catch(() => null)
  const packages = data?.packages?.length ? data.packages : DEFAULT_PACKAGES
  const featuredExtras = data?.featuredExtras?.length ? data.featuredExtras : DEFAULT_FEATURED_EXTRAS
  const secondaryExtras = data?.secondaryExtras?.length ? data.secondaryExtras : DEFAULT_SECONDARY_EXTRAS
  const hostQuote = data?.hostQuote ?? "Because your only job on your wedding day is to enjoy every moment of it."

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">{data?.heroLabel ?? 'Packages & Prices'}</p>
          <h1>{data?.heroTitle ?? 'Everything taken care of, so you can relax and enjoy every moment.'}</h1>
          {data?.heroSubtitle && <p>{data.heroSubtitle}</p>}
        </div>
      </div>

      <section className={styles.packagesSection}>
        <div className={styles.packagesGrid}>
          {packages.map((pkg: any, i: number) => {
            const accent = ACCENT_STYLES[pkg.accentColor] ?? ACCENT_STYLES.pink
            return (
              <div key={i} className={styles.packageCard}>
                <div className={styles.packageHeader} style={accent}>
                  <h2 className={styles.packageName}>{pkg.packageName}</h2>
                  {pkg.tagline && <p className={styles.packageTagline}>{pkg.tagline}</p>}
                  {pkg.subTagline && <p className={styles.packageSubTagline}>{pkg.subTagline}</p>}
                  <div className={styles.priceRow}>
                    {pkg.pricePrefix && <span className={styles.pricePrefix}>{pkg.pricePrefix}</span>}
                    <span className={styles.price}>{pkg.priceAmount}</span>
                  </div>
                </div>
                <div className={styles.packageBody}>
                  {pkg.introText && <p className={styles.packageIntro}>{pkg.introText}</p>}
                  {pkg.includedItems?.length > 0 && (
                    <>
                      <p className={styles.listLabel}>What&apos;s included:</p>
                      <ul className={styles.packageList}>
                        {pkg.includedItems.map((item: string, j: number) => (
                          <li key={j}>
                            <CheckIcon color={pkg.accentColor === 'teal' ? '#1FA9B6' : '#F13A7B'} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {pkg.onTheDayItems?.length > 0 && (
                    <>
                      <p className={styles.listLabel} style={{ marginTop: '1.5rem' }}>On your day:</p>
                      <ul className={styles.packageList}>
                        {pkg.onTheDayItems.map((item: string, j: number) => (
                          <li key={j}>
                            <CheckIcon color={pkg.accentColor === 'teal' ? '#1FA9B6' : '#F13A7B'} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {pkg.footerNote && <p className={styles.footerNote}>{pkg.footerNote}</p>}
                </div>
                <div className={styles.packageFooter}>
                  <Link href="/contact" className="btn-primary">{pkg.ctaLabel ?? 'Check Availability'}</Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className={styles.extrasSection}>
        <p className="section-label">{data?.extrasLabel ?? 'Add Something Special'}</p>
        <h2>{data?.extrasTitle ?? 'Optional symbolic rituals'}</h2>
        {data?.extrasSubtitle && <p className={styles.extrasSub}>{data.extrasSubtitle}</p>}
        <div className={styles.extrasGrid}>
          {featuredExtras.map((e: string, i: number) => (
            <span key={i} className={`${styles.extrasTag} ${styles.featured}`}>{e}</span>
          ))}
        </div>
        <div className={styles.extrasGrid} style={{ marginTop: '1rem' }}>
          {secondaryExtras.map((e: string, i: number) => (
            <span key={i} className={styles.extrasTag}>{e}</span>
          ))}
        </div>
      </section>

      {hostQuote && (
        <div className={styles.quoteStrip}>
          <p className={styles.quoteText}>{hostQuote}</p>
        </div>
      )}

      <CTASection
        label={data?.ctaSectionLabel}
        title={data?.ctaTitle ?? "Let's have a chat about what's right for you."}
        body={data?.ctaBody ?? "No pressure, no hard sell — just an honest conversation about your day."}
        buttonLabel={data?.ctaButtonLabel}
        buttonHref={data?.ctaButtonHref}
      />
    </>
  )
}

function CheckIcon({ color = '#F13A7B' }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
      <circle cx="9" cy="9" r="9" fill={color} fillOpacity="0.12" />
      <path d="M5 9l3 3 5-5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
