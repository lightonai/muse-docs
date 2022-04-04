---
---

# 🔑 Authentication

## API keys

Authentication to Muse is based on **API keys**. You may generate as many API keys as you need, to separate 
applications or usage. You should **not** generate an API key for each of your end-user.

Muse API keys have the following format: `f89d6b69-tOWf6Ppw7LEvqryEo2FGUwf8dlpz7OxVqIQEywWigLNqb50JscU8jw0`, where 
`f89d6b69` is an **8-character user identifier** (shared across all your keys), followed by **55 random characters
unique to each key**.

:::danger 🔐 Keep your API key safe!
**Your API keys should stay strictly private, and should never be exposed to end-users**. You are responsible for 
keeping it safe: should your API key get leaked somehow, you should immediately revoke it to avoid unwanted use.
:::

## Authenticating an API call

All API calls should be authenticated by **providing the API key to the `X-API-KEY` header**:

```bash title="Authentication header"
-H 'X-API-KEY: YOUR_API_KEY'
```

If using the Muse API from the Playground, calls will automatically be authenticated with a special Playground API key.