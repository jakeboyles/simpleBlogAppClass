(function() {
    'use strict';
    
    angular
    .module('starter')
    .controller('singleBlog', function(back,API,$stateParams) {
       var vm = this;

       var singleBlog = back.getSingleBlog($stateParams.blogid);

       singleBlog.then(function(results){
       		vm.blog = results.data;
       })


      
    });
})();