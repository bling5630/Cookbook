var _ = require('ramda');

/*
const wasBornInCountry = person => person.birthCountry === OUR_COUNTRY
const wasNaturalized = person => Boolean(person.naturalizationDate)
const isOver18 = person => person.age >= 18

const isCitizen = either(wasBornInCountry, wasNaturalized)
const isEligibleToVote = both(isOver18, isCitizen)

// step#1
const wasBornInCountry = person => equals(person.birthCountry, OUR_COUNTRY);
const wasNaturalized = person => Boolean(person.naturalizationDate);
const isOver18 = person => gte(person.age, 18);
// step#2
const wasBornInCountry = person => equals(prop('birthCountry', person), OUR_COUNTRY);
const wasNaturalized = person => Boolean(prop('naturalizationDate', person));
const isOver18 = person => gte(prop('age', person), 18);
//step#3
const wasBornInCountry = person => equals(OUR_COUNTRY, prop('birthCountry', person));
const wasNaturalized = person => Boolean(prop('naturalizationDate', person));
const isOver18 = person => gte(prop('age', person), 18);
//step#4
const wasBornInCountry = person => equals(OUR_COUNTRY)(prop('birthCountry', person));
const wasNaturalized = person => Boolean(prop('naturalizationDate', person));
const isOver18 = person => gte(__, 18)(prop('age', person));
//step#5
const wasBornInCountry = person => equals(OUR_COUNTRY)(prop('birthCountry')(person));
const wasNaturalized = person => Boolean(prop('naturalizationDate')(person));
const isOver18 = person => gte(__, 18)(prop('age')(person));
//step#6
const wasBornInCountry = person => compose(equals(OUR_COUNTRY), prop('birthCountry'))(person);
const wasNaturalized = person => compose(Boolean, prop('naturalizationDate'))(person);
const isOver18 = person => compose(gte(__, 18), prop('age'))(person);
*/

//step#7
const wasBornInCountry = compose(equals(OUR_COUNTRY), prop('birthCountry'));
const wasNaturalized = compose(Boolean, prop('naturalizationDate'));
const isOver18 = compose(gte(__, 18), prop('age'));
