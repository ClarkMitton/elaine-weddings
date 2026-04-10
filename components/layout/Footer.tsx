import Link from 'next/link'

type Settings = { footerCopy?: string; email?: string } | null

export function Footer({ settings }: { settings: Settings }) {
  const copy = settings?.footerCopy ?? '© 2026 Elaine Hankinson · Wedding Celebrant · West Yorkshire'
  const email = settings?.email ?? 'hello@elaineweddings.com'

  return (
    <footer>
      <p style={{ marginBottom: '0.8rem' }}>
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p style={{ marginBottom: '0.8rem', fontSize: '0.8rem' }}>
        <Link href="/why-choose-me" style={{ marginRight: '1.5rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Why Choose Me</Link>
        <Link href="/ceremonies" style={{ marginRight: '1.5rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Ceremonies</Link>
        <Link href="/packages" style={{ marginRight: '1.5rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Packages</Link>
        <Link href="/testimonials" style={{ marginRight: '1.5rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Testimonials</Link>
        <Link href="/contact" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Contact</Link>
      </p>
      <p style={{ fontSize: '0.78rem', opacity: 0.5 }}>{copy}</p>
    </footer>
  )
}
