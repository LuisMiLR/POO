//Object literal [Encapsulation]
//on créé un objet avec les même propriété que la programmation procedurale
const utilisateur = {
    noms : 'Musole Louis',
    email : 'musole@gmail.com',
    amis : ['Steven', 'Jonathan'],
    //fonctions 
    login(){
        console.log(`${this.email} est connecté(e)`);//this fait référence à notre objet, et email est la propriété de notre utilisateur
    },
    logout(){
        console.log(`${this.email} est déconnecté(e)`);
    }
} // on vient d'encapsuler les propriétés et les fonctions dans l'objet utilisateur si on fait un console.log(utilisateur) nous avons l'ensemble de l'objet qui est affiché
 

const utilisateur2 = {
    noms : 'Jonathan Louis',
    email : 'mue@gmail.com',
    amis : ['Steven', 'Jonathan'],
    login(){
        console.log(`${this.email} est connecté(e)`);
    },
    logout(){
        console.log(`${this.email} est déconnecté(e)`);
    }
}

console.log(utilisateur2);
console.log(utilisateur);


// on peut faire console.log(utilisateur.nom || utilisateur['nom'] /Accès aux propriètés d'un object)
console.log(utilisateur.noms);
console.log(utilisateur.email);

console.log(utilisateur['noms']);
console.log(utilisateur['email']);

//reaffecté une valeur sur la propriété d'un objet : utilisateur.nom = 'baise' || utilisateur[nom] = blaise@hotmail.com
utilisateur.noms = 'Blaise King';
utilisateur['email'] = 'blaise@gmail.com'
console.log(utilisateur);