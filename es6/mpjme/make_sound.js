makeSound({
	//species: 'dog',
	weight: 23,
	sound: 'woof'
});

// version #3

function makeSound({species = 'animal', sound}) {
	console.log('The ' + species + ' says ' + sound + '!');
}

/*
version #2
function makeSound(options) {
	//var species = options.species || 'animal';
	//var sound = options.sound;

	var {
		species, sound
	} = options;
	species = species || 'animal';

	console.log('The ' + species + ' says ' + sound + '!');
}
*/

/*
version #1
function makeSound(options) {
	options.species = options.species || 'animal';
	console.log('The ' + options.species + ' says ' + options.sound + '!');
}
*/