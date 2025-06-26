// schemas/partnersSection.js
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'partnersSection',
  title: 'Партнери',
  type: 'document',
  fields: [
    // Массив логотипов партнёров
    defineField({
      name: 'images',
      title: 'Логотип ',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt-текст',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],

  preview: {
    select: {
      title: 'title.uk',
      images: 'images',
    },
    prepare({title, images}) {
      const count = images?.length || 0

      return {
        title: title || 'Партнери',
        subtitle: `Зображень: ${count}`,
      }
    },
  },
})
