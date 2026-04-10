import type { Metadata } from 'next'
import { sanityClient } from '@/sanity/sanity.client'
import { contactPageQuery, siteSettingsQuery } from '@/lib/queries'
import { ContactForm } from '@/components/contact/ContactForm'
import styles from './page.module.css'

export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityClient.fetch(contactPageQuery).catch(() => null)
  return {
    title: data?.seoTitle ?? 'Contact | Elaine Hankinson Wedding Celebrant',
    description: data?.seoDescription ?? "Get in touch with Elaine Hankinson to start planning your perfect wedding ceremony in West Yorkshire.",
  }
}

export default async function ContactPage() {
  const [data, settings] = await Promise.all([
    sanityClient.fetch(contactPageQuery).catch(() => null),
    sanityClient.fetch(siteSettingsQuery).catch(() => null),
  ])

  const email = settings?.email ?? 'hello@elaineweddings.com'

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="section-label">{data?.heroLabel ?? 'Get In Touch'}</p>
          <h1>{data?.heroTitle ?? "Let's start planning your perfect ceremony."}</h1>
          {data?.heroSubtitle && <p>{data.heroSubtitle}</p>}
          {!data?.heroSubtitle && (
            <p>I&apos;d love to hear about your plans. Drop me a message and I&apos;ll be in touch soon.</p>
          )}
        </div>
      </div>

      <section className={styles.contactSection}>
        <div className={styles.contactGrid}>
          <div className={styles.formWrap}>
            <ContactForm
              formspreeEndpoint={data?.formspreeEndpoint}
              successMessage={data?.formSuccessMessage}
              email={email}
            />
          </div>

          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <p className="section-label">Direct Contact</p>
              <p className={styles.infoEmail}>
                <a href={`mailto:${email}`}>{email}</a>
              </p>
              <p className={styles.infoNote}>
                {data?.altContactText ?? 'Or email me directly — I aim to reply within 24 hours.'}
              </p>
            </div>
            <div className={styles.infoCard}>
              <p className="section-label">Based In</p>
              <p className={styles.infoLocation}>West Yorkshire</p>
              <p className={styles.infoNote}>Happy to travel throughout Yorkshire and beyond.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
