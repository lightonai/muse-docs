# 🧑‍🏫 Instruct Skill

**Use the `Instruct` [Skill](/api/skills) to make Muse execute instructions using ✍️ [Create](/api/primitives/create).**

The `Instruct` skill is made to execute instructions, provided in natural language. It is designed to be aligned with the user. Instruct can reply to trivia questions, generate poetry, music, or essays. It can reply to comprehension questions or generate the questions for a given prompt.

Note that, whenever using `Instruct`, it is important to select the appropriate [sampling](/home/concepts#sampling) mode according to the type of instructions provided. As a rule of thumb, **greedy** is more suitable for trivia questions, while **nucleus** provides better results for creative tasks.

In this guide, we explore a few examples using `lyra-en` to showcase the flexibility of the `Instruct` skill. We assume that the client has been initialized by running

```python
from lightonmuse import Create

creator_fr = Create("orion-fr")
```

## Trivia Questions

`Instruct` can be directly prompted with questions to answer

```python 
output = creator("What is the capital of Madagascar?", skill="instruct", mode="greedy")
print(output[0][0]['completions'][0]['output_text'])
```

> Antananarivo

Or with direct instructions

```python
output = creator("List three countries in Asia:", skill="instruct", mode="greedy")
print(output[0][0]['completions'][0]['output_text'])
```

>China, Japan and Korea

## Creative Tasks

`Instruct` can also be used to generate a sentence that includes a set of words:

```python
output = creator("Create a sentence with the following words: [tennis, Rome, sunset]:", skill="instruct", seed=123, n_tokens=30)
print(output[0][0]['completions'][0]['output_text'])
```

returns 

> sunset over the obelisk in Rome from a comfortable place of resting next to the tennis court .

It can also create poetry!

```python
output = creator("Create a sad poetry about love:", skill="instruct", seed=123, n_tokens=65)
print(output[0][0]['completions'][0]['output_text'])
```

> Then I can't control myself anymore. I'm caught in a constant train of desire. My heart wishes it will never end. I feel a yearning to go back to the place I was a year ago. And I really want to see her once more. And tell her what I feel deep in my heart. 

Finally, we can also use it to find missing words in a sentence.

```python
output = creator("He thought he had time to take the scenic route to the store, but the _ was closed early.. What is _?", skill="instruct", mode="greedy")
print(output[0][0]['completions'][0]['output_text'])
```

> a store

Time for you to try fun instructions to execute!