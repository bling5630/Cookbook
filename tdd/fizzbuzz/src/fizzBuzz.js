/**

Original 

FizzBuzz = function(number) {
	if (number % 15 === 0) {
		return "FizzBuzz";
	} else if (number % 5 === 0) {
		return "Fizz";
	} else if (number % 3 === 0) {
		return "Buzz";
	} else {

module.exports = FizzBuzz;
**/

/**
var optionA = 3,
	optionB = 5,
	optionC = 15;
**/

var FizzBuzz = function fizzBuzzCalculator(number) {

var numberDivisibleBy3 = (number % 3) === 0,
	numberDivisibleBy5 = (number % 5) === 0,
	numberDivisibleBy15 = (number % 15) === 0;

	if (numberDivisibleBy15) {
		return "FizzBuzz";
	} else if (numberDivisibleBy5) {
		return "Fizz";
	} else if (numberDivisibleBy3) {
		return "Buzz";
	} else {
		return "Mehh";
	}};

console.log(FizzBuzz(15));

module.exports = FizzBuzz;