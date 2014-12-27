// app directives
;(function(){

var preFadeAnimation = {opacity: 0}
  , preFadeAnimationOptions = {
      display: 'block'
    , duration:0
    , delay: 0
  }

function fadeIn(Velocity){
  return {
    restrict: 'A'
  , link: function(scope, element, attrs){
      var delay = Number(attrs.delay) || 350
      , duration = 1000 + delay
      Velocity(element, preFadeAnimation, preFadeAnimationOptions).then(function(){
        Velocity(element, 'fadeIn', {
            display: 'block'
          , opactiy: 1 
          , delay: delay
          , duration: duration
        })
      })
    }
  }
}

function slideChildrenIn(Velocity){
  return {
    restrict: 'A'
  , link: function(scope, element, attrs){
      var delay = Number(attrs.delay) || 350
        , duration = 500 + delay
        , children = element.children()
      Velocity(children, preFadeAnimation, preFadeAnimationOptions).then(function(){
        Velocity(children, 'transition.slideLeftIn', {
            display: 'inline-block'
          , opactiy: 1
          , delay: delay
          , duration: duration
          , stagger: 100       
          , drag: true
        })
      })
    }
  }
}

function flicker(Velocity){
  return {
    restrict: 'A'
  , link: function(scope, element){
      Velocity(element, 'callout.flash', { delay: 3250 })
    }
  }
}
angular.module("appDirectives", [])
  .directive("fadeIn", ['Velocity', fadeIn])
  .directive("slideChildrenIn", ['Velocity', slideChildrenIn])
  .directive("flicker", ['Velocity', flicker])
})()