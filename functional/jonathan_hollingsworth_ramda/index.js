var _ = require('ramda');

let multiply = (x,y) => x * y;

console.log(multiply(2,4));

multiply = _.curry((x,y) => x * y);

console.log(multiply(3,6));

const double = multiply(9);

console.log(double(10));

const makeFullName = _.curry((first, last) => '${first} ${last}');

console.log(makeFullName('Bill', 'Smith'));

const familyRobinson = makeFullName(_.__, 'Robinson');

console.log(familyRobinson('William'));
console.log(familyRobinson('Jack'));

const getDiameter = (r) => 3.141592 * r;

const getCircumerence = _.pipe(getDiameter, double);

console.log(getCircumerence(3));
