_ = require('lodash');


// Get a random number between 15 and 20.

// Naive utility method
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

getRandomNumber(15, 20);

// Lodash
console.log(_.random(115, 140));

_.random(20); // Return random number between 0 to 20
console.log(_.random(15, 20, true)); // Return random floating numbers between 15 and 20