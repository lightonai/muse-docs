---
---

# 🧪 Analyse

**Use the 🧪 Analyse endpoint to compute the logprobability of each token in a string.**

Available at `https://api.lighton.ai/muse/v1/analyse`.

:::info 💸️ Pricing
You will be billed for the **total number of tokens sent in your request**.
:::

---

## Example request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="curl" values={[{ label: 'cURL', value: 'curl' }, { label: 'Python', value: 'python' }]}>

<TabItem value="curl">

```bash
curl -X 'POST' \
  'https://api.lighton.ai/muse/v1/analyse' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: YOUR_API_KEY' \
  -H 'X-Model: orion-fr' \
  -d '{"text": "Il était une fois en Laponie"}'
```

</TabItem>

<TabItem value="python">

```python
from lightonmuse import Analyse

analyser = Analyse("orion-fr")
analyse = analyser("Il était une fois en Laponie")

print(analyse)
```

</TabItem>

</Tabs>

<details>
<summary>Response (JSON)</summary>

```json
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

</details>

## Parameters

-   `text` <span class="param-types">string/array[string]</span> <span class="param-warning">⚠️ required</span>

    The input(s) that will be analysed.

## Response (`outputs`)

An array of outputs shaped like your batch.

-   `text` <span class="param-types">string</span>

    The text that was analysed, from the provided `text` parameter.

-   `score` <span class="param-types">float</span>

    <!-- TODO -->

:::info ⚙️ Token representations
Tokens are currently returned as they are represented by the tokenizer, which includes special characters such as `Ġ`
for spaces and possible encoding oddities (such as `Ã©` for `é`).
:::
