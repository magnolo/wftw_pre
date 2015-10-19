(function() {
  'use strict';

  angular
    .module('preSite')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
            templateUrl: 'app/home/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
      })
      .state('newsletter', {
        url: '/newsletter',
            templateUrl: 'app/newsletter/newsletter.html',
            controller: 'NewsletterController',
            controllerAs: 'newsletter'
      })
      .state('home.more', {
          url: 'more-info',
          views:{
            'more':{
                templateUrl: 'app/more/more.html'
            }
          }
        })
        .state('about', {
          url: '/about',
              templateUrl: 'app/about/about.html',
              controller: 'AboutController',
              controllerAs: 'about'
          });

    $urlRouterProvider.otherwise('/');
  }

})();
