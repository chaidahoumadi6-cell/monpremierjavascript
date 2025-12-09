//Addition

let prixUnitaire = 13;
let valeurAjoutee = 7;
let valeurReduction = 5;
let valeurDivise = 4;

//ma premiére technique d'addition
let prixAddition1 = 3+7;

//j'affiche la valeur de la variable prix addition 
console.log("prixAddition",prixAddition1);

//Deuxiéme métho de d' addition de ma variable
let prixAddition2 = prixUnitaire + valeurAjoutee;

console.log("prixAddition2",prixAddition2);

//Addition des chaines de caractères

let eleves1 = "Fatima";
let eleves2 = "Amina";

//je concatène deux variable résults attendu: "FatimaAmina"
console.log(eleves1 + eleves2);

//je concatène deux variable et j'ajoute une espace entre les deux variable rèsults attendu : "Fatima Amina"
console.log(eleves1 +" "+ eleves2);

//je concatène deux variable et je les stocke dans une variable
let elevescombo = eleves1 +" "+ eleves2;

console.log("elevescombo:",elevescombo)

//Soustraction -
let prixReduit = prixUnitaire - valeurReduction;


console.log("prix réduit:",prixReduit +"€");

//Multiplication
let prixMultiplie = prixUnitaire * valeurAjoutee;

console.log("prix multiplie:",prixMultiplie);

//Division
let prixDivise = prixUnitaire / valeurAjoutee;

console.log("résultat du prix Divise:",prixDivise);


/**Les opérateurs de comparaison
*Nous allons comparer les valeurs stocker dans les variable
*/
console.log("section comparaison");

let village1 = "Mamoudzou";

let commune1 = "Mamoudzou";

/*je vérifie que les deux variables ont la meme valeur
le == double égal permet de comparer l'égalité des 
*/
console.log(village1 == commune1);

/*je vérifie que les deux variables ont la meme type de valeur
le === triple égal permet de comparer les valeurs et le type de données
*/
console.log(village1 === commune1);

//signe > signifie : "supérieur à "ou bien "plus grand que "
let age2 = 12;
let distanceParcourue = 5;

//Est-ce que l'age est supérieur à la distance parcourue
console.log(age2 > distanceParcourue);

//est -ce que l'age inférieur à la distance parcourue
console.log(age2 < distanceParcourue);

//est -ce que l'age est 
console.log(age2 >= distanceParcourue)

// est -ce que l'age est inférieur que égal à la distance parcourue
console.log(age2 <= distanceParcourue)
 
//est -ce le village est différent de la commune
console.log(village1 != commune1);

//est -ce la commune est strictement différent du village
console.log(village1 !== commune1);