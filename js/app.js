'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.filters',
  'myApp.progressBarColorFilters',
  'myApp.services',
  'myApp.directives',
  'controllers',
  'controllerMap',
  'controllerShuList',
  'google-maps'
]);

myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/map', {templateUrl: 'partials/map.html', controller: 'controllerMap'});
  $routeProvider.when('/shus', {templateUrl: 'partials/shus.html', controller: 'controllerShuList'});
  //$routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  //$routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/shus'});

  //$locationProvider.html5Mode(true);
});

//angular.module('myModule', ['ui.bootstrap']);

// myApp.config(['$locationProvider', function($locationProvider) {

//   $locationProvider.html5Mode(true);

// }]);
