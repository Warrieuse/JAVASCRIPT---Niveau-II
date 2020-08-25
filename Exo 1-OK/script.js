// # EXO 0 : Révisions
//
// ## Les Variables
//
// ## Les Conditions
//
// Dans le fichier script.js, creez les conditions suivantes :

/****************************************************************************/
// Dans le fichier script.js, créez les variables :
//     - nombre qui contiendra 42
//     - tab qui contiendra les chiffres 2 , 5 , 6 , 7 , 9 sous forme de tableau
//     - chaine qui contiendra la phrase : ceci est une chaine de caracteres

//Les variables         CONST car elles ne sont pas modifiés dans le scope et général
    //nombre
    const nombre = 42
    console.log(nombre);
    //tableau
    const tab = [2,5,6,7,9]
    console.log(tab);
    //chaine de caracteres
    const chaine = "ceci est une chaine de caractère";
    console.log(chaine);

/****************************************************************************/
// Sous forme de if, else if, else :
//     -si nombre est supérieur ou egale à 50, afficher "super moitmoit" dans la console
//     -sinon si nombre est inférieur ou égale à 40, afficher "peux mieux faire" dans la console
//     -sinon afficher "la grande réponse" dans la console

//Conditions

    //if, else if ,else
if (nombre >= 50){
  console.log("Super moitmoit");
}
else if (nombre < 40){
  console.log("peux mieux faire");
}
else {
  console.log("La grande réponse");
}

/****************************************************************************/
// Sous forme de switch :
//  -quand la longeur du tableau tab est de 10 éléments, afficher "il y a 10 éléments dans le tableau" dans la console
//  -quand la longeur du tableau tab est de 5 éléments, afficher "il y a 5 éléments dans le tableau" dans la console
//  -quand la longeur du tableau tab est de 0 éléments, afficher "le tableau est vide" dans la console
//  -dans les autres cas, affichez "Je ne connais pas le nombre d'éléments du tableau"

    //switch

// longueur = tab.length/*j'ai crée une nouvelle variable en premier lieu puis on m'as dis*/
// console.log(longueur)/*que c'était mieux de mettre directement la longueur dans l'expression.*/

switch (tab.length) {
  case 10:
    console.log("il y a 10 éléments dans le tableau")
    break;
  case 5:
    console.log("il y a 5 éléments dans le tableau")
    break;
  case 0:
    console.log("le tableau est vide")
    break;
  default:
  console.log("Je ne connais pas le nombre d'éléments du tableau")
}

/****************************************************************************/
// ## Les Boucles
// Créez une variable compteur qui contiendra 0.
var compteur = 0;
//Boucles
// Sous forme d'une boucle while, affichez 5 fois : "Messire, on en a gros" dans la console
    //while
    while (compteur < 5) {
      console.log("Messire, on en a gros")
      compteur = compteur + 1;
    }

    // Sous forme d'une boucle for, affichez chacun des chiffres contenus dans le tableau tab dans la console
    //for

    for (var i = 0; i < tab.length; i++) {
      tab[i]
      console.log("le premier chiffres du tableau est ",tab[0]);
      console.log("le second chiffres du tableau est ",tab[1]);
      console.log("le troisième chiffres du tableau est",tab[2]);
      console.log("le quatrième chiffres du tableau est",tab[3]);
      console.log("le cinquième chiffres du tableau est",tab[4]);

    }
