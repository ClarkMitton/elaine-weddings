'use client'

import { useState } from 'react'
import styles from './FAQSection.module.css'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  faqs?: FAQItem[]
}

const DEFAULT_FAQS: FAQItem[] = [
  { question: 'Are you legally authorised to marry us?', answer: "As a celebrant, I create and lead your ceremony, but the legal element of your marriage happens separately with a registrar. Many couples choose to have their legal ceremony at a registry office and then hold their celebrant ceremony — the one that really reflects them — at a venue of their choice. I can walk you through exactly how this works." },
  { question: 'How far in advance should we book?', answer: "Ideally 12–18 months ahead for summer and popular weekend dates, though I\'d always recommend getting in touch as soon as you have a date in mind. Sometimes I have last-minute availability, so it\'s always worth asking." },
  { question: 'Do you travel outside West Yorkshire?', answer: "Absolutely. While I\'m based in West Yorkshire, I\'m happy to travel further afield. Travel costs would be discussed and agreed in advance, so there are no surprises." },
  { question: 'Can we write our own vows?', answer: "Yes — and I\'d love to help you do it. Writing your own vows can feel daunting, but it\'s one of the most personal things you can include in your ceremony. I\'ll guide you through the process and make sure your vows feel completely authentic to you." },
  { question: 'What happens if you\'re ill on our wedding day?', answer: "In the unlikely event of illness or emergency, I have a network of professional celebrants I trust and would call on immediately to ensure your ceremony goes ahead. Your day would not be left without a celebrant." },
  { question: 'How long does the ceremony typically last?', answer: "A typical ceremony lasts around 20–40 minutes, depending on how many readings, rituals and personal touches you include. We\'ll work out the timing together during our run-through meeting so it feels just right." },
]

export function FAQSection({ title = 'Frequently Asked Questions', faqs = DEFAULT_FAQS }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={styles.faqs}>
      <h2>{title}</h2>
      <div className={styles.faqList}>
        {faqs.map((faq, i) => (
          <div key={i} className={`${styles.faqItem} ${openIndex === i ? styles.open : ''}`}>
            <button
              className={styles.faqQuestion}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              {faq.question}
              <span className={styles.faqIcon}>{openIndex === i ? '−' : '+'}</span>
            </button>
            <div className={styles.faqAnswer} aria-hidden={openIndex !== i}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
