(function() {
    'use strict';
    
    angular
    .module('starter')
	.directive('weather', function (API) {
	  return {
	    restrict: 'E',
	    scope:[],
	    templateUrl:"./views/partials/weather.html",
	    link: function (scope, element, attrs) { 
	    	var vm = scope;

	    	var promise = API.getWeatherData(attrs.city);

	    	promise.then(function(results){
	    		vm.data = results.data;
	    	})

	    }
	  };
	})
})();



