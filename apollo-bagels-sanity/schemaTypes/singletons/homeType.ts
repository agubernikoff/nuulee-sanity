import {HomeIcon} from '@sanity/icons'
import { defineField} from 'sanity'

const TITLE = 'Home'

export const homeType = defineField({
  name: 'home',
  title: TITLE,
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name:'leftSideImages',
      type:'array',
      of:[{ type: 'image' }]
    }),
    defineField({
      name:'rightSideImages',
      type:'array',
      of:[{ type: 'image' }]
    }),
    defineField({
      name:'announcement',
      type:'announcement'
    })
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
