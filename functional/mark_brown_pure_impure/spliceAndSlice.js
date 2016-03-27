// impure, splice mutates the array

var firstThree = function(array) {
  return array.splice(0,3); // arr may never be the same again
};

console.log(firstThree([9,8,7,6,5,4,3,2,1]));
console.log(firstThree(['c','b','a']));

// pure, slice returns a new array

var firstThreeSecond = function(arrayTwo) {
  return arrayTwo.slice(0,3);
};

console.log(firstThreeSecond([1,2,3,4,5,6,7,8,9]));
console.log(firstThreeSecond(['a','b','c']));
