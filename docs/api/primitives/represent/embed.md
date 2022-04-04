# 🔢 Embed

Use the **Embed** endpoint to obtain a vector representation of a string (see [embeddings](/home/concepts#embeddings)). 

Available at ```https://api.lighton.ai/muse/v1/embed```.

> 💸️ **Pricing**
>
> Pricing for the **Represent** endpoints is not final, values returned by `cost` and `total_cost` are placeholders.


---

## Example


```bash title="Request"
curl -X 'POST' \
  'https://api.lighton.ai/muse/v1/embed' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: YOUR_API_KEY' \
  -H 'X-Model: orion-fr' \
  -d '{"text": "Il était une fois en Laponie"}'
```


```json title="Response (JSON)"
{
   {
   "request_id":"22360153-dd3c-49c1-8794-0deb84794175",
   "outputs":[
      [
         {
            "execution_metadata":{
               "cost":1
            },
            "txt":"Il était une fois en Laponie",
            "embedding":[
               -1.8401802778244019,
               0.03995080664753914,
               ...
               0.7565141916275024,
               0.3985326290130615
            ]
         }
      ]
   ],
   "total_cost":1
}
```

## Parameters

#### `text` <span style="color:DimGray">string/array[string]</span> <span style="color:orange">⚠️ required</span>

The input(s) that will be represented.

## Response (`outputs`)

An array of outputs shaped like your batch.

#### `txt` <span style="color:DimGray">string</span>

The text that was represented, from the provided `text` parameter.

#### `embedding` <span style="color:DimGray">array[float]</span>

Vector representation of the provided text. The size of the representation depends on the model used, see [models](/api/models) for details.
