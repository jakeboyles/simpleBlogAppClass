(function() {
    'use strict';
    
    angular
    .module('starter')
    .controller('adminController', function(back,API,$location, $state) {
       var vm = this;

       if(API.getToken() === null)
       {
        $state.go('login');
       }


       vm.logout = function(){
        API.logout();
        $state.go('login');
       };


       vm.removeItem = function(id)
       {
          var deleteAPI = back.removeItem(id);

          deleteAPI.then(function(response){
            console.log(response);
            getItems();
          });
       };

       vm.submit = function(){
        var postBlog = back.postBlog(vm.form);

        postBlog.then(function(response) {
          $location.path('blog/'+response.data.__metadata.id);
          $scope.$apply();
        });

       };


      var getItems = function(){
         var getBlogs = back.getList();
         getBlogs.then(function(response){
          vm.blogs = response.data;
         });
      };

      getItems();
      
    });
})();