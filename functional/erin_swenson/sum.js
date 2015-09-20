// Binary function

// (Number, Number) => Number

function sum(x, y) {
	return x + y;
}

// Curried function

function sum_curried(x) {
	return function(y) {
		return x + y;
	};
}

var addTen = sum_curried(10); // type: Number => Number

console.log(addTen(20)); // 30
console.log(addTen(55)); // 65

//  type: Number → Number → Number → Number → Number

function sumFour(w) {
	return function(x) {
		return function(y) {
			return function(z) {
				return w + x + y + z;
			};
		};
	};
}

console.log(sumFour(1)(2)(10)(20)); // 33

var addTen = sumFour(3)(3)(4);

console.log(addTen(20)); // 30