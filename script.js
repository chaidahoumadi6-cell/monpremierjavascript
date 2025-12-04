//ici,je rédige mon script javascript
        let nom = "Houmadi";
        let prenom = "Shahida";

        //Je declare ma variabe nom qui contient le texte
        console.log("Bonjour,je m'amppelle ",nom ,prenom );

        //Je declare mon age
        let age = 19 ;
        console.log("j'ai ",age);

         //je declare le prix*
        let prix =12;
        const nombreDecimal = 3.412;
        const nombreNegatif = -509;
        const nombreFraction = 1/3;
        console.log("prix:",prix );
        console.log("nombre décimal:",nombreDecimal );
        console.log("nombre negatif:",nombreNegatif );
        console.log("nombre fraction:",nombreFraction );
    /**/
        let salutation ="Bonjour les gens";
        console.log(salutation);

        let greeting ="good mornig";
        console.log(greeting);

        let andabu ="kwezi";
        console.log(andabu);

        let commune ="M'tsamboro";
        console.log(commune);

        let village ="M\'tsahara";
        console .log(village);

        //boolean permettent de stocker une information
        let vrai =true;
        console.log(vrai);

        let est_faux = false;
        console.log(est_faux);

        //la liste du tableau est encadrée par[]
        let eleves = ["Shahida","Rachida","Nasra","Karida"];

        //j'affiche le tableau:
        console.log(eleves);

        //indice ici ce le nombre
        //je recupere le 1er membre du tableau grace indice 0
        console.log(eleves[0]);

        //j'ai récupere le 2e memdre du tableau grace indice 1
        console.log(eleves[1]);

        //j'ai récupere le 3e membre du tableau grace indice 2
        console.log(eleves[2]);

        //j'ai récupere le 4e memdre du tableau grace indice 3
        console.log(eleves[3]);


        let client ={
            nom:"Houmadi",
            village:"pamandzi",
            age:19,
            scores: [2,11,6]
        };

        console.log(client);
        //j'ai récupere le valeur associée à une propriéte
        console.log(client.nom);
        console.log(client.village);
        console.log(client.age);
        console.log(client.scores);
        console.log(client.scores[1]);