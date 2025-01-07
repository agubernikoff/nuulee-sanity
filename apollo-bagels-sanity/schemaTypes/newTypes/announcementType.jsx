import {defineField} from 'sanity'

export const announcementType = defineField({
  name: 'announcement',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'description', type: 'string'}),
    defineField({name: 'date', type: 'date'}),
  ],
})
