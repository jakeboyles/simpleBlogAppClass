(function() {
    'use strict';
    
    angular
    .module('starter')
    .controller('loginController', function(API,$state,back) {
      var vm = this;
      vm.showAlert = false;

      if(API.getToken() !== null)
      {
        $state.go('admin');
      }

      vm.submit = function(){

        var loginPromise = back.login(vm.form);

        loginPromise.then(function(results){

          if(results.data.data[0])
          {
            API.saveToken(results.data.data[0].token);
            API.saveUserId(results.data.data[0].id);
            vm.showAlert = false;
            $state.go('admin');
            return;
          }

          vm.showAlert = true;
          return;

        });
      };
    });
})();