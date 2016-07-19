(function() {
    'use strict';
    
    angular
    .module('starter')
    .controller('editBlog', function(back,API,$location,$stateParams,$state) {
       var vm = this;


       var blogId = $stateParams.blogid;

       if(API.getToken() === null)
       {
        $state.go('login');
       }


       var singlePost = back.getSingleBlog(blogId);
       singlePost.then(function(response){
        vm.form = response.data;
       })



       vm.submit = function(){
        var editBlog = back.editBlog(vm.form,blogId);

        editBlog.then(function(response) {
          if(response.status === 200)
          {
            $state.go('admin')
          }
          else
          {
            alert("IT DIDNT WORK 😡")
          }
        })
       }
      
    });
})();