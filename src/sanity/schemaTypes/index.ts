import { type SchemaTypeDefinition } from 'sanity'
import { roomType } from './room'
import {carteType} from './restaurant'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [roomType, carteType],
}
