import { defineType, defineField } from 'sanity'

export const stepsPage = defineType({
  name: 'stepsPage',
  title: 'Simple Steps Page',
  type: 'document',
  // @ts-expect-error — Sanity v3 singleton pattern
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'heroLabel', title: 'Hero label', type: 'string', initialValue: 'The Process' }),
    defineField({ name: 'heroTitle', title: 'Hero heading', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Hero subtitle', type: 'text', rows: 3 }),
    defineField({ name: 'stepsIntroText', title: 'Intro text before steps', type: 'text', rows: 3 }),
    defineField({
      name: 'steps',
      title: 'Steps (drag to reorder)',
      type: 'array',
      of: [{ type: 'processStep' }],
    }),
    defineField({ name: 'closingQuote', title: 'Closing promise strip text', type: 'text', rows: 3 }),
    defineField({ name: 'ctaSectionLabel', title: 'CTA label', type: 'string', initialValue: "Let's Talk" }),
    defineField({ name: 'ctaTitle', title: 'CTA heading', type: 'string' }),
    defineField({ name: 'ctaBody', title: 'CTA body', type: 'text', rows: 2 }),
    defineField({ name: 'ctaButtonLabel', title: 'CTA button label', type: 'string', initialValue: 'Get in Touch' }),
    defineField({ name: 'ctaButtonHref', title: 'CTA button link', type: 'string', initialValue: '/contact' }),
    defineField({ name: 'seoTitle', title: 'Page title (browser tab)', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'Meta description', type: 'text', rows: 2 }),
  ],
  preview: { prepare: () => ({ title: 'Simple Steps Page' }) },
})
