import { defineQuery } from 'next-sanity'

export const ROOMS_QUERY = defineQuery(`
  *[_type == "room"]{
    _id,
    name,
    price,
    description,
    image
  }
`)

export const RESTAU_QUERY = defineQuery(`
  *[_type == "restaurant"]{
    _id,
    name,
    price,
    description,
  }
`)