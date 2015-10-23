// Compose and pipe

import _ from 'ramda';

let animals = [
  {
    name: 'goose',
    type: 'bird',
    color: 'white'
  },
  {
    name: 'parrot',
    type: 'bird',
    color: 'yellow'
  },
  {
    name: 'cat',
    type: 'mammal',
    color: 'grey'
  }
];

console.log(_.join(' and ', _.uniq(_.map(_.toUpper)(_.pluck('type', animals)))));

console.log(_.compose(
  _.join(' and '),
  _.uniq,
  _.map(_.toUpper),
  _.pluck('type')
)(animals));

console.log(_.pipe(
  _.pluck('type'),
  _.map(_.toUpper),
  _.uniq,
  _.join(' and ')
)(animals));
