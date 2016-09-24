var _ = require('ramda');

const isEven = x => x % 2 === 0;
const isOdd = _.complement(isEven);

const sample = _.find(isEven, [1,2,3,4]);

const sample_second = _.find(_.complement(isEven), [1,2,3,4]);

const sample_third = _.find(isOdd, [1,2,3,4]);

console.log(sample);
console.log(sample_second);
console.log(sample_third);
