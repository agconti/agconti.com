// agconti.com js
var animateWelcome = function (selector) {
    var maxDuration = 1500;
    var minDuration = 1000;
    var animationDirection;
    var animationOffset = "200%";
    var animationConfig = {
        easing: 'easeOutElastic',
        delay: 500,
    };
    var $selected = $(selector);
    for (var i = 0; i < $selected.length; i++) {
        var animation = {
            opacity: 1
        };
        if (i < ($selected.length / 2)){
            animation.left = 0;
            animationDirection = 'left';
        } else {
            animation.right = 0;
            animationDirection = 'right';
        }
        animationConfig.duration = Math.random() * (maxDuration - minDuration) + minDuration;
         $($selected[i])
            .css(animationDirection, animationOffset)
            .velocity(animation, animationConfig);
    }
};
$(function () {

    // opening animation
    
    $($('.masthead')[0]).velocity("transition.flipBounceYIn", { stagger: 100 });
    animateWelcome('.js--welcome');

    // Developer Welcome
    console.log("\nHi! You're a developer too?\nThanks for viewing my site. Please feel free to drop me a line on twitter, ( @agconti ).\n");
});