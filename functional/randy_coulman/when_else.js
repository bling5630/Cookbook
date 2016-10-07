var _ = require('ramda');

/*

const alwaysDrivingAge = age => when(lt(__, 16), always(16))(age);

*/

const alwaysDrivingAge = age => unless(gte(__, 16), always(16))(age);
