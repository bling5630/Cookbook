var _ = require('ramda');

/*
//version_1
const alwaysDrivingAge = age => ifElse(lt(__, 16), always(16), a => a)(age);

*/

const alwaysDrivingAge = age => ifElse(lt(__, 16), always(16), identity)(age);
