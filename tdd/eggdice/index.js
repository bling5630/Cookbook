var FIZZ_BASE = 7;
var FIZZ_MESSAGE = 'fizz';

function fizz(number) {
  validateInput(number);
  return calculateOutput(number);
}

function validateInput(number) {
  if (!number) {
    throw new Error('Input is undefined');
  }
  if (typeof number !== 'number') {
    throw new Error('Input is not a number');
  }
}

function calculateOutput(number) {
  if (isDividableWith(number, FIZZ_BASE)) {
    return FIZZ_MESSAGE;
  }
  return String(number);
}

function isDividableWith(number, divident) {
  return number % divident === 0;
}

console.log(calculateOutput(7));

module.exports = fizz;