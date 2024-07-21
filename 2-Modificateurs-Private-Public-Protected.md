### Chapitre 2 : Attributs Privés / public / protected (Modificateurs)

#### Définition Attributs Privés 

Les attributs privés sont des variables d'instance d'une classe qui ne peuvent pas être accédées directement en dehors de la classe. Ils sont déclarés avec le mot-clé `private`.

#### Exemple

```typescript
class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
}
```

#### Définition Attributs Publics

Les attributs publics sont des variables d'instance d'une classe qui peuvent être accédées et modifiées directement en dehors de la classe. Ils sont déclarés avec le mot-clé public, mais par défaut, les attributs sans spécificateur de visibilité sont également publics.

Par défaut, tous les membres d'une classe dans TypeScript sont publics. Tous les membres publics sont accessibles partout sans aucune restriction.

#### Exemple
```typescript

class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person("Alice", 30);
console.log(person.name); // Alice
person.age = 35;
console.log(person.age);  // 35
```


#### Définition protected

Le modificateur `protected` en TypeScript est utilisé pour restreindre l'accès aux membres d'une classe, tout en permettant à ces membres d'être accessibles depuis les classes dérivées (sous-classes). 

#### Accès aux Membres Protégés

- **Accessible dans la classe** : Les membres marqués comme `protected` peuvent être accédés et modifiés à l'intérieur de la classe où ils sont définis.
- **Accessible dans les sous-classes** : Les membres marqués comme `protected` peuvent également être accédés et modifiés par les classes qui héritent de la classe de base.
- **Inaccessible en dehors** : Les membres marqués comme `protected` ne peuvent pas être accédés directement depuis l'extérieur de la classe ou de ses sous-classes.

#### Comparaison avec `private`

- **`private`** : Les membres marqués comme `private` ne sont accessibles qu'à l'intérieur de la classe dans laquelle ils sont définis. Ils ne peuvent pas être accédés par les sous-classes.
- **`protected`** : Les membres marqués comme `protected` sont accessibles dans la classe et ses sous-classes.

#### Exemple

```typescript
class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  protected getName(): string {
    return this.name;
  }
}

class Employee extends Person {
  private empCode: number;

  constructor(name: string, empCode: number) {
    super(name);
    this.empCode = empCode;
  }

  public displayEmployeeInfo(): void {
    console.log(`Name: ${this.getName()}, Employee Code: ${this.empCode}`);
  }
}

const emp = new Employee("Alice", 123);
emp.displayEmployeeInfo(); // Name: Alice, Employee Code: 123

// Tentative d'accès direct à un membre protégé ou privé (provoquera une erreur)
// console.log(emp.name); // Erreur : 'name' est protégé
// console.log(emp.getName()); // Erreur : 'getName' est protégé
// console.log(emp.empCode); // Erreur : 'empCode' est privé
```

#### Points Clés

1. **Déclaration des Membres Protégés** :
   - Utilisez le mot-clé `protected` devant les membres de la classe.
   ```typescript
   protected memberName: type;
   ```

2. **Accès dans les Sous-classes** :
   - Les sous-classes peuvent accéder aux membres protégés définis dans la classe parente.
   ```typescript
   class ChildClass extends ParentClass {
     someMethod() {
       this.protectedMember; // Accessible
     }
   }
   ```

3. **Encapsulation et Héritage** :
   - `protected` permet de protéger les données tout en facilitant leur utilisation dans les classes dérivées, favorisant ainsi la réutilisation du code et l'héritage.

#### Utilisation

- **Quand utiliser `protected`** :
  - Lorsque vous souhaitez qu'un membre soit accessible uniquement à l'intérieur de la classe et de ses sous-classes.
  - Lorsque vous souhaitez permettre aux sous-classes de manipuler ou d'utiliser les membres définis dans la classe parente sans exposer ces membres à l'extérieur.

#### Conclusion

Le modificateur `protected` en TypeScript est un outil puissant pour contrôler l'accès aux membres d'une classe tout en permettant aux sous-classes de les utiliser. Il aide à maintenir une encapsulation stricte tout en favorisant l'héritage et la réutilisation du code.

