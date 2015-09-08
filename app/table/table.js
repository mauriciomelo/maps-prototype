'use strict';

angular.module('myApp.table', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/table', {
    templateUrl: 'table/table.html',
    controller: 'TableCtrl'
  });
}])

.controller('TableCtrl', ['$scope', function($scope) {
  $scope.loads = [];

  $scope.loads.push({ id: 'ABC-101', start: '17:00', end: '23:00', origin: 'Recife', destination: 'Curitiba' });
  $scope.loads.push({ id: 'ABC-102', start: '07:00', end: '09:00', origin: 'Recife', destination: 'Salvador' });
  $scope.loads.push({ id: 'ABC-103', start: '09:00', end: '12:00', origin: 'Vitória', destination: 'Brasília' });
  $scope.loads.push({ id: 'ABC-104', start: '06:00', end: '14:00', origin: 'Presidente Prudente', destination: 'Natal' });
  $scope.loads.push({ id: 'ABC-105', start: '07:00', end: '10:30', origin: 'Florianópolis', destination: 'Cuiabá' });
  $scope.loads.push({ id: 'ABC-106', start: '10:00', end: '11:45', origin: 'Ouricuri', destination: 'Peixe' });
  $scope.loads.push({ id: 'ABC-107', start: '07:00', end: '12:00', origin: 'Brasília', destination: 'João Pessoa' });
  $scope.loads.push({ id: 'ABC-108', start: '13:00', end: '15:00', origin: 'Vitória', destination: 'Barreiras' });
  $scope.loads.push({ id: 'ABC-109', start: '12:00', end: '14:00', origin: 'Belo Horizonte', destination: 'Cuiabá' });
  $scope.loads.push({ id: 'ABC-110', start: '08:30', end: '12:30', origin: 'Campo Grande', destination: 'Salvador' });

}]);
