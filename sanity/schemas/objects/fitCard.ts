import { defineType, defineField } from 'sanity'

export const fitCard = defineType({
  name: 'fitCard',
  title: '"Perfect Fit" Card',
  type: 'object',
  fields: [
    defineField({ name: 'text', title: 'Card text', type: 'string', validation: r => r.required() }),
  ],
  preview: { select: { title: 'text' } },
})
