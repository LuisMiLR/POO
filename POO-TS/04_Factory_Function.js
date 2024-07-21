//Factory Function : c'est une maquette (model) pour créer des objects en JS
//au lieu d'utiliser les classes 

const utilisateur = (noms, email, ...amis) => {
    return {
        noms, email, amis,
        login(){
            console.log(`${email} est connecté(e)`);
        },
        logout(){
            console.log(`${email} est déconnecté(e)`);
        }
    }
}

//on crée les utilisateur de cette maninière 
const util1 = utilisateur('Musole Louis', 'musole@gmail.com', 'Gloire', 'Esther');
const util2 = utilisateur('Blaise Tonton', 'tonton@gmail.com', 'Yvette');
const util3 = utilisateur('Jonathan Jigy', 'jonathan@gmail.com', 'Senga', 'Clara', 'Julie');

//on affiche les utilisateurs 
console.log(util1);
console.log(util2);
console.log(util3);

//on peut acceder aux methodes
util1.login();
util1.logout();

util2.login()
util2.logout()

//les factory fonction permenttent de structurer son code