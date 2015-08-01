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

// version #1
var dogs = animals.filter(function(animal) {
	return animal.species === 'dog';
});

var zoo = animals.filter(function(animal) {
	return animal.species === 'fish' || animal.species === 'rabbit';
});


// verson #2

var isDog = function(animal) {
	return animal.species === 'dog';
};

var dogS = animals.filter(isDog);

var otherAnimals = _.reject(animals, isDog);

console.log(otherAnimals);


/*
// normal for loop
var dogs = [];

for (var i = 0; i < animals.length; i++) {
	if (animals[i].species === 'dog') {
		dogs.push(animals[i]);
	}
}
*/