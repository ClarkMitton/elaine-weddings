import { defineType, defineField } from 'sanity'

export const processStep = defineType({
  name: 'processStep',
  title: 'Process Step',
  type: 'object',
  fields: [
    defineField({ name: 'stepNumber', title: 'Step number', type: 'number', validation: r => r.required() }),
    defineField({ name: 'stepColor', title: 'Number badge colour (hex)', type: 'string', description: 'e.g. #F13A7B' }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4, validation: r => r.required() }),
  ],
  preview: { select: { title: 'title', subtitle: 'stepNumber' } },
})
