/*

*Getter and Setter

En TypeScript (et en JavaScript), les getters et setters sont des méthodes spéciales qui permettent de définir des comportements personnalisés pour accéder et modifier les valeurs des propriétés d'un objet (notament ceux qui sont private)

Ils sont utilisés pour encapsuler la logique d'accès aux propriétés et peuvent fournir une interface plus contrôlée pour interagir avec les données d'un objet.

*Définition des Getters et Setters

*Getter : 
Permet de définir une méthode qui est appelée lorsqu'une propriété est accédée. Il est utilisé pour obtenir la valeur d'une propriété.

*Setter : 
Permet de définir une méthode qui est appelée lorsqu'une valeur est affectée à une propriété. Il est utilisé pour définir la valeur d'une propriété.
*/

//getter
class MaClasse {
    private _propriete: number = 0; // Propriété privée

    get propriete(): number {
        return this._propriete; // Retourne la valeur de la propriété privée
    }
}
const compteurs = new MaClasse();
// et on y accede commm si c'etait une propriété directement de la class : 
console.log(compteurs.propriete); // Affiche 
//on ne met pas les parenthèses comme pour les fonctions car c'est un accesseur (getter et setter)



//setter
class MaClasses {
    private _propriete: number = 0; // Propriété privée

    set propriete(valeur: number) {
        if (valeur >= 0) {
            this._propriete = valeur; // Définit la valeur de la propriété privée si la condition est remplie
        } else {
            console.log('La valeur doit être positive.');
        }
    }
}

/*Exemple Complet avec Getters et Setters
Voici un exemple complet de l'utilisation des getters et setters dans une classe TypeScript :
*/

class Compteurr {
    private _counter: number = 0; // Propriété privée

    // Getter pour _counter
    get counter(): number {
        return this._counter;
    }

    // Setter pour _counter
    set counter(value: number) {
        if (value >= 0) {
            this._counter = value;
        } else {
            console.log('La valeur doit être positive.');
        }
    }

    // Méthode pour incrémenter le compteur
    increment() {
        this._counter++;
    }
}

// Utilisation de la classe avec getters et setters
const compteur = new Compteurr();
console.log(compteur.counter); // Affiche 0 (valeur par défaut)

compteur.counter = 5; // Utilise le setter pour définir la valeur
console.log(compteur.counter); // Affiche 5

compteur.increment(); // Incrémente le compteur
console.log(compteur.counter); // Affiche 6

compteur.counter = -1; // Essaie de définir une valeur invalide
console.log(compteur.counter); // Affiche 6 (la valeur n'a pas été modifiée)
