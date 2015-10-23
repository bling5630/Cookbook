import _ from 'ramda';

// Typing
let str = 'test';

console.log(_.is(String, str));

console.log(_.is(String)(str));

let isString= _.is(String);

console.log(isString('string'));

console.log(_.type(isString));

// Math
console.log(_.add(100,500), _.add(100)(700), _.mean([2,3,7]));

console.log(_.sum(_.range(1,123)));

// Logic
console.log(_.and(true, false), _.and([])(0), _.not(1), _.both(isString, _.is(String))(str));
