import type { Metadata } from 'next'
import { sanityClient } from '@/sanity/sanity.client'
import { stepsPageQuery } from '@/lib/queries'
import { CTASection } from '@/components/ui/CTASection'
import styles from './page.module.css'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityClient.fetch(stepsPageQuery).catch(() => null)
  return {
    title: data?.seoTitle ?? 'Simple Steps | Elaine Hankinson Wedding Celebrant',
    description: data?.seoDescription ?? 'Six simple steps from your first chat to your perfect ceremony. Find out how Elaine works with couples in West Yorkshire.',
  }
}

const DEFAULT_STEPS = [
  { stepNumber: 1, stepColor: '#F13A7B', title: 'Informal Chat', description: 'A relaxed, no-pressure conversation so you can get a feel for how I work, ask me anything you like and make sure we\'re the right fit for each other.' },
  { stepNumber: 2, stepColor: '#FF8C3A', title: 'Your Questionnaire', description: 'I\'ll send you a questionnaire to complete in your own time. This becomes the foundation of everything — your story, your personalities and all the little details that make you uniquely you.' },
  { stepNumber: 3, stepColor: '#1FA9B6', title: 'Deep Dive Meeting', description: 'We\'ll sit down together to go through your answers, explore your love story and talk through any optional symbolic rituals you might want to include. This is where the magic starts.' },
  { stepNumber: 4, stepColor: '#7A3EB1', title: 'Your Love Story', description: 'I\'ll craft your bespoke ceremony completely from scratch, weaving in your personal love story. You\'ll receive a draft to read, tweak and make completely your own.' },
  { stepNumber: 5, stepColor: '#2BA6E2', title: 'Final Run-Through Meeting', description: "We'll go through the full ceremony together, make any final edits and sign off on the version you're completely happy with — so there are no surprises on the day." },
  { stepNumber: 6, stepColor: '#2F8F3A', title: 'Your Wedding Day', description: "I'll arrive calm, prepared and completely focused on you — ready to deliver a ceremony your guests will never forget. Your only job? To enjoy every single moment of it." },
]

export default async function HowItWorksPage() {
  const data = await sanityClient.fetch(stepsPageQuery).catch(() => null)
  const steps = data?.steps?.length ? data.steps : DEFAULT_STEPS
  const closingQuote = data?.closingQuote ?? "From that very first chat to the moment you say I do, I'm with you every step of the way. Calm, prepared and completely focused on you, ready to deliver a ceremony your guests will never forget."

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">{data?.heroLabel ?? 'The Process'}</p>
          <h1>{data?.heroTitle ?? 'Simple steps to your perfect ceremony.'}</h1>
          {data?.heroSubtitle && <p>{data.heroSubtitle}</p>}
        </div>
      </div>

      <section className={styles.steps}>
        {data?.stepsIntroText && (
          <p className={styles.stepsIntro}>{data.stepsIntroText}</p>
        )}
        <ol className={styles.stepsList}>
          {steps.map((step: any, i: number) => (
            <li key={i} className={styles.step} style={{ '--step-color': step.stepColor || '#F13A7B' } as React.CSSProperties}>
              <div className={styles.stepNumber} style={{ background: step.stepColor || '#F13A7B' }}>
                {step.stepNumber || i + 1}
              </div>
              <div className={styles.stepBody}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className={styles.promiseStrip}>
        <p className={styles.promiseText}>{closingQuote}</p>
      </div>

      <CTASection
        label={data?.ctaSectionLabel}
        title={data?.ctaTitle ?? "Let's have that first chat"}
        body={data?.ctaBody ?? "Completely relaxed, no pressure. Just a conversation to see if we're the right fit."}
        buttonLabel={data?.ctaButtonLabel}
        buttonHref={data?.ctaButtonHref}
      />
    </>
  )
}
