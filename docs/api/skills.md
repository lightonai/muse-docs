---
---

# 🤹 Skills

Skills enable you to **specialize models** in the Muse API to perform specific tasks, or to introduce them to
specialized domains.

Our models have been pre-trained on general data, and are good at tackling a wide variety of tasks. Skills are an
efficient way to make the models better at generating and understanding text for a specific application, style, or
format.

## Using skills

The skill to use for an API call can be specified using the `skill` parameters. Available skills are described below;
**some skills may be only available for certain models and endpoints**.

:::info 💸️ Pricing Skills are currently billed like normal API calls, taking into account processed & generated tokens.
This is not final, and pricing may evolve in the future.
:::

## Available skills

| Skill               | Description                                 | Availability | Applicability |
|---------------------|---------------------------------------------|--------------|---------------|
| **`summarization`** | Generates a **summary** of the provided prompt. |  `orion-fr`   | ✍️ `Create`|
| **`instruct`**      | Carries out **instructions** provided by the prompt |  `lyra-en`    | ✍️ `Create`|
| **`sentiment_analysis`** | **Classifies** text as negative, neutral or positive  |  `lyra-en`    | 🔘 `Select`|

## Guide to skills

Skills allow you to get the best of muse in some specific scenarios. It is important to understand what each skill is
designed for and how to interact with it.

**summarisation** generates a summary of the provided prompt. It works by providing only the text one wants to
summarize. The generated summaries can have different styles and different lenghts. An example below:

_Après le choc démographique de 2020, marqué par la surmortalité liée au Covid-19, c’est sur une note positive que 
l’Institut national de la statistique et des études économiques (Insee) a choisi de mettre l’accent dans son dernier 
bilan annuel, présenté mardi 18 janvier. En 2021, « la fécondité se maintient » malgré le contexte pandémique, titre 
ainsi l’institut de statistiques. Selon les estimations arrêtées fin novembre, 738 000 bébés sont nés en France, soit 
3 000 de plus qu’en 2020, nombre en hausse de 0,4 %. La population française s’élève à 67,8 millions d’habitants au 1er 
janvier 2022._

L'Insee est revenu sur les chiffres de la population française pour l’année 2021, après le choc démographique de 2020. 
L'année 2021 est marquée par un peu plus de naissances.



**instruct** executes provided instructions. It is designed to be aligned with the user. Instruct can reply to trivia
questions, generate poetry, music or essays. It can reply to comprehension questions or generate the questions for 
a given prompt. Is important to select the appropriate [sampling](/home/concepts#sampling) mode according to the type of 
instructions. **Greedy** is more suitable for trivia questions. **Nucleus** provides better results for creative 
tasks. A few examples below: 

_What is the capital of Madagascar?_  
Antananarivo

_List three countries in Asia:_  
China (formerly known as Republic of China), Japan and Korea

_Create a sentence with the following words: [tennis, Rome, sunset]:_  
Two tennis players watched the sunset from the top of a very high wall in Rome.

_Create a sad poetry about love:_  
if there is no love in our world,Then, what do we do? We make money.

_He thought he had time to take the scenic route to the store, but the # was closed early.. What is #?_  
a store


**sentiment_analysis** classifies text as negative, neutral or positive. It uses the `Select` endpoint.  As `candidates`
you need to use: `["-", "0", "+"]`, `-` for negative, `0` for neutral and `+` for positive. Some examples below:

_The video you showed me really got me scared_  
**-**

_Mary told Jhon to check his mailbox_  
0 



## Building your own skills

Coming soon.