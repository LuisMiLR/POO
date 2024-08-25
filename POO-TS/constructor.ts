/*
*constructor 


le  le constructeur c'est ce qui est appeller lorsqu'on fait un new ... il initialise l'objet

Initialisation d'une Propriété avec une Valeur Passée en Paramètre

Lorsque vous passez une valeur au constructeur pour initialiser l'objet, 
vous pouvez utiliser cette valeur pour configurer l'état initial de l'objet. Voici un exemple :
*/

class CompteBancaires {
    solde: number;

    constructor(soldeInitial: number) {
        this.solde = soldeInitial; // Utilise la valeur passée en paramètre
    }
}

/*
L'initialisation d'une propriété avec une valeur passée en paramètre est particulièrement utile lorsque vous souhaitez que la donnée soit fournie au moment de l'instanciation de l'objet.  

Utilisation de Valeurs Passées en Paramètre

Contexte :
Quand vous créez un objet à partir d'une classe, vous pouvez vouloir initialiser ses propriétés avec des valeurs spécifiques fournies au moment de l'instanciation. Cela est souvent le cas lorsque chaque instance doit commencer avec des valeurs différentes.
*/

class CompteBancaire {
    solde: number;

    constructor(soldeInitial: number) {
        this.solde = soldeInitial; // Initialise la propriété avec la valeur passée en paramètre
    }
}

const monCompte = new CompteBancaire(1000); // Initialise solde à 1000

/*
Avantages :
Flexibilité : Permet à chaque instance d'être initialisée avec des valeurs spécifiques, offrant ainsi plus de flexibilité pour créer des objets avec différents états initiaux.

Personnalisation : Vous pouvez facilement créer des objets avec des configurations différentes, ce qui est pratique pour des scénarios où les objets doivent démarrer avec des valeurs variées.
*/

/*
*Initialisation d'une Propriété avec une Valeur Par Défaut


Pour comparer, si vous préférez une initialisation avec une valeur fixe par défaut, vous utiliseriez un constructeur sans paramètre ou un constructeur qui initialise la propriété avec une valeur fixe :
*/
class CompteBancairez {
    solde: number;

    constructor() {
        this.solde = 0; // Valeur par défaut
    }
}

// Création d'une instance avec solde initial par défaut (0)
const monComptes = new CompteBancairez();

//////
/*
Exemple sans Constructeur:
*/

class Compteurs {
    public counter: number = 0; // Initialisation lors de la déclaration

    increment() {
        this.counter++;
    }
}

const objet = new Compteurs();
console.log(objet.counter); // Affiche 0 (valeur par défaut)
objet.increment();
console.log(objet.counter); // Affiche 1 (après incrémentation)

/*

Initialisation Directe :

La propriété counter est initialisée directement lors de sa déclaration avec une valeur par défaut de 0.
Cela signifie que chaque fois qu'une instance de Compteur est créée, counter commence avec 0 sans avoir besoin d'un constructeur pour cette initialisation.

Simplicité du Code :

Si vous n'avez pas besoin d'une logique supplémentaire (que ce soit private ou public) pour initialiser les propriétés ou d'arguments passés au constructeur pour initialiser les propriétés, vous pouvez omettre le constructeur.
Dans cet exemple, la propriété counter a une valeur par défaut simple qui est constante et ne nécessite pas de calcul ou de condition.

Conclusion

*Sans Constructeur : 
Lorsque l'initialisation des propriétés est simple et fixe, vous pouvez initialiser directement lors de la déclaration. Cela rend le code plus court et plus clair.

*Avec Constructeur : 
Lorsque vous avez besoin d'une initialisation plus flexible ou de logique spécifique, vous utilisez un constructeur. Cela permet une initialisation conditionnelle ou basée sur des arguments.

*/