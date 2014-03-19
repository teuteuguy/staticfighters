'use strict';

/* Controllers */

angular.module('controllerShuList', []).controller('controllerShuList', function($scope, shubacca) {

  function setCustomerName( shu ) {
    if ( shu.config.config_uid === shu.status.config_uid ) {
      shu.booking_customer_firstname = shu.config.booking_customer_firstname;
      shu.booking_customer_lastname = shu.config.booking_customer_lastname;
    }
  }

  $scope.getData = function() {

    console.log( "Getting the data for the SHUs" );

  	shubacca.getAllSHUs().success(function(shus) {

      shus.forEach(function(shu) {  			

        var statusLoaded = false;
        var configLoaded = false;

        shubacca.getSHULastStatus(shu.id).success(function(status) { 
          shu.status = status[0];
          if ( configLoaded ) {
            setCustomerName( shu );
          }
          statusLoaded = true;
        });

        shubacca.getSHULastConfig(shu.id).success(function(config) {
          shu.config = config[0];

          if ( statusLoaded ) {
            setCustomerName( shu );
          }
          configLoaded = true;
        });
      });

      $scope.shus = shus;
    
    });
  };
  $scope.getData();

  $scope.orderProp = 'description';

});//]);