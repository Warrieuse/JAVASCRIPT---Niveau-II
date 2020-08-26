// # EXO 4 : Javascript part à la peche avec html
//
// Vous avez dans le html fourni 3 paragraphes représentant des poissons(avec
//chacun un id et leur description).
// Vous aller ici demander à javascript d'aller pecher un poisson (élément) html.

/*****************************************************************************/

// Pour cela, créez une fonction ( recuperation() ) qui prend un id en argument
//et qui va vous renvoyer l'élément en question. Vous avez dans le html fourni
//3 paragraphes représentant des poissons.


function recuperation (pNumber){
  /*fonction récupération avec pNumber en paramètre*/
let poisson =  document.getElementById('poisson'+ pNumber);
/*créations d'une variable qui récupère ID*/
return poisson;
/*je conserve cette variable*/
}


// // // Ensuite créez une fonction eliminer() qui changera le texte de l'élément html
// // // passé en parametre.(remplacer vivant par mort).

function eliminer(poisson){
  /*création d'une fonction eliminer et je récupère poisson et le
  met en paramètre*/
  poisson.innerHTML = 'Je suis un poisson mort';
  /*je souhaite récupérer ce qui y a dans cet ID et le change son contenu*/
}

/*j'appel la fonction ppour modifié le texte du 2eme poisson*/
eliminer(recuperation(2))

// Appelez ces fonctions en les mixant pour effectivement pecher les différents
// poissons.
//
// ### Avec cet exercice, vous avez appris à pecher......à manipuler du html
// avec javascript.
