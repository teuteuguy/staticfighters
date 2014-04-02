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

    var shus = [];

  	shubacca.getAllSHUs().success(function(temp_shus) {

      temp_shus.forEach(function(shu) {  			

        if ( shu.virtual == 1 ) {

          //delete shu;

        }
        else {
          //console.log( shu.virtual );

          shu.statusLoaded = false;

          shubacca.getSHULastStatusWithConfig(shu.id).success(function(status) {

            shu.status = status[0];
            shu.config = shu.status.config;
            delete shu.status.config;
            shu.statusLoaded = 0;

          });

          shus.push( shu );

        }
        
        // var data = google.visualization.arrayToDataTable([
        //   ['Year', 'Sales', 'Expenses'],
        //   ['2004', 1000, 400],
        //   ['2005', 1170, 460],
        //   ['2006', 660, 1120],
        //   ['2007', 1030, 540]
        // ]);
        // var options = {
        //   title: 'Company Performance'
        // };
        //var chart = new google.visualization.LineChart( document.getElementById( 'chartdiv' ) );
   
        //chart.draw(data, options);

      });

      $scope.shus = shus;
    
    });
  };
  $scope.getData();

  $scope.orderProp = 'description';

});//]);