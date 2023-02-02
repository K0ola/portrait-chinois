let text=[];

fetch('data.json').then(function (response) {
    response.json().then(function (data) {
        console.log(data);
        const modele = "<div class=\"box\" id=b{{id}}><p class=\"text-box\" id=t{{id}}>{{analogie}}</p></div>";
        const link = "https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=1s";

        let main = document.getElementById("main");

        main.innerHTML = "<div class=\"background_change\" id=\"back\"></div>" + "<div id=\"boite_principale\"> </div>" + "<div id=\"joke\"> <a class=\"joke_bloc\" href= " + link + " alt=\"UwU\"></a></div>" + "<div id=\"moon\"></div>";

        let boites = "";
        data.forEach(function (element) {
            boites += modele
            element.analogie = element.analogie.charAt(0).toUpperCase() + element.analogie.slice(1);
            Object.keys(element).forEach(function (clef) {
                boites = boites.replaceAll("{{" + clef + "}}", element[clef]);
            })
            element.analogie = element.analogie.toLowerCase();
        });
        let selectBoite = document.getElementById("boite_principale");
        selectBoite.innerHTML = "<div id=\"cercle\"></div>" + boites;

        let circle = document.getElementById("cercle");
        circle.innerHTML = "<h1 id=\"if\">Si j'étais</h1> " + "<h2 id=\"categorie\">" + "</h2> " + "<p id=\"text-central\"></p>";



        let text_categorie = document.getElementById("categorie");
        let text_central = document.getElementById("text-central");
        alert('bienvenue !                                                                      Voici le Portrait Chinois de Arthur ZACHARY');



        script(data);

    })
})