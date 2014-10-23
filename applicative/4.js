var functionValue = function() {
	console.log('I\'m a function value');
};

var col1 = [functionValue]; // store in array
var col2 = {0:functionValue}; // store in object, i.e. a method

col1[0](); //logs I'm a function value
col2[0](); //logs I'm a function value
