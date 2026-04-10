import type { Metadata } from 'next'
import { sanityClient } from '@/sanity/sanity.client'
import { ceremoniesPageQuery } from '@/lib/queries'
import { CTASection } from '@/components/ui/CTASection'
import styles from './page.module.css'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityClient.fetch(ceremoniesPageQuery).catch(() => null)
  return {
    title: data?.seoTitle ?? 'Ceremonies | Elaine Hankinson Wedding Celebrant',
    description: data?.seoDescription ?? 'From bespoke and themed to same-sex and interfaith — discover the ceremony types and symbolic rituals Elaine Hankinson offers in West Yorkshire.',
  }
}

const DEFAULT_CEREMONY_TYPES = [
  { icon: '💍', title: 'Bespoke & Personalised', description: 'Fully personalised ceremonies that reflect your unique story, values and personalities — crafted completely from scratch, just for you.' },
  { icon: '🎭', title: 'Themed Ceremonies', description: 'Bridgerton elegance, Steampunk quirk, Harry Potter magic, Star Wars drama, Glam Rock energy, or Glastonbury festival vibes — your theme, your rules.' },
  { icon: '🌈', title: 'Same-Sex & Inclusive', description: 'Love is love. Inclusive, celebratory ceremonies for all couples, honouring your relationship exactly as it is.' },
  { icon: '🌿', title: 'Outdoor & Eco-Friendly', description: 'Natural, breathtaking settings — woodland, gardens, or by the sea. Ceremonies that connect you to the beauty around you.' },
  { icon: '☀️', title: 'Non-Religious & Humanist', description: 'A beautiful ceremony that focuses on your relationship and shared values, without any religious content.' },
  { icon: '✨', title: 'Spiritual Ceremonies', description: 'A spiritual touch without formal religious structure — honouring your beliefs in a way that feels deeply personal.' },
  { icon: '🌍', title: 'Interfaith & Intercultural', description: 'Honouring two cultures, two faiths and two families — woven together into one beautiful, harmonious ceremony.' },
  { icon: '👨‍👩‍👧', title: 'Family-Inclusive', description: 'Involving children, parents or loved ones in meaningful ways — making your ceremony feel complete for your whole family.' },
  { icon: '🤍', title: 'Elopements & Intimate Weddings', description: 'Small, focused, deeply meaningful. Just you, your closest people and a ceremony that captures everything.' },
  { icon: '💛', title: 'Commitment Ceremonies', description: 'A celebration of your love and commitment — without the legal formalities. Perfect for couples who want to mark their bond in their own way.' },
  { icon: '🙏', title: 'Alternative Faith-Based', description: 'Honouring your faith in a setting and style that feels right for you — outside traditional religious structures.' },
]

const DEFAULT_RITUALS = [
  { name: 'Handfasting', description: 'The original "tying the knot" — your hands are bound together with ribbon or cord as you make your promises.', dotColor: '#F13A7B' },
  { name: 'Sand Ceremony', description: 'Two individual sands are poured into one vessel, symbolising the blending of two lives into one.', dotColor: '#FF8C3A' },
  { name: 'Unity Candle', description: 'Two flames become one — a beautiful visual symbol of your two lives coming together.', dotColor: '#1FA9B6' },
  { name: 'Ring Warming', description: 'Your rings are passed through your guests, filled with their love and wishes before you exchange them.', dotColor: '#7A3EB1' },
  { name: 'Tree Planting', description: 'Plant a tree together — a living symbol of your love that grows and deepens over the years.', dotColor: '#2BA6E2' },
  { name: 'Quaich Drinking Ceremony', description: 'A traditional Scottish loving cup, shared between you as a symbol of your partnership and trust.', dotColor: '#2F8F3A' },
  { name: 'Jumping the Broom', description: 'A traditional ritual symbolising the sweeping away of the old and the welcoming of your new life together.', dotColor: '#FF8C3A' },
  { name: 'Something Uniquely Yours', description: 'Have an idea for something completely different? Let\'s talk. If it means something to you, it means something to your ceremony.', dotColor: '#F13A7B' },
]

export default async function CeremoniesPage() {
  const data = await sanityClient.fetch(ceremoniesPageQuery).catch(() => null)
  const ceremonyTypes = data?.ceremonyTypes?.length ? data.ceremonyTypes : DEFAULT_CEREMONY_TYPES
  const rituals = data?.rituals?.length ? data.rituals : DEFAULT_RITUALS

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">{data?.heroLabel ?? 'Ceremony Types'}</p>
          <h1>{data?.heroTitle ?? 'A ceremony as unique as the two of you.'}</h1>
          {data?.heroSubtitle && <p>{data.heroSubtitle}</p>}
        </div>
      </div>

      <section className={styles.typesSection}>
        <div className={styles.typesHeader}>
          <p className="section-label">{data?.ceremonyTypesLabel ?? 'Types of Ceremony'}</p>
          <h2>{data?.ceremonyTypesTitle ?? 'Whatever your vision, I can make it happen.'}</h2>
        </div>
        <div className={styles.typesGrid}>
          {ceremonyTypes.map((ct: any, i: number) => (
            <div key={i} className={styles.typeCard}>
              {ct.icon && <div className={styles.typeIcon}>{ct.icon}</div>}
              <h3>{ct.title}</h3>
              <p>{ct.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="ornament">✦ &nbsp; ✦ &nbsp; ✦</div>

      <section className={styles.ritualsSection}>
        <div className={styles.ritualsHeader}>
          <p className="section-label">{data?.ritualsLabel ?? 'Symbolic Rituals'}</p>
          <h2>{data?.ritualsTitle ?? 'Add something truly special.'}</h2>
          {data?.ritualsSubtitle && <p className={styles.ritualsSub}>{data.ritualsSubtitle}</p>}
        </div>
        <div className={styles.ritualsGrid}>
          {rituals.map((r: any, i: number) => (
            <div key={i} className={styles.ritualItem}>
              <span className={styles.ritualDot} style={{ background: r.dotColor || '#F13A7B' }} />
              <div>
                <h4>{r.name}</h4>
                {r.description && <p>{r.description}</p>}
              </div>
            </div>
          ))}
        </div>
        {data?.ritualsNote && <p className={styles.ritualsNote}>{data.ritualsNote}</p>}
      </section>

      <CTASection
        label={data?.ctaSectionLabel}
        title={data?.ctaTitle ?? 'Ready to design your ceremony?'}
        body={data?.ctaBody ?? "Get in touch and we'll start building something beautiful together."}
        buttonLabel={data?.ctaButtonLabel}
        buttonHref={data?.ctaButtonHref}
      />
    </>
  )
}
