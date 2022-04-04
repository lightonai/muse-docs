---
---

# 📜 Construction de Prompts


**Apprends à concevoir efficacement des prompts afin de tirer le meilleur parti de nos modèles, en utilisant ✍️ [Create](/api/primitives/create)**.


Que tu souhaites utiliser l'API pour rédiger un article, répondre à des questions ou classifier des avis clients, tout commence par un **prompt**, c'est-à-dire le texte d'entrée soumis au modèle qui conditionne le texte produit. Le prompt permet au modèle de suivre des instructions spécifiques ou d'effectuer des tâches données et est primordial pour obtenir les meilleurs résultats possibles.

Dans ce guide, nous passons en revue les différents types de prompts qui peuvent être utilisés avec Muse, utilisant `lyra-fr` pour illustrer nos exemples. Par la suite, nous supposons que le client a été initialisé en utilisant la commande suivante :


```python
from lightonmuse import Create

creator = Create("lyra-fr")
```


## Un texte à compléter


Dans un premier temps, explorons comment utiliser un début de texte (article, publicité, texte littéraire) en tant que prompt, que Muse peut compléter.

Par exemple, on peut utiliser :

 
```python
prompt = "Nous avions passé une bonne soirée."
output = creator(prompt, n_tokens=18) 
print(prompt + "🤖 " + output[0][0]['completions'][0]['output_text'])
```

et notre modèle renvoie

> Nous avions passé une bonne soirée.🤖 On s'était bien amusés.
> J'attendis un peu avant de raccrocher.


**La qualité du texte retourné par nos modèles dépend très fortement de la qualité du prompt utilisé.** En particulier, la longueur du prompt, son vocabulaire et sa grammaire ont une influence cruciale sur les textes produits. Le simple fait de retirer le point final du prompt utilisé ci-dessus change le résultat obtenu :

​
```python
prompt = "Nous avions passé une bonne soirée"
output = creator(prompt, n_tokens=18) 
print(prompt + "🤖 " + output[0][0]['completions'][0]['output_text'])
```

> Nous avions passé une bonne soirée🤖 . Nous avions fait connaissance, il était venu nous rejoindre à notre table et il avait dîné


Garde ces points en tête pour concevoir les meilleurs prompts possibles !


## La description d'une tâche à réaliser

Plutôt que d'utiliser un texte incomplet en prompt, on peut décrire, en français, la tâche que l'on veut que Muse réalise. Plusieurs exemples peuvent également être inclus pour rendre le texte produit plus pertinent. Voyons ce qu'on peut faire avec ce genre de prompt !


Dans un premier temps, demandons à Muse de générer une publicité Instagram pour une station balnéaire que nous décrivons :

```python
prompt = "Je voudrais poster une publicité Instagram pour la résidence de vacances Atmosphère, un hôtel de luxe sur l'île d'Apo, aux Philippines, qui propose des plongées à la renommée mondiale. Voici le texte : '"
output = creator(prompt, mode="topk", 
                temperature=0.9, n_tokens=86, 
                word_biases={"luxe": 5, "marine": 5}, 
                frequency_penalty=0.5)
print(output[0][0]['completions'][0]['output_text'])
```
>Atmosphere, un hôtel de luxe sur l'île d'Apo, aux Philippines, propose des plongées à la renommée mondiale. Les plongeurs peuvent explorer les eaux cristallines et profiter des plages de sable blanc. Les chambres sont décorées avec goût et comprennent une connexion Wi-Fi gratuite. Le personnel est disponible 24h/24 et 7j/7 pour vous aider à organiser un voyage inoubliable.

Lorsque l'on désire accomplir une tâche un peu plus complexe, il peut être judicieux d'inclure quelques exemples dans le prompt pour améliorer la qualité du texte généré. Par exemple, ici, on souhaite que Muse réponde à des commentaires laissés par des clients. On inclut donc dans le prompt trois exemples de commentaires et de réponses pour préparer `lyra-fr` pour la tâche :


```python
prompt = """Réponds aux avis clients suivants.
###
Avis: Ça fait plusieurs fois que je viens et je n’ai jamais été déçue. L’accueil est chaleureux, les pizzas sont juste parfaites. J’ai enfin goûté un dessert et il était largement à la hauteur du reste ! Bref, au top, j’y retournerai bientôt !
Réponse: Wow, nous sommes très touchés par votre commentaire ! Un grand merci à vous et à très bientôt !
###
Avis: Décevant surtout au vu de la bonne note du resto, je m'attendais à me régaler mais pas vraiment. Le tiramisu, certes bien garni, était très liquide, on aurait dit que c'était mélangé avec de l'eau, et pas très bon. 
Réponse: Nous sommes désolés de ne pas avoir répondu à vos attentes. Nous espérons que vous nous donnerez une autre chance bientôt.
###
Avis: Super pizzeria ! Accueil sympathique. On y va souvent mais on ne s'en lasse pas !
Réponse:"""

out = creator(prompt, mode="topk", k=5, temperature=0.8, p=0.9, n_tokens=20, stop_words=["\n"])
print(out[0][0]['completions'][0]['output_text'])
```

et on obtient, en réponse au dernier commentaire :

> Nous sommes ravis que vous ayez pu profiter de ce bon moment ! À très bientôt !
​


​
## Expérimente avec tes prompts


Comme le montrent les exemples ci-dessus, un bon prompt est crucial pour obtenir des résultats de qualité. Ces résultats peuvent être améliorés par l'ajout d'une description pertinente et détaillée, ou encore, d'exemples de réalisation d'une tâche donnée. N'hésite pas à expérimenter en utilisant différents prompts pour voir ce qui produit les meilleurs résultats pour une tâche en particulier. En manque d'inspiration ? Consulte nos exemples !

:::caution ⚠️ Attention
L'utilisation d'un vocabulaire ambigu, irrespectueux, raciste ou autrement inapproprié peut produire un texte inapproprié. Merci de faire preuve de bon sens quand tu produis du texte. LightOn n'est pas responsable de l'utilisation inappropriée de Muse.
:::
