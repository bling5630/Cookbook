
for (var i = 1; i <= 100; i++) {

	var numberDivisibleBy3 = (i % 3) === 0,
		numberDivisibleBy5 = (i % 5) === 0,
		numberDivisibleBy15 = (i % 15) === 0;

	if (numberDivisibleBy15) {
		console.log('FizzBuzz');
	} else if (numberDivisibleBy5) {
		console.log('Fizz');
	} else if (numberDivisibleBy3) {
		console.log('Buzz');
	} else {
		console.log(i);
	}
}