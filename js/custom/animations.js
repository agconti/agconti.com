// Animations
'use strict';
function LogoAnimation() {
  return {
    enter: function(element, done) {
      console.log("logo started");
      done();
      // run the animation here and call done when the animation is complete
      // element.velocity( 'fadeIn', {
      //   display: "block",
      //   duration: 1000
      // }, {
      //   complete: done
      // });
    },
    leave: function(element, done) { console.log("logo started");},
    move: function(element, done) { console.log("logo started");},

    //animation that can be triggered before the class is added
    beforeAddClass: function(element, className, done) { console.log("logo started");},

    //animation that can be triggered after the class is added
    addClass: function(element, className, done) { console.log("logo started");},

    //animation that can be triggered before the class is removed
    beforeRemoveClass: function(element, className, done) { console.log("logo started");},

    //animation that can be triggered after the class is removed
    removeClass: function(element, className, done) { console.log("logo started");}
  };
}

function WelcomeAnimation() {
  return {
    enter: function(element, done) {
      console.log("js--welcome started");
      // run the animation here and call done when the animation is complete
      element.velocity('transition.slideLeftIn', {
        delay: 350,
        duration: 500,
        stagger: 100,       
        drag: true
      }, {
        complete: function(){
          done;
        }
      });
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
}

angular.module('appAnimations', ['ngAnimate']);
    
       .animation('.logo', LogoAnimation);

       .animation('.js--welcome', WelcomeAnimation);

