import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { sanityClient } from '@/sanity/sanity.client'
import { homePageQuery, siteSettingsQuery } from '@/lib/queries'
import { urlFor } from '@/sanity/image'
import { CTASection } from '@/components/ui/CTASection'
import { FAQSection } from '@/components/home/FAQSection'
import styles from './page.module.css'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityClient.fetch(homePageQuery).catch(() => null)
  return {
    title: data?.seoTitle ?? 'Elaine Hankinson | Wedding Celebrant West Yorkshire | Bespoke Ceremonies',
    description: data?.seoDescription ?? 'Elaine Hankinson is a professional wedding celebrant based in West Yorkshire. Bespoke, personal ceremonies crafted around your story.',
  }
}

export default async function HomePage() {
  const [data, settings] = await Promise.all([
    sanityClient.fetch(homePageQuery).catch(() => null),
    sanityClient.fetch(siteSettingsQuery).catch(() => null),
  ])

  const heroTitle = data?.heroTitle ?? 'Making your ceremony the highlight of your day.'
  const heroSubtitle = data?.heroSubtitle ?? "I create bespoke, meaningful ceremonies that feel completely you — from the very first word to the very last. No scripts pulled from a folder. Just your story, beautifully told."
  const introText = data?.introStripText ?? "Creating ceremonies that are personal, joyful and completely unforgettable — so that on the day that matters most, you can be fully present to enjoy every single moment."
  const whatIDoTitle = data?.whatIDoTitle ?? "I don't just lead ceremonies. I create experiences."
  const whatIdoParagraphs: string[] = data?.whatIdoParagraphs ?? [
    "From the moment we first chat to the second you say I do, I'm completely focused on you — your story, your people and your vision for the day.",
    "Every ceremony I create is handcrafted from scratch. No templates. No generic scripts. Just an honest, joyful, beautifully personal celebration of who you are and what you mean to each other.",
    "Whether you want champagne elegance, festival vibes, something rooted in tradition or something completely outside the box — I'll make it happen.",
  ]
  const perfectFitTitle = data?.perfectFitTitle ?? "You might be the perfect fit if…"
  const perfectFitCards = data?.perfectFitCards ?? [
    { text: "You want a ceremony that feels natural, personal and completely unforgettable." },
    { text: "You care about your guests actually enjoying every single moment of it." },
    { text: "You love the idea of a ceremony built around your story — not someone else's." },
    { text: "You want to feel completely relaxed and enjoy every moment of your wedding day." },
    { text: "You're planning something that's meaningful — and you want it done properly." },
    { text: "You'd love someone who genuinely cares about making your day as special as you do." },
  ]
  const homeTestimonialQuote = data?.homeTestimonialQuote ?? "She had everyone in stitches — but she also told our story in a way that just felt completely right."
  const homeTestimonialCite = data?.homeTestimonialCite ?? 'Clark & Valentina · Yeadon Town Hall'
  const quoteStripText = data?.quoteStripText ?? "Your day. Your story. Your ceremony."
  const aboutTitle = data?.aboutTitle ?? "Hi, I'm Elaine."
  const aboutParagraphs: string[] = data?.aboutParagraphs ?? [
    "I'm a professional wedding celebrant based in West Yorkshire — and I absolutely love what I do.",
    "I got into this because I believe your ceremony should be the most personal, meaningful part of your entire day. Not the part people sit through — the part they remember.",
    "I'm detail-obsessed, genuinely invested in every couple I work with, and I only take on a small number of weddings each year so I can give each one my full attention.",
    "If that sounds like your kind of celebrant, I'd love to hear from you.",
  ]

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.heroEyebrow}>{data?.heroEyebrow ?? 'Wedding Celebrant · West Yorkshire'}</p>
          <h1 className={styles.heroTitle}>{heroTitle}</h1>
          <p className={styles.heroSubtitle}>{heroSubtitle}</p>
          <div className={styles.heroCtas}>
            <Link href={data?.heroPrimaryCtaHref ?? '/contact'} className="btn-primary">
              {data?.heroPrimaryCtaLabel ?? 'Start Planning'}
            </Link>
            <Link href={data?.heroGhostCtaHref ?? '/why-choose-me'} className="btn-ghost">
              {data?.heroGhostCtaLabel ?? 'Meet Elaine'}
            </Link>
          </div>
          {data?.heroLocationNote && (
            <p className={styles.heroLocation}>{data.heroLocationNote}</p>
          )}
        </div>

        <div className={styles.heroVisual}>
          {data?.heroImage ? (
            <Image
              src={urlFor(data.heroImage).width(920).height(1150).url()}
              alt={data.heroImageAlt ?? 'Elaine Hankinson wedding celebrant'}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
              sizes="50vw"
            />
          ) : (
            <div className={styles.heroImagePlaceholder}>
              <span style={{ fontSize: '4rem', opacity: 0.3 }}>📸</span>
              <p>Add your hero photo in the Sanity Studio</p>
            </div>
          )}

          {settings?.trainingBadgeImage && (
            <div className={styles.heroBadge}>
              <Image
                src={urlFor(settings.trainingBadgeImage).width(260).height(260).url()}
                alt={settings.trainingBadgeAlt ?? 'Accreditation badge'}
                width={130}
                height={130}
                style={{ objectFit: 'contain', borderRadius: '50%' }}
              />
            </div>
          )}
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <div className="intro-strip">
        <p>{introText}</p>
      </div>

      {/* ── WHAT I DO ── */}
      <section className={styles.whatIDo}>
        <div className={styles.whatIDoText}>
          <p className="section-label">What I Do</p>
          <h2>{whatIDoTitle}</h2>
          {whatIdoParagraphs.map((p: string, i: number) => (
            <p key={i} className={styles.whatIDoP}>{p}</p>
          ))}
          <Link href="/ceremonies" className="btn-ghost" style={{ display: 'inline-block', marginTop: '1.5rem' }}>
            See ceremony types
          </Link>
        </div>
        <div className={styles.whatIDoVisual}>
          <span className={styles.whatIDoVisualText}>Elaine</span>
        </div>
      </section>

      {/* ── TESTIMONIAL STRIP ── */}
      <div className={styles.testimonialStrip}>
        <blockquote className={styles.testimonialStripQuote}>
          &ldquo;{homeTestimonialQuote}&rdquo;
        </blockquote>
        <p className={styles.testimonialStripCite}>— {homeTestimonialCite}</p>
        <Link href="/testimonials" className={styles.testimonialStripLink}>
          Read more testimonials
        </Link>
      </div>

      {/* ── PERFECT FIT ── */}
      <section className={styles.perfectFit}>
        <p className="section-label">{data?.perfectFitLabel ?? 'Is This You?'}</p>
        <h2>{perfectFitTitle}</h2>
        <div className={styles.fitGrid}>
          {perfectFitCards.map((card: any, i: number) => (
            <div key={i} className={styles.fitCard}>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '3rem' }}>
          <Link href="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>

      {/* ── QUOTE STRIP ── */}
      <div className={styles.quoteStrip}>
        <p className={styles.quoteStripText}>{quoteStripText}</p>
      </div>

      {/* ── ABOUT ── */}
      <section id="about" className={styles.about}>
        <div className={styles.aboutVisual}>
          {data?.aboutPhoto ? (
            <Image
              src={urlFor(data.aboutPhoto).width(700).height(900).url()}
              alt={data.aboutPhotoAlt ?? 'Elaine Hankinson'}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              sizes="40vw"
            />
          ) : (
            <span className={styles.aboutVisualText}>E</span>
          )}
        </div>
        <div className={styles.aboutContent}>
          <p className="section-label">{data?.aboutLabel ?? 'About Elaine'}</p>
          <h2>{aboutTitle}</h2>
          {aboutParagraphs.map((p: string, i: number) => (
            <p key={i} className={styles.aboutP}>{p}</p>
          ))}
          {data?.aboutDetails?.length > 0 && (
            <div className={styles.aboutDetails}>
              {data.aboutDetails.map((d: any, i: number) => (
                <div key={i} className={styles.aboutDetail}>
                  <span className={styles.detailLabel}>{d.label}</span>
                  <span className={styles.detailValue}>{d.value}</span>
                </div>
              ))}
            </div>
          )}
          <div style={{ marginTop: '2rem' }}>
            <Link href="/why-choose-me" className="btn-primary">Why Choose Me</Link>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <FAQSection title={data?.faqsTitle} faqs={data?.faqs} />
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        label={data?.ctaSectionLabel}
        title={data?.ctaTitle ?? "Ready to start planning the ceremony of your dreams?"}
        body={data?.ctaBody ?? "Get in touch — let's have that very first, completely no-pressure chat."}
        buttonLabel={data?.ctaButtonLabel}
        buttonHref={data?.ctaButtonHref}
      />
    </>
  )
}
