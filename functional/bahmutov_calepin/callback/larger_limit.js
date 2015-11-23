var numbers = [1, 2, 3, 4, 5];

function larger(limit, x) {
	return x > limit;
}

var larger3 = larger.bind(null, 3);
console.log(larger3(10)); // true
console.log(numbers.filter(larger3));
// [4, 5]

var larger5 = larger.bind(null, 3);
console.log(larger3(10));
console.log(larger3(1));