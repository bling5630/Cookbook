const john = { /* see above */ };

const streetLens = R.lensPath(['address', 'street']);
const numberLens = R.lensPath(['address', 'houseNumber']);
const busLens = R.lensPath(['address', 'bus']);
const nameLens = R.lensPath(['address', 'bus']);

const street = R.view(streetLens, john);
const street = R.set(streetLens, 'First', john);
