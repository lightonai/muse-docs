---
---

# 🔘 Select

**Use the Select endpoint to select candidates with respect to a reference according to [text likelihood](/home/concepts#likelihood).**

Available at `https://api.lighton.ai/muse/v1/select`.

:::info 💸️ Pricing
You will be billed for the **total number of tokens sent in your request**.
:::

## Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="curl" values={[{ label: 'cURL', value: 'curl', }]}>

<TabItem value="curl">

```bash title="Request"
curl -X 'POST' \
  'https://api.lighton.ai/muse/v1/select' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: YOUR_API_KEY' \
  -H 'X-Model: orion-fr' \
  -d '{"reference": "Je suis content", "candidates": ["je suis heureux", "je suis triste"]}'
```

</TabItem>

</Tabs>

```json title="Response (JSON)"
{
    "request_id": "1f19c4d1-47f2-4c96-a8d2-314e6ed3a341",
    "outputs": [
        [
            {
                "reference": "Je suis content",
                "rankings": [
                    {
                        "text": "je suis heureux",
                        "score": {
                            "logprob": -16.361328125,
                            "normalized_logprob": -5.453776041666667,
                            "token_logprobs": [
                                { " je": -10.3984375 },
                                { " suis": -1.638671875 },
                                { " heureux": -4.32421875 }
                            ]
                        }
                    },
                    {
                        "text": "je suis triste",
                        "score": {
                            "logprob": -20.466796875,
                            "normalized_logprob": -6.822265625,
                            "token_logprobs": [
                                { " je": -10.3984375 },
                                { " suis": -1.638671875 },
                                { " triste": -8.4296875 }
                            ]
                        }
                    }
                ],
                "best": "je suis heureux",
                "execution_metadata": {
                    "cost": {
                        "tokens_used": 10,
                        "tokens_input": 10,
                        "tokens_generated": 0,
                        "cost_type": "orion-fr@default",
                        "batch_size": 2
                    },
                    "finish_reason": "length"
                }
            }
        ]
    ],
    "costs": {
        "orion-fr@default": {
            "total_tokens_used": 10,
            "total_tokens_input": 10,
            "total_tokens_generated": 0,
            "batch_size": 2
        }
    }
}
```

## Parameters

#### `reference` <span class="param-types">string</span> <span class="param-warning">⚠️ required</span>

The reference input to compute likelihood against.

#### `candidates` <span class="param-types">array[string]</span> <span class="param-warning">⚠️ required</span>

The input(s) that are compared to the reference and ranked based on likelihood.

#### `conjunction` <span class="param-types">string</span> <span class="param-optional">""</span>

Expression used to link reference and candidates to create the prompt used to compute the likelihood. The prompt will have the structure `reference`+`conjunction`+`candidate`. Finding a good `conjunction` can greatly increase the performance of `select`.

#### `concat_best` <span class="param-types">boolean</span> <span class="param-optional">true</span>

If `true` the response will contain a `"best"` field with the selected choice.

## Response (`outputs`)

An array of outputs shaped like your batch.

#### `reference` <span class="param-types">string</span>

The `reference` sentence used to compute similarities.

### Rankings (`rankings`)

One entry for each member of `candidates`.

#### `text` <span class="param-types">string</span>

A single entry from the `candidates` sent in the request.

#### `score` <span class="param-types">float</span>

Log-likelihood score computed on the concatenation of `reference`, `conjunction` and `candidate`, the higher the better.

#### `normalized_score` <span class="param-types">float</span>

Score normalized by the length in tokens, the higher the better.

#### `token_scores` <span class="param-types">array[string:float]</span>

List of [tokens](/home/concepts#tokens) of the `candidate` with associated likelihood scores, the higher the better.

:::info ⚙️ Token representations

Tokens are currently returned as they are represented by the tokenizer, which includes special characters such as `Ġ`
for spaces and possible encoding oddities (such as `Ã©` for `é`).

:::

#### `best` <span class="param-types">string</span>

Best choice selected among the `candidates` in terms of likelihood.
