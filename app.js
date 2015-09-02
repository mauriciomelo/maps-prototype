var map;
var markers = [];
var circleIcon;
var lines = [];
var directionsDisplay;
var directionsService;
var hubs = {
  rec:      {lat: -8.0464493, lng: -34.9324882},
  sp:       {lat: -23.6824124, lng: -46.5952992},
  curitiba: {lat: -25.4951519, lng: -49.2874025},
  bh:       {lat: -19.9178713, lng: -43.9603116},
  feira:    {lat: -12.2440782, lng: -38.932236}
}
var path = [];

var lastTwoOf = function (list) {
  return [list[list.length - 1], list[list.length -2]];
};

var onMarkerClick = function (e) {
  path.push(this.getPosition());
  if (path.length > 1) {
    calcRoute(lastTwoOf(path));
  }
}

function initMap() {
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer({preserveViewport: true});
  circleIcon = {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'red',
    fillOpacity: .4,
    scale: 4.5,
    strokeColor: 'white',
    strokeWeight: 1
  };

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -11.979418, lng: -44.678518},
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });


  directionsDisplay.setMap(map);

  _.each(hubs, function (position, index) {
    markers[index] = new google.maps.Marker({
      position: position,
      map: map,
      icon: circleIcon,
      title: index
    });
    markers[index].addListener('click', onMarkerClick);
  });
}


function calcRoute(path) {
  var selectedMode = "DRIVING";
  var request = {
      origin: path[0],
      destination: path[1],
      travelMode: google.maps.TravelMode[selectedMode]
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : parseFloat(decodeURIComponent(results[1].replace(/\+/g, " ")));
}
