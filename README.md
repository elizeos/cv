# portfolio LIEN DU SITE

## Git
J'ai utilisé github + git bash afin de conserver les différentes versions, héberger mon travail à distance "au cas où" et aussi parce que j'aime cette méthode de travail, tester sur une branche isolée d'abord, choisir de la jeter ou de la fusionner et cela en étant assuré de conserver une version stable.

## Wireframes
Wireframes réalisés avec balsamiq.

## IDE : Sublime Text
J'ai utilisé Sublime Text pour ce projet.


Mes plugins favoris (ctrl + shift + p puis "install package"):

	* -Alignment : réaligne le code avec ctrl + alt + A
	* -color Highlighter : permet de visualier à quelle couleur corresponde le code hexa
	* -Emmet : indispensable Emmet, simplifie l'écriture HTML
	* -AutoFileName : complète les noms/chemins de fichier
	* -View in Browser (ctrl + alt + v)
	* -GitGutter : permet de visualiser l'état de chaque ligne par rapport au dépot distant

## SEO
Mise en place de données structurées (voir https://schema.org/Person).

Optimisation des "zones chaudes" (title, H1, meta description), respect de la sémantique HTML.

Optimisation du poids et du texte des images.

## Css
**Mes choix de style :**

### Normalize CSS
Afin de maitriser l'apparence du site et obtenir un affichage cohérent entre les différents navigateurs, et plutôt que d'utiliser un reset complet des propriétés CSS - https://meyerweb.com/eric/tools/css/reset/ -, j'ai choisi d'utiliser normalize - https://necolas.github.io/normalize.css/ - (un reset intelligent en quelque sorte, qui conserve les caractéristiques par défaut des navigateurs, mais en les rendant identiques sous chaque navigateur).

> *COMMENT ?*
> Ici https://necolas.github.io/normalize.css/ -> télécharger puis enregister le fichier "normalize.css" dans le dossier CSS
> Il ne reste plus qu'à faire appel à ce fichier, dans le head des pages HTML, avant toute autre feuille de style, que ce soit bootstrap ou les feuilles de styles propres au site, qui doivent elles toujours être appelées en dernier.

### bootstrap
J'ai utilisé bootstrap pour certaines parties seulement, pour le formulaire et pour tester le flexbox en mobile first de bootstrap 4.
Quelques ressources utiles : https://hackerthemes.com/bootstrap-cheatsheet/ et http://bootstrap4.guide/.
> *COMMENT ?*
> Ici https://getbootstrap.com/ télécharger la version compilée, enregister les fichiers CSS dans css/bootstrap et les fichiers JS dans js/bootstrap
> Faire le lien vers la/les feuilles de style bootstrap souhaitées dans le head des pages HTML, après le lien vers normalize et avant la/les feuilles de styles du site.