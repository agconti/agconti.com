// app directives
;(function(){
function fadeIn(Velocity){
  return {
    restrict: 'A'
  , link: function(scope, element){
        Velocity(element, 'fadeIn', {
          display: "block"
        , duration: 1000
      })
    }
  }
}

function slideChildrenIn(Velocity){
  return {
    restrict: 'A'
  , link: function(scope, element, attrs){
      var animationDelay = Number(attrs.delay) || 350
        , children = element.children()
      Velocity(children, { opacity: 0}, {duration:0, delay: 0}).then(function(){
        Velocity(children, 'transition.slideLeftIn', {
            display: "inline-block"
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