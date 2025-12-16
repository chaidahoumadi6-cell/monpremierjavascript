
 
 // Vérifie que l'année saisie est valide
 /*
if(anneeNaissance 2005  anneeNaissance <= anneeActuelle) {
    let age = anneeActuelle - anneeNaissance;
    ageAffiche = "age:" + age + "ans";

};*/


//je récupère un élement situé dans le fichier HTML
 let elementBoutonValide = document.getElementById("boutonValide");

 //La variable elementBoutonValide contient maintenant le bouton HTML
 console.log(document.getElementById("nom") );

//j'affiche l'élément récupère dans la console
 console.log( elementBoutonValide.clientHeights);

 let elementInputNom = document.querySelector("#nom")

 console.log(document.head);
 console.log(document.title);
 console.log(document.body);
 
 //je récupère l' élement HTML dont l'identifiant est recensement
 let elementDivRecensement = document.querySelector("#recensement");
 console.log(elementDivRecensement);
 
 let elementP = document.querySelector("#paragraphe1");
 console.log(elementP);

 elementBoutonValide.addEventListener("click",function () {
console.log("elementboutonValider:", elementBoutonValide);
 });

 //je récupère la liste des communes de Mayotte
 let elmentListeCommunes = document.querySelector("#listecommunes");

 //puis je stocke les communes dans la variable Elment Liste Communes 
 console.log(elmentListeCommunes);
 
 //j' utilise la boucle For pour parcourir la liste ElmentListeCommunes
 for (let i = 0; i < elmentListeCommunes.length ; i++) {

    console.log(elmentListeCommunes[i]);
}

//j'utilise querySelectorAll pour récupèrer tous les membres de la meme classe
let elementClassCommunes = document.querySelectorAll(".communes");


//Cette forinstruction crée une boucle 
for (let i = 0; i < elementClassCommunes.length ; i++) {


    console.log(elementClassCommunes[i]);


   // l'intérieur d'une boucle, elle ne sera visible qu'à l'intérieur de la boucle.
    console.log(elementClassCommunes[i].textContent);
}



//j' insère des balises dans le fichier HTML grace au code javascript

//je crée un élement dans le (balise) nomé <section>
let elementSection = document.createElement("section");

//je récupère la balise <body> puis je stocke <body> dans la variable elementBody
let elementBody = document.querySelector("body");

//Ajoute cet élément HTML comme enfant à l’intérieur de celui-ci. 
elementBody.appendChild(elementSection);

let nouveauTitre = document.createElement("h3");

nouveauTitre.textContent = "Mon titre de section";


//Elle ajoute elementSection à la fin du <body> de la page.
elementSection.appendChild(nouveauTitre);


let elementMaman = document.createElement("Maman");

elementBody.appendChild(elementMaman);

let nouveauTitre1 = document.createElement("h3");
nouveauTitre1.textContent ="Bonjour Maman";

//créer la balise IMG
let elementimage = document.createElement("img");

//Donner le chemin de l'image
elementimage.src = "fruitss.jpg";

//
elementimage.setAttribute("alt","Mon fruite");

elementimage.className ="image-fruits";

elementimage.classList.add("image","image2");

//supprimer une classe de l' élément img
elementimage.classList.remove("image2");


//Ajouter l'image dans le body
elementBody.appendChild(elementimage);

