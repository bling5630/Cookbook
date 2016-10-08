var _ = require('ramda');

/*
// original
const forever21 = age => _.ifElse(_.gte(__, 21), _.always(21), inc)(age);

const alwaysDrivingAge = age => ifElse(lt(__, 16), always(16), identity)(age);

const water = temperature => cond([
[equals(0),   always('water freezes at 0°C')],
[equals(100), always('water boils at 100°C')],
[T,           temp => `nothing special happens at ${temp}°C`]
])(temperature);
*/
//pointfree

const forever21 = _.ifElse(_.gte(_.__, 21), _.always(21), _.inc);

const alwaysDrivingAge = _.when(_.lt(_.__, 16), _.always(16));

const water = _.cond([
  [_.equals(0),   _.always('water freezes at 0°C')],
  [_.equals(100), _.always('water boils at 100°C')],
  [          temp => `nothing special happens at ${temp}°C`]
]);

console.log(forever21(2));// =>3
console.log(forever21(21));// =>21

console.log(alwaysDrivingAge(4));// =>16
console.log(alwaysDrivingAge(1));// =>16
console.log(alwaysDrivingAge(17));// =>17
console.log(alwaysDrivingAge(17121));// =>17121
