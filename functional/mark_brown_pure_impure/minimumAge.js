// impure

var minumum = 21;

var checkAge = function(age) {
  return age >= minumum;
};

// pure

var checkAgeTwo = function(ageTwo) {
  var minimumTwo = 22;
  return ageTwo >= minimumTwo;
};
