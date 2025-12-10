//les fonction en javascript
console.log("section fonction");


//la fonction additionner() doit additionner des nobres et retourner le résultats
function additionner(chiffre1 , chiffre2){

    // la fonction additionner a besoin de deux paramètres chiffre1 et chiffre2
    let resultat = chiffre1 + chiffre2;

    //Enfin ,la fonction additionner retourne ou renvoie le résultat du calcul
    return resultat;

}
// j'utilise la fontion additionner (chifre1, chifre2) pour calculer la somme  de deux nombres

let somme = 15 +8;
let addition = additionner(15,8);
console.log("somme1",addition);


//la fonction soustraction
function Soustraction(chiffre1,chiffre2){
    let resultat = chiffre1 - chiffre2;
    return resultat;

}

let reste = Soustraction(25,12);
console.log("reste",reste);


//fonction Multiplication
function multiplication(chiffre1,chiffre2){
    let resultat = chiffre1 * chiffre2;
    return resultat;
}

let multiplier= multiplication(10,9);
console.log("produit",multiplier);