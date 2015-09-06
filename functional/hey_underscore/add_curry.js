// + add :: Number -> Number -> Number

var add = function(x) {
	return function(y) {
		return x + y;
	};
};

var add3 = add(3); // function(y){}

console.log(add3(4));

// wu.js autoCurry stuff