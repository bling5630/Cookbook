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
/*
function containMagicNumbers(number) {

	Array.prototype.contains = function(elem) {
		for (var i in this) {
			if (this[i] == elem) return true;
		}
		return false;
	};

	var digits = number.toString()
		.split("")
		.map(function containThree(n) {
			return parseInt(n);
		});

	if (digits.contains(MAGIC_FIZZ)) {
		return MAGIC_FIZZ_MESSAGE;
	}
}
*/

/*
function include(arr, obj) {
    for(var i=0; i<arr.length; i++) {
        if (arr[i] == obj) return true;
    }
}

include([1,2,3,4], 3); // true
include([1,2,3,4], 6); // undefined
*/

function addDigit(number) {

	var digits = number.toString();

	if (digits.search(MAGIC_FIZZ)) {
		return MAGIC_FIZZ_MESSAGE;
	}
}

console.log(addDigit(12456793));