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