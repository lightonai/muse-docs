# 🤹 Skills

Skills enable you to **specialize models** in the Muse API to perform specific tasks, or to introduce them to
specialized domains.

Our models have been pre-trained on general data, and are good at tackling a wide variety of tasks. Skills are an
efficient way to make the models better at generating and understanding text for a specific application, style, or
format.

## Using skills

The skill to use for an API call can be specified using the `skill` parameters. Available skills are described below;
**some skills may be only available for certain models and endpoints**.

>💸️ **Pricing**
>
>Skills are currently billed like normal API calls, taking into account processed & generated tokens.
This is not final, and pricing may evolve in the future.


## Available skills

| Skill               | Description                                 | Availability | Applicability |
|---------------------|---------------------------------------------|--------------|---------------|
| **`summarization`** | Generates a **summary** of the provided prompt. |  `orion-fr`   | ✍️ `Create`|
| **`instruct`**      | Carries out **instructions** provided by the prompt |  `lyra-en`    | ✍️ `Create`|
| **`sentiment_analysis`** | **Classifies** text as negative, neutral or positive  |  `lyra-en`    | 🔘 `Select`|

## Guides to skills

Skills allow you to get the best of Muse for some specific tasks. It is important to understand what each skill is
designed for and how to interact with it. Check out the short guides we have written for each skills!

- [Summarization](/guides/skills/summarization)
- [Instruct](/guides/skills/instruct)
- [Sentiment Analysis](/guides/skills/sentiment_analysis)


**sentiment_analysis** classifies text as negative, neutral or positive. It uses the `Select` endpoint.  As `candidates`
you need to use: `["-", "0", "+"]`, `-` for negative, `0` for neutral and `+` for positive. Some examples below:

_The video you showed me really got me scared_  
**-**

_Mary told Jhon to check his mailbox_  
0 



## Building your own skills

Coming soon.