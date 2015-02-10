/* Controllers */
;(function(){
'use strict'

function ScrollController ($document, $timeout){

  var atBio = false
    , canScroll = true 

  var canSwing = function(){
    atBio = !atBio
    canScroll = !canScroll
    console.log('atbio %s', atBio)
    $timeout(function(){
      canScroll = !canScroll
    }, 800)
  }

  var swingContentToBio = function(){
    console.log('sdfas')
    if (atBio && canScroll){
      canSwing()
      return $('.rotate-right').velocity('scroll')  
    } else if(!atBio && canScroll) {
      canSwing()
      return $('.bio').velocity('scroll')
    }
  }
  $document.bind('scroll', swingContentToBio)
}

function ContactFormController (Mandrill){
  this.pageTransitionClass = 'rotate-right'
  this.email
  this.senderName
  this.message
  this.send = function(){
    Mandrill.send(this.senderName, this.email, this.message)
  }
}

angular.module("appControllers", ['appServices'])
  .controller('ScrollController', ['$document', '$timeout', ScrollController])
  .controller('ContactFormController', ['Mandrill', ContactFormController])
})()

