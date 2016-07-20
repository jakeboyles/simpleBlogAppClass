(function () {
	'use strict';
	angular
		.module('starter')
		 .factory('API', function($http) {

		 	var getWeatherData = function(city){

			 	var gettingData = $http({
				  method: 'GET',
				  url: "http://api.openweathermap.org/data/2.5/forecast/daily?q="+city+"&APPID=7cf16558d759d14815306832bd7341e2&units=imperial"
				});

				return gettingData;
		 	}

		 	var saveUserId = function(userid)
		 	{
		 		localStorage.setItem('userID',userid);
		 	}

		 	var getUserId = function()
		 	{
		 		return localStorage.getItem('userID');
		 	}

		 	var logout = function()
		 	{
		 		localStorage.removeItem('userID');
		 		localStorage.removeItem('token');
		 		return true;
		 	}


		 	var saveToken = function(token)
		 	{
		 		localStorage.setItem('token',token);
		 	}

		 	var getToken = function()
		 	{
		 		return localStorage.getItem('token');
		 	}
		 	
		 	return {
		 		getWeatherData,
		 		saveToken,
		 		getToken,
		 		getUserId,
		 		saveUserId,
		 		logout
		 	}

		 
		 });
})();