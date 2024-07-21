### Définition Simplifiée

Une collection de tuples est un groupe de petites listes appelées tuples. Chaque tuple contient un nombre fixe de valeurs, qui peuvent être de différents types (comme des nombres, des chaînes de caractères, etc.). Les tuples sont utiles pour stocker des enregistrements de données variés de manière organisée.

### Exemple

Imaginez une liste où chaque élément représente une personne avec son nom, son âge et si elle est active ou non. Chaque personne est un tuple, et la liste complète est une collection de ces tuples.

```typescript
// Définir un tuple pour une personne
type PersonTuple = [string, number, boolean];

// Créer une collection de tuples
let people: PersonTuple[] = [];
people.push(['Alice', 30, true]);
people.push(['Bob', 25, false]);
people.push(['Charlie', 35, true]);

// Afficher les informations de chaque personne
people.forEach(person => {
  console.log(`Nom: ${person[0]}, Âge: ${person[1]}, Actif: ${person[2]}`);
});
```

### Points Clés

1. **Ordre Fixe** : Chaque tuple a un ordre fixe de valeurs.
2. **Types Différents** : Les valeurs dans un tuple peuvent être de types différents.
3. **Immutabilité** : Une fois créé, le contenu d'un tuple ne change pas.

Les collections de tuples sont utiles pour gérer des ensembles de données divers tout en maintenant une structure claire et organisée.
