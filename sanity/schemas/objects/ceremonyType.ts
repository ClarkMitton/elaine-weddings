import { defineType, defineField } from 'sanity'

export const ceremonyType = defineType({
  name: 'ceremonyType',
  title: 'Ceremony Type',
  type: 'object',
  fields: [
    defineField({ name: 'icon', title: 'Icon (emoji)', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3, validation: r => r.required() }),
  ],
  preview: { select: { title: 'title', subtitle: 'icon' } },
})
