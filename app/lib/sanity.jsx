import { createClient } from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '4k6chwr7',
  dataset: 'production',
  apiVersion: '2024-08-09',
  useCdn: true,
});

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source) {
  return imgBuilder.image(source);
}
