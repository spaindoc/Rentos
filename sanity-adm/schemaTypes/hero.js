// schemas/heroSection.js
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Секція',
  type: 'document',
  fieldsets: [{name: 'blocks', title: 'Статиcтичні блоки'}],
  fields: [
    defineField({
      name: 'statBlocks',
      title: 'Statistic Blocks',
      type: 'array',
      fieldset: 'blocks',
      description: 'Додайте та керуйте статистичними блоками.',
      of: [
        defineType({
          type: 'object',
          name: 'statBlockItem',
          title: 'Statistic Block Item',
          fields: [
            defineField({
              name: 'value',
              title: 'Числове значення',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Короткий опис',
              type: 'localizedString',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Повний опис',
              type: 'localizedText',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      blocks: 'statBlocks',
    },
    prepare({blocks}) {
      const count = blocks?.length || 0
      const first = blocks?.[0]
      const label = first?.label?.uk || 'Без назви'
      const value = first?.value || '?'

      return {
        title: `Hero секція – ${count} блок(и)`,
        subtitle: `${value} — ${label}`,
      }
    },
  },
})
