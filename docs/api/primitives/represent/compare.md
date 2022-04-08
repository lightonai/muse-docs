---
---

# ⚖️ Compare

Use the **Compare** endpoint to compare a reference input with some candidates based on cosine similarity scores computed on the model embeddings.

Available at ```https://api.lighton.ai/muse/v1/compare```.

:::info 💸️ Pricing
You will be billed for the **total number of tokens sent in your request**.
:::

---

## Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="curl"
values={[
{ label: 'cURL', value: 'curl', },
]
}>

<TabItem value="curl">

```bash title="Request"
curl -X 'POST' \
  'https://api.lighton.ai/muse/v1/compare' \
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
   "request_id":"36fdde13-2bf7-4952-81c0-df206c72126e",
   "outputs":[
      [
         {
            "reference":"Je suis content",
            "similarities":[
               {
                  "candidate":"je suis heureux",
                  "similarity":0.9340229034423828
                  },
               {
                  "candidate":"je suis triste",
                  "similarity":0.8432836532592773
               }],
            "best":"je suis heureux",
            "execution_metadata":{
               "cost":{
                  "tokens_used":9,
                  "tokens_input":9,
                  "tokens_generated":0,
                  "cost_type":"orion-fr@default",
                  "batch_size":3},
                  "finish_reason":"length"
               }
            }
         ]
      ],
   "costs":{
      "orion-fr@default":{
         "total_tokens_used":9,
         "total_tokens_input":9,
         "total_tokens_generated":0,
         "batch_size":3
         }
      }
   }
```

## Parameters

#### `reference` <span class="param-types">string</span> <span class="param-warning">⚠️ required</span>

The reference input to compute similarity against.

#### `candidates` <span class="param-types">array[string]</span> <span class="param-warning">⚠️ required</span>

The input(s) that are compared to the reference and ranked based on similarity.

## Response (`outputs`)

An array of outputs shaped like your batch.

#### `reference` <span class="param-types">string</span>

The `reference` sentence used to compute similarities.

### Similarities (`similarities`)

One entry for each member of `candidates`. 

#### `candidate` <span class="param-types">string</span>

A single entry from the `candidates` sent in the request.

#### `similarity` <span class="param-types">float</span>

Similarity score between `candidate` and `reference`. It ranges between 0 and 1, the higher the more similar.
