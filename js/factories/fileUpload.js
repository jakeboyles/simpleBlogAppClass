(function () {
	'use strict';
	angular
		.module('starter')
		.factory('fileUpload', function($http,Backand,$q) {

		const baseUrl = '/1/objects/';
		const baseActionUrl = baseUrl + 'action/'
		const objectName = 'items';
		const filesActionName = 'files';

		var uploadImage = function(id) {
			var file = document.getElementById(id);
			file = fileInput.files[0];
			var reader = new FileReader();
			var deferred = $q.defer();

			reader.onload = function(e) {
				var filedata = e.currentTarget.result;

				var request = $http({
						method: 'POST',
						url : Backand.getApiUrl() + baseActionUrl +  objectName,
						params:{
							"name": filesActionName
						},
						headers: {
							'Content-Type': 'application/json'
						},
						data: {
							"filename": file.name,
							"filedata": filedata.substr(filedata.indexOf(',') + 1, filedata.length)
						}
					});

			  	deferred.resolve(request);
			};

			reader.readAsDataURL(file);

			return deferred.promise;

		};

	 	return {
	 		uploadImage
	 	}

	});
})();