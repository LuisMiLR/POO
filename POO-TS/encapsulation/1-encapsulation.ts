//Encapsulation

/*
L'encapsulation consiste à regrouper des données (variables) et (des opérations) des methodes qui les manipules au sein d'une même entité appelée classe.

On encapsulation des données et des opérations dans une class (entité peut etre assimilé à une class)

La class c'est un moule d'un objet, 
la class c'est le modèle et on va instancier ce model pour donner un objet (avec le keyword new)

Grace à l'encapsulation la class va controler l'accès au données et  garantir leur intégrité en empêchant les modifications non autorisées.

*L’encapsulation offre plusieurs avantages : 

- La protection des données:  
On peut définir des niveaux de visibilité (comme public, private ou protected) pour contrôler qui peut accéder ou modifier ces données. 
Cela permet de prévenir les erreurs accidentelles ou les manipulations malveillantes des données.

la plus part du temps on va plutot exposer des fonctions que des données
si les class ne protege pas leur données cela veut dire que n'importe qui peut modifier ses données et risque de provoquer des pb d'intégrité si plusieur process diférent peuvent modifier des données d'un même objet, on dirait donc qu'il y a un pb d'encapsulation dans ce cas la.

A quoi sert l'encapsulation ?

- Modularité et réutisation du code 
ça va pousser à la modularité et à la réutilisation du code :
En regroupant les données et les méthodes liées dans une classe, on favorise la modularité du code car une classe peut être ré-utilisée dans différents contextes sans avoir à réécrire le même code.

- Abstraction: 
Elle permet de cacher les détails d'implémentation internes d'une classe, ne montrant alors que l'interface publique. Cela simplifie l'utilisation de la classe, car les utilisateurs n'ont pas besoin de connaître tous les détails de son fonctionnement interne.

"j utilise une class pour le contrat qu'elle va me fournir (un certain nombre de service, de fonction, ces fonctions je vais pouvoir les réutiliser à different endroit du code, sans avoir besoin de savoir comment c'est fait "

- Maintenance facilitée: 
On réduit forcement mecaniquement le périmetre de ce qu'il ya à maintenir si les choses sont bien encapsuler, " le reste du programme vient pas influer sur son fonctionnement, ne fait que l'utiliser, c'est un découpage qui permet de faciliter la maintenance"

*Modificateur de visibilité

public : les membres (methodes ou attribut) publics sont accéssible de n'importe ou.
Par défaut, si vous ne spécifiez rien comme portée en Typescript, tout est public. 

private:  les membres privés ne sont accessibles qu'à l'intérieur de la classe où ils sont définis, ce qui limite leur accès depuis l'extérieur. "personne à accès au données a part la class elle même, on va mettre en place des fonctions qui vont controlées l'accès au champs" 
on definit le champs privée par un #, peu etre ecrit également avec un _devant le nom de la variable ou en toute lettre "private"

protected: les membres protégés sont similaires aux membres privés, mais ils sont accessibles depuis les classes dérivées (héritage), permettant ainsi un certain niveau d'accès contrôlé aux sous-classes. "c'est comme une donnée privée mais qui donne accès au sous class (heritage)"





*/