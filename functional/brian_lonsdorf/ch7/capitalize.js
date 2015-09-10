var R = require('ramda'),
	ljs = require('lambdajs').expose(global);

// capitalize :: String -> String

var capitalize = function(s) {
	return toUpperCase(R.head(s)) + toLowerCase(R.tail(s));
};

console.log(capitalize('smurf'));

//=> "Smurf"