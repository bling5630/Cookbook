var _ = require('ramda');

var originalArray = [1,2,3,4,5];

// Bad - using a for-loop to mutate a new array

var filteredArray = [];

for(var i = 0; i < originalArray.length; i++){
  var number= originalArray[i];
  if (number % 2 || number %6 ===0) {
    filteredArray.push(number);
  }
}

console.log(originalArray, filteredArray);

// Better - using the native Array filter method with a typical anonymous function

var originalArray2 = [1, 4, 6, 2, 3, 499, 5121];

var filteredArray2 = originalArray2.filter(function(number) {
  return number % 2 || number % 6 === 0;
});

console.log(originalArray2, filteredArray2);

// Most Functional - using predicates with a filter method

var originalArray3 = [1, 4, 6, 2, 3, 99, 121];

var isOdd = function(number) {
  return number % 2;
};

var isDivisibleBySix=function(number) {
  return number % 6 === 0;
};

var isValid= _.anyPass([isOdd, isDivisibleBySix]);
var filteredArray3=_.filter(isValid, originalArray3);

console.log(originalArray3, filteredArray3);
