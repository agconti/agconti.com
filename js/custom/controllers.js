/* Controllers */
;(function(){
'use strict'

function ContactFormController (Mandrill){
  this.email
  this.senderName
  this.message
  this.send = function(){
    Mandrill.send(this.senderName, this.email, this.message)
  }
}

angular.module("appControllers", ['appServices'])
  .controller('ContactFormController', ['Mandrill', ContactFormController])
})()

    