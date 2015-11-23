var numbers = [1, 2, 3, 4, 5];

var isEven = function(x) {
	return x % 2 === 0;
};

var filter = Array.prototype.filter;

console.log(filter.call(numbers, isEven));
// [2,4]