var numbers = [1, 2, 3, 4, 5];

var isEven = function(x) {
	return x % 2 === 0;
};

console.log(numbers.filter(isEven));
// [2,4]