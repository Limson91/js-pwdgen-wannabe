// - Chiedere all'utente il suo nome;
//     - dichiarare una variabile;
let userName;

//     - assegnare alla variabile il dato inserito nel prompt;
userName = prompt("Inserire il proprio nome");
console.log(userName);

// - Chiedere all'utente il suo cognome;
//     - dichiarare una variabile;
let userSurname;

//     - assegnare alla variabile il dato inserito nel prompt;
userSurname = prompt("Inserire il proprio cognome");
console.log(userSurname);

// - Chiedere all'utente il suo colore preferito;
//     - dichiarare una variabile;
let userFavouriteColor;

//     - assegnare alla variabile il dato inserito nel prompt;
userFavouriteColor = prompt("Inserire il colore preferito");
console.log(userFavouriteColor);

// - Generazione numero random;
let minNumber = 1;
let maxNumber = 20;
let n= Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
console.log(n);

// - Concatenazione nome, cognome, colore e numero.
//     - dichiarare una variabile che contiene i quattro elementi nome, cognome, colore, numero casuale.
let pwd = userName + userSurname + n;
console.log(pwd);

// - Stampare la pw dentro un h1.
//     - denominare con un id="password" h1 del HTML;
//     - recuperare da JS l'elemento HMTL con id="password";
const messageDomElement = document.getElementById("password");

//     - modificare l'inner HTML di h1 col valore della variabile.
messageDomElement.innerHTML = pwd; 