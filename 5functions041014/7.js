var lodash = require('lodash');

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

var result = lodash.filter(zoo, function(animal) {
	return animal.id % 7 === 0;
}).map(function(team) {
	return team.id;
});
console.log(result);