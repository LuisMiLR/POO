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