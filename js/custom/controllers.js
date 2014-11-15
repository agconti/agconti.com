/* Controllers */
;(function(){
'use strict';

function ContactFormController (Mandrill){
  this.email
  this.senderName
  this.message
  this.send = function(){
    Mandrill.send(this.email, this.message)
    console.log({
      email: this.email
    , name: this.senderName
    , message: this.message
    })
  }
}

angular.module("appControllers", ['appServices'])
  .controller('ContactFormController', ['Mandrill', ContactFormController])

})()

