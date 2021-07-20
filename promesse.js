



let request = require("request-promise-native");

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

function getParkingId1(id)
{
    return request('http://localhost:8090/parkings/'+id);
};

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

getParkingId1(1).then(
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