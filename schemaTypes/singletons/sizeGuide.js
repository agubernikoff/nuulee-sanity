import {Custom} from '../../components/Custom'

export default {
  name: 'sizeGuide',
  title: 'Size Guide',
  type: 'object',
  fields: [
    {
      type: 'object',
      name: 'xs',
      fields: [
        {name: 'chest', title: 'Chest (in)', type: 'string'},
        {name: 'waist', title: 'Waist (in)', type: 'string'},
        {name: 'hip', title: 'Hip (in)', type: 'string'},
      ],
    },
    {
      type: 'object',
      name: 's',
      fields: [
        {name: 'chest', title: 'Chest (in)', type: 'string'},
        {name: 'waist', title: 'Waist (in)', type: 'string'},
        {name: 'hip', title: 'Hip (in)', type: 'string'},
      ],
    },
    {
      type: 'object',
      name: 'm',
      fields: [
        {name: 'chest', title: 'Chest (in)', type: 'string'},
        {name: 'waist', title: 'Waist (in)', type: 'string'},
        {name: 'hip', title: 'Hip (in)', type: 'string'},
      ],
    },
    {
      type: 'object',
      name: 'l',
      fields: [
        {name: 'chest', title: 'Chest (in)', type: 'string'},
        {name: 'waist', title: 'Waist (in)', type: 'string'},
        {name: 'hip', title: 'Hip (in)', type: 'string'},
      ],
    },
    {
      type: 'object',
      name: 'xl',
      fields: [
        {name: 'chest', title: 'Chest (in)', type: 'string'},
        {name: 'waist', title: 'Waist (in)', type: 'string'},
        {name: 'hip', title: 'Hip (in)', type: 'string'},
      ],
    },
  ],
  components: {
    input: Custom,
  },
}
