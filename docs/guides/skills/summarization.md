# 📝 Summarization Skill


**Learn how to use the `Summarization` [Skill](/api/skills) in ✍️ [Create](/api/primitives/create) to produce summaries of text.**


The `Summarization` skill is designed to generate a summary of the provided prompt. It only requires, as an input, the text one wants to
summarize. The generated summaries can have different styles and different lengths. 

In this short guide, learn how to use this skill with `orion-fr`.

## Example

We start by initializing the client running the following code
```python
from lightonmuse import Create

creator_fr = Create("orion-fr")
```
Let us summarize the following text
```python
prompt = """Après le choc démographique de 2020, marqué par la surmortalité liée au Covid-19, c’est sur une note positive que l’Institut national de la statistique et des études économiques (Insee) a choisi de mettre l’accent dans son dernier bilan annuel, présenté mardi 18 janvier. En 2021, « la fécondité se maintient » malgré le contexte pandémique, titre ainsi l’institut de statistiques. Selon les estimations arrêtées fin novembre, 738 000 bébés sont nés en France, soit 3 000 de plus qu’en 2020, nombre en hausse de 0,4 %. La population française s’élève à 67,8 millions d’habitants au 1er janvier 2022."""
```
For this, we simply have to input
```python
output = creator_fr(prompt, skill="summarization")
print(output[0][0]['completions'][0]['output_text'])
```
which returns
> L'Insee a publié mardi 18 janvier ses dernières prévisions démographiques.

The `Summarization` skill takes care of formatting the prompt to produce quality summaries. Feel free to use different sampling strategies, and to play with the various ✍️ [Create](/api/primitives/create) parameters, to produce different styles of summaries.