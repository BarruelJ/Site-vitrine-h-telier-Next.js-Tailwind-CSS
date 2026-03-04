import { type SchemaTypeDefinition } from 'sanity'
import { roomType } from './room'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [roomType],
}
