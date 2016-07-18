(function() {
    'use strict';
    
    angular
    .module('starter')
    .controller('MainController', function(API,back,fileUpload) {
       var vm = this;

       var BlogData = back.getList();

       BlogData.then(function(results){
       		 vm.blogs = results.data.data;
       });

      vm.submit = function(){
       var loading = fileUpload.uploadImage('fileInput');
       loading.then(function(results){
        vm.url = results.data.url;
       })

      }



   });   
})();