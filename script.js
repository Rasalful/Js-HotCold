console.log("le script démmare");
var cpt = 1;
var min = 1;
var max = 100;
var nb = Math.floor(Math.random()*(max - min + 1)) + min;
console.log("le nombre à trouver est " + nb);
function validez()
{
  var saisie = document.getElementById("input").value;
  console.log("le nombre saisie par l'utilisateur est " + saisie);
  comparaison(saisie);
  cpt++;
}
function comparaison(saisie)
{
  var gauche = document.getElementById("gauche");
  var droite = document.getElementById("droite");
  console.log("tour " + cpt);
  if(isNaN(saisie)||saisie==="") {
  document.getElementById("droite").textContent = "tape un chiffre  !";
  }
  else {
    if(saisie > nb)
    {
      document.getElementById("droite").textContent = "c'est moins !";
    }

    else if (saisie < nb)
    {
      document.getElementById("droite").textContent = "c'est plus !";
    }
    else
    {
      document.getElementById("droite").textContent = "allez c'est gagné !";
      gauche.style.backgroundColor = "green";
      droite.style.backgroundColor = "green";

      console.log("fin du script");
    }
  }
}
