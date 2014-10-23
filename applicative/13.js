var add = function(previousValue, currentValue, index, array) {
	return previousValue + currentValue;
};

var array1 = [2, 3, 4, 5, 6, 7, 8, 9];

console.log(array1.reduceRight(add));