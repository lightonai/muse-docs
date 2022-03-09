---
---

# Sentiment Analysis

**Detect sentiment expressed in reviews using ✍️ [Create](/api/primitives/create) and [Select](/api/primitives/evaluate/select).**

Sentiment analysis is the process of trying to measure a feeling or mood of a user in a text - for example, detecting whether a review is positive or negative.

It is an essential tool when it comes to understanding customers' emotions and needs. It enables us to explore how customers react to a brand, product, or service. The most successful companies know how to use sentiment analysis to react to people’s expectations. This allows them to find out what consumers want, and offer it to them. 

Because the number of reviews for a given product can quickly scale up, **automatically** detecting sentiment is primordial. In this guide, we explore different ways Muse can be used to classify movie reviews. 

We assume that the client has been initialized, using

```
from lightonmuse import Select, Create

selector = Select("lyra-en")
creator = Create("lyra-en")
```
and imagine that we wish to classify the (positive) review
```
review = "A great American picture, full of incredible images and lasting moments."
```
# Using Select

Since the Select endpoint uses to likelihood to select the more likely candidate with respect to a reference, it seems like a good place to start doing sentiment analysis! Here we assume that you are familiar with the use of Select: make sure to check out our [Select Guide](/guides/english/select) for more detail. 


## Select Baseline

Let us start with using the Select Baseline, that is, without any Skill or other trick, to classify reviews. We try the following approach:

- We use the review as a  **reference**
- As a **conjunction**, we use "Sentiment:"
- The different **candidates** we use are `Positive.`, `Negative.` and `Neutral.` 

```
out = selector(review, ["Negative.", "Positive.", "Neutral."], "Sentiment:") 
print(review + " | " + out[0][0]["best"])
```
> A great American picture, full of incredible images and lasting moments. | Positive.

Great, it works! However, as you can see in the Comparison section of the guide, the performances of this method are not as good when the reviews become a bit more complex. So let's see how we can improve on it.


## Select with a twist: the sentiment_analysis skill

The [sentiment_analysis Skill](/api/skills) has been trained to classify text as `Positive (+)`, `Negative (-)` or `Neutral (0)`. It can be used out of the box as follows:

```
sign_to_sentiment = {"+": "Positive.", "-": "Negative.", "0": "Neutral."}
out = selector(review, ["-", "+", "0"], skill="sentiment_analysis") 
print(review + " | " + sign_to_sentiment["out[0][0]["best"]"])
```

And again, the review is properly classified:
> A great American picture, full of incredible images and lasting moments. | Positive.




# Using Create

In addition to using Select, we can also use Create to classify reviews. For this purpose, we need to provide `lyra-en` with examples so it can understand the task at hand. As we will see, the number of examples provided affects the precision of the classification. 

## One-shot classification

We start with providing `lyra-en` with only one line of instruction and one example:

```
example = """This is a review sentiment classifier.
Review: 'The new Dune movie is great!'
Sentiment: Positive.
###
"""
```

In order to use Create, we need to re-format the review so it matches the `example` shown above:

```
review = """Review: 'A great American picture, full of incredible images and lasting moments.'
Sentiment:
```

We can then use Create on a text made of the `example` concatenated with the `review`:

```
out = creator(example+review, n_tokens=5, temperature=0.1,
                  stop_words=[".", "!", "...", "\n\n"]) 
print(review.split("Review:")[1].split("\n")[0].strip().strip("\'") + ' | ' + out[0][0]['completions'][0]['output_text'])
```

returns, as before:

> A great American picture, full of incredible images and lasting moments. | Positive.

Note that, to use Create for sentiment analysis, we use a very low temperature of `0.1`. Indeed, in this case, we know that a ground truth exists: the review is either `Positive.` or `Negative.`. Therefore, we do not want `lyra-en` to get creative, we want the sampling to be close to `greedy`, hence our temperature choice. We also ask for a limited amount of tokens (`n_tokens=5`) since we do not need more, and add these stop words `[".", "!", "...", "\n\n"]` to stop the generation after the review has been classified. 

This review was classified properly with only one example, however, such a simple approach does not work for more complex reviews and may be very biased by the choice of example, as we will see below. So let's try and use three examples!

## Three-shot classification

In this case, we use Create similarly as before but add more examples to our prompt:

```
examples = """This is a review sentiment classifier.
Review: 'The new Dune movie is great!'
Sentiment: Positive.
###
Review: 'Suicide Squad was an awful movie, that's 2 hours of my life I won't get back...'
Sentiment: Negative.
###
Review: 'Wooh, just came out of Interstellar and it was amazing.'
Sentiment: Positive.
###
"""
```

and, correspondingly, concatenate those examples and the review:

```
out = creator(examples+review, n_tokens=5, temperature=0.1,
                  stop_words=[".", "!", "...", "\n\n"]) 
print(review.split("Review:")[1].split("\n")[0].strip().strip("\'") + ' | ' + out[0][0]['completions'][0]['output_text'])
```

> A great American picture, full of incredible images and lasting moments. | Positive.


As expected, the review is once again properly classified.


# Comparing the different methods

