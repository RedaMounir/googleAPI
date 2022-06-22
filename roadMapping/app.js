console.log("app.js files is running")

let AddressEntered ="";

let geocoder;
let map;
let DefaultAddress = "1101 Church St Nashville TN 37201";
let ListOfAddress = {list:[{address:"1101 Church St Nashville TN 37201"}, {address: "2900 Baby Ruth Ln Tn 37013"}, {address: "3716 southwind dr eau claire wisconsin 54701"}]}

console.log(ListOfAddress.list[0].address)


console.log("outside function", AddressEntered)



// Render map and default address
function initMap() {
  if(document.getElementById("SearchAddress").value === ""){
    console.log("input empty")
  
      
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: {lat: -34.397, lng: 150.644}
    });

    geocoder = new google.maps.Geocoder();
    codeAddress(geocoder, map);

    console.log("Search button was click")

    function codeAddress(geocoder, map,) {
      geocoder.geocode({'address':DefaultAddress}, function(results, status) {
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
    return
  }
 
}

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



const LoopData =(ListOfAddress)=>{

  for( i = 0; i < ListOfAddress.list.length; i++ ) {
    console.log(ListOfAddress.list[i].address)
    createMarker(ListOfAddress.list[i].address)


}}

LoopData(ListOfAddress);


function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
}


function drop() {
  for (var i =0; i < markerArray.length; i++) {
    setTimeout(function() {
      addMarkerMethod();
    }, i * 200);
  }
}