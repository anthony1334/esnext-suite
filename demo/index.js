const module01 = require('./module01')
const module02 = require('./module02')

/**
 * Appel de la méthode getNomCompletAvecLet
 * par le biais du raccourcis public getNom
 */
module01.getNom("M")

console.log(module01.PI)
/**
 * A bien protégé les données exports
 */
module01.PI = 10
console.log(module01.PI)

const OBJ = {}; 
OBJ.nom = "NOM"; 
console.log(OBJ); 
let p1 = {
  nom: "Robert",
  prenom: "Julien",
  adresse: { numero: 2, rue: "Angular", ville: "Nantes" },
};
// let { adresse } = p1; // la référence adresse est un objet de p1
let { adresse:{ville}} = p1; //la valeur ville de l'objet adresse de p1
console.log(ville)
console.log(p1)
p1.adresse.ville = 'Perpignan'
console.log(ville)
console.log(p1)

/**
 * On retourne un objet dynamiquement
 * @returns 
 */
 function buildPersonne() {     
     let nom = 'Robert';     
     let prenom = 'Julien';    
      return { nom, prenom}; 
      // équivalent de { nom: nom, prenom: prenom} 
    }

  const obj1 = buildPersonne()
  console.log(obj1.nom + '' + obj1.prenom) 

  let {prenom} = buildPersonne() //je ne peux pas récupérer la valeur du nom sauf si je change ma dstructuration
  console.log(prenom)

/**
 * Utilisation de ma classe Titulaire
 */

// Nous créons une instance de Titulaire stockée dans titulaire1
let titulaire1 = new module02.Titulaire("Gambier", "Benoit");
//let titulaire2 = new module02.Titulaire("Talu", "Jean");
let titulaire2 = 
new module02.ServiceTitulaire("Talu", "Jean","Compta");

// Accéder au nom du titulaire1 et l'afficher dans la console
titulaire1.age = 35
console.log(titulaire1.toString());
titulaire2.age = 27
console.log(titulaire2);

