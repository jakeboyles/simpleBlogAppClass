(function() {
    'use strict';
    
    angular
    .module('starter')
    .controller('adminController', function(API,$location) {
       var vm = this;

       if(API.getToken() === null)
       {
        $state.go('login');
       }

       vm.submit = function(){
        var postBlog = API.postBlog(vm.form);

        postBlog.then(function(response) {
          console.log(response);
          $location.path('blog/'+response.data.id._id);
          $scope.$apply();
        })
       }
      
    });
})();