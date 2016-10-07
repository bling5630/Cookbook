var _ = require('ramda');

/*
//version_1
const forever21 = age => age >= 21 ? 21 : age + 1;

//version_2
const forever21 = age => ifElse(gte(__, 21), () => 21, inc)(age);

*/

const forever21 = age => ifElse(lt(21), () => 21, inc)(age);
