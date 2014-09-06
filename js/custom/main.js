// agconti.com js
var  greeting = (function(){
    'use strict';
    var $logo = $('.logo'),
        $navItems = $('.js--welcome'),
        developerWelcomeMessage = "\nHi! You're a developer too?\nThanks for \
            viewing my site. Please feel free to drop me a line on twitter, ( @agconti ).\n";

    return {
        homepageWelcome: function() {
            $logo.velocity('fadeIn', {
                display: "block",
                duration: 1000
            });
            $navItems.velocity('transition.slideLeftIn', {
                delay: 350,
                stagger: 100,
                drag: true
            });
        },
        developerWelcome: function(){
            console.log(developerWelcomeMessage);
        }
    };
}());

$(function () {
    greeting.homepageWelcome();
    greeting.developerWelcome();
});
