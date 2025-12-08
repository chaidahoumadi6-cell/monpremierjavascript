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
            scores: [2,11,6],
        };

        console.log(client);
        //j'ai récupere le valeur associée à une propriéte
        console.log(client.nom);
        console.log(client.village);
        console.log(client.age);
        console.log(client.scores);
        console.log(client.scores[1]);
        
        //je définis un objet qui représente un joueur de football proffessionnel
        let joueurprofessionnel ={

            //la proriété "nom" désigne le nom du joueur
            nom:"zinedine zidane",

            //indique les nationalite du joueur
            nationalite:["française", "algérienne"],

            //désigne la dale de naissance d
            datedenaissance:23061972,
            taille:1.85,
            piedfort:"droit",
            poste:"milieu offensif"
        };
        //j' affiche l'ensemble de l'objet 
        console.log(joueurprofessionnel);
        console.log(joueurprofessionnel.nom);

         //j' affiche la première nationalite de l'objet du joueur
        console.log(joueurprofessionnel.nationalite[0]);

        console.log(joueurprofessionnel.datedenaissance);
        console.log(joueurprofessionnel.taille);
        console.log(joueurprofessionnel.piedfort);
        console.log(joueurprofessionnel.poste);
        
        let politique ={
        
            nom:"Estelle youssoufa",
            datedenaissance:31071978,
            née:"Chatenay-Malabry en france",
            age:47,
            Entreeenfonction:22062022,
            profession:"journaliste",
            precedepar:"Ramlati Ali",

        };

        console.log(politique);
        console.log(politique.nom);
        console.log(politique.datedenaissance);
        console.log(politique.née);
        console.log(politique.age);
        console.log(politique.Entreeenfonction);
        console.log(politique.profession);
        console.log(politique.precedepar);
        








