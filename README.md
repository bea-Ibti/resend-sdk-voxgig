# resend-sdk-voxgig

Unofficial TypeScript SDK for the [Resend](https://resend.com) email API, generated from Resend's OpenAPI spec with the [Voxgig SDK generator](https://voxgig.com/sdk). Not affiliated with or endorsed by Resend.

I built it as a trial task to see how the generator works on a real API. 

## Status

Generated code, lightly tested. The generated offline test suite passes (515 of 516 tests, 1 skipped). I also ran these calls against the live API:

- list domains
- list API keys
- send an email
- an invalid API key, and an invalid `to` address (both return errors from Resend)

Everything else is untested. Review and test the parts you need before depending on them.

## Quick start

You need Node.js and a Resend API key.

```bash
git clone [REPO URL]
cd resend-sdk-voxgig/ts
npm install
npm run build
npm test
```

Set your key as an environment variable. Don't put it in a file that gets committed.

```bash
export RESEND_API_KEY="re_..."
```

## Usage

```ts
import { ResendSDK } from './src/ResendSDK'

const client = new ResendSDK({ apikey: process.env.RESEND_API_KEY })

// List domains
const domains = await client.Domain().list()

// Send an email
const sent = await client.Email().create({
  from: 'onboarding@resend.dev',
  to: ['youremail@example.com'],
  subject: 'SDK test',
  html: '<p>Sent through the generated SDK</p>',
})
```

Without a verified domain, Resend only delivers mail from `onboarding@resend.dev` to the address your Resend account was created with. See [`ts/example.ts`](ts/example.ts) and [`ts/send.ts`](ts/send.ts) for working scripts.

Errors are thrown as `ResendError`. The status code is in `error.status`, and Resend's own message is in `error.result.body.message`.

The generated reference for every entity and operation is in [`ts/REFERENCE.md`](ts/REFERENCE.md), and the generator's own readme for the TypeScript package is [`ts/README.md`](ts/README.md).

## Regenerating

The API model lives in `.sdk/`. Don't edit the generated code in `ts/` by hand. Change the model or the templates, then regenerate:

```bash
cd .sdk
npm run generate
```

## Licence

MIT. See [LICENSE](LICENSE).
