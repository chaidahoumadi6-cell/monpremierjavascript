console.log("je suis dans la boucle")

let nobresTour = 0;

/*le boucle WHILE signifie "tant que"
*la boucle WHILE va exécuter la meme opération autant de fois que la limite n'est pas atteinte
*/
while(nobresTour < 7){
    console.log("tour de la maison :",nobresTour);

    //Et à chaque tour la variable nombrestour augmente de 1 (+1)
    nobresTour =nobresTour + 1;

    console.log("Nombre de tours après le passage",nobresTour)
}

//Boucle FOR
for(let indice = 0; indice < 3; indice ++){
    console.log("L'indice est de :",indice)

}
//Application de la boucle FOR sur une liste d'éleves
let listeEleves = ["MAdi-soilihi Ben","Oifikidine","Houmadi","Mchangama","Said","Mohamed","Chamssidine","Mohamed Ahamada","Madi Mlimi","Moussa","Mahamoudou","Fougeroux"];

console.log("Taille du tableau:",listeEleves);
console.log(listeEleves[0]);
console.log(listeEleves[1]);
console.log(listeEleves[5]);


for(let i = 0; i < listeEleves.length; i ++){
    console.log(listeEleves[i]);
}