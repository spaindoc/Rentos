// schemas/project.js
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Проекти',
  type: 'document',
  fieldsets: [
    {name: 'main', title: 'Основне'},
    {name: 'media', title: 'Медіа'},
    {name: 'links', title: 'Посилання'},
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Назва',
      type: 'localizedString',
      fieldset: 'main',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Опис',
      type: 'localizedText',
      fieldset: 'main',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Зображення',
      type: 'image',
      options: {hotspot: true},
      fieldset: 'media',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Посилання на сайт',
      type: 'url',
      fieldset: 'links',
      validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
    }),
  ],
  preview: {
    select: {
      title: 'name.uk',
      media: 'image',
    },
  },
})
