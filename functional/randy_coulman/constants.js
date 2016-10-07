var _ = require('ramda');

const forever21 = age => ifElse(gte(__, 21), always(21), inc)(age);
