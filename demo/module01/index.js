/**
 * Fonction utilisant le let plus le var
 * @param {*} sexe 
 */
function getNomCompletAvecLet(sexe) { 
    let nomComplet = ''
    if (sexe == 'M') { 
        //let nomComplet = 'Robert'
        nomComplet = 'Robert'
        console.log(nomComplet)
    } 
    console.log(nomComplet + "-") 
    // Uncaught ReferenceError: nomComplet is not defined 
}
/**
 * Une constante -> readonly
 */
const PI = 3.14 

//PI = 12 // Uncaught TypeError: Assignment to constant variable.


exports.getNom = getNomCompletAvecLet;
exports.PI = PI; //on met bien l'affectation pour ne pas avoir de valeur undefined