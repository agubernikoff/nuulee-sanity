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
