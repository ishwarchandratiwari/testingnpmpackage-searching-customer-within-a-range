const customersList                 = require('../public/customers.json');
const defaultConfiguration          = require('./defaultConfiguration');
const getDistanceFromLatLonInKm     = require('./distanceCalculator');

jsonSort(customersList);
var eligibleCustomersList=[]
module.exports ={
    searchingCustomers: async function(){
        customersList.filter( function(customer){
           var filteredData= calculateDistance
            (
                defaultConfiguration.sourceCoordinates.latitude,
                defaultConfiguration.sourceCoordinates.longitude,
                customer.latitude,
                customer.longitude,
                defaultConfiguration.distance
            )
            return (filteredData)?pushData(customer):''
        });
        return (eligibleCustomersList)?eligibleCustomersList:'';
    }
}

function pushData(customer){
    eligibleCustomersList.push({"name":customer.name,"user_id":customer.user_id});
}
function jsonSort(list){
    list.sort(function(a, b){
        return a.user_id - b.user_id;
    });
}

function calculateDistance(originLat, originLon, customerLat, customerLon,distance){
    return  getDistanceFromLatLonInKm(originLat, originLon, customerLat, customerLon,distance);
}






















