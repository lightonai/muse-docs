---
---

# 🧪 Analyse

**Use the 🧪 Analyse endpoint to compute the logprobability of each token in a string.**

Available at `https://api.lighton.ai/muse/v1/analyse`.

:::info 💸️ Pricing
You will be billed for the **total number of tokens sent in your request**.
:::

---

## Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="curl" values={[{ label: 'cURL', value: 'curl' }]}>

<TabItem value="curl">

```bash title="Request"
curl -X 'POST' \
  'https://api.lighton.ai/muse/v1/analyse' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: YOUR_API_KEY' \
  -H 'X-Model: orion-fr' \
  -d '{"text": "Il était une fois en Laponie"}'
```

</TabItem>

</Tabs>

```json title="Response (JSON)"
{
    "request_id": "35a6ba91-ce83-40d7-991f-edca70396bdf",
    "outputs": [
        [
            {
                "execution_metadata": {
                    "cost": {
                        "tokens_used": 7,
                        "tokens_input": 7,
                        "tokens_generated": 0,
                        "cost_type": "orion-fr@default",
                        "batch_size": 1
                    },
                    "finish_reason": "length"
                },
                "text": "Il était une fois en Laponie",
                "score": {
                    "logprob": -18.885456800460815,
                    "normalized_logprob": -2.697922400065831,
                    "token_logprobs": [
                        { " était": -3.869140625 },
                        { " une": -5.09375 },
                        { " fois": -0.322021484375 },
                        { " en": -2.8984375 },
                        { " L": -6.60546875 },
                        { "apon": -0.0963134765625 },
                        { "ie": -0.0003249645233154297 }
                    ]
                }
            }
        ]
    ],
    "costs": {
        "orion-fr@default": {
            "total_tokens_used": 7,
            "total_tokens_input": 7,
            "total_tokens_generated": 0,
            "batch_size": 1
        }
    }
}
```

## Parameters

#### `text` <span class="param-types">string/array[string]</span> <span class="param-warning">⚠️ required</span>

The input(s) that will be analysed.

## Response (`outputs`)

An array of outputs shaped like your batch.

#### `text` <span class="param-types">string</span>

The text that was analysed, from the provided `text` parameter.

#### `score` <span class="param-types">float</span>

Total sum of the [log-probabilities](/home/concepts#likelihood) of the text provided, the higher the better.

#### `normalized_score` <span class="param-types">float</span>

Total sum of the [log-probabilities](/home/concepts#likelihood) of the text provided normalized by its length, the higher the better.

#### `token_scores` <span class="param-types">array[map<string, float>]</span>

[Log-probability](/home/concepts#likelihood) associated with each [token](/home/concepts#tokens), the higher the better.

:::info ⚙️ Token representations

Tokens are currently returned as they are represented by the tokenizer, which includes special characters such as `Ġ`
for spaces and possible encoding oddities (such as `Ã©` for `é`).

:::
