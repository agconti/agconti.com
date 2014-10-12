/* Controllers */
'use strict';
function GreetingController ($scope){

}

function ContactFormController (Mandrill){
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
}

angular.module("appControllers", ['appServices'])

       .controller('GreetingController', ['$scope', ContactFormController])

       .controller('ContactFormController', ['Mandrill', GreetingController])
;

