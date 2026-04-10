import { defineType, defineField } from 'sanity'

export const whyChooseMePage = defineType({
  name: 'whyChooseMePage',
  title: 'Why Choose Me Page',
  type: 'document',
  // @ts-expect-error — Sanity v3 singleton pattern
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'heroLabel', title: 'Hero label', type: 'string', initialValue: 'Why Elaine?' }),
    defineField({ name: 'heroTitle', title: 'Hero heading', type: 'string' }),
    defineField({ name: 'heroIntro', title: 'Hero intro paragraph', type: 'text', rows: 4 }),
    defineField({
      name: 'reasons',
      title: 'Reasons (drag to reorder)',
      type: 'array',
      of: [{ type: 'reasonCard' }],
    }),
    defineField({ name: 'resultStripLabel', title: 'Result strip label', type: 'string', initialValue: 'The result' }),
    defineField({ name: 'resultStripQuote', title: 'Result strip quote', type: 'text', rows: 3 }),
    defineField({ name: 'ctaSectionLabel', title: 'CTA label', type: 'string', initialValue: "Let's Talk" }),
    defineField({ name: 'ctaTitle', title: 'CTA heading', type: 'string' }),
    defineField({ name: 'ctaBody', title: 'CTA body', type: 'text', rows: 2 }),
    defineField({ name: 'ctaButtonLabel', title: 'CTA button label', type: 'string', initialValue: 'Get in Touch' }),
    defineField({ name: 'ctaButtonHref', title: 'CTA button link', type: 'string', initialValue: '/contact' }),
    defineField({ name: 'seoTitle', title: 'Page title (browser tab)', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'Meta description', type: 'text', rows: 2 }),
  ],
  preview: { prepare: () => ({ title: 'Why Choose Me Page' }) },
})
