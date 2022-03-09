# 📟 Requests

## Request format

The Muse API is accessed through simple **`POST` HTML requests**, from the tool of your choice (`curl`, `requests`).

The example request below queries the ✍️ **[Create](/api/primitives/create)** endpoint of the `lyra-en` model, with
the prompt `"Once upon a time"`, and asks for a completion of length 25 tokens (`"n_tokens": 25`):

```bash title="Example request (curl)"
curl -X 'POST' \
  'https://api.lighton.ai/muse/v1/create' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-API-KEY: YOUR_API_KEY' \
  -H 'X-Model: orion-fr' \
  -d '{"text": "Il était une fois", "params": {"n_tokens": 25}}'
```

Requests should abide to the following format:
* **Endpoint/primitive URL**: `https://api.lighton.ai/muse/v1/{endpoint}` (e.g. `create`, `select`, etc.);
* **Header for JSON payload**: the API works with JSON payloads only, so you should set `Content-Type: application/json` 
and `Accept: application/json` in your requests;
* **Header for authentication**: `X-API-KEY: {YOUR_API_KEY}`, see 
🔑 **[Authentication](/api/specifications/authentication)** for more details;
* **Header for model**: you should specify which model you want to query, see 🤖 **[Models](/api/models)** 
for availability across languages;
* **JSON payload for the request**: the request and its parameters should be specified in JSON format. All 
endpoints usually take the main text(s) first, and then extra parameters in a `params` dictionnary. **See the specific
documentation of each primitive for details**.

As an example, the request above will generate the following response (make sure to check the 💬 **[Responses](/api/specifications/responses)** page
for more information).

```json title="Response to example request (JSON)"
{
   "request_id":"969718f5-d1f4-40cd-a872-a6fb7bf84329",
   "outputs":[
      [
         {
            "input_text":"Il était une fois",
            "completions":[
               {
                  "output_text":" une toute petite fille, qui avait une bonne voix, et chantait des chansons américaines telles que Tabernacle et We all take",
                  "score":-82.67915979400277,
                  "normalized_score":-3.307166391760111,
                  "token_scores":null,
                  "execution_metadata":{
                     "cost":25
                  }
               }
            ],
            "execution_metadata":{
               "cost":25
            }
         }
      ]
   ],
   "total_cost":25
}
```

## Batching requests

If you are planning to process data in bulk, and/or to make many independent API calls, you may benefit from the 
Muse API ability to **batch requests to the same endpoint and model**. Batching enables lower latency, faster
processing, and simplified processing.

The API supports both batching with the same parameters and with different parameters.

### Simple batching: with the same parameters

Batching with the same parameters is as simple as providing a **list of strings to the main `text` parameter**. For example, let us consider the following

```json title="Batched request payload (JSON)"
{
    "text": ["Once upon a time", "Mars is a planet"], 
    "params": {"n_tokens": 25}
}
```

When used with ✍️ **[Create](/api/primitives/create)**, this will return completions of 25 tokens for both 
`"Once upon a time"` and `"Mars is a planet"`. The `outputs` list will contain one entry for each item in `text`.

```json Response to batched request (JSON) 
{
   "request_id":"bed0e17c-22bf-4879-af0f-eb960a11194c",
   "outputs":[
      [
         {
            "input_text":"Once upon a time",
            "completions":[
               {
                  "output_text":", a galaxy far, far away was fighting its own very own Wars of the Roses-style internal struggle. In this battle",
                  "score":-67.38218827627134,
                  "normalized_score":-2.6952875310508535,
                  "token_scores":null,
                  "execution_metadata":{
                     "cost":25,
                     "n_tokens":400
                  }
               }
            ],
            "execution_metadata":{
               "cost":25,
               "n_tokens":400
            }
         },
         {
            "input_text":"Mars is a planet",
            "completions":[
               {
                  "output_text":"in our solar system where you can be born again. Pluto is not an object but a celestial body, a heavenly body.",
                  "score":-63.28801938146353,
                  "normalized_score":-2.531520775258541,
                  "token_scores":null,
                  "execution_metadata":{
                     "cost":25,
                     "n_tokens":400
                  }
               }
            ],
            "execution_metadata":{
               "cost":25,
               "n_tokens":400
            }
         }
      ]
   ],
   "total_cost":50,
   "total_n_tokens":800
}
```

### Advanced batching: with different parameters

The API also supports batching requests with different parameters. To do this, **your input payload should now be
a list of dictionaries**, each dictionary representing a request. It's possible to mix this with simple batching,
as demonstrated below:

```json title="Advanced batch request payload (JSON)"
[
    {
        "text": ["Once upon a time", "Mars is a planet"], 
        "params": {"mode": "greedy", "n_tokens": 10}
    },
    {
        "text": ["Once upon a time", "Mars is a planet"], 
        "params": {"mode": "nucleus", "n_tokens": 25}
    }
]
```

When used with ✍️ **[Create](/api/primitives/create)**, this will return two group of completions of 25 tokens for both
`"Once upon a time"` and `"Mars is a planet"`, one group with `greedy` sampling, and the other with `nucleus` sampling.
The `outputs` list will contain one list for each parameters configuration, each containing one entry per item in `text`.


```json title="Response to advanced batched request (JSON)"
{
   "request_id":"3fd8320c-db7c-41e2-94e7-c114669f3106",
   "outputs":[
      [
         {
            "input_text":"Once upon a time",
            "completions":[
               {
                  "output_text":", there was a young man who was a bit",
                  "score":-15.309903636574745,
                  "normalized_score":-1.5309903636574744,
                  "token_scores":null,
                  "execution_metadata":{
                     "cost":10,
                     "n_tokens":85
                  }
               }
            ],
            "execution_metadata":{
               "cost":10,
               "n_tokens":85
            }
         },
         {
            "input_text":"Mars is a planet",
            "completions":[
               {
                  "output_text":"that has been the subject of many scientific studies.",
                  "score":-14.586014226078987,
                  "normalized_score":-1.4586014226078987,
                  "token_scores":null,
                  "execution_metadata":{
                     "cost":10,
                     "n_tokens":85
                  }
               }
            ],
            "execution_metadata":{
               "cost":10,
               "n_tokens":85
            }
         }
      ],
      [
         {
            "input_text":"Once upon a time",
            "completions":[
               {
                  "output_text":", there was a wonderful movie that I saw as a teenager. I was the lead (young) actor. Every Saturday night",
                  "score":-69.05768236517906,
                  "normalized_score":-2.7623072946071625,
                  "token_scores":null,
                  "execution_metadata":{
                     "cost":25,
                     "n_tokens":400
                  }
               }
            ],
            "execution_metadata":{
               "cost":25,
               "n_tokens":400
            }
         },
         {
            "input_text":"Mars is a planet",
            "completions":[
               {
                  "output_text":"that many people are familiar with thanks to fiction. However, you may not know about its smaller neighboring planet. Saturn’",
                  "score":-56.87096893019043,
                  "normalized_score":-2.274838757207617,
                  "token_scores":null,
                  "execution_metadata":{
                     "cost":25,
                     "n_tokens":400
                  }
               }
            ],
            "execution_metadata":{
               "cost":25,
               "n_tokens":400
            }
         }
      ]
   ],
   "total_cost":70,
   "total_n_tokens":970
}
```
