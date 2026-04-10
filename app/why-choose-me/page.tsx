import type { Metadata } from 'next'
import { sanityClient } from '@/sanity/sanity.client'
import { whyChooseMePageQuery } from '@/lib/queries'
import { CTASection } from '@/components/ui/CTASection'
import styles from './page.module.css'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityClient.fetch(whyChooseMePageQuery).catch(() => null)
  return {
    title: data?.seoTitle ?? 'Why Choose Me | Elaine Hankinson Wedding Celebrant',
    description: data?.seoDescription ?? 'Why choose Elaine Hankinson as your wedding celebrant? Personal, detail-focused and completely committed to making your ceremony unforgettable.',
  }
}

export default async function WhyChooseMePage() {
  const data = await sanityClient.fetch(whyChooseMePageQuery).catch(() => null)

  const heroTitle = data?.heroTitle ?? 'Here to make your ceremony extraordinary.'
  const heroIntro = data?.heroIntro ?? 'Planning a wedding is a lot. By the time your big day arrives, you deserve to actually enjoy it. Every single moment of it. That\'s where I come in.'
  const reasons = data?.reasons ?? [
    { icon: '💬', title: 'I make it easy, from the very first conversation', body: 'I\'ll help you decide on your ceremony format, suggest readings, help write your vows and find the perfect ways to weave your family and friends into your story. You\'ll never feel like you\'re figuring it out alone.' },
    { icon: '✨', title: 'I sweat the small stuff, so you don\'t have to', body: 'Attention to detail is at the heart of everything I do. I think ahead, plan for the unexpected and coordinate every element of your ceremony so that everything runs smoothly and feels effortless.' },
    { icon: '🌸', title: 'I only work with a small number of couples each year', body: 'That\'s a deliberate choice. It means I can give every couple my full focus, creativity and commitment. With me, you won\'t be one of many — you\'ll be the one that matters most.' },
    { icon: '🤝', title: "I'll have your back on the day", body: 'Standing up in front of everyone feels less daunting when you have someone guiding every moment. You\'ll feel calm, confident and completely present — because my job is to take the pressure off and put the joy back.' },
    { icon: '🎉', title: 'I make the whole process enjoyable', body: 'Planning your ceremony shouldn\'t feel like a task. It should feel exciting, meaningful and even fun. I keep things simple, clear and relaxed, so the whole experience feels as good as the day itself.' },
    { icon: '💛', title: 'I go above and beyond. Every time.', body: 'Whether it\'s a last-minute question, a wobble about your vow wording or advice on something completely outside my usual remit — I\'ll do whatever it takes to make sure your experience is as stress-free and enjoyable as possible.' },
  ]
  const resultStripLabel = data?.resultStripLabel ?? 'The result'
  const resultStripQuote = data?.resultStripQuote ?? 'A ceremony that feels relaxed, personal and genuinely unforgettable — and a wedding day you\'ll look back on with nothing but happiness.'

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">{data?.heroLabel ?? 'Why Elaine?'}</p>
          <h1>{heroTitle}</h1>
          <p>{heroIntro}</p>
        </div>
      </div>

      <section className={styles.reasons}>
        <div className={styles.reasonsGrid}>
          {reasons.map((r: any, i: number) => (
            <div key={i} className={styles.reasonCard}>
              {r.icon && <div className={styles.reasonIcon}>{r.icon}</div>}
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.resultStrip}>
        <p className="section-label">{resultStripLabel}</p>
        <p className={styles.resultQuote}>{resultStripQuote}</p>
      </div>

      <CTASection
        label={data?.ctaSectionLabel}
        title={data?.ctaTitle ?? 'Ready to start planning?'}
        body={data?.ctaBody ?? "Get in touch and let's have that very first, no-pressure chat."}
        buttonLabel={data?.ctaButtonLabel}
        buttonHref={data?.ctaButtonHref}
      />
    </>
  )
}