Let us now discuss the differences between the various methods. To compare them, we gathered 20 movie reviews (10 positive reviews and 10 negative reviews) and classified them using the four methods described above. We've tried to find reviews that are not straightforward to classify (and some of them are pretty funny!). The table below summarizes the results, with wrong classifications being crossed out.

| Negative Reviews                                                                                                                                                                                                           | Select: Baseline | Select: Skill | Create: one-shot | Create: three-shot |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|----------------|-------------------|---------------------|
| TBH Squid Game wasn't worth my time.                                                                                                                                                                                       | Negative.         | Negative.      | Negative.         | Negative.           |
| It is well shot but that's only when you can see things as the film is so dark.                                                                                                                                            | <s>Positive.</s>         | Negative.      | Negative.         | Negative.           |
| After a promising start, more and more disappointing.                                                                                                                                                                      | <s>Positive.</s>         | Negative.      | Negative.         | Negative.           |
| Nearly Fell Asleep Multiple Times!                                                                                                                                                                                         | <s>Positive.</s>         | <s>Neutral.</s>       | Negative.         | Negative.           |
| Two brilliant first episodes, followed by six hours I will never get back.                                                                                                                                                 | <s>Positive.</s>         | <s>Positive.</s>      | Negative.         | Negative.           |
| If less is more, Uncharted must be a masterpiece. It’s bloodless, heartless, joyless, sexless and, with one exception, charmless.                                                                                          | Negative.         | Negative.      | Negative.         | Negative.           |
| Who ok'd this? God awful acting and plot holes.                                                                                                                                                                            | Negative.         | Negative.      | Negative.         | Negative.           |
| I'd rather be audited by the IRS                                                                                                                                                                                           | <s>Positive.</s>        | <s>Neutral.</s>       | Negative.         | Negative.           |
| There are snails and turtles complaining about how slow the plot develops for this.                                                                                                                                        | <s>Positive.</s>        | Negative.      | Negative.         | Negative.           |
| Welcome to “The Batman,” yet another lugubrious, laboriously grim slog masquerading as a fun comic book movie.                                                                                                             | Negative.         | Negative.      | Negative.         | Negative.           |
| **Positive Reviews **                                                                                                                                                                                                          |                   |                |                   |                     |
| A great American picture, full of incredible images and lasting moments.                                                                                                                                                   | Positive.         | Positive.      | Positive.         | Positive.           |
| All-time prison film classic.                                                                                                                                                                                              | Positive.         | Positive.      | <s>Negative.</s>         | Positive.           |
| Why did It have to end?                                                                                                                                                                                                    | Positive.         | <s>Negative.</s>      | <s>Negative.</s>         | <s>Negative.</s>           |
| With so many video game adaptations being little more than live-action fanfiction, Uncharted stands out by feeling like an actual movie, mostly eschewing fan service in favor of little organic beats between characters. | Positive.         | Positive.      | <s>Negative.</s>        | Positive.           |
| Beautifully shot and the score is thrilling. It does feel a bit long but it is rewarding.                                                                                                                                  | Positive.         | Positive.      | Positive.         | Positive.           |
| One word for this movie, Unbelievable, deserves the 100.                                                                                                                                                                   | Positive.         | Positive.      | <s>Negative.</s>         | Positive.           |
| The Godfather traces the arc of this doomed idealism with a beauty that is still fresh.                                                                                                                                    | Positive.         | Positive.      | Positive.         | Positive.           |
| Dark, twisted and beautiful, this entwines fairy-tale fantasy with war-movie horror to startling effect.                                                                                                                   | Positive.         | Positive.      | <s>Negative.</s>         | Positive.           |
| Parasite begins in exhilaration and ends in devastation, but the triumph of the movie is that it fully lives and breathes at every moment, even when you might find yourself struggling to exhale.                         | Positive.         | Positive.      | <s>Negative.</s>         | Positive.           |
| Pulp Fiction isn't just funny. It's outrageously funny.                                                                                                                                                                    | Positive.         | Positive.      | Positive.         | Positive.           |
| **Wrong Classifications**                                                                                                                                                                                                      | 6                 | 4              | 6                 | 1                   |


Let's analyze our results, starting with the Select: baseline: as soon as the review gets more nuanced, the model fails to properly classify it. The same thing happens for Create: one-shot. Interestingly, for the one-shot approach, we chose a positive example, and observe that the model has trouble properly classifying positive comments. It could be that, given that our example described the movie as great, anything short of that appears negative. 

The Select: skill approach leads to better results, with two comments being completely wrongly classified, and two others being classified as neutral. These mistakes are actually not surprising when considering the fact that the Skill `sentiment_analysis` was trained to perform sentiment analysis for text in general, not just reviews. Indeed, taken out of context, "Why did It have to end?" is indeed pretty negative, while "Nearly Fell Asleep Multiple Times!" is neutral. Still, the skill showed great improvement compared to the baseline.

Finally, the best results were obtained using Create: three-shot. This is not surprising, since the examples specifically prime the model for movie reviews classification. However, it requires the extra steps of finding examples, and costs more since the prompt gets longer. 

Good luck classifying your own reviews!
 
