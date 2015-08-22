// impure

console.log('impure');

var minimum = 21;

var checkAgeImpure = function(age) {
	return age >= minimum;
};

console.log(checkAgeImpure(12));
console.log(checkAgeImpure(122));

// pure

console.log('pure');

var checkAgePure = function(age) {
	var minimum = 21;
	return age >= minimum;
};

var immutableState = Object.freeze({
	minimum: 21
});

console.log(checkAgePure(16));
console.log(checkAgePure(169));