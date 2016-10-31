const _ = require('ramda');

/*
const people = [{ name: 'john' }, { name: 'jack' }];
const partialNameFilter = (partial, person) => person.name.startsWith(partial);
const getPersonThatStartsWith = (partial) => people.filter(partialNameFilter);
*/

const people = [{ name: 'john' }, { name: 'jack' }];
const partialNameFilter = _.curry((partial, person) => person.name.startsWith(partial));
const getPersonThatStartsWith = (partial) => people.filter(partialNameFilter(partial));

partialNameFilter('joh', { name: 'john' });
partialNameFilter('joh')({ name: 'john' });

console.log(getPersonThatStartsWith)
