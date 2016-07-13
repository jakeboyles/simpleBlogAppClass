(function() {
    'use strict';
    
    angular
    .module('starter')
    .controller('singleBlog', function(API,$stateParams) {
       var vm = this;

       var singleBlog = API.getSingleBlog($stateParams.blogid);

       singleBlog.then(function(results){
       		vm.blog = results.data;
       })

      
    });
})();