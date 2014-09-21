/* Controllers */
'use strict';

var appControllers = angular.module("appControllers", ['appServices']);

appControllers.controller('GreetingController', function(){
});


appControllers.controller('ContactFormController', ['Mandrill', function(Mandrill){
    this.email;
    this.senderName;
    this.message;
    this.alertMessage = function(){
        Mandrill.send(this.email, this.message);
        console.log({
            email: this.email,
            name: this.senderName,
            message: this.message
        });
    };
}]);

