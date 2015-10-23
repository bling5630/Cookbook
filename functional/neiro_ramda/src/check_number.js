import _ from 'ramda';

let checkNumber = _.cond([
  [_.is(Number), _.identity],
  [_.is(String), parseInt],
  [_.is(Boolean), Number],
  [_.isEmpty, _.always(0)],
  [_.T, _.always(NaN)]
]);

checkNumber(100500); //=> 100500
checkNumber('146%'); //=> 146
checkNumber('kobor'); //=> NaN
checkNumber(true); //=> 1
checkNumber(false); //=> 0
checkNumber([]); //=> 0
checkNumber(['test']); //=> NaN

console.log(checkNumber(3421343214), checkNumber('133223%'), checkNumber('kobor'), checkNumber(true), checkNumber(false), checkNumber([]), checkNumber(['test']));
