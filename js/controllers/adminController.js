(function() {
    'use strict';
    
    angular
    .module('starter')
    .controller('adminController', function(back,API,$location) {
       var vm = this;

       if(API.getToken() === null)
       {
        $state.go('login');
       }

       vm.submit = function(){
        var postBlog = back.postBlog(vm.form);

        postBlog.then(function(response) {
          console.log(response);
          $location.path('blog/'+response.data.__metadata.id);
          $scope.$apply();
        })
       }
      
    });
})();