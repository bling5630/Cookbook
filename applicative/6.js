//the mathOperation function returns a function

var mathOperation = function(a) {
	switch (a) {
		case '+':
			return function(x, y) {
				return x + y;
			};
		case '+':
			return function(x, y) {
				return x + y;
			};
		case '-':
			return function(x, y) {
				return x - y;
			};
		case '*':
			return function(x, y) {
				return x * y;
			};
		case '/':
			return function(x, y) {
				return x / y;
			};
	}
};

console.log(mathOperation('+')(21,2));
console.log(mathOperation('+')(2,25));
console.log(mathOperation('*')(2,21));
console.log(mathOperation('-')(2,2));
console.log(mathOperation('+')(2,2));