var _ = require('ramda');

const wasBornInCountry = person => person.birthCountry === OUR_COUNTRY;

const wasNaturalized = person => Boolean(person.naturalizationDate);

const isOver18 = person => person.age >= 18;

const isCitizen = person => wasBornInCountry(person) || wasNaturalized(person);

const isEligibleToVote = person => isOver18(person) && isCitizen(person);

const isCitizen_2 = either(wasBornInCountry, wasNaturalized);
const isEligibleToVote_2 = both(isOver18, isCitizen);
