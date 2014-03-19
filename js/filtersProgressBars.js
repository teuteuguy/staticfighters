'use strict';

/* Filters */

var progressBarColorFilters = angular.module('myApp.progressBarColorFilters', []);


progressBarColorFilters.filter('progressBarColor', function() {

	return function(percentage) {

		if ( percentage < 25 ) {
			return "progress-bar-danger";
		} else if ( percentage < 50 ) {
			return "progress-bar-warning";
		} else {
			return "progress-bar-success";
		}
	}
});


