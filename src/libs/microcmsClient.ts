import { createClient } from 'microcms-js-sdk'
import { ACCESS_TOKEN, API_DOMAIN } from '@/config'

export const client = createClient({
  serviceDomain: API_DOMAIN,
  apiKey: ACCESS_TOKEN,
})
