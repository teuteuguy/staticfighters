'use strict';

/* Controllers */

var myAppControllers = angular.module('myApp.controllers', []);

myAppControllers.controller('MyCtrl1', [function() {

  }]);

myAppControllers.controller('MyCtrl2', [function() {

  }]);

myAppControllers.controller('ShuListController', function($scope, shubacca) { // ['$scope', '$http', function($scope, $http) {
  	//$http.get('http://api.shubacca.com/shu?consumer_key=4a8e628392a504eb746c37e1b0044f0f&sort=id,desc').success(function(data) {
	shubacca.getAllSHUs().success(function(shus) {

  		shus.forEach(function(shu) {  			

  			shubacca.getSHULastStatus(shu.id).success(function(status) {

  				shu.status = status[0];

  			});

  			shubacca.getSHULastConfig(shu.id).success(function(config) {

  				shu.config = config[0];

  			});
  		});

    	$scope.shus = shus;
    });

    $scope.orderProp = 'description';
});//]);