//Polymorphisme : Capacité d'un object à prendre plusieurs formes
class User {
    constructor(noms){
        this.noms = noms;
    }
    login(){
        console.log(`${this.noms} connecté entant qu'utilisateur`);
    }
}

class Admin extends User {
    login(){
        super.login();
        console.log(`${this.noms} connecté entant qu'admin`);
    }
}

// instance d'utilisateur 
const user1 = new User('Musole Louis'); //connecté entant qu'utilisateur
const admin = new Admin('Blaise Tarzan'); //connecté entant qu'admin`
//appel des methodes
user1.login();
admin.login();
console.log(user1);