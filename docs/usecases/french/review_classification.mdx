---
---

# ❤️ Classification de Critiques

**Classifiez des critiques selon si elles sont positives ou négatives en utilisant ✍️ [Create](/api/primitives/create) et 🔘 [Select](/api/primitives/evaluate/select).**

L'analyse des sentiments (aussi appelée _opinion mining_) consiste à analyser les différents sentiments et émotions exprimés dans un texte donné. Par exemple, ce procédé peut être utilisé pour classifier des avis de clients suivant s'ils sont satisfaits ou non.

C'est un outil essentiel afin de comprendre les attitudes et les besoins de clients. Il permet d'explorer leur satisfaction, ou encore d'évaluer leurs réactions par rapport à un nouveau produit ou service, et d'ajuster ces nouveautés au ressenti de ces clients.

À l'heure actuelle, le nombre de commentaires et avis laissés sur un produit donné peut très vite exploser. C'est pour cette raison qu'il est primordial d'être capable de faire de l'analyse des sentiment automatiquement. Dans ce guide, nous nous penchons sur ce sujet. Afin d'illustrer les capacités de Muse dans le domaine de l'analyse des sentiments, nous allons voir comment `lyra-fr` peut être utilisé pour classifier des critiques de films. Pour une version anglaise de ce guide, utilisant `lyra-en`, et qui inclue l'utilisation de la [Skill](/api/skills) `sentiment_analysis`, jetez un œil au guide [Review Classification](/guides/english/review_classification). Notez que ce guide utilise les [Python Bindings](/api/bindings/python) de l'API.

Par la suite, nous partons du principe que le client a été initialisé à l'aide de la commande suivante :

```python
from lightonmuse import Select, Create

selector = Select("lyra-fr")
creator = Create("lyra-fr")
```

## Classifier des Critiques avec Select

La primitive Select utilise des probabilités afin de sélectionner le candidat le plus adéquat en comparaison avec une phrase de référence. Par conséquent, c'est un bon point de départ pour faire de la classification de critiques ! Dans la suite, nous allons supposer que le lecteur est familier avec l'utilisation de Select. Pour plus d'informations, visitez notre [guide Select](/guides/english/select) ou encore la [page de documentation](/api/primitives/evaluate/select) de la primitive.

Afin de classifier des critiques avec Select, nous utilisons les paramètres suivants :

