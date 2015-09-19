function forEach(array, fn) {
	for (var i = 0; i < array.length; i++) {
		fn(array[i]);
	}
}

forEach([4, 8, 15, 16, 23, 42], function(n) {
	console.log(n + 1);
});

// => 5 9 16 17 24 43

