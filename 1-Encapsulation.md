## 1- L'encapsulation 

La notion d'encapsulation est fondamentale dans la POO.

Regrouper des données et des méthodes :

Un objet combine des données (appelées attributs) et des fonctions (appelées méthodes) dans une seule unité.

#### Définition

L'encapsulation est un principe fondamental de la programmation orientée objet qui consiste à restreindre l'accès direct aux attributs d'une classe. Cela est réalisé en déclarant ces attributs comme privés et en fournissant des méthodes publiques pour y accéder et les modifier.

Objectifs de l'encapsulation
Protéger les données : Empêcher les modifications directes et non contrôlées des attributs.
Faciliter la maintenance : En cachant les détails internes, on peut modifier l'implémentation sans impacter le code qui utilise l'objet.
Améliorer la lisibilité : Le code devient plus clair en séparant l'utilisation de l'objet de son implémentation interne.

#### Exemple

```typescript
class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

## Visibilité des attributs et des méthodes

La plupart des langages objets permettent de contrôler la "visibilité" des attributs et méthodes des instances d'une classe, c'est-à-dire la possibilité ou non, pour le code client de ces instances, d'accéder directement à ces attributs et méthodes.

On distingue notamment les attributs et méthodes accessibles directement par le code client (dits "publics") ou non (dits "privés"). La plupart des langages disposent également d'attributs "protégés", ce qui est lié à la notion d'héritage, dont nous parlerons plus tard.

Empêcher le code client de modifier directement des attributs d'une instance, en les indiquant comme "privés", sert l'objectif d'encapsulation du code. De cette façon, on oblige les opérations sur l'objet à être effectuées via "l'interface" fournie par les différentes méthodes. On peut ainsi éviter, entre autres, des modifications accidentelles d'attributs de l'objet par du code extérieur, lesquelles peuvent être sources de bugs.
"façon, on oblige les opérations sur l'objet à être effectuées via 'l'interface' fournie par les différentes méthodes" : signifie que les modifications et interactions avec les attributs d'un objet doivent se faire uniquement à travers des méthodes spécifiques et contrôlées, plutôt que d'accéder directement aux attributs de l'objet.




### Chapitre 3 : Getters / Setters

#### Définition

Les getters (ou accesseurs) sont des méthodes qui permettent de récupérer la valeur d'un attribut privé. Ils sont appelés comme des propriétés, sans parenthèses.

#### Création d'un Getter

```typescript
public get name(): string {
  return this._name;
}

public get age(): number {
  return this._age;
}
```

#### Utilisation d'un Getter

```typescript
const person = new Person("Alice", 30);
console.log(person.name); // Alice
console.log(person.age);  // 30
```


#### Définition Setters

Les setters (ou mutateurs) sont des méthodes qui permettent de modifier la valeur d'un attribut privé. Ils incluent souvent des validations pour s'assurer que les valeurs assignées sont correctes. Ils sont appelés comme des propriétés, avec une valeur assignée.

#### Création d'un Setter

```typescript
public set name(newName: string) {
  if (newName.length > 0) {
    this._name = newName;
  } else {
    throw new Error("Le nom ne peut pas être vide");
  }
}

public set age(newAge: number) {
  if (newAge >= 0) {
    this._age = newAge;
  } else {
    throw new Error("L'âge ne peut pas être négatif");
  }
}
```

#### Utilisation d'un Setter

```typescript
person.name = "Bob";
person.age = 35;

console.log(person.name); // Bob
console.log(person.age);  // 35
```

### Chapitre 5 : Avantages des Getters et Setters

1. **Encapsulation** :
   - Les attributs privés ne peuvent pas être accédés directement en dehors de la classe, favorisant une meilleure encapsulation.

2. **Contrôle et Validation** :
   - Les setters permettent d'ajouter des validations, assurant que seules des valeurs correctes sont assignées aux attributs.

3. **Sécurité** :
   - Réduction des risques de modifications accidentelles ou incorrectes des attributs par du code extérieur.

4. **Facilité de Maintenance** :
   - Les getters et setters permettent de changer la manière dont les attributs sont manipulés sans affecter le code client.

### Chapitre 6 : Exemple Complet

Voici un exemple complet pour illustrer la création et l'utilisation des getters et setters :

```typescript
class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  public get name(): string {
    return this._name;
  }

  public set name(newName: string) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      throw new Error("Le nom ne peut pas être vide");
    }
  }

  public get age(): number {
    return this._age;
  }

  public set age(newAge: number) {
    if (newAge >= 0) {
      this._age = newAge;
    } else {
      throw new Error("L'âge ne peut pas être négatif");
    }
  }
}

const person = new Person("Alice", 30);

// Accéder aux attributs via les getters
console.log(person.name); // Alice
console.log(person.age);  // 30

// Modifier les attributs via les setters
person.name = "Bob";
person.age = 35;

console.log(person.name); // Bob
console.log(person.age);  // 35

// Tentative de définir un âge négatif - cela lèvera une erreur
try {
  person.age = -5;
} catch (e) {
  console.error(e.message); // L'âge ne peut pas être négatif
}
```

### Conclusion

L'utilisation des getters et setters en TypeScript permet de contrôler l'accès aux attributs privés d'une classe de manière sécurisée et contrôlée. Ils favorisent l'encapsulation, ajoutent des validations et améliorent la maintenance du code. Adopter cette pratique est essentiel pour écrire du code robuste et maintenable en programmation orientée objet.