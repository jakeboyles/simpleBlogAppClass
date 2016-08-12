(function() {
    'use strict';
    
    angular
    .module('starter')
    .controller('allBlogs', function(back,API) {
       var vm = this;


       vm.search = function(){
        var data = back.searchData(vm.searchData);

        data.then(function(results){
          var blogs = results.data.data;

          vm.blogs = blogs;
        });
       };


       var BlogData = back.getList();

       BlogData.then(function(results){
        console.log(results);
       		var blogs = results.data;

       		vm.blogs = blogs;
       });
      
    });
})();