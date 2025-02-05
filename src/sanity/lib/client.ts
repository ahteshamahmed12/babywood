import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:'yhelm8b6',
  dataset:'production',
  apiVersion:'2023-01-01', 
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
