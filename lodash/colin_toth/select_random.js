_ = require('lodash');

var luckyDraw = ["Colin", "John", "James", "Lily", "Mary"];

function pickRandomPerson(luckyDraw){
    var index = Math.floor(Math.random() * (luckyDraw.length -1));
    return luckyDraw[index];
}

pickRandomPerson(luckyDraw); // John

// Lodash
console.log(_.sample(luckyDraw, 2)); // Colin

var luckyDraw = ["Colin", "John", "James", "Lily", "Mary"];

// Lodash - Getting 2 random item
_.sample(luckyDraw, 2); // ['John','Lily']