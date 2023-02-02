function script(data) {
    console.log('fichier JS link !');
    const cercle_categorie = document.getElementById('categorie');
    const cercle_text = document.getElementById('text-central');
    const box = document.querySelectorAll('div.box')
    const background_change = document.getElementById("back");
    const mentions_legales = document.getElementById("mentions_legales");
    console.log(box);
    box.forEach(function (boite) {
        boite.addEventListener('click', function () {
            data.forEach(function (donnee, index) {
                background_change.innerHTML = " ";
                if (boite.getAttribute('id').replace("b", "")==(index+1)) {
                    cercle_categorie.innerHTML = donnee.analogie ;
                    cercle_text.innerHTML = "je serais " + donnee.valeur_analogie + "<br>" + donnee.explication;
                }
            })

        })
    })
    const song = document.getElementById("b3");
    song.addEventListener('click', clique_musique); 
    function clique_musique(){
        console.log("clique musique efffectué")
        background_change.innerHTML = "<video poster=\"\" id=\"back\" autoplay muted loop playsinline>" + "<source src=\"sounds-images/i_aint_worried.mp4\" type=\"video/mp4\">" + "</video>";
    }

    const clip = document.getElementById("b7");
    clip.addEventListener('click', clique_fictif);
    function clique_fictif(){
        console.log("Clique jeux video")
        background_change.innerHTML="<video poster=\"\" id=\"back\" autoplay muted loop playsinline>" + "<source src=\"sounds-images/r.mp4\" type=\"video/mp4\">" + "</video>";

    }

    const mentionclique = document.getElementById("bmention");
    mentionclique.addEventListener('click', clique_mention);
    function clique_mention(){
        console.log("Clique mentions legales effectué !")
        mentions_legales.innerHTML="<h1>Mentions légales</h1> <p id=\"mention_text\">Site développé par Arthur ZACHARY | K0la<br> Merci à Morgan ZARKA et Idriss Merouane pour le développement<br>La personne responsable de l'API à l'adresse https://perso-etudiant.u-perm.fr/~gambetteportrait/api.php est Philippe Gambette (philippe.gambette@univ-eiffel.fr<br><br>Extrait de clip pour la catégorie \"musique\": I ain't Worried de OneRepublic<br>https://www.youtube.com/watch?v=mNEUkkoUoIA<br><br>Clip pour la catégorie \"Jeux vidéo\"<br>https://www.youtube.com/watch?v=pD-FR8EL584<br>Toutes les images sont libres de droits</p>";



    }

    const hiluluk = document.getElementById("b5");
    hiluluk.addEventListener('click', clique_hiluluk);
    function clique_hiluluk(){
        console.log("Clique personnage fictif")
        background_change.innerHTML="<img src=\"images/hiluluk.jpg\">";

    }


    const close_form = document.getElementById('mentions_legales');
    mentions_legales.addEventListener('click', clique_mention_close);
    function clique_mention_close(){
        console.log("close mention !")
        mentions_legales.innerHTML=" ";
    }
    
    



    function resetForm() {
        const formulaire = document.querySelectorAll('form input, form textarea');
        formulaire.forEach(function (entree) {
            entree.value = "";
        })
    };








    let anal_perso = document.getElementById('anal_perso');
    const analogieperso = document.querySelector('p.bSEND');

        analogieperso.addEventListener('click', function () {
            text.push({"analogie": document.querySelector('input#analogie').value, "valeur_analogie": document.querySelector('input#valeur_analogie').value, "explication": document.querySelector('textarea#explication').value});
            console.log(analogieperso);


            const lien = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=arthur.zachary&courriel=" + document.querySelector('input#mail').value +"&message=Si j'étais " + document.querySelector('input#analogie').value + "alors je serais " + document.querySelector('input#valeur_analogie').value + " car " + document.querySelector('textarea#explication').value;

            anal_perso.innerHTML ="<h2 id=\"anal_perso\">si j'était" + document.querySelector('input#analogie').value + " je serais " + document.querySelector('input#valeur_analogie').value + "car" + document.querySelector('textarea#explication').value + "</h2>";

            fetch(lien).then(function(response) {
                response.json().then(function(data){
                    console.log("Réponse reçue : ")
                    console.log(data);
                    alert(data.message)
                })
              })

            resetForm();
        })
}

