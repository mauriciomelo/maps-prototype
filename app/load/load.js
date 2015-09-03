'use strict';

angular.module('myApp.load', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/load', {
    templateUrl: 'load/load.html',
    controller: 'LoadMapCtrl'
  });
}])

.controller('LoadMapCtrl', [function() {
  var map;
  var markers = [];
  var hubIcon;
  var affiliateIcon;
  var truckIcon;
  var alertIcon;
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

  var affiliates = {
    jp: {lat: -7.120889, lng: -34.843173},
    natal: {lat: -5.778214, lng: -35.198288},
    ouricuri: {lat: -7.881155, lng: -40.081264},

    barreiras: {lat: -12.160095, lng: -44.988039},
    peixe: {lat: -9.469854, lng: -43.405629},
    salvador: {lat: -12.831873, lng: -38.551460},

    brasilia: {lat: -15.731853, lng: -47.910845},
    vitoria: {lat: -20.242644, lng: -40.295750},

    presidente_prudente: {lat: -22.112922, lng: -51.381721},
    campo_grande: {lat: -20.412322, lng: -54.608121},
    cuiaba: {lat: -15.542230, lng: -56.058372},

    alegrete: {lat: -29.786134, lng: -55.786309},
    pelotas: {lat: -31.734921, lng: -52.352168},
    floripa: {lat: -27.597887, lng: -48.553481}
  };
  var path = [];

  var lastTwoOf = function (list) {
    return [list[list.length - 1], list[list.length -2]];
  };


  function initMap() {

    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer({preserveViewport: false});
    hubIcon = {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: 'white',
      fillOpacity: .7,
      scale: 5.5,
      strokeColor: 'black',
      strokeWeight: 2
    };

    affiliateIcon = {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: '#4d148c',
      fillOpacity: 1,
      scale: 4.5,
      strokeColor: '#4d148c',
      strokeWeight: 1
    };

    hubIcon = {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: 'white',
      fillOpacity: 1,
      scale: 4.5,
      strokeColor: '#ff6600',
      strokeWeight: 2
    };

    truckIcon = {
      url: 'https://maps.google.com/mapfiles/kml/shapes/truck.png',
      scaledSize: new google.maps.Size(30, 30),
    };

    alertIcon = {
      url: 'https://maps.google.com/mapfiles/kml/shapes/caution.png',
      scaledSize: new google.maps.Size(30, 30),
    }


    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -15.049136, lng: -51.414036},
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    calcRoute([hubs.rec, hubs.curitiba]);

    directionsDisplay.setMap(map);

    _.each(hubs, function (position, index) {
      markers[index] = new google.maps.Marker({
        position: position,
        map: map,
        icon: hubIcon,
        title: index
      });
    });

    _.each(affiliates, function (position, index) {
      markers[index] = new google.maps.Marker({
        position: position,
        map: map,
        icon: affiliateIcon,
        title: index
      });
    });

    var truckMarker = new google.maps.Marker({
      position: {lat: -14.668394, lng: -40.467333},
      icon: truckIcon,
      map: map,
      title: 'Posição atual'
    });

    var alertMarker = new google.maps.Marker({
      position: {lat: -12.448264, lng: -39.246030},
      icon: alertIcon,
      map: map,
      title: 'Posição atual'
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

  initMap();
}]);
