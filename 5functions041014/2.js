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
}];


var specials = [];

var newAnimal = zoo.forEach(function(animal) {
	specials.push({
		name: animal.name,
		food: animal.food
	});
	return newAnimal;
});
console.log(specials);