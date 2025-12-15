import {defineArrayMember, defineField} from 'sanity'

export const heroType = defineField({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'mediaItems',
      title: 'Media Items',
      type: 'array',
      description: 'Image/video to display in the hero',
      validation: Rule => Rule.max(1).error('Only 1 media item allowed'),
      of: [
        {
          type: 'object',
          title: 'Media Item',
          fields: [
            {
              name: 'mediaType',
              title: 'Media Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Image', value: 'image' },
                  { title: 'Video', value: 'video' }
                ]
              }
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true
              },
              hidden: ({ parent }) => parent?.mediaType !== 'image'
            },
            {
              name: 'video',
              title: 'Video',
              type: 'file',
              options: {
                accept: 'video/*'
              },
              hidden: ({ parent }) => parent?.mediaType !== 'video'
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for accessibility'
            }
          ]
        }
      ]
    },
    {
      name: 'mobileMediaItems',
      title: 'Mobile Media Items',
      type: 'array',
      description: 'Image/video to display in the hero on MOBILE',
      validation: Rule => Rule.max(1).error('Only 1 media items allowed'),
      of: [
        {
          type: 'object',
          title: 'Media Item',
          fields: [
            {
              name: 'mediaType',
              title: 'Media Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Image', value: 'image' },
                  { title: 'Video', value: 'video' }
                ]
              }
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true
              },
              hidden: ({ parent }) => parent?.mediaType !== 'image'
            },
            {
              name: 'video',
              title: 'Video',
              type: 'file',
              options: {
                accept: 'video/*'
              },
              hidden: ({ parent }) => parent?.mediaType !== 'video'
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for accessibility'
            }
          ]
        }
      ]
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'The main headline text for the hero'
    },
  ],
})
