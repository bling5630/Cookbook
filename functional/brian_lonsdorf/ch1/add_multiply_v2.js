var conjoin = function(flock_x, flock_y) {
	return flock_x + flock_y;
};

var breed = function(flock_x, flock_y) {
	return flock_x * flock_y;
};

var flock_a = 4,
	flock_b = 2,
	flock_c = 0;

var result = conjoin(breed(flock_b, conjoin(flock_a, flock_c)), breed(flock_a, flock_b));

console.log(result); //=> 16 , right answer