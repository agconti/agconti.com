// app.js
;(function(){
'use strict'

angular.module('myApp', [
    'ngAnimate'
  , 'ui.router'
  , 'ngMessages'
  , 'appControllers' 
  , 'appServices'
  , 'appDirectives'
])

// Application Router
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  
  // catch all route
  $urlRouterProvider.otherwise('/')
    
  // app routes
  $stateProvider
    .state('home', {
      url: '/'
    , templateUrl: 'templates/home.html'
    })
    .state('contact', {
      url: '/contact'
    , templateUrl: 'templates/contact-form.html'    
    })
    .state('contact.name', {
      url: '/name'
    , templateUrl: 'templates/contact-form.name.html'     
    })
    .state('contact.email', {
      url: '/email'
    , templateUrl: 'templates/contact-form.email.html'     
    })
    .state('contact.message', {
      url: '/message'
    , templateUrl: 'templates/contact-form.message.html'     
    })
}])

})()


