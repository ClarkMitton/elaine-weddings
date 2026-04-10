import { defineType, defineField } from 'sanity'

export const ceremoniesPage = defineType({
  name: 'ceremoniesPage',
  title: 'Ceremonies Page',
  type: 'document',
  // @ts-expect-error — Sanity v3 singleton pattern
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'heroLabel', title: 'Hero label', type: 'string', initialValue: 'Ceremony Types' }),
    defineField({ name: 'heroTitle', title: 'Hero heading', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Hero subtitle', type: 'text', rows: 3 }),
    defineField({ name: 'ceremonyTypesLabel', title: 'Types section label', type: 'string', initialValue: 'Types of Ceremony' }),
    defineField({ name: 'ceremonyTypesTitle', title: 'Types section heading', type: 'string' }),
    defineField({
      name: 'ceremonyTypes',
      title: 'Ceremony types (drag to reorder)',
      type: 'array',
      of: [{ type: 'ceremonyType' }],
    }),
    defineField({ name: 'ritualsLabel', title: 'Rituals section label', type: 'string', initialValue: 'Symbolic Rituals' }),
    defineField({ name: 'ritualsTitle', title: 'Rituals section heading', type: 'string' }),
    defineField({ name: 'ritualsSubtitle', title: 'Rituals section subtitle', type: 'text', rows: 2 }),
    defineField({
      name: 'rituals',
      title: 'Rituals (drag to reorder)',
      type: 'array',
      of: [{ type: 'ritual' }],
    }),
    defineField({ name: 'ritualsNote', title: 'Note below rituals grid', type: 'text', rows: 2 }),
    defineField({ name: 'ctaSectionLabel', title: 'CTA label', type: 'string', initialValue: "Let's Chat" }),
    defineField({ name: 'ctaTitle', title: 'CTA heading', type: 'string' }),
    defineField({ name: 'ctaBody', title: 'CTA body', type: 'text', rows: 2 }),
    defineField({ name: 'ctaButtonLabel', title: 'CTA button label', type: 'string', initialValue: 'Get in Touch' }),
    defineField({ name: 'ctaButtonHref', title: 'CTA button link', type: 'string', initialValue: '/contact' }),
    defineField({ name: 'seoTitle', title: 'Page title (browser tab)', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'Meta description', type: 'text', rows: 2 }),
  ],
  preview: { prepare: () => ({ title: 'Ceremonies Page' }) },
})
