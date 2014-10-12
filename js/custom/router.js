function Router ($stateProvider, $urlRouterProvider) {
    
  // catch all route
  $urlRouterProvider.otherwise('/');
    
  // app routes
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'templates/contact-form.html'     
    });
}

angular.module("myApp")

       .config(['$stateProvider', '$urlRouterProvider', Router]);
