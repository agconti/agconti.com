//app.js

var app = angular.module('myApp', []);

app.controller('GreetingController', function(){

});

app.controller('ContactFormController', function(){
    this.email;
    this.firstName;
    this.lastName;
    this.message;
    this.alertMessage = function(){alert("Yo IMA FE");};
});
