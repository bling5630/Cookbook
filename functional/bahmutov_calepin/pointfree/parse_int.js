var _ = require('ramda'),
  S = require('spots');

console.log(['1', '2', '3'].map(parseFloat));
// [1, 2, 3]

console.log(['1', '2', '3'].map(parseInt));
// [1, NaN, NaN]

console.log(['1', '2', '3'].map(S(parseInt, S, 10)));
