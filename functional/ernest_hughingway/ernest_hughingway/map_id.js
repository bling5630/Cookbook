var curry = require('curry');


var objects = [{
	id: 1
}, {
	id: 2
}, {
	id: 3
}];

// Version #1

objects.map(function(o) {
	// return console.log(o.id); // 1 2 3
	return o.id;
});

// Version #2

var get = curry(function(property, object) {
	return object[property];
});

// console.log(objects.map(get('id'))); //= [1, 2, 3]

// Version #3

var getIDs = function(objects) {
	return objects.map(get('id'));
};

// console.log(getIDs(objects)); //= [1, 2, 3]

// Version #4

var map = curry(function(fn, value) {
	return value.map(fn);
});
var getIDs2= map(get('id')); 

console.log(getIDs(objects)); //= [1, 2, 3]

