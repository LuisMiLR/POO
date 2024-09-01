/*
Abstraction
L’abstraction permet de créer des modèles ou des structures de base génériques pour représenter des objets du monde réel ou des concepts et est utilisée pour créer des classes abstraites et des interfaces.

Une interface c'est une abstraction d'un contrat, on vient definir le contrat sans implémenter les methodes 'c'est ça l'abstraction' la class mere animal c'est aussi une abstraction, on peut manipuler des animaux et ne pas préciser de quel type ils sont 

Une class abstraite n existe pas en js mais oui je ts.


C'est une class qui sert de modele pour les class contraites, c'est une class qu'on ne peut l'utiliser sans l'entendre. 

une class abstraite peut detenir des methodes abstraites qui sont des methodes sans implémentation cette aspect de la class abstraitre qui est équivalent à l'interface 

la class abs. peut avoir les 2 types de méthodes avec et sans implémentation, c'est un peu un mélange entre une class concrete et une interface.

Les class dérivés doivent implémenter les méthodes abstraite comme elle doivent implémenter cette qui viennent des interfaces. 

Une class abs. avec que des méthodes abs. ça n'a pas d'interet puisque c'est comme une interface. 

ex:
*/

abstract class Personnage {
    nom: string;
    constructor(nom: string) {
        this.nom = nom;
    }

    abstract attaquer(): void; // Méthode abstraite
    abstract seDeplacer(): void; // Méthode abstraite

    parler(): void {
        console.log(`${this.nom} parle.`);
    }
}

/*
methode  abstract attaquer() et abstract seDeplacer() qui vont dire comment attaquer ou se déplacer, ce sont les class concretes, les class filles, les class dérivées qui vont implémenter ces fonctionalités 
ex: 
*/

class Guerrier extends Personnage {
    attaquer(): void {
        console.log(`${this.nom} attaque avec son épée.`);
    }
    seDeplacer(): void {
        console.log(`${this.nom} se déplace rapidement.`);
    }
}

//

class Sorcier extends Personnage {
    attaquer(): void {
        console.log(`${this.nom} lance un sort magique.`);
    }
    seDeplacer(): void {
        console.log(`${this.nom} se déplace en utilisant la téléportation.`);
    }

}

//*Difference entre interface et abstraction 

/*
Alors quelles différences avec les interfaces d’implémentation?

* Concernant les classes abstraites: 
peuvent contenir des méthodes abstraites (méthodes sans implémentation) et des méthodes concrètes (méthodes avec une implémentation).
peuvent contenir des propriétés avec des valeurs par défaut
sert généralement de modèle de base pour d'autres classes. Elle peut être étendue par des sous-classes.
les sous-classes doivent implémenter toutes les méthodes abstraites de la classe abstraite
une classe ne peut étendre qu'une seule classe abstraite, car TypeScript prend en charge l'héritage simple seulement.

*Concernant les interfaces: 
ne contiennent que des signatures de méthodes (méthodes sans implémentation) et ne peuvent pas avoir de méthodes avec une implémentation
ne peuvent pas contenir de propriétés avec des valeurs par défaut.
Une classe peut implémenter plusieurs interfaces séparées par une virgule : 
(ex: implements Interface1, Interface2)
Lorsqu'une classe implémente une interface, elle doit fournir une implémentation pour toutes les méthodes de l'interface.
Les interfaces sont souvent utilisées pour définir des contrats que les objets doivent respecter, sans imposer une hiérarchie de classes.

*/