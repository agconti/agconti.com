// Animations
'use strict';
var appAnimations = angular.module('appAnimations', ['ngAnimate']);
    
appAnimations.animation('.greeting-animation', function() {
  return {
    enter: function(element, done) {
      // run the animation here and call done when the animation is complete
      console.log('yo');
      console.log(element);
      $(element).css('opacity', 1);
      $('.js--welcome').css('opacity', 1);
      consol.log($('.js--welcome'));
      greeting.greet();
      done();
    },
    leave: function(element, done) { },
    move: function(element, done) { },

    //animation that can be triggered before the class is added
    beforeAddClass: function(element, className, done) { },

    //animation that can be triggered after the class is added
    addClass: function(element, className, done) { },

    //animation that can be triggered before the class is removed
    beforeRemoveClass: function(element, className, done) { },

    //animation that can be triggered after the class is removed
    removeClass: function(element, className, done) { }
  };
});
