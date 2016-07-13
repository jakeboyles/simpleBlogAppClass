(function() {
    'use strict';
    
    angular
    .module('starter')
    .controller('loginController', function(API,$state) {
       var vm = this;
       vm.showAlert = false;

       if(API.getToken() !== null)
       {
        $state.go('admin');
       }

       vm.submit = function(){
        var loginPromise = API.login(vm.form);

        loginPromise.then(function(results){
          if(results.data.token)
          {
            API.saveToken(results.data.token);
            vm.showAlert = false;
            $state.go('admin');
          }
          else
          {
            vm.showAlert = true;
          }
        })
       }
      
    });
})();