import Link from 'next/link'

interface CTASectionProps {
  label?: string
  title?: string
  body?: string
  buttonLabel?: string
  buttonHref?: string
}

export function CTASection({
  label = "Let's Talk",
  title = 'Ready to create your perfect ceremony?',
  body = 'Drop me a message and we can start planning something truly memorable.',
  buttonLabel = 'Get in Touch',
  buttonHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="cta-section">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      <p>{body}</p>
      <Link href={buttonHref} className="btn-primary">{buttonLabel}</Link>
    </section>
  )
}
