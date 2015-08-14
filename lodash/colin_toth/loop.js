_ = require('lodash');
// 1. Basic for loop.
for(var i = 0; i < 5; i++) {
    // ....
}

// 2. Using Array's join and split methods
Array.apply(null, Array(5)).forEach(function(){
    // ...
});

// Lodash
_.times(5, function(){
    // ...
});