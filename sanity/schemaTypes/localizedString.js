// schemas/localizedString.js
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'localizedString',
  title: 'Локалізована строка',
  type: 'object',
  fieldsets: [{name: 'translations', title: 'Переклади', options: {columns: 2}}],
  fields: [
    defineField({
      name: 'en',
      title: 'English',
      type: 'string',
      fieldset: 'translations',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'uk',
      title: 'Українська',
      type: 'string',
      fieldset: 'translations',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
