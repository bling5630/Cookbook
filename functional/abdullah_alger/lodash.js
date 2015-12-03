_ = require('lodash');

var e = ['ned', 'dog', 'mr. wilson'];

_(e).forEach(function(name, index) {
console.log(index + 1 + ". " + name);
}).value();

/*
1. ned
2. dog
3. mr. wilson
*/
