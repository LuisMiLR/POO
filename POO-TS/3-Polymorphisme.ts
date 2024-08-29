/*
Le polymorphisme permet à plusieurs classes de partager un même nom de méthode mais chaque classe peut avoir une implémentation différente de cette méthode. 
Ainsi, une méthode possédant le même nom sur une ou des classes faisant partie d'une hiérarchie pourra se comporter de manière différente si elle est redéfinie sur un ou des enfants appartenant à cette hiérarchie.

C'est le faite de pouvoir utiliser les methodes d'un contrat sans savoir qu'elle est l'implémentation qu'il y a derrière 

exemple : le polymorphisme c'est de pouvoir démarrer un véhicule (reprend exemple de class précedent) sans savoir si c'est un camion, une voiture, ou un velo ...

Le polymorphisme permet de manipuler les instances de diffentes class sous un même contrat 

dans l'heritage Une class parent doit pouvoir définir une méthode, par exemple démarrer et les class enfant vont pouvoir dériver spécialiser ce comportement, en redéfinissant la façon de démarrer.

(implémentation) avec l'interface c'est vraiment extreme puisque c'est vraiment au class fille d'implémenter le contrat

mais dans les deux cas de figure (heritage ou implémentation) on fait marcher le polymorphisme puisqu'on peut apeller start sur un véhicule sans savoir comment ça va etre implémenter derrière 
ex:
*/

// toute les class qui vont etendre animal vont pouvoir parler
//Cet animal parle, implementation un peu générique
class Animal {
  parler() {
    console.log('Cet animal parle.');
  }
}

//mais des qu'un class étend le concept de animal elle a la possibilité de redefinir, surcharger, de spécialiser le comportement 'de parler()'

class Chien extends Animal {
  parler() {
    console.log('Woof!');
  }
}

class Chat extends Animal {
  parler() {
    console.log('Meow!');
  }
}

const chien1 = new Chien();
const chat1 = new Chat();
chien1.parler(); // Output: Woof!
chat1.parler(); // Output: Meow!

/*

*/
