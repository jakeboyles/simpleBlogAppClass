(function () {
	'use strict';
	angular
		.module('starter')
		 .factory('back', function($http,Backand,API) {



		 	var postBlog = function(data){

		 		data.author = parseInt(API.getUserId());
		 		return $http ({
				  method: 'POST',
				  data:data,
				  url: Backand.getApiUrl() + '/1/objects/blogs',
				});
		 	}


		 	var login = function(data){

		 		var array = [ 
				{    
				"fieldName": "email",    
				"operator": "equals",    
				"value": data.email,  
				},
				{    
				"fieldName": "password",    
				"operator": "equals",    
				"value": data.password,  
				}
				]

		 		return $http ({
				  method: 'GET',
				  data:data,
				  url: Backand.getApiUrl() +"/1/objects/users",
				  params: {
				    filter: array,
				  }
				});
		 	}

		 	var registerUser = function(data) {

		 		data.token = randomString(64, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

		 		return $http ({
				  method: 'POST',
				  data:data,
				  url: Backand.getApiUrl() + '/1/objects/users',
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

		        return $http ({
				  method: 'GET',
				  url: Backand.getApiUrl() + '/1/objects/action/blogs/1',
				  params: {
				    name: 'GetAll',
				    parameters: {}
				  },
				  config: {
				    ignoreError: true
				  }
				});
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

		 	function randomString(length, chars) {
			    var result = '';
			    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
			    return result;
			}

		 	
		 	return {
		 		getList,
		 		getSingleBlog,
		 		searchData,
		 		updateBlog,
		 		postBlog,
		 		removeItem,
		 		editBlog,
		 		registerUser,
		 		login
		 	}

		 
		 });
})();