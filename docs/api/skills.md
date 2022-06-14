# 🤹 Skills

Skills enable you to **specialize models** in the Muse API to perform specific tasks, or to introduce them to
specialized domains.

Our models have been pre-trained on general data, and are good at tackling a wide variety of tasks. Skills are an
efficient way to make the models better at generating and understanding text for a specific application, style, or
format.

## Using skills

The skill to use for an API call can be specified using the `skill` parameter. Available skills are described below;
**some skills may be available only for certain models and endpoints**.

:::info 💸️ Pricing

Skills are currently billed like normal API calls, taking into account processed & generated tokens.
This is not final, and pricing may evolve in the future.

:::

## Available skills

| Skill                    | Description                                          | Availability | Applicability |
| ------------------------ | ---------------------------------------------------- | ------------ | ------------- |
| **`summarization`**      | Generates a **summary** of the provided prompt.      | `orion-fr`   | ✍️ `Create`   |
| **`zusammenfassung`**    | Generates a **summary** of the provided prompt.      | `auriga-de`  | ✍️ `Create`   |
| **`resumen`**            | Generates a **summary** of the provided prompt.      | `auriga-es`  | ✍️ `Create`   |
| **`multitask`**          | Carries out **tasks** provided by the prompt         | `lyra-en`    | ✍️ `Create`   |
| **`sentiment_analysis`** | **Classifies** text as negative, neutral or positive | `lyra-en`    | 🔘 `Select`   |

## Guides to skills

Skills allow you to get the best of Muse for some specific tasks. It is important to understand what each skill is
designed for and how to interact with it. Check out the short guides we have written for each skill!

-   📝 [Summarization](/guides/skills/summarization)
-   🧑‍🏫 [Multitask](/guides/skills/multitask)
-   😀😟 [Sentiment Analysis](/guides/skills/sentiment_analysis)

## Building your own skills

Coming soon.
