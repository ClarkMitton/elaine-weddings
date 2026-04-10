import { defineType, defineField } from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  // @ts-expect-error — Sanity v3 singleton pattern
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'heroLabel', title: 'Hero label', type: 'string', initialValue: 'Get In Touch' }),
    defineField({ name: 'heroTitle', title: 'Hero heading', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Hero subtitle', type: 'text', rows: 3 }),
    defineField({
      name: 'formspreeEndpoint',
      title: 'Formspree form endpoint URL',
      type: 'string',
      description: 'Get this from formspree.io after creating your form. Format: https://formspree.io/f/xxxxxxxx',
    }),
    defineField({ name: 'formSuccessMessage', title: 'Success message (after form submission)', type: 'text', rows: 2, initialValue: "Thank you for getting in touch! I'll be back with you very soon." }),
    defineField({ name: 'altContactText', title: 'Alternative contact prompt', type: 'string', initialValue: 'Or email me directly at' }),
    defineField({ name: 'seoTitle', title: 'Page title (browser tab)', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'Meta description', type: 'text', rows: 2 }),
  ],
  preview: { prepare: () => ({ title: 'Contact Page' }) },
})
