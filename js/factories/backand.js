(function () {
	'use strict';
	angular
		.module('starter')
		 .factory('back', function($http,Backand) {



		 	var postBlog = function(data){
		 		return $http ({
				  method: 'POST',
				  data:data,
				  url: Backand.getApiUrl() + '/1/objects/blogs',
				});
		 	}


		 	var editBlog = function(data,id) {
		 		return $http ({
				  method: 'PUT',
				  data:data,
				  url: Backand.getApiUrl() + '/1/objects/blogs/'+id,
				});
		 	}


		 	var removeItem = function(id){
		 		return $http ({
				  method: 'DELETE',
				  url: Backand.getApiUrl() + '/1/objects/blogs/'+id,
				});
		 	}


		 	var getList = function(name, sort, filter) {

		        var data = $http ({
				  method: 'GET',
				  url: Backand.getApiUrl() +"/1/objects/blogs?deep=true",
				});

				return data;
		    }

		    var updateBlog = function(id, title) {
		    	var data = $http({
		    		method:"PUT",
		    		data:{title:"UPDATED"},
		    		url:'https://api.backand.com:443/1/objects/blogs/1'
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

		  //   var postBlog = function(data)
		 	// {
		 	// 	var gettingData = $http({
				//   method: 'POST',
				//   data:data,
				//   url: Backand.getApiUrl() + '/1/objects/blogs',
				// });

				// return gettingData;

		 	// }

		 	var getSingleBlog = function(id)
		 	{
		 		var gettingData = $http({
				  method: 'GET',
				  url: Backand.getApiUrl() + '/1/objects/blogs/'+id
				});

				return gettingData;
		 	}

		 	
		 	return {
		 		getList,
		 		getSingleBlog,
		 		searchData,
		 		updateBlog,
		 		postBlog,
		 		removeItem,
		 		editBlog
		 	}

		 
		 });
})();