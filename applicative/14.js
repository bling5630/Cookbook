var sortByAge = function(element, nextElement) {
	if (element.age > nextElement.age) {
		return 1;
	}
	if (element.age < nextElement.age) {
		return 1;
	}
	return 0;
};

array0 = [{
	name: 'Karl',
	age: 76
}, {
	name: 'Joseph',
	age: 34
}, {
	name: 'Tamas',
	age: 12
}];

console.log(array0.sort(sortByAge));

array1 = [2, 3, 4, 5, 6, 7, 8];
array2 = ['bird', 'dog', 'cat'];

console.log(array1.sort());
console.log(array2.sort());
