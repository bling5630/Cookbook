

function square(x) {
	return x * x;
}

function sum(x, y) {
	return x + y;
}

console.log([1, 2, 3].map(square).reduce(sum));

// 1*1,2*2,3*3 -> 1+4+9=14

var square = x => x * x;
var sum = (x, y) => x + y;

[1, 2, 3].map(square).reduce(sum);
// 14