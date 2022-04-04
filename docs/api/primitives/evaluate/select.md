# 🔘 Select

**Use the Select endpoint to select candidates with respect to a reference according to [text likelihood](/home/concepts#likelihood).**

Available at ```https://api.lighton.ai/muse/v1/select```.

> 💸️ **Pricing**
>
>Pricing for the **Evaluate** endpoints is not final, values returned by `cost` and `total_cost` are placeholders.

## Example



```bash title="Request"
curl -X 'POST' \
  'https://api.lighton.ai/muse/v1/select' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: YOUR_API_KEY' \
  -H 'X-Model: orion-fr' \
  -d '{"reference": "Je suis content", "candidates": ["je suis heureux", "je suis triste"]}'
```



```json title="Response (JSON)"
{
   "request_id":"1412bac9-2caf-4165-9d6c-db09101a3f60",
   "outputs":[
      [
         {
            "reference": "Je suis content"
            "rankings":[
               {
                  "text": "je suis heureux",
                  "score":-7.755064308643341,
                  "normalized_score":-2.585021436214447,
                  "token_scores": [{"Ġje": -4.135122776031494},
                                   {"Ġsuis": -0.8857746720314026},                                  
                                   {"Ġheureux":-2.7341668605804443}]}
                  },
               {
                  "text": "je suis triste",
                  "score":-11.674759447574615,
                  "normalized_score":-3.891586482524872,
                  "token_scores": [{"Ġje": -4.135122776031494},
                                   {"Ġsuis": -0.8857746720314026},                                  
                                   {"Ġtriste":-6.653861999511719}]}
                  }
             ]
                  
             "execution_metadata":{
                     "cost":2
                  }
               }
            ]
      ],
   "total_cost":2
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

> ⚙️ **Token representations**
>
>Tokens are currently returned as they are represented by the tokenizer, which includes special characters such as `Ġ`
for spaces and possible encoding oddities (such as `Ã©` for `é`). 


#### `best` <span class="param-types">string</span>
Best choice selected among the `candidates` in terms of likelihood.
