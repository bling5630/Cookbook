var _ = require('lodash');

var FIZZ_MESSAGE = "Fizz",
	BUZZ_MESSAGE = "Buzz",
	FIZZBUZZ_MESSAGE = "FizzBuzz",
	MEHH_MESSAGE = "Mehh",
	MAGIC_FIZZ_MESSAGE = "**Magic_Fizz**";

var FIZZ_3 = 3,
	BUZZ_5 = 5,
	FIZZ_15 = 15,
	MAGIC_FIZZ = "3";

function containMagicNumbers(number) {
	return filterMagicNumbers(number) === true ? MAGIC_FIZZ_MESSAGE : false;
}

function filterMagicNumbers(number) {
	return _.some(number.toString(), function(n) {
		return n === MAGIC_FIZZ;
	});
}

console.log(containMagicNumbers([37]));
console.log(containMagicNumbers([12]));
console.log(containMagicNumbers([1211113]));
console.log(containMagicNumbers([131]));
console.log(filterMagicNumbers([131]));
console.log(containMagicNumbers(["ddfsdf"]));