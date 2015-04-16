// KataFizzBuzz

var FIZZ_MESSAGE = "Fizz",
	BUZZ_MESSAGE = "Buzz",
	FIZZBUZZ_MESSAGE = "FizzBuzz",
	MEHH_MESSAGE = "Mehh",
	MAGIC_FIZZ_MESSAGE = "**Magic_Fizz**";

var FIZZ_3 = 3,
	BUZZ_5 = 5,
	FIZZ_15 = 15,
	MAGIC_FIZZ = 3;

function kataFizzBuzzCalclulator(number) {

	validateInput(number);

	return calculateOutput(number);
}

function validateInput(number) {
	if (typeof number !== "number") {
		throw new Error();
	}
}

function calculateOutput(number) {
	if (isDivisible(number, FIZZ_15)) {
		return FIZZBUZZ_MESSAGE;
	} else if (isDivisible(number, BUZZ_5)) {
		return BUZZ_MESSAGE;
	} else if (isDivisible(number, FIZZ_3)) {
		return FIZZ_MESSAGE;
	} else if (containMagicNumbers(number, MAGIC_FIZZ)) {
		return MAGIC_FIZZ_MESSAGE;
	} else {
		return MEHH_MESSAGE;
	}
}

function isDivisible(number, divident) {
	return number % divident === 0;
}

function containMagicNumbers(number) {

	var digits = number.toString()
		.split("")
		.map(function containThree(n) {
			return parseInt(n);
		});

	if (digits.contains(MAGIC_FIZZ)) {
		return MAGIC_FIZZ_MESSAGE;
	}
}

Array.prototype.contains = function(elem) {
	for (var i in this) {
		if (this[i] == elem) return true;
	}
	return false;
};

console.log(kataFizzBuzzCalclulator(13));

module.exports = kataFizzBuzzCalclulator;