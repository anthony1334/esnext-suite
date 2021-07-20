const request = require("request-promise-native");

/**
 * structure de la classe Service
 */
class ParkingService {
    getParking(id) {
        return request('http://localhost:8090/parkings/' + id);
    }

    getReservation(id) {
        return request(`http://localhost:8090/parkings/${id}/reservations`);
    }

}

