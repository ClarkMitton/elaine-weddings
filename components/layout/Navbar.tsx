'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

type NavItem = { label: string; href: string }
type Settings = { logoFirstName?: string; logoLastName?: string; navItems?: NavItem[] } | null

const DEFAULT_NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Why Choose Me', href: '/why-choose-me' },
  { label: 'Ceremonies', href: '/ceremonies' },
  { label: 'Packages & Prices', href: '/packages' },
  { label: 'Simple Steps', href: '/how-it-works' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar({ settings }: { settings: Settings }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const firstName = settings?.logoFirstName ?? 'Elaine'
  const lastName = settings?.logoLastName ?? 'Hankinson'
  const navItems = settings?.navItems?.length ? settings.navItems : DEFAULT_NAV

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href.startsWith('/#')) return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        {firstName} <span>{lastName}</span>
      </Link>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={isActive(item.href) ? styles.active : ''}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
