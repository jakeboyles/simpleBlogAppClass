(function () {
	'use strict';
	angular
		.module('starter')
		 .factory('back', function($http,Backand) {


		 	var getList = function(name, sort, filter) {

		        var data = $http ({
				  method: 'GET',
				  url: "https://api.backand.com:443/1/objects/blogs?sort=%5B%7BfieldName%3A'id'%2Corder%3A'desc'%7D%5D",
				});

				return data;
		    }


		    var searchData = function(search)
		    {
		    	var data = $http ({
				  method: 'GET',
				  url: "https://api.backand.com:443/1/objects/blogs?search="+search,
				});

				return data;

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

		 	var getSingleBlog = function(data)
		 	{
		 		var gettingData = $http({
				  method: 'GET',
				  url: Backand.getApiUrl() + '/1/objects/blogs/'+data
				});

				return gettingData;
		 	}

		 	
		 	return {
		 		getList,
		 		postBlog,
		 		getSingleBlog,
		 		searchData
		 	}

		 
		 });
})();