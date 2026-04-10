import { defineType, defineField } from 'sanity'

export const packageItem = defineType({
  name: 'packageItem',
  title: 'Package',
  type: 'object',
  fields: [
    defineField({ name: 'packageName', title: 'Package Name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', description: 'One-liner under the package name' }),
    defineField({ name: 'subTagline', title: 'Sub-tagline', type: 'string', description: 'Smaller italic descriptor' }),
    defineField({ name: 'pricePrefix', title: 'Price prefix', type: 'string', initialValue: 'From' }),
    defineField({ name: 'priceAmount', title: 'Price', type: 'string', description: 'e.g. £475', validation: r => r.required() }),
    defineField({
      name: 'accentColor',
      title: 'Header colour',
      type: 'string',
      options: { list: ['pink', 'teal', 'navy'] },
      initialValue: 'pink',
    }),
    defineField({ name: 'introText', title: 'Intro text', type: 'text', rows: 3 }),
    defineField({
      name: 'includedItems',
      title: "What's Included",
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'onTheDayItems',
      title: 'On Your Day',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'footerNote', title: 'Footer note (italic)', type: 'text', rows: 2 }),
    defineField({ name: 'ctaLabel', title: 'Button label', type: 'string', initialValue: 'Check Availability' }),
  ],
  preview: { select: { title: 'packageName', subtitle: 'priceAmount' } },
})
