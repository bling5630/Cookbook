var curry = require('curry');

var add = function(a, b) {
	return a + b;
};

add(1, 2); // 3

// console.log(add(1, 2)); // 3

add(1, 2, 'IGNORE ME'); // 3

// console.log(add(1)); // NaN
