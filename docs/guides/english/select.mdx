---
---

# 🔘 Use Select for Customer Support

**Use the 🔘 [Select](/api/primitives/evaluate/select) primitive to identify the needs of your customers and help answer their requests.**

AI-powered chatbots have made it possible to get consistent and reliable customer support. Muse lets you identify your customer's issues easily, to minimize human involvement, making your support team much more efficient.

## Identifying our Customers' Problems

Let us imagine that we run a subscription-based platform. One of our customers just wrote us the following message

> Hey! I let my subscription lapse last month and can't connect anymore to the platform... Can you help?

We're going to see how to use `lyra-en` to help this customer.

A naive approach might be to try and identify keywords to redirect the customer: in this case, with the word "subscription" being in the message, we might assume that the user wants to manage or cancel his subscription. However, that is not quite pertinent here.

Now, instead, we are going to use the Select endpoint in Muse to identify the needs of our customers. We assume here that the reader is familiar with the parameters of Select, as well as with the Python Bindings: for more information, check out the 🔘 [Select](/api/primitives/evaluate/select), and [Python Bindings](/api/bindings/python) documentation pages. We start by initializing the client with the following code.

```python
from lightonmuse import Select

selector = Select("lyra-en")
```

## Classifying Customers' Requests

It is reasonable to assume that customers' requests can usually be divided into various classes. For simplicity, we assume here that customers usually either want to:

-   Cancel their subscription
-   Give feedback
-   Get technical support

In the first two cases, the customer does not actually need human help: they could be redirected to documentation explaining the cancellation procedure, or to a feedback form. Our support team could save valuable resources by only assisting people who need actual technical support.

Let us use our customer's message as a prompt, and create our three different classes of customer's requests.

```python
prompt = "Hey! I let my subscription lapse last month and can't connect anymore to the platform... Can you help?"
classes = ["This user wants to cancel his subscription.", "This user is giving feedback.", "This user is asking for technical support."]
```

Now, using the selector let us identify what candidate class is more relevant to the prompt, using text likelihood.

```python
out = selector(prompt, classes)
print(out[0][0]['best'])
```

> This user is asking for technical support.

`lyra-en` correctly identified that our user was asking for technical support! Pretty good! Note that, when using the Select endpoint, there is no need to worry about sampling since the model uses log probabilities.

## Analysing our Results

We can look into the scores of the different candidates and their tokens in more detail:

```python
for candidate in out[0][0]['rankings']:
    print("Candidate | "+candidate["text"] + f' | Normalized log-prob: {candidate["score"]["normalized_logprob"]:.4f}')
    print("Token logprobs")
    for token in candidate["score"]["token_logprobs"]:
        print(token)
```

> Candidate | This user wants to cancel his subscription. | Normalized log-prob: -3.8278
>
> Token logprobs
>
> {'This': -8.9375}
>
> {' user': -5.44140625}
>
> {' wants': -5.17578125}
>
> {' to': -0.1341552734375}
>
> {' cancel': -6.77734375}
>
> {' his': -1.3203125}
>
> {' subscription': -1.01171875}
>
> {'.': -1.82421875}

> Candidate | This user is giving feedback. | Normalized log-prob: -5.4385
>
> Token logprobs
>
> {'This': -8.9375}
>
> {' user': -5.44140625}
>
> {' is': -2.27734375}
>
> {' giving': -8.140625}
>
> {' feedback': -4.64453125}
>
> {'.': -3.189453125}

> Candidate | This user is asking for technical support. | Normalized log-prob: -3.7139
>
> Token logprobs
>
> {'This': -8.9375}
>
> {' user': -5.44140625}
>
> {' is': -2.27734375}
>
> {' asking': -5.8671875}
>
> {' for': -0.76953125}
>
> {' technical': -4.5078125}
>
> {' support': -0.403564453125}
>
> {'.': -1.5068359375}

As we could expect, while "This user is asking for technical support." is ranked first, its score is very close to "This user wants to cancel his subscription.".

## Using Conjunctions for Better Performances

When using `lyra-en` as a selector, it is possible to use a conjunction as a link between the prompt and the candidate classes to improve performances. This way, the model actually sees the structure `user message + conjunction + candidate class`. Let us try and see if using a proper conjunction can make the difference in the normalized scores of our candidates a bit more significant.

For example, we could use

```python
conjunction = "This chat entry implies that"
```

Let us look at the different scores after adding this conjunction

```python
out = selector(prompt, classes, conjunction)
for candidate in out[0][0]['rankings']:
    print("Candidate | "+candidate["text"] + f' | Normalized log-prob: {candidate["score"]["normalized_logprob"]:.4f}')
```

> Candidate | This user wants to cancel his subscription. | Normalized log-prob: -4.1542
>
> Candidate | This user is giving feedback. | Normalized log-prob: -5.6647
>
> Candidate | This user is asking for technical support. | Normalized log-prob: -3.9866

The rankings between the different candidates stayed the same, but we can see that the difference between the best class and second-best class is now a bit larger. To illustrate the critical importance of a good conjunction, let us try and do even better.

```python
conjunction = "This is a chat interaction. Where should the user be directed?"

out = selector(prompt, classes, conjunction)
for candidate in out[0][0]['rankings']:
    print("Candidate | "+candidate["text"] + f' | Normalized log-prob: {candidate["score"]["normalized_logprob"]:.4f}')
```

> Candidate | This user wants to cancel his subscription. | Normalized log-prob: -3.0111
>
> Candidate | This user is giving feedback. | Normalized log-prob: -3.9006
>
> Candidate | This user is asking for technical support. | Normalized log-prob: -2.6310

As you can see, using a more specific conjunction gave us an even clearer ranking, with the score of the best candidate "This user is asking for technical support." being now significantly larger than the second-best choice. Now it's your turn to classify your users' requests and design the best conjunction!
