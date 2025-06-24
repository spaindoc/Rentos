import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'companyPhilosophy',
  title: 'Company Philosophy',
  type: 'document',
  fields: [
    defineField({
      name: 'block1',
      title: 'Block 1',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'localizedString',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'localizedText',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'block2',
      title: 'Block 2',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'localizedString',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'localizedText',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'block3',
      title: 'Block 3',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'localizedString',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'items',
          title: 'List Items',
          type: 'array',
          of: [{type: 'localizedString'}],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'block1.title.uk',
    },
    prepare({title}) {
      return {
        title: title || 'Company Philosophy',
      }
    },
  },
})
