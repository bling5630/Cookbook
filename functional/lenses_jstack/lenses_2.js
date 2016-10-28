const john = { /* see john above */ };
const lensCreator = lensScopeFor(john);

const street = lensCreator(['address', 'street']);

const value = street.view('Default value');
const newJohn = street.set('First');
