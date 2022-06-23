console.log("app.js files is running")

let AddressEntered ="";

let geocoder;
let map;
let DefaultAddress = "1101 Church St Nashville TN 37201";



console.log("outside function", AddressEntered)



// Render map and default address
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
//       let myLatLng = {lat: position.coords.latitude, lng: position.coords.longitude}

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

// Search box results
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


// for( i = 0; i < markers.length; i++ ) {
//   var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
//   bounds.extend(position);
//   marker = new google.maps.Marker({
//       position: position,
//       map: map,
//       title: markers[i][0]
//   });





var locations = [
  ['loan 1', 36.04540532617211, -86.63816821722166, 'address 1'],
  ['loan 2', 36.04550074904296, -86.64139759679912, 'address 2'],
  ['loan 3', 36.04953442760505, -86.64693367621155, 'address 3'],
  ['loan 4', 36.04704484825914, -86.64996993680953, 'address 4'],
  ['loan 5',36.049152755040225, -86.65078532833031, 'address 5'],
  ['loan 5',36.04681373070971, -86.66617715309008, 'address 6'],
  ['loan 5',36.130801329219345, -86.67800154260262, 'address 7'],
  ['loan 5',36.09168159453195, -86.69123188422468, 'address 8'],
  ['loan 5',35.93333197406146, -86.53717939617611, 'address 9'],
  ['loan 5',35.94183322508424, -86.53492943475756, 'address 7'],
  ['loan 5',35.944669009068186, -86.53567209039194, 'address 7'],
  ['loan 5',35.920221185841505, -86.37874894444582, 'address 7'],



  ];

console.log(locations)

function initialize() {

  var myOptions = {
    center: new google.maps.LatLng(36.04540532617211, -86.63816821722166),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP

  };
  var map = new google.maps.Map(document.getElementById("map"),
      myOptions);

  setMarkers(map,locations)

}



function setMarkers(map,locations){

    var marker, i

for (i = 0; i < locations.length; i++){  

    var loan = locations[i][0]
    var lat = locations[i][1]
    var long = locations[i][2]
    var add =  locations[i][3]

    latlngset = new google.maps.LatLng(lat, long);

    var marker = new google.maps.Marker({  
            map: map, title: loan , position: latlngset  
          });
          map.setCenter(marker.getPosition())


      var content = "Loan Number: " + loan +  '</h3>' + "Address: " + add     

var infowindow = new google.maps.InfoWindow()

google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
      return function() {
         infowindow.setContent(content);
         infowindow.open(map,marker);
      };
  })(marker,content,infowindow)); 

}}


const LoopData =()=>{

  for( i = 0; i < locations.length; i++ ) {
    console.log(locations[i])


}}

LoopData(locations);


// function createMarker(place) {
//   var placeLoc = place.geometry.location;
//   var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location
//   });
// }


// function drop() {
//   for (var i =0; i < markerArray.length; i++) {
//     setTimeout(function() {
//       addMarkerMethod();
//     }, i * 200);
//   }
// }