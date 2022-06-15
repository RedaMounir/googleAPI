 function initMap() {

    var address = {
        center: {lat:42.4668,lng:-70.9495},
        zoom: 8
    }
    
    let streeNumber = "2900" 
    let streeName = "Baby Ruth Ln"
    let city = "Antioch"
    let zipcode = "37013"
    
    let NewAddress = encodeURI(streeNumber + streeName + city + zipcode + "TN")
    
    encodeURI(NewAddress);
     console.log(NewAddress)


    map = new google.maps.Map(document.getElementById("map"),address);
  
     
     console.log("Here is the map", map)
    // adding marker
    var marker = new google.maps.Marker({
      position:{lat:42.4668,lng:-70.9495},
      map:map
    })
    var marker = new google.maps.Marker({
      position:{lat:39.0997,lng:-94.5786},
      map:map
    })
  
    

  // get route from A to B
  calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB);

}



function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
  directionsService.route({
    origin: pointA,
    destination: pointB,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
    }
initMap();
    
//    function initMap(): void {
//  const map = new google.maps.Map(
//    document.getElementById("map") as HTMLElement,
//    {
//      zoom: 8,
//      center: { lat: 40.72, lng: -73.96 },
//    }
//  );
//  const geocoder = new google.maps.Geocoder();
//  const infowindow = new google.maps.InfoWindow();
//
//  (document.getElementById("submit") as HTMLElement).addEventListener(
//    "click",
//    () => {
//      geocodePlaceId(geocoder, map, infowindow);
//    }
//  );
//}
//
//// This function is called when the user clicks the UI button requesting
//// a geocode of a place ID.
//function geocodePlaceId(
//  geocoder: google.maps.Geocoder,
//  map: google.maps.Map,
//  infowindow: google.maps.InfoWindow
//) {
//  const placeId = (document.getElementById("place-id") as HTMLInputElement)
//    .value;
//      
//      
//function initMap() {
//  var pointA = new google.maps.LatLng(51.7519, -1.2578),
//    pointB = new google.maps.LatLng(50.8429, -0.1313),
//    myOptions = {
//      zoom: 7,
//      center: pointA
//    },
    

    // geocode
//  results[]: {
// types[]: string,
// formatted_address: string,
// address_components[]: {
//   short_name: string,
//   long_name: string,
//   postcode_localities[]: string,
//   types[]: string
// },
// partial_match: boolean,
// place_id: string,
// postcode_localities[]: string,
// geometry: {
//   location: LatLng,
//   location_type: GeocoderLocationType
//   viewport: LatLngBounds,
//   bounds: LatLngBounds
// }
//}

//    directionsService = new google.maps.DirectionsService,
//    directionsDisplay = new google.maps.DirectionsRenderer({
//      map: map
//    }),
//    markerA = new google.maps.Marker({
//      position: pointA,
//      title: "point A",
//      label: "A",
//      map: map
//    }),
//    markerB = new google.maps.Marker({
//      position: pointB,
//      title: "point B",
//      label: "B",
//      map: map
//    });
  
  

//  function displayRoute() {
//  var start - new google.maps.LatLng(39.0997, 945786);
//  var end = new google.maps.LatLng(37.2090, 93.2923);
//  
//  var directionsDisplay = new
//  google.maps.directionsRenderer();
//  directionsDisplay.setMap(map);
//  var request = {
//    orgin : start,
//    destination : end,
//    travelMode:google.maps.TravelMode.DRIVING
//  };
//  
//  var directionsService = newgoogle.maps.DirectionsService();
//  if (status == google.mapsDirectionsStatus.OK) {
//    directionsDisplay.setDirections(response);
//    
//    }
//  };



  




