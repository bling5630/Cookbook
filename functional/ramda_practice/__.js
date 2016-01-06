var _ = require('ramda');

var placeholder =  {'@@functional/placeholder': true};

var greet = _.replace('{name}', placeholder, 'Hello, {name}!');
console.log(greet('Alice')); //=> 'Hello, Alice!'
