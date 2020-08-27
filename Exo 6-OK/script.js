// # EXO 5 : Javascript et boucle d'or
//
// Vous êtes boucle d'or dans la maison des 3 ours.
//
// - Vous avez faim donc vous allez boire les bols de soupe
// - Vous avez mal aux jambes donc vous allez vous reposer sur les fauteuils
// - Vous êtes fatigué donc vous allez dormir sur les lits
//
// ça c'était pour la petite histoire...Coté code, vous allez créer :
//
//     - des variables qui récuperent les différents paragraphes correspondants
// aux divs soupe, fauteuil et lits
//     - Des variables qui récuperent les Boutons
//     - Des écouteurs de click liés à ces boutons qui vont lancer chacun une fonctions
//     - Les fonction boire, se reposer et dormir qui changeront le texte des
//paragraphes concernés
//     - Par exemple : lorsque je click sur le bouton à l'id boire, cela appelle
// la fonction boire qui change les
//       textes de tout les paragraphes de la div soupe en : bol vide.
//
// Ici vous utiliserez des boucles afin qu'une seule instruction change les différents textes.

/******************************RECUPERATION************************************/

/*je crée des variable pour cibler les P*/
let vBol = document.getElementsByClassName('soupe')[0];
let vBolP = vBol.children;/*children me sert a cibler les P les enfant de
l'élément qui a la CLASS soupe.*/

let vFauteuil = document.getElementsByClassName('fauteuil')[0];
let vFauteuilP = vFauteuil.children;

let vLit = document.getElementsByClassName('lit')[0];
let vLitP = vLit.children;


/*je récupère mes boutons*/
let vBoire = document.getElementById('boire');
let vReposer = document.getElementById('reposer');
let vDormir = document.getElementById('dormir');

/******************************LIAISONS****************************************/

/*Ecouteur de clic*/    /*Fonction de rappel - Function Callback*/
vBoire.addEventListener('click', fBoire);
/*j'ajoute un évènement au click de ma variable vBoire qui correspond a mon button
quand celui-ci est cliqué alors la fonction fBoire se déclenche*/
vReposer.addEventListener('click',fReposer);
vDormir.addEventListener('click',fDormir);

/******************************FONCTIONS****************************************/

function fBoire(){
  let vBolVide1 = vBolP[0].innerHTML='Bol de soupe vide.';
  let vBolVide2 = vBolP[1].innerHTML='Bol de soupe vide.';
  let vBolVide3 = vBolP[2].innerHTML='Bol de soupe vide.';
}

function fReposer(){
  let utilisé1 = vFauteuilP[0].innerHTML='Fauteuil utilisé.';
  let utilisé2 = vFauteuilP[1].innerHTML='Fauteuil utilisé.';
  let utilisé3 = vFauteuilP[2].innerHTML='Fauteuil utilisé.';
}

function fDormir(){
  let vDodo1 = vLitP[0].innerHTML='Lit défait.';
  let vDodo2 = vLitP[1].innerHTML='Lit défait.';
  let vDodo3 = vLitP[2].innerHTML='Lit défait.';
}
