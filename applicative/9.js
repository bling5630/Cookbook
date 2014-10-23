var aboveTen = function(element, index, array) {
	return element >= 10;
};


array1 = [1, 2, 3, 4, 5, 66, 77, 8, 99, 999];

console.log(array1.filter(aboveTen));