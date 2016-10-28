const obj = { /* with values */ };
const abstractLens = (property) => R.lensPath(['a', property, 'c']);

const value = R.view(abstractLens('b'), obj);
