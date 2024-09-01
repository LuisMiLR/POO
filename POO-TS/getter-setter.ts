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

/*
en TypeScript (et également en JavaScript moderne), il existe principalement deux manières de définir des getters pour accéder aux propriétés d'un objet. Ces deux méthodes ont des syntaxes et des utilisations légèrement différentes. Voici un aperçu de chacune :

*1. Méthodes Getter
La première méthode, que j'ai utilisée dans l'exemple précédent, consiste à définir des méthodes explicites pour obtenir les valeurs des propriétés. Ces méthodes sont généralement nommées en préfixant le nom de la propriété avec get suivi du nom de la propriété avec une majuscule au début, comme getFirstname().

Avantages :

Plus explicite et visible comme étant des accesseurs.
Permet l'ajout de logique supplémentaire facilement lors de l'accès à la propriété.
Aucune restriction sur les noms des méthodes ; elles peuvent être nommées de manière plus descriptive si nécessaire.
Exemple :
*/
class Student {
  private firstname: string;

  constructor(firstname: string) {
    this.firstname = firstname;
  }

  public getFirstname(): string {
    return this.firstname;
  }
}

const student = new Student('John');
console.log(student.getFirstname()); // John

/*
*2. Getters de Propriété

La deuxième méthode utilise la syntaxe get pour créer ce qui ressemble à une propriété, mais qui exécute en fait une méthode lorsqu'on y accède. Cette syntaxe permet de traiter les accesseurs de manière similaire à des propriétés normales, sans avoir besoin d'appeler explicitement une méthode.

Avantages :

Syntaxe plus propre et accès aux valeurs comme si elles étaient des propriétés publiques.
Peut être employé dans des contextes où l'utilisation de méthodes n'est pas idéale.
Assure une interface plus simple pour l'utilisateur de la classe.

Exemple :
*/

class Students {
  private theFirstnames: string;

  constructor(theFirstnames: string) {
    this.theFirstnames = theFirstnames;
  }

  get firstnames(): string {
     return this.theFirstnames;
    ;
  }
}

const students = new Students('John');
console.log(students.firstnames); // John // on accede à firstnames via l'instance et pas la class

/*
*Remarque Importante
Il est important de noter que, dans le deuxième exemple, pour éviter une confusion et des erreurs potentielles (comme une boucle infinie de récursion), le getter ne doit pas avoir le même nom que la propriété privée. Dans cet exemple, si vous nommez le getter exactement comme la propriété privée (firstname), cela causerait une erreur. Il est commun de voir la propriété privée préfixée avec un underscore (_firstname) pour éviter ce conflit.

*Conclusion
Les deux méthodes sont valides et utilisées en TypeScript et en JavaScript. Le choix entre ces méthodes dépend souvent des besoins spécifiques de votre application, des conventions de codage de votre équipe, et de votre préférence personnelle pour la clarté ou la simplicité du code.
*/
