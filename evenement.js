// je programme les événements déclenchés depuis le HTML

const elementboutonValiderDate = document.querySelector("#validerDate");

 // je déclare un objet date en utilisant la classe date ()
const maDate = new Date();

//
let elementSpanDateDuJour = document.querySelector("#dateDuJour");

let elementSpanDateDuJourFormat2 = document.querySelector("#dateDuJourFormat2");

elementboutonValiderDate.addEventListener("click", function () {

    console.log("### Je suis dans le bouton valider date ###");

   

    //Je décris l' action à réaliser lorsque je clique sur le bouton valider 
    elementSpanDateDuJour.textContent = maDate;
    elementSpanDateDuJourFormat2.textContent = maDate.toLocaleDateString();

});
