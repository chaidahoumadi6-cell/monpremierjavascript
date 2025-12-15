
 
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

