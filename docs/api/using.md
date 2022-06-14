---
---

# 🤩 Using the Muse API

export const Alpha = ({children}) => (
<span style={{
    backgroundColor: '#68B1D0',
    fontFamily: 'monospace',
    borderRadius: '7px',
    color: '#fff',
    padding: '0.3rem',
}}>{children}</span>);

We offer three ways to query the Muse API:

-   Directly through **[HTTP requests](/api/specifications/requests)**, the most flexible format to implement
    in your application;
-   With one of our official **[binding libraries](#bindings)**, in the language of your choice;
-   Using our **[online playground](https://muse.lighton.ai)**, an ideal environment for developing new prompts.

We offer a number of **primitives** (endpoints) through which you can interact with the API. Broadly, these
are split in four categories:

-   ✍️ **[Create](/api/primitives/create)** enables you to **generate and manipulate text according to a prompt**.
    The possibilities with ✍️ **[Create](/api/primitives/create)** are endless: from simply assisting with copywriting,
    to taking in complex instructions and performing arbitrary tasks (chatbots, keywords extraction, etc.)
    This is the main gateway to Muse, and **we recommend you get started with this endpoint**.
-   🔬️ **[Evaluate](/api/primitives/evaluate/analyse)** endpoints help you incorporate **natural language understanding**
    in your product. Leverage 🧪 **[Analyse](/api/primitives/evaluate/analyse)** to help your machine learning pipeline
    unlock unique insights, or directly use
    🔘 **[Select](/api/primitives/evaluate/select)** for text classification.
-   📊 **[Represent](/api/primitives/represent/embed)** <Alpha>alpha</Alpha> builds **computer-understandable
    representations of sentences, paragraphs, and documents**. Enhance your machine learning pipeline and semantic search
    applications with rich contextual embeddings from 🔢 **[Embed](/api/primitives/represent/embed)**, or directly use
    ⚖️ **[Compare](/api/primitives/represent/compare)** to find semantically-similar texts.

**Don't know where to start? Have a look at the examples on our [Playground](https://muse.lighton.ai) or the
[demo notebook](https://github.com/lightonai/lightonmuse/blob/master/examples/demo_notebook.ipynb)!**

## Bindings

We offer a number of **official bindings libraries** to use the Muse API directly with your favorite language.

| Language                              | Availability         | Link                                               |
| ------------------------------------- | -------------------- | -------------------------------------------------- |
| **🐍 [Python](/api/bindings/python)** | <Alpha>alpha</Alpha> | [GitHub](https://github.com/lightonai/lightonmuse) |
| **🌐 Javascript**                     | _coming soon_        |                                                    |
