# ⚖️ Compare

Use the **Compare** endpoint to compare a reference input with some candidates based on cosine similarity scores computed on the model embeddings.

Available at ```https://api.lighton.ai/muse/v1/compare```.

> 💸️ **Pricing**
>
>Pricing for the **Represent** endpoints is not final, values returned by `cost` and `total_cost` are placeholders.

---

## Example

```bash title="Request"
curl -X 'POST' \
  'https://api.lighton.ai/muse/v1/compare' \
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
            "similarities":[
               {
                  "candidate": "je suis heureux",
                  "similarity":0.9703072905540466
                  },
               {
                  "candidate": "je suis triste",
                  "similarity":0.9521504640579224
                  }
             ]
                  
             "execution_metadata":{
                     "cost":3
                  }
               }
            ]
      ],
   "total_cost":3
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
