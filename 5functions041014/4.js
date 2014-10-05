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

var newAnimal = zoo.map(function(animal) {
	return {
		name: animal.name,
		food: animal.food
	};
});
console.log(newAnimal);