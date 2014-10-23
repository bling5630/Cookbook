var aboveTen = function(element, index, array) {
	return element >= 10;
};

array1 = [4, 3, 4, 3, 4, 1, 9, 2, 3, 4, 5, 6, 7, 8, 9];
array2 = [432, 43, 4321, 43, 121, 314, 31, 10, 31, 88];

console.log(array1.some(aboveTen));
console.log(array2.some(aboveTen));