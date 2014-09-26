var appRouter = angular.module("appRouter", ['ui.router']);

appRouter.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
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
}]);
