



const request = require("request-promise-native");

function getParkingId(id)
{
    // la méthode retourne un objet promesse
    return new Promise((resolve,reject)=>{
        request('http://localhost:8090/parkings/'+id,{},(err,response) =>
        {
            // callback(id); plus d'utilisation de callback
            // gestion des erreurs
            if(err){
                reject(err);
                // en cas d'erreur
        }
            else
            {
                resolve(JSON.parse(response.body));
                // en cas de succès
            }
        });
    });
}

/**
 * structure de la classe Service
 */
class getParkingIdService{
    getReservationsParkingIdPromise(id)
{
    // la méthode retourne un objet promesse
    return request(`http://localhost:8090/parkings/${id}/reservations`);
        
}

}

class  getReservationsParkingIdService{
    getReservationsParkingIdPromise(id)
{
    // la méthode retourne un objet promesse
    return request(`http://localhost:8090/parkings/${id}/reservations`);
        
}
}

/**
 * 
 *methode qui retourne une promesse de reservation pour un parking donné
 */
function getReservationsParkingId(id)
{
    // la méthode retourne un objet promesse
    return new Promise((resolve,reject)=>{
        request(`http://localhost:8090/parkings/${id}/reservations`,{},(err,response) =>
        {
            // callback(id); plus d'utilisation de callback
            // gestion des erreurs
            if(err){
                reject(err);
                // en cas d'erreur
        }
            else
            {
                resolve(JSON.parse(response.body));
                // en cas de succès
            }
        });
    });
}

function getReservationsParkingIdPromise(id)
{
    // la méthode retourne un objet promesse
    return request(`http://localhost:8090/parkings/${id}/reservations`);
        
}

getParkingIdPromise(1).then(
    (data) => {
        console.log(data)

    return getReservationsParkingId(data.id) //retourne un promise
   }
    ).then( // Excécute le contenu du promise
            (data) => 
            console.log(data)).catch(err=>console.log(err));
            
            

/*Promise.all(
    [getParkingId(1),getReservationsParkingId(1),getParkingId1]
    ).then
(
    result=>
    console.log(result)).
    catch(err=>console.log(err))*/