// agconti.com js
var animateWelcome = function (selector) {
    var maxDuration = 1500;
    var minDuration = 1000;
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
        animationConfig.duration = Math.random() * (maxDuration - minDuration) + minDuration;
        $($selected[i])
            .css(i < ($selected.length / 2) ? 'left': 'right' , animationOffset)
            .velocity(animation, animationConfig);
    }
};
$(function () {

    // opening animation
    animateWelcome('.js--welcome');

    // Developer Welcome
    console.log("\nHi! You're a developer too?\nThanks for viewing my site. Please feel free to drop me a line on twitter, ( @agconti ).\n");
});
