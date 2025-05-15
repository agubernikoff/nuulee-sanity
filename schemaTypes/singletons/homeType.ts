import {HomeIcon} from '@sanity/icons'
import {defineArrayMember, defineField} from 'sanity'
import { GROUPS } from '../../constants'

const TITLE = 'Home'

export const homeType = defineField({
  name: 'home',
  title: TITLE,
  type: 'document',
  icon: HomeIcon,
  groups: GROUPS,
  fields: [
    defineField({
      name: 'hero',
      type: 'hero',
      group: 'editorial',
    }),
    defineField({
      name: 'comingSoon',
      title: 'Coming Soon',
      type: 'boolean',
      group: 'editorial',
      description: 'Enable coming soon mode for the homepage',
      initialValue: false,
    }),
    defineField({
      name: 'comingSoonVideo',
      title: 'Coming Soon Video',
      type: 'file',
      group: 'editorial',
      description: 'Video to display when coming soon mode is enabled',
      options: {
        accept: 'video/*'
      },
      hidden: ({parent}) => !parent?.comingSoon,
      validation: Rule => Rule.custom((value, context) => {
        // If coming soon is true, video is required
        if (context.parent?.comingSoon && !value) {
          return 'Video is required when Coming Soon is enabled';
        }
        return true;
      })
    }),
    defineField({
      name: 'shopMensImage',
      title: "Shop Men's Image",
      type: 'object',
      group: 'editorial',
      fields: [
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Alternative text for accessibility',
        }),
      ],
    }),
    defineField({
      name: 'shopWomensImage',
      title: "Shop Women's Image",
      type: 'object',
      group: 'editorial',
      fields: [
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Alternative text for accessibility',
        }),
      ],
    }),    
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      group: 'editorial',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'section',
          title: 'Section',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'images',
              title: 'Images',
              type: 'array',
              validation: Rule => Rule.max(2).error('Maximum of 2 images allowed').custom((images) => {
                if (!images || images.length === 0) return true;
                
                const primaryImages = images.filter(img => img.isPrimary);
                if (primaryImages.length > 1) {
                  return 'Only one image can be set as primary';
                }
                
                return true;
              }),
              of: [
                defineArrayMember({
                  name:'sectionImage',
                  type: 'object',
                  
                  fields: [
                    defineField({
                      name:'image',
                      type:'image',
                      options: {
                        hotspot: true
                      },
                      validation: Rule => Rule.required(),
                    }),
                    defineField({
                      name: 'alt',
                      title: 'Alt Text',
                      type: 'string',
                      description: 'Alternative text for accessibility'
                    }),defineField({
                      name: 'isPrimary',
                      title: 'Primary Image',
                      type: 'boolean',
                      description: 'Set as primary image (will be displayed on mobile devices). Only one image can be primary.',
                      initialValue: false
                    })
                  ]
                })
              ]
            })
          ],
          preview: {
            select: {
              title: 'title',
              media: 'images.0.image'
            }
          }
        })
      ]
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        media: HomeIcon,
        subtitle: 'Index',
        title: TITLE,
      }
    },
  },
})