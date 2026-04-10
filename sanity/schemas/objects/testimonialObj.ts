import { defineType, defineField } from 'sanity'

export const testimonialObj = defineType({
  name: 'testimonialObj',
  title: 'Testimonial',
  type: 'object',
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 5, validation: r => r.required() }),
    defineField({ name: 'authorName', title: 'Author name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'role', title: 'Role / relationship', type: 'string', description: 'e.g. Best Man & Bridesmaid' }),
    defineField({ name: 'venue', title: 'Venue', type: 'string' }),
    defineField({ name: 'weddingDate', title: 'Wedding date', type: 'string', description: 'e.g. 21st February 2026' }),
    defineField({ name: 'borderColor', title: 'Card border colour (hex)', type: 'string', description: 'e.g. #F13A7B' }),
  ],
  preview: { select: { title: 'authorName', subtitle: 'role' } },
})
