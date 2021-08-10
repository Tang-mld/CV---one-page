/* ####################
      LOGICIELS
#####################*/

// Lancement de la fonction onscroll qui lance toutes les fonctions au scroll

document.onscroll = function() {
  ScrollFunction1()
  ScrollFunction2()
  ScrollFunction3()
  ScrollFunction4()
  ScrollFunction5()
  ScrollFunction6()
  ScrollFunction7()
  ScrollFunction8()
  AnglaisFunction()
  ItalienFunction()
};
  


/* ####################
          HTML
#####################*/

// Fonction qui lance le onscroll à 370px de hauteur
  function ScrollFunction1() {
    if ($(document).scrollTop() > 370){
      document.getElementsByClassName('tm-html');
      // On renseigne le max du % du logiciel
      let maxHtml = 80;
      $('.tm-html').attr('data-progress', maxHtml);
    }
    setTimeout(window.html, 200);
    $('.tm-html').click(window.html);
  }



/* ####################
          CSS
#####################*/

// Fonction qui lance le onscroll à 370px de hauteur  
function ScrollFunction2() {
  if ($(document).scrollTop() > 370){
    document.getElementsByClassName('tm-css');
    // On renseigne le max du % du logiciel
    let maxCss = 75;
    $('.tm-css').attr('data-progress', maxCss);
  }
  setTimeout(window.css, 200);
  $('.tm-css').click(window.css);
}



/* ####################
          JS
#####################*/

// Fonction qui lance le onscroll à 370px de hauteur
function ScrollFunction3() {
  if ($(document).scrollTop() > 370){
    document.getElementsByClassName('tm-javascript');
    // On renseigne le max du % du logiciel
    let maxJs = 65;
    $('.tm-javascript').attr('data-progress', maxJs);
  }
  setTimeout(window.js, 200);
  $('.tm-javascript').click(window.js);
}



/* ####################
          PHP
#####################*/

// Fonction qui lance le onscroll à 370px de hauteur
function ScrollFunction4() {
  if ($(document).scrollTop() > 370){
    document.getElementsByClassName('tm-php');
    // On renseigne le max du % du logiciel
    let maxPhp = 50;
    $('.tm-php').attr('data-progress', maxPhp);
  }
  setTimeout(window.php, 200);
  $('.tm-php').click(window.php);
}



/* ####################
      WORDPRESS
#####################*/

// Fonction qui lance le onscroll à 750px de hauteur
function ScrollFunction5() {
  if ($(document).scrollTop() > 750){
    document.getElementsByClassName('tm-wordpress');
    // On renseigne le max du % du logiciel
    let maxWordpress = 15;
    $('.tm-wordpress').attr('data-progress', maxWordpress);
  }
  setTimeout(window.wordpress, 200);
  $('.tm-wordpress').click(window.wordpress);
}



/* ####################
        SYMFONY
#####################*/

// Fonction qui lance le onscroll à 750px de hauteur
function ScrollFunction6() {
  if ($(document).scrollTop() > 750){
    document.getElementsByClassName('tm-symfony');
    // On renseigne le max du % du logiciel
    let maxSymfony = 15;
    $('.tm-symfony').attr('data-progress', maxSymfony);
  }
  setTimeout(window.symfony, 200);
  $('.tm-symfony').click(window.symfony);
}



/* ####################
        ANGULAR
#####################*/

// Fonction qui lance le onscroll à 750px de hauteur
function ScrollFunction7() {
  if ($(document).scrollTop() > 750){
    document.getElementsByClassName('tm-angular');
    // On renseigne le max du % du logiciel
    let maxAngular = 60;
    $('.tm-angular').attr('data-progress', maxAngular);
  }
  setTimeout(window.angular, 200);
  $('.tm-angular').click(window.angular);
}



/* ####################
          BDD
#####################*/

// Fonction qui lance le onscroll à 750px de hauteur
function ScrollFunction8() {
  if ($(document).scrollTop() > 750){
    document.getElementsByClassName('tm-bdd');
    // On renseigne le max du % du logiciel
    let maxBdd = 70;
    $('.tm-bdd').attr('data-progress', maxBdd);
  }
  setTimeout(window.bdd, 200);
  $('.tm-bdd').click(window.bdd);
}


/* ####################
    FIN LOGICIELS
#####################*/




