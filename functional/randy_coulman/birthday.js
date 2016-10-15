var _ = require("ramda");

/*
const nextAge = compose(inc, prop('age'));
const celebrateBirthday = person => assoc('age', nextAge(person), person);
*/

const celebrateBirthday = evolve({ age: inc });
