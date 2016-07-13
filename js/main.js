(function() {
    'use strict';
    angular
    .module('starter', ['ui.router','textAngular'])
    .config(function($stateProvider, $urlRouterProvider) {


	  	$stateProvider
	    .state('home', {
      	url: '/',
      	views: {
      		'main': {
		        templateUrl: '../views/home.html',
		        controller: 'MainController',
		        controllerAs: 'controller'
		      }
		  },
	    })
	    .state('singleBlog', {
      	url: '/blog/:blogid',
      	views: {
      		'main': {
		        templateUrl: '../views/singleBlog.html',
		        controller: 'singleBlog',
		        controllerAs: 'controller'
		      }
		  },
	    })
	    .state('blogs', {
      	url: '/blog',
      	views: {
      		'main': {
		        templateUrl: '../views/blog.html',
		        controller: 'allBlogs',
		        controllerAs: 'controller'
		      }
		  },
	    })
	    .state('admin', {
      	url: '/admin',
      	views: {
      		'main': {
		        templateUrl: '../views/admin.html',
		        controller: 'adminController',
		        controllerAs: 'controller'
		      }
		  },
	    })
	    .state('login', {
      	url: '/login',
      	views: {
      		'main': {
		        templateUrl: '../views/login.html',
		        controller: 'loginController',
		        controllerAs: 'controller'
		      }
		  },
	    })

	})
    .filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }])
    .filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                  //Also remove . and , so its gives a cleaner result.
                  if (value.charAt(lastspace-1) == '.' || value.charAt(lastspace-1) == ',') {
                    lastspace = lastspace - 1;
                  }
                  value = value.substr(0, lastspace);
                }
            }

            return value + (tail || '............');
        };
    });
})();


