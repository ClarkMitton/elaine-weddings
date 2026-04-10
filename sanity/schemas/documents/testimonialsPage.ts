import { defineType, defineField } from 'sanity'

export const testimonialsPage = defineType({
  name: 'testimonialsPage',
  title: 'Testimonials Page',
  type: 'document',
  // @ts-expect-error — Sanity v3 singleton pattern
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'heroLabel', title: 'Hero label', type: 'string', initialValue: 'Testimonials' }),
    defineField({ name: 'heroTitle', title: 'Hero heading', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Hero subtitle', type: 'text', rows: 2 }),
    defineField({
      name: 'featuredTestimonial',
      title: 'Featured testimonial (large quote at top)',
      type: 'testimonialObj',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonial grid (drag to reorder, add/remove freely)',
      type: 'array',
      of: [{ type: 'testimonialObj' }],
    }),
    defineField({ name: 'ctaSectionLabel', title: 'CTA label', type: 'string', initialValue: 'Create Yours' }),
    defineField({ name: 'ctaTitle', title: 'CTA heading', type: 'string' }),
    defineField({ name: 'ctaBody', title: 'CTA body', type: 'text', rows: 2 }),
    defineField({ name: 'ctaButtonLabel', title: 'CTA button label', type: 'string', initialValue: 'Get in Touch' }),
    defineField({ name: 'ctaButtonHref', title: 'CTA button link', type: 'string', initialValue: '/contact' }),
    defineField({ name: 'seoTitle', title: 'Page title (browser tab)', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'Meta description', type: 'text', rows: 2 }),
  ],
  preview: { prepare: () => ({ title: 'Testimonials Page' }) },
})
