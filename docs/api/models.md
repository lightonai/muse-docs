---
---

# 🤖 Models

**The Muse API offers access to models in different languages, with different capabilities to best fit your needs.**
Increasingly powerful models are slower and more expensive, but they can tackle more tasks more effectively.

You can select which model to use by setting the **`X-Model`** header in your API call. Models code are formatted as
`model_class-language` (`orion-fr` is the Orion model for French for instance).

Models can be further specialized by using 🤹 **[Skills](/api/skills)**.

## Model classes & capabilities

We offer three classes of models, with increasing capabilities. All models support all API endpoints, however
skills are models specific.

| Class        | Description                                                                                                                | Trained on... | Best for...                                                 |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------------- |
| **`auriga`** | **Our smallest and simplest models.** Available across many languages, suitable for simple straightforward tasks.          | filtered web  | Simple classification with `Select`, basic text generation. |
| ** `orion`** | **A great tradeoff between power and cost.** Can be specialized with **skills** to perform specific tasks at `lyra` level. | curated data  | Most text generation & classification use cases.            |
| ** `lyra`**  | **Our most powerful and capable models.**                                                                                  | curated data  | Complex tasks, specialized text generation.                 |

:::tip 💡 Choosing the right class

We recommend **starting your experiments with the most powerful model available**, and then optimize for the smallest
size that still fullfills your needs. If a skill matching your task is available, it can be used to allow smaller models
to perform on-par with larger ones.

:::

## Languages & model availability

✅ are available in the API, 📆 are coming soon, and ❌ are not available.

|        | French \[`fr`\] | English \[`en`\] | Spanish \[`es`\] | Italian \[`it`\] | German \[`de`\] |
| ------ | --------------- | ---------------- | ---------------- | ---------------- | --------------- |
| auriga | ❌              | ❌               | ✅               | ✅               | ✅              |
| orion  | ✅              | ✅               | ❌               | ❌               | ❌              |
| lyra   | ✅              | ✅               | ❌               | ❌               | ❌              |

Don't see a language or model you need? Shoot us an e-mail at muse@lighton.ai.

## Models versioning

🟢 are recommended models, 🔵 are new models, 🟡 are models in end-of-life, 🔴 are retired models,
and 📆 are coming soon.

| **Model**     | **Training data** | **Data cut-off** | **Status** |
| ------------- | ----------------- | ---------------- | ---------- |
| `orion-fr`    | `fr-web-v1`       | December 2018    | 🔴         |
| `orion-fr-v2` | `fr-curated-v1`   | October 2021     | 🟢         |
| `lyra-fr`     | `fr-curated-v1`   | October 2021     | 🟢         |
| `orion-en`    | `en-curated-v1`   | December 2020    | 🟢         |
| `lyra-en`     | `en-curated-v1`   | December 2020    | 🟢         |
| `auriga-de`   | `de-web-v1`       | October 2021     | 🟢         |
| `auriga-es`   | `es-web-v1`       | October 2021     | 🟢         |
| `auriga-it`   | `it-web-v1`       | October 2021     | 🟢         |

**We recommend you make the switch from 🟡 end-of-life models to 🔵 new models as soon as possible.**
