import { defineType, defineField } from 'sanity'

export const reasonCard = defineType({
  name: 'reasonCard',
  title: 'Reason Card',
  type: 'object',
  fields: [
    defineField({ name: 'icon', title: 'Icon (emoji)', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'body', title: 'Body text', type: 'text', rows: 4, validation: r => r.required() }),
  ],
  preview: { select: { title: 'title', subtitle: 'icon' } },
})
