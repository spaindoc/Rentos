// schemas/aboutSection.js
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'aboutSection',
  title: 'Про нас',
  type: 'document',
  fields: [
    // Заголовок
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),

    // Изображение с ALT
    defineField({
      name: 'image',
      title: 'Зображення секції',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt текст',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // Вступный блок: текст + список
    defineField({
      name: 'introBlock',
      title: 'Вступ + список',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Текст перед списком',
          type: 'localizedText',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'items',
          title: 'Пункти списку',
          type: 'array',
          of: [{type: 'localizedString', name: 'item', title: 'Пункт'}],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),

    // Текст после списка — часть 2
    defineField({
      name: 'part2',
      title: 'Опис — частина 2',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    }),

    // Дополнительный абзац про объекты
    defineField({
      name: 'objects',
      title: 'Опис об’єктів',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title.uk',
      media: 'image',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title || 'About Section',
        media,
      }
    },
  },
})
