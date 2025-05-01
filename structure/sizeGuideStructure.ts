import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default defineStructure <
  ListItemBuilder >
  ((S) =>
    S.listItem()
      .title('Size Guide')
      .schemaType('sizeGuide')
      .child(S.editor().title('Size Guide').schemaType('sizeGuide').documentId('sizeGuide')))