-   On formate la **reference** de la façon suivante : `Critique : "critique à classifier" \n`
-   On utilise en `conjunction` (c'est-à-dire, en lien entre la référence et les candidats) `Cette critique est`
-   Les candidats possibles sont `positive` et `négative`.

En termes de code, cela revient à utiliser

```python
reference = "Critique: \"Riche en rebondissements, surprenant et drôle, Vanille est un divertissement ludique parfait pour toute la famille.\" \n"
out = selector(reference, ["positive", "négative"], "Cette critique est")
print(out[0][0]["best"])
```

ce qui produit

> positive

... qui est bien la réponse attendue ! La dernière section de ce guide offre une comparaison des performances de cette méthode par rapport aux méthodes qui utilisent Create. Mais avant cela, étudions comment Create peut effectivement être utilisée pour cette tâche !

## Classifier des Critiques avec Create

La primitive Create peut être utilisée à la place de Select pour classifier des critiques ! Nous supposons ici aussi que le lecteur est familier avec l'utilisation de Create : pour plus d'informations et de détails sur les paramètres, visitez la page de la primitive ✍️ [Create](/api/primitives/create). En revanche, pour s'assurer que les résultats sont pertinents, `lyra-fr` a besoin de voir au moins un exemple pour comprendre ce qui est attendu. Nous l'avons précisé dans notre guide sur la [construction de prompts](/guides/french/prompt) : pour ce genre de tâches, donner plus d'exemples permet d'obtenir de meilleurs résultats, et c'est effectivement ce que l'on va voir ici.

### Classification One-shot

Afin d'utiliser Create pour classifier des critiques, les étapes à suivre sont les suivantes :

-   On commence par fournir à `lyra-fr` une courte phrase de consignes et un seul exemple.

```python
example = """Détermine si ces critiques de film sont positives ou négatives.

Critique: "Certaines répliques font vraiment rire, mais la mise en scène manque d'inventivité pour soutenir le rythme de la comédie."
Cette critique est négative.
----------
"""
```

-   Ensuite, il nous faut reformater notre critique suivant le même schéma que l'`example` ci-dessus :

```python
review = """Critique: \"Riche en rebondissements, surprenant et drôle, Vanille est un divertissement ludique parfait pour toute la famille.\"
Cette critique est
```

-   Nous pouvons maintenant utiliser Create, en donnant l'ensemble `example` et `review` concaténés comme prompt :

```python
out = creator(example+review, mode="greedy", n_tokens=5,
                  stop_words=[".", "!", "...", "\n\n"])
print(out[0][0]['completions'][0]['output_text'])
```

ce qui produit

> positive

... Comme précédemment ! Quelques notes :

-   Pour faire de l'analyse des sentiments avec Create, on a utilisé le mode de génération `greedy`, qui est déterministe. En effet, dans ce cas, on sait qu'une critique est soit `positive`, soit `négative`. Par conséquent, on ne veut pas que `lyra-fr` soit créatif, d'où le choix du mode `greedy`. Alternativement, nous aurions pu utiliser `nucleus` ou `topk` avec une température très basse - comme c'est le cas dans l'équivalent anglais de ce guide.
-   Nous nous sommes également limités à 5 tokens produits, puisque nous n'en avons pas besoin de plus et avons utilisé en `stop_words = [".", " !", "...", "\n\n"]` afin que la génération de texte s'arrête après la classification.

Cette critique a été classée correctement avec un seul exemple, cependant, une approche aussi simple ne fonctionne pas pour des critiques plus complexes, comme nous le verrons dans la dernière section de ce guide. De plus, cette méthode est extrêmement biaisée par le choix de l'exemple fourni au modèle. Essayons donc d'utiliser plus d'exemples !

### Classification Three-shot

Dans cette section, nous utilisons Create comme précédemment, mais fournissons à `lyra-fr` trois exemples au lieu d'un seul :

```python
examples = """Détermine si ces critiques de film sont positives ou négatives.

Critique: "Un film touchant et riche en rebondissements."
Cette critique est positive.
----------
Critique: "Certaines répliques font vraiment rire, mais la mise en scène manque d'inventivité pour soutenir le rythme de la comédie."
Cette critique est négative.
----------
Critique: "La nullité du film dépasse à tous les niveaux ce que nous avions essayé de prévoir à travers les hallucinantes bandes-annonces diffusées sur le net."
Cette critique est négative.
----------
"""
```

Comme dans la section précédente, on concatène ces exemples et notre critique dans le prompt fourni :

```python
out = creator(example+review, mode="greedy", n_tokens=5,
                  stop_words=[".", "!", "...", "\n\n"])
print(out[0][0]['completions'][0]['output_text'])
```

> positive

... Ce qui produit encore une fois la bonne réponse.

## Comparaison des Différentes Méthodes

Nous discutons maintenant des différences et des performances des méthodes explorées ci-dessus. Afin de pouvoir les comparer, nous avons sélectionné 20 critiques de films (10 positives, et 10 négatives) que nous avons classifiées en utilisant les trois approches décrites plus haut. Pour pousser `lyra-fr` dans ses retranchements, certaines des critiques que nous avons choisies ne sont pas forcément évidentes à classifier, et certaines font preuve d'humour ! Le tableau ci-dessous résume les résultats obtenus. Les classifications incorrectes sont barrées.

|                                                                                                            **Critiques Négatives**                                                                                                             | **Select - Baseline** | **Creator: one-shot** | **Creator: three-shot** |     |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------: | :-------------------: | :---------------------: | --- |
|                                                                        Kev Adams a beau donner tout ce qu’il peut, le script mal conçu finit toujours par le rattraper.                                                                        |       Négative        |    <s>Positive</s>    |        Négative         |     |
|                                                      On sortira du film comme on y est entré, en se demandant si cette triste histoire appelait autre chose que la réparation du silence.                                                      |       Négative        |    <s>Positive</s>    |        Négative         |     |
|                                                             Mû par une inspiration graphique parfois remarquable, The Batman reste trop long et inégal pour pleinement convaincre.                                                             |       Négative        |    <s>Positive</s>    |        Négative         |     |
|                                                                                                      On est venu, on a vu, on a été déçu.                                                                                                      |       Négative        |    <s>Positive</s>    |        Négative         |     |
|                                                                   Un film fait par des parisiens pour des parisiens. Un accent faux et dégradant. Pour un tout sans saveur.                                                                    |       Négative        |       Négative        |        Négative         |     |
|                                    De l’intrigue paresseuse, les enfants ne sortiront pas plus intelligents . leurs parents, sans doute un peu abrutis par l’avalanche de péripéties pendant deux heures...                                    |       Négative        |       Négative        |        Négative         |     |
| Malgré les moyens déployés, jamais un film n'a autant ressemblé à un croisement entre un docu-fiction et un reportage BFM TV... Acteurs au jeu bancal, photographie télévisuelle, personnages creux, intrigues invraisemblables et risibles... |       Négative        |       Négative        |        Négative         |     |
|                                                                        Malgré un beau casting, Le temps des secrets ploie sous un classicisme qui finit par l’étouffer.                                                                        |    <s>Positive</s>    |    <s>Positive</s>    |        Négative         |     |
|                                                  Si vous voulez éviter de perdre 2h00 2 Db à chaque oreille, et de vous ennuyer, ne faites pas comme moi, n'y allez pas !!! Film désolant...                                                   |       Négative        |       Négative        |        Négative         |     |
|                       Effets spéciaux, explosions, bagarres, on sort de là la tête farcie et les oreilles malaxées. C’est au cinéma ce qu’un cheval de course soviétique était au sport hippique : un chameau décabossé.                       |       Négative        |    <s>Positive</s>    |        Négative         |     |
|                                                                                                            **Critiques Positives**                                                                                                             |                       |                       |                         |     |
|                                                              Riche en rebondissements, surprenant et drôle, Vanille est un divertissement ludique parfait pour toute la famille.                                                               |       Positive        |       Positive        |        Positive         |     |
|                                                                       Steven Spielberg, en misant sur l'authenticité, a signé un film qui frappe remarquablement juste.                                                                        |       Positive        |       Positive        |        Positive         |     |
|                                                 Grand moment d'émotion pour moi : jeu des acteurs particulièrement des enfants, paysages. Merci Mr Barratier pour cette magnifique adaptation                                                  |       Positive        |       Positive        |        Positive         |     |
|                                                         Un film solaire sur la reconstruction d'une danseuse obligée de réinventer. Klapisch filme la danse avec beaucoup de fluidité.                                                         |       Positive        |       Positive        |        Positive         |     |
|                                                      Par-delà l’exercice de tension et de suspense, Éric Gravel signe un drame social passionnant, malgré une fin fragilisant sa justesse                                                      |       Positive        |       Positive        |        Positive         |     |
|                                                             Chef d'œuvre absolu ... c'est noir c'est violent c'est fort. Époustouflant. Un must ! Le meilleur de tous a mon avis.                                                              |       Positive        |       Positive        |        Positive         |     |
|                                                                 Haletant et très émouvant de bout en bout ... pour l'histoire ... à voir absolument, pour toutes générations.                                                                  |       Positive        |       Positive        |        Positive         |     |
|                                                               super film très bien réalisé, avec de nombreux détails qui correspond à la réalité ! ce film nous prend au cœur...                                                               |       Positive        |       Positive        |        Positive         |     |
|                                                                                     Un cocktail visuel explosif, un rien criard, mais on ne s’ennuie pas.                                                                                      |       Positive        |       Positive        |        Positive         |     |
|                                                    Si on reste sur un film d’aventure somme toute classique, Uncharted remplit le cahier des charges du blockbuster avec un certain talent.                                                    |       Positive        |       Positive        |        Positive         |     |
|                                                                                                        **Classifications Incorrectes**                                                                                                         |           1           |           6           |            0            |     |

Analysons nos résultats, en commençant par la méthode la moins performante : Create One-shot. Comme nous l'avons mentionné plus haut, cette méthode dépend très fortement de l'exemple choisi - puisqu'on en donne un seul ! En effet, lorsque l'exemple choisi est négatif, le modèle tend à classifier plus de critiques comme étant positives et vis versa (nous vous laissons essayer !). Cela parait censé si l'on considère que le modèle "apprend" exactement ce qu'est une critique négative à travers l'exemple fourni dans le prompt, alors que la définition d'un exemple positif reste plus floue. Cette méthode produit donc des résultats mitigés, avec 6 critiques classifiées de façon incorrecte.

En revanche, utiliser trois exemples (Create Three-Shot) fournis d'excellents résultats (on dirait même plus : parfaits !). Ce n'est pas surprenant, puisque les exemples préparent spécifiquement le modèle pour la classification de critiques. Cependant, cette méthode nécessite des étapes supplémentaires (trouver des exemples, les formater), et coûte plus cher, puisque le prompt devient plus long au fur et à mesure que l'on rajoute ces exemples.

Enfin, l'approche Select a produit, elle aussi, de très bons résultats, avec une seule critique classifiée de manière incorrecte. Ceci est d'autant plus impressionnant si l'on considère que Select fait du zero-shot, c'est-à-dire que la primitive classifie des critiques sans avoir vu explicitement des exemples. C'est aussi la méthode qui utilise le prompt le plus court.

Bonne chance pour classifier vos propres critiques, commentaires ou avis !
