// # EXO 3 : Mixons les fonctions
//

//
//

// Créez une fonction addition() qui cette fois ci retourne directement l'addition
//  du nombre + 10 (si je lui donne 5 , elle doit me renvoyer 15).
function addition(dizaine){
  return dizaine + 10;
}
console.log(addition(5));

// Créez une deuxieme fonction qui multiplie un nombre qu'on lui donne par 4 et qui
// renvoie le résultat.
function multiplier(quatre){
  return quatre * 4;
}
console.log(multiplier(10));

// Faites en sorte, lors de l'appel des fonctions que lorsque je donne 15 à la
// fonction addition, le resultat soit donné à la fonction multiplication et que
// le résultat final soit affiché dans la console.

// Vous pouvez passer par des variables intermédiaires mais sachez qu'un appel de
// fonction peut être donné en argument à une autre fonction.
//
// exemple :
//
//     function maFonction1(bidule) {
//         //fait des trucs avec le bidule que je stocke dans un resultat
//         return resultat
//     }
//
//     function maFonction2(machin) {
//         //fait des trucs avec le machin que je stocke dans un resultat2
//
//         return resultat2
//     }
//
// console.log(maFonction1(maFonction2(chose)));
//
// Ici , ma maFonction2 est donnée en argument à maFonction1(pour être plus clair,
//    c'est ça valeur de return qui lui sera donnée).

console.log(addition(multiplier(1)));
/*resultat 14 car je multiplie 1 par 4 et je rajoute 10*/
console.log(addition(multiplier(8)));
/*resultat 42 car je multiplie 8 par 4(32) et je rajoute 10*/
