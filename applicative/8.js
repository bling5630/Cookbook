var aboveTen = function(element, index, array) {
	return element >= 10;
};

array1 = [2, 3, 4, 6, 7, 88, 5, 32, 5, 72, 67, 3, 2, 666];
array2 = [21, 23, 47, 69, 73, 88, 15, 32, 35, 72, 67, 31, 23, 666];

console.log(array1.some(aboveTen));
console.log(array2.some(aboveTen));
