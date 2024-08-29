//l'Heritage

class Animal {
  constructor(public nom: string) {}
}

class Dog extends Animal {
  private couleurDesPoils: string;

  constructor(public nom: string, couleurDesPoils: string) {
    super(nom);
    this.couleurDesPoils = couleurDesPoils;
  }
}

/*
lorsqu'il y a bcp de parametre dans les class extends il faut les répercuter partout dans les class filles 
pour eviter cela qu'il y a de l'heritage volumineux, il vaut mieux prendre un objet qui comprend tout les parametres (Le parameter object)
*/
