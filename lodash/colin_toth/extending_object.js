_ = require('lodash');


// Adding extend function to Object.prototype
Object.prototype.extend = function(obj) {
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            this[i] = obj[i];
        }
    }
};

var objA = {"name": "colin", "car": "suzuki"};
var objB = {"name": "james", "age": 17};

//objA.extend(objB);
// objA; // {"name": "james", "age": 17, "car": "suzuki"};

// Lodash
console.log(_.assign(objA, objB));

var objA = {"name": "colin", "car": "suzuki"};
var objB = {"name": "james", "age": 17};
var objC = {"pet": "dog"};

// Lodash
_.assign(objA, objB, objC);
// {"name": "james", "car": "suzuki", "age": 17, "pet": "dog"}