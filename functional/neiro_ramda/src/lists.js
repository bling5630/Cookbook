// Lists
import _ from 'ramda';

let animals = [
  {name:'goose',
  type:'bird',
  color:'white'},

  {name:'parrot',
  type:'bird',
  color:'yellow'},

  {name:'cat',
  type:'mammal',
  color:'grey'}
];

console.log(_.map(animal=>animal.color + ' ' + animal.name, animals));

console.log(_.head(animals), _.last(animals));

console.log(_.uniq(_.pluck('type', animals)));

console.log(_.length(_.filter(animal => animal.type === 'bird', animals)));
