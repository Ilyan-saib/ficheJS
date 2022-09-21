
console.log('hello')


let age;
age = 14;
// age est une variable "number"
console.log(typeof age)
const prenom = "ilyan";
// prenom est une varaible "string"
let adition = 4 + 12;
console.log(adition);

let soustraction = 2 - 50;
console.log(soustraction);

let multiplication = 3 * 8;
console.log(multiplication);

let division = 7 / 2;
console.log(division);

let modulo = 5 % 2;
console.log(modulo);

let test = 3 > 5;
console.log(test);

console.log(typeof test);

// test est une variable de type "booléen"
// === <=  >= > <  == !== !=

const indentity = "Bonjour" + " " + prenom + " " + "vous avez" + " " + age + " " + "ans"

// cette opération est une concaténation



let majuscule = indentity.toUpperCase();

console.log("majuscule:", majuscule);
console.log("indentity:", indentity);

// la variable identity n'a pas été modifié mais la fonction toUpperCase a été appliqué à majuscule


age = prompt("Veuillez saisir votre age");
if (age <= 0) {
    console.log("vous ete un poisson pané");
}
if (age > 0 && age < 120) {
    console.log(age)
    console.log("votre age est validé");
}
else {
    console.log('je ne suis pas d accord');
}

if (age >= 21) {
    console.log('vous etes majeur');
} else if (age < 18) {
    console.log("vous etes mineur");
} else {
    console.log("vous etes majeurs mais pas au usa");
}