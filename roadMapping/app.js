console.log("app.js files is running")

let AddressEntered ="";

let geocoder;
let map;
let DefaultAddress = "1101 Church St Nashville TN 37201";



console.log("outside function", AddressEntered)




// Multiple Markers----------------------
let locations = [
  ['loan 1', 36.04540532617211, -86.63816821722166, 'address 1'],
  ['loan 2', 36.04550074904296, -86.64139759679912, 'address 2'],
  ['loan 3', 36.04953442760505, -86.64693367621155, 'address 3'],
  ['loan 4', 36.04704484825914, -86.64996993680953, 'address 4'],
  ['loan 5',36.049152755040225, -86.65078532833031, 'address 5'],
  ['loan 6',36.04681373070971, -86.66617715309008, 'address 6'],
  ['loan 7',36.130801329219345, -86.67800154260262, 'address 7'],
  ['loan 8',36.09168159453195, -86.69123188422468, 'address 8'],
  ['loan 9',35.93333197406146, -86.53717939617611, 'address 9'],
  ['loan 10',35.94183322508424, -86.53492943475756, 'address 10'],
];




console.log(locations)

    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
      }

      function showPosition(position) {
        console.log("Latitude: " + position.coords.latitude,"Longitude: " + position.coords.longitude);   
        locations.push(['Start',position.coords.latitude,position.coords.longitude, 'Starting Point'])
        locations.push(['loan 11',35.944669009068186, -86.53567209039194, 'address 11'])
        locations.push(['loan 12',35.920221185841505, -86.37874894444582, 'address 12'])

        // let myLatLng = {lat: position.coords.latitude, lng: position.coords.longitude}
        // let map = new google.maps.Map(document.getElementById('map'), {
        //   zoom: 11,
        //   center: myLatLng
        // });
        // console.log("map",map)

        // new google.maps.Marker({
        //   position: myLatLng,
        //   map,
        //   title: "Hello World!",
        // });
      }

function initialize() {

  let myOptions = {
    center: new google.maps.LatLng(36.04540532617211, -86.63816821722166),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP

  };
  let map = new google.maps.Map(document.getElementById("map"),
      myOptions);

  setMarkers(map,locations)
}

getLocation();  


function setMarkers(map,locations){

    let marker, i

    for (let i = 0; i < locations.length; i++){  

        let loan = locations[i][0]
        let lat = locations[i][1]
        let long = locations[i][2]
        let add =  locations[i][3]

        latlngset = new google.maps.LatLng(lat, long);

        let marker = new google.maps.Marker({  
                map: map, title: loan , position: latlngset  
              });
              map.setCenter(marker.getPosition())


          let content = "Loan Number: " + loan +  '</h3>' + "Address: " + add     

    let infowindow = new google.maps.InfoWindow()

    google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
          return function() {
            infowindow.setContent(content);
            infowindow.open(map,marker);
          };
      })(marker,content,infowindow)); 

    }}



    
// Search box results----------------------------------
const SearchAddressHandler =(e)=>{
  e.preventDefault();

AddressEntered = document.getElementById("SearchAddress").value;
console.log("inside function", AddressEntered)

  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: -34.397, lng: 150.644}
  });

  geocoder = new google.maps.Geocoder();
  codeAddress(geocoder, map);

console.log("Search button was click")

function codeAddress(geocoder, map,) {
  
  geocoder.geocode({'address':AddressEntered}, function(results, status) {
    console.log("Here is the results", results)
    console.log("Here is lat", results[0].geometry.bounds.ub.lo)
    console.log("Here is long", results[0].geometry.bounds.Ra.lo)
    console.log("lat: 36.04538027656666, log: -86.6387390442064");

    locations.push(['Added address',results[0].geometry.bounds.ub.lo, results[0].geometry.bounds.Ra.lo, 'pushed'])

    if (status === 'OK') {

      map.setCenter(results[0].geometry.location);
      console.log("results geometry",results[0].geometry)
      let marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });

      
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

return AddressEntered;
}




// Render map and Geolocation address----------------------------------------
// function initMap() {
//   if(document.getElementById("SearchAddress").value === ""){
//     console.log("input empty")
  
// // Get user geoLocation
//       function getLocation() {
//         if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition(showPosition);
//         } else {
//             console.log("Geolocation is not supported by this browser.");
//         }
//       }

//       function showPosition(position) {
//         console.log("Latitude: " + position.coords.latitude,"Longitude: " + position.coords.longitude);   
//        let myLatLng = {lat: position.coords.latitude, lng: position.coords.longitude}

//         let map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 11,
//           center: myLatLng
//         });
//         console.log("map",map)

//         new google.maps.Marker({
//           position: myLatLng,
//           map,
//           title: "Hello World!",
//         });
//       }
//       getLocation();

   

//     // geocoder = new google.maps.Geocoder();
//     // codeAddress(geocoder, map);

//     // console.log("Search button was click")

//     // function codeAddress(geocoder, map,) {
//     //   geocoder.geocode({'address':DefaultAddress}, function(results, status) {
//     //     console.log("Here is the results", results)

//     //     if (status === 'OK') {

//     //       map.setCenter(results[0].geometry.location);
//     //       console.log("results geometry",results[0].geometry)
//     //       let marker = new google.maps.Marker({
//     //         map: map,
//     //         position: results[0].geometry.location
//     //       });
//     //     } else {
//     //       alert('Geocode was not successful for the following reason: ' + status);
//     //     }
//     //   });
//     // }  
//     return
//   }
 
// }