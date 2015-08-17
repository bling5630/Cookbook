import _ from 'lodash';

// without curry

let dragonfly = (name, size, element) =>
	name + ' is a ' +
	size + ' dragon that breathes ' +
	element + '!';

// console.log(dragonfly('Oscar', 'big', 'stuff'));
// Oscar is a big dragon that breathes stuff!

/*
// with curry

let dragon =
	name =>
	size =>
	element =>
	name + ' is a ' +
	size + ' dragon that breathes ' +
	element + '!';


let georgeDragon = dragon('George');
let smallDragon= georgeDragon('small');

// console.log(dragon('George')('small')('Haribo'));
// George is a small dragon that breathes Haribo!

// console.log(georgeDragon('small')('Haribo'));
// George is a small dragon that breathes Haribo!

// console.log(smallDragon('Haribo'));
// George is a small dragon that breathes Haribo!

*/

// with lodash

let dragon =
	name =>
	size =>
	element =>
	name + ' is a ' +
	size + ' dragon that breathes ' +
	element + '!';

dragon = _.curry(dragon);

let georgeDragon = dragon('George');
let smallDragon = georgeDragon('small');

// console.log(smallDragon('Haribo'));
// George is a small dragon that breathes Haribo!


/*
// bears example without curry

let bears = [{
	name: 'Joe',
	element: 'fire'
}, {
	name: 'Marc',
	element: 'water'
}, {
	name: 'Anna',
	element: 'earth'
}, {
	name: 'Elena',
	element: 'silver'
}];

let hasElement =
	(element, obj) => obj.element === element;

let lightingBears =
	bears.filter(x => hasElement('water', x));

console.log(lightingBears);
*/

// bears example with curry-lodash

let bears = [{
	name: 'Joe',
	element: 'fire'
}, {
	name: 'Marc',
	element: 'water'
}, {
	name: 'Anna',
	element: 'earth'
}, {
	name: 'Elena',
	element: 'silver'
}];

let hasElement =
	_.curry((element, obj) => obj.element === element);

let lightingBears =
	bears.filter(hasElement('water'));

// console.log(lightingBears);

// cats example

let cat =
	name =>
	size =>
	element =>
	name + ' is a ' +
	size + ' cat that breathes ' +
	element + '!';

let output = cat('Kara')('large')('ice');	

// console.log(output);
// Kara is a large cat that breathes ice!
