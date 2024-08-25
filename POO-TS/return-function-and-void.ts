/*
*Quand Utiliser return dans une Méthode

 La décision de mettre ou non un return dans une méthode dépend du rôle que joue la méthode et de ce que vous souhaitez qu'elle accomplisse. 
 Voici une explication détaillée pour clarifier quand et pourquoi utiliser un return dans vos méthodes.

 1- Méthodes qui retournent une Valeur : 
 Si une méthode est conçue pour calculer une valeur ou extraire des informations et doit renvoyer un résultat, vous devez utiliser return. 
 
 Par exemple, une méthode qui calcule une aire ou qui obtient un solde doit retourner la valeur calculée.
 exemple: 
*/

class Compte {
    solde: number;

    constructor(soldeInitial: number) {
        this.solde = soldeInitial;
    }

    // Méthode qui retourne une valeur
    getSolde(): number {
        return this.solde; // Retourne le solde actuel
    }
}

const mesCompte = new Compte(1000);
console.log(mesCompte.getSolde()); // Affiche : 1000

/*
Dans ce cas, return est utilisé pour fournir une valeur à l'appelant de la méthode.


2- Méthodes qui Effectuent une Action mais ne Retournent Rien : 

Si une méthode est conçue pour effectuer une action, comme modifier l'état d'un objet ou effectuer une opération, et que vous n'avez pas besoin de retourner une valeur à l'appelant, vous pouvez utiliser void comme type de retour et ne pas inclure return.
*/

// Méthode qui modifie l'état de l'objet

// deposer(montant: number): void {
//     if (montant > 0) {
//         this.solde += montant; // Modifie le solde mais ne retourne rien
//     }
// }

/*
*Résumé des Cas d'Utilisation

Retourner une Valeur :
 Utilisez return lorsque la méthode doit fournir une valeur à l'appelant. Cela est utile pour les méthodes de calcul ou d'extraction de données.
*/

function ajouter(a: number, b: number): number {
    return a + b; // Retourne le résultat de l'addition
}

/*
Effectuer une Action : 
Ne retournez rien (void) lorsque la méthode est utilisée pour modifier l'état d'un objet ou réaliser une action sans besoin de renvoyer une valeur. 


*/


