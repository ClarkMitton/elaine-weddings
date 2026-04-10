import { defineType, defineField } from 'sanity'

export const packagesPage = defineType({
  name: 'packagesPage',
  title: 'Packages & Prices Page',
  type: 'document',
  // @ts-expect-error — Sanity v3 singleton pattern
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'heroLabel', title: 'Hero label', type: 'string', initialValue: 'Packages & Prices' }),
    defineField({ name: 'heroTitle', title: 'Hero heading', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Hero subtitle', type: 'text', rows: 3 }),
    defineField({
      name: 'packages',
      title: 'Packages (drag to reorder)',
      type: 'array',
      of: [{ type: 'packageItem' }],
    }),
    defineField({ name: 'extrasLabel', title: 'Extras section label', type: 'string', initialValue: 'Add Something Special' }),
    defineField({ name: 'extrasTitle', title: 'Extras section heading', type: 'string' }),
    defineField({ name: 'extrasSubtitle', title: 'Extras section subtitle', type: 'text', rows: 2 }),
    defineField({
      name: 'featuredExtras',
      title: 'Featured extras (large tags)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'secondaryExtras',
      title: 'Secondary extras (small tags)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'hostQuote', title: 'Quote strip text', type: 'text', rows: 2 }),
    defineField({ name: 'ctaSectionLabel', title: 'CTA label', type: 'string', initialValue: 'Ready to Book?' }),
    defineField({ name: 'ctaTitle', title: 'CTA heading', type: 'string' }),
    defineField({ name: 'ctaBody', title: 'CTA body', type: 'text', rows: 2 }),
    defineField({ name: 'ctaButtonLabel', title: 'CTA button label', type: 'string', initialValue: 'Get in Touch' }),
    defineField({ name: 'ctaButtonHref', title: 'CTA button link', type: 'string', initialValue: '/contact' }),
    defineField({ name: 'seoTitle', title: 'Page title (browser tab)', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'Meta description', type: 'text', rows: 2 }),
  ],
  preview: { prepare: () => ({ title: 'Packages & Prices Page' }) },
})
