'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var myAppServices = angular.module('myApp.services', []);

myAppServices.value('version', '0.2');

myAppServices.value('utils', function() {

});

myAppServices.factory('shubacca', function($http) {

	return {
		getAllSHUs: function() {
			
			var url = "http://api.shubacca.com/shu?consumer_key=4a8e628392a504eb746c37e1b0044f0f&sort=id,desc";
			
			return $http.get(url);

		}, 
		getSHULastStatus: function( $id ) {

			var url = "http://api.shubacca.com/shu/" + $id + "/status?consumer_key=4a8e628392a504eb746c37e1b0044f0f&sort=id,desc&limit=1";

			return $http.get(url);
		},
		getSHULastConfig: function( $id ) {

			var url = "http://api.shubacca.com/shu/" + $id + "/config?consumer_key=4a8e628392a504eb746c37e1b0044f0f&sort=id,desc&limit=1";

			return $http.get(url);
		}

	};
});
// myAppServices.factory('Search',function(){
// 	console.log
//   return {text:''};
// });
