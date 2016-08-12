(function() {
    'use strict';
    
    angular
    .module('starter')
    .controller('singleBlog', function(back,API,$stateParams) {
       var vm = this;

       vm.fullName = function(name)
       {
        return name+" Boyles";
       }

       vm.subtraction = function(one,two)
       {
        return one-two;
       }

       vm.checkSound = function(animal) {
        return animal.sound;
       }

       var singleBlog = back.getSingleBlog($stateParams.blogid);

       singleBlog.then(function(results){
       		vm.blog = results.data;
       })


      
    });
})();