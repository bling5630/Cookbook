// Currying

import _ from 'ramda';

let tripleMultiply = (a, b, c) => a * b * c;
tripleMultiply(3, 9, 2); //=> 54
tripleMultiply(3, 9)(2); //=> TypeError: tripleMultiply(..) is not a function
let curriedMultiply = _.curry(tripleMultiply);
curriedMultiply(3, 9)(2); //=> 54
curriedMultiply(3)(9)(2); //=> 54
