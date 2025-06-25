// schemas/localizedText.js
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'localizedText',
  title: 'Локалізований текст',
  type: 'object',
  fieldsets: [{name: 'translations', title: 'Переклади', options: {columns: 2}}],
  fields: [
    defineField({
      name: 'en',
      title: 'English',
      type: 'text',
      fieldset: 'translations',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'uk',
      title: 'Українська',
      type: 'text',
      fieldset: 'translations',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
