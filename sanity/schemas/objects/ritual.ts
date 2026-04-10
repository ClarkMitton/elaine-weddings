import { defineType, defineField } from 'sanity'

export const ritual = defineType({
  name: 'ritual',
  title: 'Symbolic Ritual',
  type: 'object',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'dotColor',
      title: 'Dot Colour (hex)',
      type: 'string',
      description: 'e.g. #F13A7B — controls the coloured dot next to the name',
      placeholder: '#F13A7B',
    }),
  ],
  preview: { select: { title: 'name', subtitle: 'dotColor' } },
})
