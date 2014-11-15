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
  , link: function(scope, element){
        Velocity(element.children(), 'transition.slideLeftIn', {
          display: "inline"
        , delay: 350
        , duration: 500
        , stagger: 100       
        , drag: true
      })
    }
  };
}

angular.module("appDirectives", [])
  .directive("fadeIn", ['Velocity', fadeIn])
  .directive("slideChildrenIn", ['Velocity', slideChildrenIn])
})()