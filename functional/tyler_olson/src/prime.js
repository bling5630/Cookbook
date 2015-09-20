var _ = require('ramda');

function takePrimes(n) {

}

function isPrime(n) {
	var possibleFactors = _.range(2, n - 1),
		hasFactor = _.any(isFactorOf(n), possibleFactors);
	return _.not(hasFactor);
}

var isFactorOf = _.curry(function(n, factor) {
	return n % factor === 0;
});

module.exports = {
	isPrime: isPrime,
};