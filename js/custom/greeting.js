// agconti.com js
'use strict';  
var  greeting = (function(){
        var logo = function(){ return $('.logo'); },
            navItems = function(){ return $('.js--welcome'); },
            developerWelcomeMessage = 
              "\nHi! You're a developer too?\nThanks for viewing my site. Please feel free to drop me a line on twitter, ( @agconti ).\n",
            greeting = {};

        var getElements = function(){
          return {
              '$logo' : logo(),
              '$navItems': navItems() 
          };
        };

        greeting.homepageWelcome = function() {
          var elements = getElements();

          elements.$logo.velocity('fadeIn', {
              display: "block",
              duration: 1000
          });
          elements.$navItems.velocity('transition.slideLeftIn', {
              delay: 350,
              duration: 500,
              stagger: 100,       
              drag: true
          });
        };

        greeting.developerWelcome = function(){
          console.log(developerWelcomeMessage);
        }

        return {
          greet: function(){
              greeting.homepageWelcome();
              greeting.developerWelcome();
          },
          homepageWelcome: greeting.homepageWelcome,
          developerWelcome: greeting.developerWelcome
        };
    }());

