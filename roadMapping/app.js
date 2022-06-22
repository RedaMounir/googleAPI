console.log("app.js files is running")

let AddressEntered ="";

let geocoder;
let map;
let DefaultAddress = "1101 Church St Nashville TN 37201";
let ListOfAddress = {list:[{address:"1101 Church St Nashville TN 37201"}, {address: "2900 Baby Ruth Ln Tn 37013"}, {address: "3716 southwind dr eau claire wisconsin 54701"}]}


console.log("outside function", AddressEntered)



function initMap() {

  if(document.getElementById("SearchAddress").value === ""){s
    console.log("input empty")
  }
 
}
const SearchAddressHandler =(e)=>{
  e.preventDefault();

AddressEntered = document.getElementById("SearchAddress").value;
console.log("inside function",AddressEntered)
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: -34.397, lng: 150.644}
  });

  geocoder = new google.maps.Geocoder();
  codeAddress(geocoder, map);

console.log("Search button was click")

function codeAddress(geocoder, map,) {
  
  geocoder.geocode({'address':AddressEntered }, function(results, status) {
    console.log("Here is the results", results)

    if (status === 'OK') {

      map.setCenter(results[0].geometry.location);
      console.log()
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



const LoopData =(ListOfAddress)=>{

  for( i = 0; i < ListOfAddress.length; i++ ) {
    console.log(ListOfAddress[i])

    codeAddress(ListOfAddress[i])

}}

LoopData(ListOfAddress);


function drop() {
  for (var i =0; i < markerArray.length; i++) {
    setTimeout(function() {
      addMarkerMethod();
    }, i * 200);
  }
}