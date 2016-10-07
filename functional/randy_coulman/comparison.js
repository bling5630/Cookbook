var _ = require('ramda');

/*
//version_1

const wasBornInCountry = person => person.birthCountry === OUR_COUNTRY;
const wasNaturalized = person => Boolean(person.naturalizationDate);
const isOver18 = person => person.age >= 18;

const isCitizen = either(wasBornInCountry, wasNaturalized);

const isEligibleToVote = both(isOver18, isCitizen);
*/
//version_2

const wasBornInCountry = person => equals(person.birthCountry, OUR_COUNTRY);
const wasNaturalized = person => Boolean(person.naturalizationDate);
const isOver18 = person => gte(person.age, 18);

const isCitizen = either(wasBornInCountry, wasNaturalized);

const isEligibleToVote = both(isOver18, isCitizen);
