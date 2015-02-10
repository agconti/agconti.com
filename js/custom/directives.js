// app directives
;(function(){
'use strict'

/**
 * Fades ui elements in over 1 second. 
 * @param Velocity -- velocity.js
 */
function fadeIn(Velocity){
  return {
    restrict: 'A'
  , link: function(scope, element){
        Velocity(element, 'fadeIn', {
          display: 'block'
        , duration: 1000
      })
    }
  }
}

/**
 * Slides and fades ui element's nested children in over 1 second. 
 * @param Velocity -- velocity.js
 */
function slideChildrenIn(Velocity){
  return {
    restrict: 'A'
  , link: function(scope, element, attrs){
      var animationDelay = Number(attrs.delay) || 350
        , children = element.children()
      Velocity(children, { opacity: 0}, {duration:0, delay: 0}).then(function(){
        Velocity(children, 'transition.slideLeftIn', {
            display: 'inline-block'
          , opactiy: 1
          , delay: animationDelay
          , duration: 500 + animationDelay
          , stagger: 100       
          , drag: true
        })
      })
    }
  }
}

/**
 * Fliker's ui elements in over 1 second. 
 * @param Velocity -- velocity.js
 */
function flicker(Velocity){
  return {
    restrict: 'A'
  , link: function(scope, element){
      Velocity(element, 'callout.flash', { delay: 3250 })
    }
  }
}


/**
 * Controlls user's scrolling between two sections. 
 * @param $document
 * @param $timeout
 */
function scroll($document, $timeout){

  var smoothScroll = function(element, swingToClass, swingFromClass){
    var atswingToClass = false
      , notScrolling = true
      , scrollOptions = { duration: 350 } 

      swingToClass = '.' + swingToClass
      swingFromClass = '.' + swingFromClass

    var canSwing = function(){
      atswingToClass = !atswingToClass
      notScrolling = false
      $timeout(function(){
        notScrolling = true
        console.log('timing')
      }, scrollOptions.duration * 2)
    }

    var swingContentToClass = function(){
      if (atswingToClass && notScrolling){

        canSwing()
        return $(swingFromClass).velocity('scroll', scrollOptions)  
      } else if(!atswingToClass && notScrolling) {
        
        canSwing()
        return $(swingToClass).velocity('scroll', scrollOptions)
      }
    }
    // $(element).bind('scroll', swingContentToClass) 
    $document.bind('scroll', swingContentToClass) 
  }

  return {
    restrict: 'A'
  , link: function(scope, element, attrs){
      console.log('smooth')
      smoothScroll(element, attrs.swingToClass, attrs.swingFromClass)
    }
  }
}


angular.module('appDirectives', [])
  .directive('fadeIn', ['Velocity', fadeIn])
  .directive('slideChildrenIn', ['Velocity', slideChildrenIn])
  .directive('flicker', ['Velocity', flicker])
  .directive('scroll', ['$document', '$timeout', scroll])
})()