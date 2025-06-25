import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Послуги',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Service Items',
      type: 'array',
      of: [
        defineType({
          name: 'serviceItem',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'localizedString',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'text',
              title: 'Text',
              type: 'localizedString',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],

  preview: {
    select: {
      title: 'items.0.title.uk',
    },
    prepare({title}) {
      return {
        title: title || 'Services',
      }
    },
  },
})
