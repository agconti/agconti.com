/* Controllers */
'use strict';

var siteControllers = angular.module("siteControllers", []);

siteControllers.controller('GreetingController', function(){
});


siteControllers.controller('ContactFormController', function(){
    this.email;
    this.senderName;
    this.message;
    this.alertMessage = function(){
        console.log({
            email: this.email,
            name: this.senderName,
            message: this.message
        });
    };
});

