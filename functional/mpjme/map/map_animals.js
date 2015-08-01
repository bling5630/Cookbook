var _ = require('lodash');

var animals = [{
	name: 'Fluffykins',
	species: 'rabbit'
}, {
	name: 'Caro',
	species: 'dog'
}, {
	name: 'Hamilton',
	species: 'dog'
}, {
	name: 'Harold',
	species: 'fish'
}, {
	name: 'Ursula',
	species: 'cat'
}, {
	name: 'Jimmy',
	species: 'fish'
}];

var animals_name = function(x) {
	return x.name + ' is a ' + x.species;
};

var names = _.map(animals, animals_name);

console.log(names);


/*
// normal for loop
var names = [];

for (var i = 0; i < animals.length; i++) {
	names.push(animals[i].name);
}
*/