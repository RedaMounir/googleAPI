console.log("app.js files is running")


let geocoder;
let map;
let NewAddress = "1101 Church St Nashville TN 37201";


function initMap() {
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: -34.397, lng: 150.644}
  });
  geocoder = new google.maps.Geocoder();
  codeAddress(geocoder, map);
}

function codeAddress(geocoder, map) {
  
  geocoder.geocode({'address': NewAddress}, function(results, status) {
    if (status === 'OK') {
      map.setCenter(results[0].geometry.location);
      let marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}