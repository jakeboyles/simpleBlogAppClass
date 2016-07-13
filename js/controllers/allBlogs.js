(function() {
    'use strict';
    
    angular
    .module('starter')
    .controller('allBlogs', function(API) {
       var vm = this;


       var BlogData = API.getBlogs();

       BlogData.then(function(results){
       		var blogs = results.data.blogs;

       		var blogs = blogs.reverse();

       		vm.blogs = blogs;
       });
      
    });
})();