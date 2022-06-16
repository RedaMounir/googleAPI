console.log("app.js files is running")


var geocoder;
var map;
var NewAddress = "1101 Church St Nashville TN 37201";


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
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
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}