import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'corporateResponsibility',
  title: 'Корпоративна відповідальність',
  type: 'document',
  fields: [
    // Заголовок секции
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),

    // Основное изображение
    defineField({
      name: 'image',
      title: 'Зображення',
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
    }),

    defineField({
      name: 'subSections',
      title: 'Текстові блоки',
      type: 'object',
      fields: [
        defineField({
          name: 'sub1',
          title: 'Підсекція 1 (лівий блок)',
          type: 'object',
          fields: [
            defineField({
              name: 'item1',
              title: 'Пункт 1',
              type: 'localizedText',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'item2',
              title: 'Пункт 2',
              type: 'localizedText',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'sub2',
          title: 'Підсекція 2 (правий блок)',
          type: 'object',
          fields: [
            defineField({
              name: 'item1',
              title: 'Пункт 1',
              type: 'localizedText',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'item2',
              title: 'Пункт 2',
              type: 'localizedText',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),

    // Статистические цифры
    defineField({
      name: 'stats',
      title: 'Статистика',
      type: 'object',
      fields: [
        // Первая цифра
        defineField({
          name: 'item1',
          title: 'Статистика 1',
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Значення',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'suffix',
              title: 'Текст після значення',
              type: 'localizedString',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Підпис',
              type: 'localizedString',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        // Вторая цифра
        defineField({
          name: 'item2',
          title: 'Статистика 2',
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Значення',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'suffix',
              title: 'Текст після значення',
              type: 'localizedString',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Підпис',
              type: 'localizedString',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        // Третья цифра
        defineField({
          name: 'item3',
          title: 'Статистика 3',
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Значення',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'suffix',
              title: 'Текст після значення',
              type: 'localizedString',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Підпис',
              type: 'localizedString',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title.uk',
    },
    prepare({title}) {
      return {
        title: title || 'Корпоративна відповідальність',
      }
    },
  },
})
