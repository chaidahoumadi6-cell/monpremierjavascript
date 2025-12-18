// je programme les événements déclenchés depuis le HTML

const elementboutonValiderDate = document.querySelector("#validerDate");


 // je déclare un objet date en utilisant la classe date ()
const maDate = new Date();


// Sélectionne l'élément HTML ayant l'id "dateDuJour" et le stocke dans une variable
let elementSpanDateDuJour = document.querySelector("#dateDuJour");


let elementSpanDateDuJourFormat2 = document.querySelector("#dateDuJourFormat2");


//mon événement "click"
elementboutonValiderDate.addEventListener("click", function () {


// Affiche un message dans la console pour indiquer que le bouton "valider date" a été cliqué
    console.log("### Je suis dans le bouton valider date ###");


    //Je décris l' action à réaliser lorsque je clique sur le bouton valider 
    elementSpanDateDuJour.textContent = maDate;
    elementSpanDateDuJourFormat2.textContent = maDate.toLocaleDateString();

});


//1.Tout d'abord, je récupère l' élement HTML que sera associé à l'évenement KEYDOWN

//événement "keydown"
let elementBoutonFonctionFleche = document.querySelector("#boutonFleche");


//2.J'assosie l'évenement KEYDOWN mon élément HTML en utilisant la méthode addEventListener().
// A l'intérieur de la méthod eAddEvent listener (), je passe une fonction flechée comme suit '() => {}
elementBoutonFonctionFleche.addEventListener("keydown",(event) => {


    // Affiche un message dans la console pour indiquer que l'événement "keydown" a été déclenché
    console.log("=== Je suis dans l'événement KEYDOWN ===");


    // Affiche dans la console la touche du clavier pressée lors de l'événement
    console.log("clé event:", event.key);
});

/**
 * mon evenement "change"
 * Je code un évenement de type CHANGE
 * L'evenement CHANGE va se déclencher lorsque le remplis le champ en tapant sur les touches du clavier
 */

//1.Tout d'abord, je récupère l' élement HTML que sera associé à l'évenement CHANGE
let elementInputNom = document.querySelector("#nom");


//2.J'assosie l'évenement CHANGE mon élément HTML en utilisant la méthode addEventListener().
// A l'intérieur de la méthod eAddEvent listener (), je passe une fonction flechée comme suit '() => {}


//Je dclare une variable
let messageSalutation;


// Sélectionne l'élément HTML ayant l'id "nomUtilisateur" et le stocke dans une variable
let elementSpanNomUtilisateur = document.querySelector("#nomUtilisateur");


// Ajoute un écouteur d'événement "change" sur le champ de saisie du nom
elementInputNom.addEventListener("change", (event) => {


    console.log(event.target.value);

    // Définit le message de salutation en utilisant la valeur saisie par l'utilisateur
    messageSalutation = `Bonjour ${event.target.value}`;

    // Met à jour le contenu texte du span avec le message de salutation
    elementSpanNomUtilisateur.textContent = messageSalutation;
    

});
/**
 * Envoyer le formulaire
 * je vais récupérer les données saisies sur le formulaire:nom,prénom,situation,date de naissance
 */

//je récupérer la balise <form> avec ses enfants;Ensuite,je stocke la balise dans la variable elementForm
let elementForm = document.querySelector("form");
console.log("elementForm:", elementForm);

//J'associe l'evénement 'submit'
elementForm.addEventListener("submit",(event) =>{

    // Empêche le comportement par défaut de l'événement
    event.preventDefault();

    console.log("### Je suis évenement submit du formuliare###");

    // Récupère la valeur saisie dans le champ ayant l'id "nom"
    const nom = document.querySelector("#nom").value;

    // Stocke le nom entré par l'utilisateur
    console.log("Nom:",nom);

    // Récupère la valeur saisie dans le champ ayant l'id "prénom"
    const prenom = document.querySelector("#prenom").value;

    // Stocke le prénom entré par l'utilisateur
    console.log("prenom:",prenom);

    const situation = document.querySelector("#salarie").value;
    console.log("Situation:", salarie);

    const Annéenaissance = document.querySelector("#anneeNaissance").value;
    console.log("anneeNaissance:",Annéenaissance);


    


});
