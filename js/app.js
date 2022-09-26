
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

//_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

let majuscule = indentity.toUpperCase();

console.log("majuscule:", majuscule);
console.log("indentity:", indentity);

// la variable identity n'a pas été modifié mais la fonction toUpperCase a été appliqué à majuscule

//_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
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
function direBonjour() {
    console.log("Bonjour");
}
direBonjour();

function direBonjourAkelkain(name) {
    
    console.log("Bonjour " + name);
}

direBonjourAkelkain(prenom);

function hello(name,city = "lyon") {
    console.log("Bonjour " + name);
    console.log("vous habitez " + city)
}
hello(prenom);

function add(a,b) {
    console.log(a+b);
    return a+b
}

console.log(add(9,5));

function div(a,b) {
    if (b !== 0) {
        return a/b
    } 
    

}

console.log(div(9,5));

function positive(num) {
    return (num > 0);
}
console.log(positive(5));
//_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
let Verifier_Nombre;
Verifier_Nombre = isNaN(age);


console.log("la prochaine ligne c'est la variable age ET Verifier_Nombre ")
console.log(age ,Verifier_Nombre);


   
function isValid(userinput) {
    if(!isNaN(parseInt(userinput))) {
        userinput = parseInt(userinput)
        if(userinput > 12 && userinput < 90 ) {return true
        }
    }
    else {
        return false;
    }

}

console.log(isValid("69"));

let resultat = isValid(age);

let resultatInverse = !resultat;

console.warn(resultat);
console.error(resultatInverse);
//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
//___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// let index = 0 ;
// while   (index < 4 )
//  {
//   index++
//   console.error(index);


//_____________________________________________________________________________________________________________________________________________________________________________________________________


// let index = 99 ; 
// while (index > 3 ) 
// {
//    index -=3
//    console.warn(index);
// }


//_______________________________________________________________________________________________________________________________________________________________
let index = 0;
let jaaj = "";

while(index <= 100) {
    if(index <= 10) {
        jaaj += index;
    }
    if(index >= 90 && index <= 100) {
        jaaj += index;
    }

    index++;
}
console.log(jaaj);




//________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________



let key = 0;
while(key > 100){
   console.log(key);
   key++;
}
// cela ne fonctionne pas car le while exige de compter key +1 a partir de 100 or, key est égal a 0 

let id = 0;
do {
   console.warn(id);
   id++;
} while(id > 100);
// cela ne fonctionne pas car le while exige de compter id +1 a partir de 100 or, id est égal a 0 