
 
 // Vérifie que l'année saisie est valide
if(anneeNaissance > 2005 & anneeNaissance <= anneeActuelle) {
    let age = anneeActuelle - anneeNaissance;
    ageAffiche = "age:" + age + "ans";

};
else{
    ageAffiche ="age";
};


console.log("age :",age );