(function () {
	'use strict';
	angular
		.module('starter')
		 .factory('API', function($http) {

		 	var getWeatherData = function(city){

			 	var gettingData = $http({
				  method: 'GET',
				  url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=7cf16558d759d14815306832bd7341e2&units=imperial"
				});

				return gettingData;
		 	}

		 	var getTacos = function(){
		 		return {success:true}
		 	}


		 	var getBlogs = function(){


		 		var gettingData = $http({
				  method: 'GET',
				  headers: {
				  	'X_CSRF_TOKEN':'M44ASR0FL0PJH3OLJ5RC',
				  },
				  url: "https://tiyagencyweek.herokuapp.com/blogs"
				});

				return gettingData;
		 	}

		 	var getSingleBlog = function(id)
		 	{
		 		var gettingData = $http({
				  method: 'GET',
				  headers: {
				  	'X_CSRF_TOKEN':'M44ASR0FL0PJH3OLJ5RC',
				  },
				  url: "https://tiyagencyweek.herokuapp.com/blogs/"+id
				});

				return gettingData;
		 	}

		 	var postBlog = function(data)
		 	{
		 		var gettingData = $http({
				  method: 'POST',
				  data:data,
				  url: Backand.getApiUrl() + '/1/objects/blogs',
				});

				return gettingData;

		 	}


		 	var login = function(data)
		 	{
		 		var gettingData = $http({
				  method: 'POST',
				  data:data,
				  url: "https://tiyagencyweek.herokuapp.com/auth/login",
				});

				return gettingData;

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
		 		getBlogs,
		 		getSingleBlog,
		 		postBlog,
		 		login,
		 		saveToken,
		 		getToken,
		 		getTacos
		 	}

		 
		 });
})();