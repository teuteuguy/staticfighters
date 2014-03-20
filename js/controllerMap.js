'use strict';

/* Controllers */

angular.module('controllerMap', []).controller( 'controllerMap', function($scope, shubacca) {
  
  $scope.getData = function() {
    console.log( "Getting the data for the Map" );

    $scope.map = {
    	center: {
        	latitude: 1.3189476,
        	longitude: 103.8281648
    	},
    	zoom: 13
	};

  };

  $scope.getData();

  $scope.orderProp = 'description';

});//]);