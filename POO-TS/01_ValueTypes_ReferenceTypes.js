//Value types (primive types)
//[Number, String, Boolean, Symbol, Null, Undefined]
let x = 10;
let y = x;
console.log(x, y);//10 10

x = 20;
console.log(x, y);// 20 10 

//Reference Types [Object, Array]
let a = { valeur : 10};
let b = a;
console.log(a, b);//10 10 

a.valeur = 20;
console.log(a, b);//20 20
