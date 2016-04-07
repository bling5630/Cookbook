var _ = require('ramda');

function twinkleTwinkle(thing) {
    console.log('Twinkle, twinkle, little ' + thing);
}
twinkleTwinkle('bat');
//=> Twinkle, twinkle, little bat

twinkleTwinkle.call(null, 'star');
//=> Twinkle, twinkle, little star

twinkleTwinkle.apply(null, ['bat']);
//=> Twinkle, twinkle, little bat

var twinkle = function(noun, wonderAbout) {
    return 'Twinkle, twinkle, little ' +
        noun + '\nHow I wonder where you ' +
        wonderAbout;
};

var twinkleBat = _.partial(twinkle, 'bat', 'are at');
var twinkleStar = _.partial(twinkle, 'star', 'are');
