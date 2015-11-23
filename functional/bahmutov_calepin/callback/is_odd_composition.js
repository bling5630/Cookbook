var numbers = [1, 2, 3, 4, 5];

var isEven = function(x) {
	return x % 2 === 0;
};

var not = function(fn) {
	return function() {
		return !fn.apply(null, arguments);
	};
};

var isOdd = not(isEven); // composition

console.log(numbers.filter(isOdd));
// [1, 3, 5]