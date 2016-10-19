const _ = require('ramda');

const person = {
  name: 'Randy',
  socialMedia: {
    github: 'randycoulman',
    twitter: '@randycoulman'
  }
};

const nameLens = _.lens(_.prop('name'), _.assoc('name'));
const twitterLens = _.lens(
  _.path(['socialMedia', 'twitter']),
  _.assocPath(['socialMedia', 'twitter'])
);

const nameLens_1 = _.lensProp('name');
const twitterLens_1 = _.lensPath(['socialMedia', 'twitter']);

//Using lenses
const a = _.view(nameLens, person); // => 'Randy'

const b = _.set(twitterLens, '@randy', person);
// => {
//   name: 'Randy',
//   socialMedia: {
//     github: 'randycoulman',
//     twitter: '@randy'
//   }
// }

const c = _.over(nameLens, _.toUpper, person);
// => {
//   name: 'RANDY',
//   socialMedia: {
//     github: 'randycoulman',
//     twitter: '@randycoulman'
//   }
// }

console.log(a,b,c);
