var zoo = [{
	id: Math.floor(Math.random() * 10000000).toString(),
	species: 'Mammal',
	type: 'Rabbit',
	name: 'BugsBunny',
	food: 'Carrot',
}, {
	id: Math.floor(Math.random() * 10000000).toString(),
	species: 'Gilled',
	type: 'Fish',
	name: 'Nemo',
	food: 'Alga',
}, {
	id: Math.floor(Math.random() * 10000000).toString(),
	species: 'Mammal',
	type: 'Fox',
	name: 'Groovy',
	food: 'Bird',
}, {
	id: Math.floor(Math.random() * 10000000).toString(),
	species: 'Mammal',
	type: 'Bear',
	name: 'John',
	food: 'Strawberry',
}];

var school = [1, 2, 3, 4, 5, 6, 7, 8, 3, 35, 3, 5];

Array.prototype.filter = function(grade) {
	var result = [];
	this.forEach(function(item) {
		if (grade(item)) {
			result.push(item)
		}
	})
	return result;
}

var a = school.filter(function(x) {
	return x > 3 && x < 8
})

console.log(a)