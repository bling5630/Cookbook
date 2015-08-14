_ = require('lodash');

var objA = {
    "name": "colin"
};

// Normal method? Too long. See Stackoverflow for solution: http://stackoverflow.com/questions/4459928/how-to-deep-clone-in-javascript

// Lodash
var objB = _.cloneDeep(objA);
//objB === objA // false

console.log(objB);