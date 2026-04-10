import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './sanity.client'

const builder = imageUrlBuilder(sanityClient)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source).auto('format').fit('max')
}
