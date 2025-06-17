// schemas/newsItem.js
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'newsItem',
  title: 'Блок з новинами',
  type: 'document',
  fieldsets: [
    {name: 'content', title: 'Контент'},
    {name: 'media', title: 'Медіа'},
    {name: 'links', title: 'Посилання'},
  ],
  fields: [
    defineField({
      name: 'caption',
      title: 'Назва новини',
      type: 'localizedString',
      fieldset: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Дата публікації',
      type: 'date',
      fieldset: 'content',
      description: 'Дата виходу новини',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Зображення для новини',
      type: 'image',
      options: {hotspot: true},
      fieldset: 'media',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Посилання на новину',
      type: 'url',
      fieldset: 'links',
      validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
    }),
  ],
  preview: {
    select: {
      title: 'caption.uk',
      media: 'image',
      date: 'date',
    },
    prepare(selection) {
      const {title, media, date} = selection
      return {
        title: `${title} — ${date}`,
        media,
      }
    },
  },
})
