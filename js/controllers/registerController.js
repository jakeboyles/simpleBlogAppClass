(function() {
    'use strict';
    
    angular
    .module('starter')
    .controller('registerController', function(API,$state,back) {
       var vm = this;


       vm.submit = function(){
          var register = back.registerUser(vm.form);

          register.then(function(results){
            API.saveToken(results.config.data.token);
            API.saveUserId(results.data.__metadata.id);
            $state.go('admin');
          })
       }
      
    });
})();