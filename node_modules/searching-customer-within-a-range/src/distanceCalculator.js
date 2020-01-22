
// Calculating distance between two latitude-longitude points (Haversine formula)
//https://www.movable-type.co.uk/scripts/latlong.html
//https://en.wikipedia.org/wiki/Haversine_formula




function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2,distance) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d<=distance;//<=100KM
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  module.exports = getDistanceFromLatLonInKm;





























// 'use strict';

// function gdistance(latitude1, longitude1, latitude2, longitude2, radius) {
//     if (!latitude1 || !longitude1 || !latitude2 || !longitude2) { 
//         return null; 
//     };

//     var lat1 = Number(latitude1), lon1 = Number(longitude1);
//     var lat2 = Number(latitude2), lon2 = Number(longitude2);

//     radius = (radius === undefined) ? 6371e3 : Number(radius);

//     var R = radius;
//     var φ1 = (lat1 * Math.PI / 180), λ1 = (lon1 * Math.PI / 180);
//     var φ2 = (lat2 * Math.PI / 180), λ2 = (lon2 * Math.PI / 180);
//     var Δφ = φ2 - φ1;
//     var Δλ = λ2 - λ1;

//     var a = Math.sin(Δφ/2) * Math.sin(Δφ/2)
//           + Math.cos(φ1) * Math.cos(φ2)
//           * Math.sin(Δλ/2) * Math.sin(Δλ/2);
//     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//     var d = R * c;     // Meters
//     var d2 = d / 1000; // Meters to KM
//     return d2; 
// }

// module.exports = gdistance;