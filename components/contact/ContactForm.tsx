'use client'

import { useState, FormEvent } from 'react'
import styles from './ContactForm.module.css'

interface ContactFormProps {
  formspreeEndpoint?: string
  successMessage?: string
  email?: string
}

export function ContactForm({ formspreeEndpoint, successMessage, email = 'hello@elaineweddings.com' }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formspreeEndpoint) {
      window.location.href = `mailto:${email}`
      return
    }
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✉️</div>
        <p>{successMessage ?? "Thank you for getting in touch! I'll be back with you very soon."}</p>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Your Name *</label>
          <input id="name" name="name" type="text" required placeholder="Jane Smith" />
        </div>
        <div className={styles.field}>
          <label htmlFor="partner">Partner&apos;s Name</label>
          <input id="partner" name="partner" type="text" placeholder="John Smith" />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="email">Email Address *</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" />
        </div>
        <div className={styles.field}>
          <label htmlFor="wedding-date">Wedding Date (if you have one)</label>
          <input id="wedding-date" name="wedding-date" type="text" placeholder="e.g. June 2026" />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="message">Tell me about your plans *</label>
        <textarea id="message" name="message" rows={6} required placeholder="Tell me a little about your vision, your venue, and what kind of ceremony you're imagining..." />
      </div>

      {status === 'error' && (
        <p className={styles.errorMsg}>Something went wrong — please try again or email <a href={`mailto:${email}`}>{email}</a> directly.</p>
      )}

      <button type="submit" className="btn-primary" disabled={status === 'submitting'} style={{ marginTop: '0.5rem' }}>
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
