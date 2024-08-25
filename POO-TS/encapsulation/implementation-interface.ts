//Implementation avec les interfaces 

/*
Ce concept est très similaire à celui de l'héritage et c'est très important en typeScrip car il est extrément puissant dans ce language en particulier

Il s'agit d'une espèce de modèle et dire toute les class qui implemente véhicul elle doivent definir ces fonctions la (voir exemple:) 
*/
 
interface vehicule {
    start(): void;
    accelerate(speed:number):void;
    stop():void;
}  


class Car implements vehicule {
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

/*
les interfaces c'est la façon de définir un contrat 

Nous avons parlez précedement de l'encapsulation et du service rendu par les class et du contrat quel mettent à disposition et bien avec l'interface vous aller juste definir le contrat, sans definir l'implémentation (comme la partie interface dans la class en exemple ci dessus) 

ça veux dire que dans mon programme je vais pouvoir utiliser des véhicules et je m'attends a ce que les véhicules puissent fournir ces opérations la (methodes)

Plusieur class peuvent respecter le meme contrat ex : une class voiture une class camion.. tout en respectent le contrat

comment fait on ceci ? 

avec le mot clé implements 
On va definir 
*/