import type { Metadata } from 'next'
import { sanityClient } from '@/sanity/sanity.client'
import { testimonialsPageQuery } from '@/lib/queries'
import { CTASection } from '@/components/ui/CTASection'
import styles from './page.module.css'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityClient.fetch(testimonialsPageQuery).catch(() => null)
  return {
    title: data?.seoTitle ?? 'Testimonials | Elaine Hankinson Wedding Celebrant',
    description: data?.seoDescription ?? 'Read what couples, families and suppliers say about working with Elaine Hankinson as their wedding celebrant in West Yorkshire.',
  }
}

const DEFAULT_FEATURED = {
  quote: "We already knew Elaine would be amazing, but she completely exceeded every expectation when it came to leading our ceremony. There were so many laughs — she had everyone in stitches — but she also told our story in a way that just felt completely right. So many of our guests commented afterwards on how much they loved it and how engaging and effortless Elaine was. On the day, she was calm, professional and completely in control, which meant we could relax and enjoy every moment. We're so grateful for the care and attention she put into making our ceremony feel so special. We would recommend her without hesitation.",
  authorName: 'Clark & Valentina',
  role: 'Married couple',
  venue: 'Yeadon Town Hall',
  weddingDate: '21st February 2026',
}

const DEFAULT_TESTIMONIALS = [
  { quote: "One of the most memorable ceremonies I've ever been to. Natural, full of personality — the perfect balance of emotion and laughter.", authorName: 'Anabelle & Ben', role: 'Best Man & Bridesmaid', borderColor: '#FF8C3A' },
  { quote: "Lovely to work with, calm and organised. Everything was meticulous. She asked all the right questions and you could tell she had the couple's best interest at heart.", authorName: 'Deborah Duffy', role: 'Yeadon Town Hall Theatre', borderColor: '#1FA9B6' },
  { quote: 'Great to work with, really organised and easy-going. She made such a big difference on the day.', authorName: 'Jamie', role: 'Photographer', borderColor: '#7A3EB1' },
  { quote: "Lovely ceremony, really relaxed and easy to watch. Everyone was smiling. You could just tell how much thought had gone into it.", authorName: 'Julie & Baz', role: "Groom's Parents", borderColor: '#2BA6E2' },
  { quote: "It just felt so right for them. There were a few tears but lots of laughter too, which is exactly what they wanted.", authorName: 'Jane', role: "Bride's Mum", borderColor: '#2F8F3A' },
  { quote: "We both said afterwards how much we enjoyed it. Hilarious and emotional at the same time. Brilliant!", authorName: 'Jan & Al', role: 'Family', borderColor: '#F13A7B' },
]

export default async function TestimonialsPage() {
  const data = await sanityClient.fetch(testimonialsPageQuery).catch(() => null)
  const featured = data?.featuredTestimonial ?? DEFAULT_FEATURED
  const testimonials = data?.testimonials?.length ? data.testimonials : DEFAULT_TESTIMONIALS

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">{data?.heroLabel ?? 'Testimonials'}</p>
          <h1>{data?.heroTitle ?? 'What couples say.'}</h1>
          {data?.heroSubtitle && <p>{data.heroSubtitle}</p>}
        </div>
      </div>

      {featured && (
        <div className={styles.featuredTestimonial}>
          <div className={styles.featuredStars}>★★★★★</div>
          <blockquote className={styles.featuredQuote}>
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <div className={styles.featuredCite}>
            <strong>{featured.authorName}</strong>
            {featured.role && <span> · {featured.role}</span>}
            {featured.venue && <span> · {featured.venue}</span>}
            {featured.weddingDate && <span> · {featured.weddingDate}</span>}
          </div>
        </div>
      )}

      <section className={styles.testimonialsSection}>
        <div className={styles.grid}>
          {testimonials.map((t: any, i: number) => (
            <div
              key={i}
              className={styles.card}
              style={{ '--border-color': t.borderColor || '#F13A7B' } as React.CSSProperties}
            >
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.author}>
                <strong>{t.authorName}</strong>
                {t.role && <span className={styles.role}>{t.role}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        label={data?.ctaSectionLabel}
        title={data?.ctaTitle ?? 'Ready to create yours?'}
        body={data?.ctaBody ?? "Get in touch and we can start building your perfect ceremony together."}
        buttonLabel={data?.ctaButtonLabel}
        buttonHref={data?.ctaButtonHref}
      />
    </>
  )
}
