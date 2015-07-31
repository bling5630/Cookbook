var jasmineTester = function(numbers) {
	this.number1 = numbers.a;
	this.number2 = numbers.b;
	this.sum = function() {
		return this.number1 + this.number2;
	};
};


var myNumber = new jasmineTester(5, 2);

console.log(myNumber);