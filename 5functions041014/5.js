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

/*
var specials = [];

var newRow = zoo.forEach(function(animal) {
	if (animal.id % 5 === 0) {
		specials.push(animal);
	}
	return newRow;
});
console.log(specials);*/

zoo.forEach(function(animal) {
	if (animal.id % 5 === 0) {
		console.log(animal);
	}
});