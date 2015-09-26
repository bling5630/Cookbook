var _ = require('ramda');

function takePrimes(n) {
	var primes = [];

	for (var i = 2; primes.length < n; i++) {
		if (isPrime(i)) {
			primes.push(i);
		}
	}
	return primes;
}

function isPrime(n) {

	if (n === 2) {
		return true;
	}

	var possibleFactors = _.range(2, n - 1),
		hasFactor = _.any(isFactorOf(n), possibleFactors);

	return _.not(hasFactor);
}

var isFactorOf = _.curry(function(n, factor) {
	return n % factor === 0;
});

module.exports = {
	isPrime: isPrime,
	takePrimes: takePrimes,
};
