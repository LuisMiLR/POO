//Static

/*
Static signifie que vous pouvez accéder aux membres statiques d'une classe sans avoir besoin de créer une instance de cette classe.


Récapitulatif des Propriétés et Initialisation

Propriétés d'Instance :

Dans vos exemples précédents (comme avec CompteBancaire), les propriétés d'instance sont initialisées directement dans le constructeur ou en utilisant une valeur par défaut lors de leur déclaration. Ces propriétés sont spécifiques à chaque instance de la classe.

*Propriétés Statistiques :

Dans le cas de l'exemple avec Compteur (ci dessous), globalCount est une propriété statique, ce qui signifie qu'elle est partagée entre toutes les instances de la classe. Les propriétés statiques sont déclarées avec le mot-clé static et sont initialisées directement à leur déclaration ou dans le corps du constructeur si nécessaire.

Exemple :
*/

class Compteur {
    static globalCount: number = 0; // Initialisation lors de la déclaration
    private counter: number = 0;    // Initialisation lors de la déclaration

    constructor() {
        Compteur.globalCount++; // Incrémente la propriété statique à chaque nouvelle instance
    }

    getCounter() {
        return this.counter; // Retourne la valeur de la propriété d'instance
    }

    incrementCount() {
        this.counter++; // Incrémente la propriété d'instance
        Compteur.globalCount++; // Incrémente la propriété statique
    }
}

/*
Propriétés Statistiques : Généralement initialisées lors de leur déclaration pour fournir une valeur de départ uniforme pour toutes les instances. Les modifications ultérieures se font souvent dans le constructeur ou d'autres méthodes.

Static : ça veut dire qu'on peut avoir acces à la methode ou le champs sans avoir à faire un new, c'est assez particulier et à reserver à des cas particulier 
*/

//exemple de mehtode static 

class MathUtil {
    static add(x: number, y: number): number {
        return x + y;
    }
  }
  console.log(MathUtil.add(1,1))

  //voir le design pattern singleton : exploite cette capacité à pourvoir stocker des choses de façon static pour mettre à disposition une meme instance d'objet pour tout le programme