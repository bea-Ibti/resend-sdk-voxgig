import { ResendSDK } from './src/ResendSDK'

const client = new ResendSDK({ apikey: process.env.RESEND_API_KEY })

async function main() {
  const sent = await client.Email().create({
    from: 'onboarding@resend.dev',
    to: ['youremail@example.com'],
    subject: 'SDK test',
    html: '<p>Sent through the generated SDK</p>',
  })
  console.log('SENT:', JSON.stringify(sent, null, 2))
}
main().catch(e => { console.error('ERROR:', e); process.exit(1) })
