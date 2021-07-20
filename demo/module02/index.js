/**
 * Classe Objet ES 6
 */
class Titulaire{
    // Nous déclarons les paramètres nom et prenom dans le constructeur
    constructor(nom, prenom){
        // Nous stockons la variable nom dans la propriété nom de l'instance
        this.nom = nom;
        // Nous stockons la variable prenom dans la propriété prenom de l'instance
        this.prenom = prenom;
    }
    //Je renvoi mon toString
    toString() {
        return this.nom + ' ' + this.prenom 
        + ' âgé de : ' + this._age
    }
    //setter sur la variable this._age
    set age(monage) {
        this._age = monage
    }
    //gette sur la variable this._age
    get age() {
        return this._age
    }
}

class ServiceTitulaire extends Titulaire {
    constructor(nom, prenom, service){
       super(nom,prenom) //je mets à jour le constructeur de Titulaire (classe Parent)
       this.service = service 
       //je crée un donnée publique service à la classe ServiceTitulaire
       // et je l'affecte par la donnée service
    }
}

exports.Titulaire = Titulaire;
exports.ServiceTitulaire = ServiceTitulaire;