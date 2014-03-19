'use strict';

/* Controllers */

var myAppControllers = angular.module('controllers', []);

myAppControllers.controller('MyCtrl1', [function() {

  }]);

myAppControllers.controller('MyCtrl2', [function() {

  }]);

myAppControllers.controller('ShuListController', function($scope, shubacca) {

  $scope.getData = function() {

    console.log( "Getting the data for the SHUs" );

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
  };
  $scope.getData();

  $scope.orderProp = 'description';

});//]);