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
      description: 'Images and videos to display in the hero (maximum of 2)',
      validation: Rule => Rule.max(2).error('Only 2 media items allowed'),
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
            },
            {
              name: 'isPrimary',
              title: 'Primary Media',
              type: 'boolean',
              description: 'Set as primary media (will be displayed on mobile devices). Only one item can be primary.',
              initialValue: false
            }
          ]
        }
      ]
    },{
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'The main headline text for the hero'
    },
  ],
  // Custom validation to ensure only one item is marked as primary
  validation: Rule => 
    Rule.custom((doc) => {
      if (!doc?.mediaItems || doc?.mediaItems.length === 0) return true;
      
      const primaryItems = doc?.mediaItems.filter(item => item.isPrimary);
      if (primaryItems.length > 1) {
        return 'Only one media item can be set as primary';
      }
      
      return true;
    })
})
