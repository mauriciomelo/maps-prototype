'use strict';

angular.module('myApp.table', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/table', {
    templateUrl: 'table/table.html',
    controller: 'TableCtrl'
  });
}])

.controller('TableCtrl', ['$scope', function($scope) {
  var numberOfLoads = 12;
  $scope.loads = [];

  for (var i = 0; i < numberOfLoads; i++) {
    $scope.loads.push({
      id: 'ABC-10' + i,
      start: '07:00',
      end: '12:00',
      origin: 'Recife',
      destination: 'Curitiba'
    });
  }

}]);
