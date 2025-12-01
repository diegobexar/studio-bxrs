import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Brief description shown on the grid card',
    }),
    defineField({
      name: 'showOnHomepage',
      title: 'Show on Homepage',
      type: 'boolean',
      description: 'Display this project on the homepage grid',
      initialValue: false,
    }),
    defineField({
      name: 'pinToTopRow',
      title: 'Pin to Top Row',
      type: 'boolean',
      description: 'Pin this project to the top row (max 3 projects)',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order in which project appears (lower numbers first)',
      initialValue: 0,
    }),
    defineField({
      name: 'cardBackgroundColor',
      title: 'Card Background Color',
      type: 'string',
      description: 'Background color for grid card (hex code, e.g., #F5F5DC)',
      initialValue: '#FFFFFF',
    }),
    defineField({
      name: 'cardTextColor',
      title: 'Card Text Color',
      type: 'string',
      description: 'Text color for grid card (hex code, e.g., #000000)',
      initialValue: '#000000',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Project completion or publication date',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      description: 'Custom content blocks for the project detail page',
      of: [
        {type: 'imageBlock'},
        {type: 'textBlock'},
        {type: 'linkBlock'},
        {type: 'headingBlock'},
        {type: 'colorBlock'},
        {type: 'spacerBlock'},
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Custom title for search engines (leave empty to use project title)',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Meta description for search engines',
    }),
    defineField({
      name: 'seoImage',
      title: 'SEO Image',
      type: 'image',
      description: 'Image for social media sharing (Open Graph)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      pinned: 'pinToTopRow',
      homepage: 'showOnHomepage',
    },
    prepare({title, pinned, homepage}) {
      const badges = []
      if (pinned) badges.push('📌')
      if (homepage) badges.push('🏠')
      return {
        title: `${badges.join(' ')} ${title}`,
        subtitle: badges.length > 0 ? 'Featured' : '',
      }
    },
  },
})
