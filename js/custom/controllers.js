/* Controllers */
'use strict';

var appControllers = angular.module("appControllers", ['appServices']);

appControllers.controller('GreetingController', ['$scope', function($scope){

  $scope.$on('$stateChangeSuccess', function(){
      greeting.greet();
  });

}]);


appControllers.controller('ContactFormController', ['Mandrill', function(Mandrill){
    this.email;
    this.senderName;
    this.message;
    this.send = function(){
        Mandrill.send(this.email, this.message);
        console.log({
            email: this.email,
            name: this.senderName,
            message: this.message
        });
    };
;}]);

