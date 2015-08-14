_ = require('lodash');

// Naive method: Returning a new object with selected properties 
Object.prototype.pick = function(arr) {
    var _this = this;
    var obj = {};
    arr.forEach(function(key){
        obj[key] = _this[key];
    });

    return obj;
};

var objA = {"name": "colin", "car": "suzuki", "age": 17};

var objB = objA.pick(['car', 'age']);
// {"car": "suzuki", "age": 17}

// Lodash
var objC = _.pick(objA, ['car', 'age']);
// {"car": "suzuki", "age": 17}

console.log(objC);