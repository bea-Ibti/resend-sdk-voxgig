import { ResendSDK } from './src/ResendSDK'

const client = new ResendSDK({ apikey: process.env.RESEND_API_KEY })

async function main() {
  const domains = await client.Domain().list()
  console.log('DOMAINS:', JSON.stringify(domains, null, 2))

  const keys = await client.ApiKey().list()
  console.log('API KEYS:', JSON.stringify(keys, null, 2))
}
main().catch(e => { console.error('ERROR:', e); process.exit(1) })
