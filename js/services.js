'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var myAppServices = angular.module('myApp.services', []);

myAppServices.value('version', '0.1');

// myAppServices.factory('Search',function(){
// 	console.log
//   return {text:''};
// });
