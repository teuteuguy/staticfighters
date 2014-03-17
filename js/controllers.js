'use strict';

/* Controllers */

var myAppControllers = angular.module('myApp.controllers', []);

myAppControllers.controller('MyCtrl1', [function() {

  }]);

myAppControllers.controller('MyCtrl2', [function() {

  }]);

myAppControllers.controller('ShuListController', ['$scope', '$http', function($scope, $http) {
  	$http.get('http://api.shubacca.com/shu?consumer_key=4a8e628392a504eb746c37e1b0044f0f&sort=id,desc').success(function(data) {
    	$scope.shus = data;
    });

    $scope.orderProp = 'description';
}]);