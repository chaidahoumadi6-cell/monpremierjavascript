// je programme les événements déclenchés depuis le HTML

const elementboutonValiderDate = document.querySelector("#validerDate");

 // je déclare un objet date en utilisant la classe date ()
const maDate = new Date();

//
let elementSpanDateDuJour = document.querySelector("#dateDuJour");

let elementSpanDateDuJourFormat2 = document.querySelector("#dateDuJourFormat2");

//mon événement "click"
elementboutonValiderDate.addEventListener("click", function () {

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

    console.log("=== Je suis dans l'événement KEYDOWN ===");

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

let elementSpanNomUtilisateur = document.querySelector("#nomUtilisateur");

elementInputNom.addEventListener("change", (event) => {

    console.log(event.target.value);

    messageSalutation = `Bonjour ${event.target.value}`;

    elementSpanNomUtilisateur.textContent = messageSalutation;
    

});

