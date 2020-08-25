                  // # EXO 1 : Fonction addition

// La fonction addition est déja crée mais ne contient rien et ne fait rien.

// Votre objectif va être de donner à cette fonction un nombre(3 par exemple)
//et elle doit écrire dans la console la somme de ce nombre plus ce nombre (dans cet exemple 3+3).

// Enfin, appelez la en lui donnant d'autres nombres.


// ### Pour info :

// lorsque vous voyez quelque chose de ce genre :

//     function maFonction (truc) {
//         //du code écrit entre les accolades;
//     }
// Cela s'appelle une déclaration de fonction, on annonce ce que peut faire la
//fonction. Pour que la fonction soit executée, il faut l'appeler comme ci dessous :

// maFonction(unAutreTruc);

// Ici, truc est ce qu'on appelle un argument, c'est quelque chose qu'on donne à la
// fonction et qu'elle va pouvoir utiliser.

/******************************************************************************/
const trois = 3;
let num2 = prompt("Entrez un chiffre")

function addition(trois,num2){
  var resultat = trois + num2;
  alert("le résultat est " + resultat)
  console.log("le résultat est " + resultat)
}

  addition(trois,+10)
  addition(trois,+4)
  addition(trois,+30)
  addition(trois,trois)
  addition(trois, +num2)

  /***************************************************************************/
          //Exercice réel demandé.... bref j'ai compliqué les choses avant mais
                                      //ça me serviras toujours..

function somme(nombre){/*nombre est un parametres que je peut faire appel est
  lui donné la valeur que je souhaite*/
  return nombre + nombre;/*qu'elle que soit la valeur l'instruction seras toujours
  la même*/
}

console.log(somme(3))
console.log(somme(10))
