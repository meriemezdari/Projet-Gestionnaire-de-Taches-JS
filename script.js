let selectJour = document.getElementById("recetteDuJour");
let titreRecette = document.getElementById("titreRecette");
let ingredients = document.getElementById("recetteIngrédients");
let formulaire = document.getElementById("formulaire");


let toutesLesRecettes = [];//création d'un tableau vide 

function sauvegarderRecettes(){//création de fonction qui permettra de sauvegarder dans le localstorage
    localStorage.setItem("planningRecettes", JSON.stringify(toutesLesRecettes));// enregistrer l'élément et les transformer  en texte
}
function chargerRecettes(){
    let texte = localStorage.getItem("planningRecettes");//saisir  l'élément de localstorage 
    if (texte){
        toutesLesRecettes = JSON.parse(texte);//faire l'inverse de ligne 10
        for (let recette of toutesLesRecettes){
            let recetteDiv = document.createElement("div");
            recetteDiv.textContent = `${recette.titre} : ${recette.ingredients}`;//intégrer le titre et les ingrédients 
             recetteDiv.style.border = "1px solid #ccc";
    recetteDiv.style.padding = "5px";
    recetteDiv.style.margin = "5px 0";

    let boutonSupprimer = document.createElement("button");
    boutonSupprimer.textContent = "Supprimer";
    boutonSupprimer.style.marginLeft = "5px";

    boutonSupprimer.onclick = function() {
        recetteDiv.remove(); 
        let index = toutesLesRecettes.findIndex(r=> r.id === recette.id);//donner à chaque élément un id 

        if (index !== -1){ // si il y a le contraire de rien 
            toutesLesRecettes.splice(index, 1);//supprimer le dernier élément 

            sauvegarderRecettes();
        }
    };

    recetteDiv.appendChild(boutonSupprimer);

    let colonne = document.getElementById(recette.jour);
    colonne.appendChild(recetteDiv);

        }
    }
}

    chargerRecettes();

formulaire.onsubmit = function(e) {
    e.preventDefault(); 

    if (titreRecette.value.trim() === "" || selectJour.value === "") {
        alert("Veuillez choisir un jour et mettre un titre !");
        return;
    }

let nouvelleRecette = {
    jour : selectJour.value,
    titre: titreRecette.value,
    ingredients : ingredients.value,
    id: Date.now(),//
    termine:false //création d'un booléen

}
toutesLesRecettes.push(nouvelleRecette);
sauvegarderRecettes();

    let recetteDiv = document.createElement("div");
    recetteDiv.textContent = `${titreRecette.value} : ${ingredients.value}`;
    recetteDiv.style.border = "1px solid #ccc";
    recetteDiv.style.padding = "5px";
    recetteDiv.style.margin = "5px 0";

    let boutonSupprimer = document.createElement("button");
    boutonSupprimer.textContent = "Supprimer";
    boutonSupprimer.style.marginLeft = "5px";

    boutonSupprimer.onclick = function() {
        recetteDiv.remove(); 
        let index = toutesLesRecettes.findIndex(r=> r.id === nouvelleRecette.id);


        if (index !== -1){
            toutesLesRecettes.splice(index, 1);

            sauvegarderRecettes();
        }
    };

    let boutonPreparee =document.createElement("button");
    boutonPreparee.textContent = "Préparé";
    boutonPreparee.style.marginLeft = "5px";
    boutonPreparee.onclick = function(){
      nouvelleRecette.termine = !nouvelleRecette.termine;//attribuer le contraire de la valeur
        if (nouvelleRecette.termine){
            recetteDiv.style.textDecoration ="line-through";
            recetteDiv.style.background = "#c8e6c9";

        } else{
            recetteDiv.style.textDecoration ="none";
            recetteDiv.style.background ="#f4f4f4";
        }
        
        sauvegarderRecettes();
    };
    recetteDiv.appendChild(boutonSupprimer);
    recetteDiv.appendChild(boutonPreparee);

    let colonne = document.getElementById(selectJour.value);
    colonne.appendChild(recetteDiv);
    formulaire.reset();
};

