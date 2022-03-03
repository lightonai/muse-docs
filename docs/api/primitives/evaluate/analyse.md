---
---

# 🧪 Analyse

**Use the 🧪 Analyse endpoint to compute the logprobability of each token in a string.**

Available at ```https://api.lighton.ai/muse/v1/analyse```.

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
   "request_id":"65117cdf-9bb0-4f8f-9595-eb071704f455",
   "outputs":[
      [
         {
            "execution_metadata":{
               "cost":1
            },
            "text":"Il était une fois en Laponie",
            "score":-18.69577697564091,
            "normalized_score":-2.6708252822344156,
            "token_scores":[
               {
                  "ĠÃ©tait":-4.357117652893066
               },
               {
                  "Ġune":-2.9926750659942627
               },
               {
                  "Ġfois":-0.08664964139461517
               },
               {
                  "Ġen":-4.026288986206055
               },
               {
                  "ĠLa":-7.227386951446533
               },
               {
                  "pon":-0.0054404293186962605
               },
               {
                  "ie":-0.00021824838768225163
               }
            ]
         }
      ]
   ],
   "total_cost":1
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
