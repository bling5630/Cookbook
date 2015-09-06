//+ modulo :: Number -> Number -> Number 

var modulo = function(divisor, dividend) {
	return dividend % divisor;
}.autoCurry;

//+ isOdd :: Number -> Number

var isOdd = modulo(2);

isOdd(6); // 0 

isOdd(1); // 1