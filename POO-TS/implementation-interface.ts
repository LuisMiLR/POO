//Implementation avec les interfaces 

/*
Ce concept est très similaire à celui de l'héritage et c'est très important en typeScrip car il est extrément puissant dans ce language en particulier

Il s'agit d'une espèce de modèle et dire toute les class qui implemente véhicul elle doivent definir ces fonctions la (voir exemple:) 
*/
 
interface Vehicle {
    start(): void;
    accelerate(speed:number):void;
    stop():void;
}  


class Car implements Vehicle {
    start() {
        console.log("The car starts");
    }

    accelerate(speed: number) {
        console.log('The car accelerates to ${speed} hm/h');
    }

    stop() {
        console.log("The car stop");
    }

}

class Bicycle implements Vehicle {
    start() {
        console.log("The bicycle begins to pedal.");
    }

    accelerate(speed: number) {
        console.log(`The bicycle reaches a speed of ${speed} km/h.`);
    }

    stop() {
        console.log("The bicycle stops.");
    }
}


/*
les interfaces c'est la façon de définir un contrat 

Nous avons parlez précedement de l'encapsulation et du service rendu par les class et du contrat quel mettent à disposition et bien avec l'interface vous aller juste definir le contrat, sans definir l'implémentation (comme la partie interface dans la class en exemple ci dessus) 

ça veux dire que dans mon programme je vais pouvoir utiliser des véhicules et je m'attends a ce que les véhicules puissent fournir ces opérations la (methodes)

Plusieur class peuvent respecter le meme contrat ex : une class voiture une class camion.. tout en respectent le contrat

comment fait on ceci ? 

avec le mot clé implements 
On définit une interface qui imposera aux classes qui l’implémenteront de contenir toutes les méthodes et propriétés déclarées dans l'interface

Du moment que la classe respecte l’interface (nom, types, retours attendus) elle peut y faire ce qu’elle veut.

C’est donc bien un contrat entre l’interface et la/les classe/s qui l’implémentent.

on déclare les methodes dans l'interface et on les définits dans les classe
C’est donc bien un contrat entre l’interface et la/les classe/s qui l’implémentent.

Pour rappel une class on l'extend et une interface on l'implements
*/

const myCar: Vehicle = new Car();
myCar.start();             // Output: The car starts.
myCar.accelerate(60);      // Output: The car accelerates to 60 km/h.
myCar.stop();              // Output: The car stops.

const myBicycle: Vehicle = new Bicycle();
myBicycle.start();         // Output: The bicycle begins to pedal.
myBicycle.accelerate(20);  // Output: The bicycle reaches a speed of 20 km/h.
myBicycle.stop();          // Output: The bicycle stops.

// on a pu passé les deux variables dans le tableau et ont peut le fournir à une autre fonction sans quel sache qu'on a crée ces variables
const mesVehicules: Vehicle[] = [myCar, myBicycle]
