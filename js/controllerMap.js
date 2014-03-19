'use strict';

/* Controllers */

angular.module('controllerMap', []).controller( 'controllerMap', function($scope, shubacca) {
  
  $scope.getData = function() {
    console.log( "Getting the data for the Map" );

  };

  $scope.getData();

  $scope.orderProp = 'description';

});//]);