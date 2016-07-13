(function() {
    'use strict';
    
    angular
    .module('starter')
    .controller('MainController', function(API) {
       var vm = this;


       var BlogData = API.getBlogs();

       BlogData.then(function(results){
       		var blogs = results.data.blogs;

       		var blogs = blogs.reverse();

       		var twoBlogs = [];

       		for(var i=0;i<2;i++)
       		{
       			twoBlogs.push(blogs[i]);
       		}

       		vm.blogs = twoBlogs;
       });
      
    });
})();