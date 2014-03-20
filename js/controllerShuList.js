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

        shu.statusLoaded = false;
        //shu.configLoaded = false;

        shubacca.getSHULastStatusWithConfig(shu.id).success(function(status) {

          shu.status = status[0];
          shu.config = shu.status.config;
          delete shu.status.config;
          shu.statusLoaded = 0;

        });
        
        // shubacca.getSHULastStatus(shu.id).success(function(status) { 
        //   shu.status = status[0];
        //   if ( shu.configLoaded ) {
        //     setCustomerName( shu );
        //   }
        //   shu.statusLoaded = true;
        // });

        // shubacca.getSHULastConfig(shu.id).success(function(config) {
        //   shu.config = config[0];

        //   if ( shu.statusLoaded ) {
        //     setCustomerName( shu );
        //   }
        //   shu.configLoaded = true;
        // });
      });

      $scope.shus = shus;
    
    });
  };
  $scope.getData();

  $scope.orderProp = 'description';

});//]);