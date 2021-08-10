
/* ####################
      LANGUAGES
#####################*/


/* ####################
        ANGLAIS
#####################*/

// Fonction qui lance le onscroll à 6950px de hauteur
function AnglaisFunction() {
    if ($(document).scrollTop() > 6950){
      let anglais = document.querySelector('#tm-anglais');
      anglais.className = "anglais barre";
    }
  }
  
  
  /* ####################
          ITALIEN
  #####################*/
  
  // Fonction qui lance le onscroll à 7050px de hauteur
  function ItalienFunction() {
    if ($(document).scrollTop() > 7050){
      let italien = document.querySelector('#tm-italien');
      italien.className = "italien barre";
    }
  }
  
  
  /* ####################
      FIN LANGUAGES
  #####################*/