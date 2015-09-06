//+ modulo :: Number -> Number -> Number 

var modulo = function(divisor, dividend) {
	return dividend % divisor;
}.autoCurry;

//+ isOdd :: Number -> Number

var isOdd = modulo(2);

isOdd(6); // 0 

isOdd(1); // 1
//+ filter :: (0 -> Bool) -> [a] -> [a]

var filter = function(f, xs) {
	return xs.filter(f);
}.autoCurry();

filter(isOdd, [1, 2, 3, 4, 5]); // [1,3,5]

var getTheOdds = filter(isOdd);

getTheOdds([1, 2, 3, 4, 5]); // [1,3,5]