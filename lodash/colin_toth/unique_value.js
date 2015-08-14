_ = require('lodash');
// Create an array of length 6 and populate them with unique values. The value must be prefix with "ball_".
// eg. [ball_0, ball_1, ball_2, ball_3, ball_4, ball_5]

var array = ['ball_0', 'ball_1', 'ball_2', 'ball_3', 'ball_4', 'ball_5'];

// Array's map method.
Array.apply(null, Array(6)).map(function(item, index){
    return "ball_" + index;
});


// Lodash
console.log(_.times(3, _.uniqueId.bind(null, 'ball_')));
