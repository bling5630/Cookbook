// babel destruct.js | node - ES6
// babel destruct.js - ES5

var animal = {
	species: 'dog',
	weight: 23,
	sound: 'woof'
};

var {
	species, sound
} = animal;
console.log('The ' + species + ' says ' + sound + '!');
