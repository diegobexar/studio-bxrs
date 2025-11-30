import {defineField, defineType} from 'sanity'

export const imageBlock = defineType({
  name: 'imageBlock',
  title: 'Image Block',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link URL',
      type: 'url',
      description: 'Optional link when image is clicked',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Hex color code (e.g., #F5F5DC)',
    }),
  ],
  preview: {
    select: {
      media: 'image',
      title: 'caption',
    },
    prepare({media, title}) {
      return {
        title: title || 'Image Block',
        media,
      }
    },
  },
})
