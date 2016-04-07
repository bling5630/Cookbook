var thing = 'bat';

var sing = function() {
  // This function can 'see' thing
  var line = 'Twinkie, twnikle, little ' + thing;
  console.log(line);
};


sing();
// Twinkle, twinkle, little bat

// Outside the function we can't see message though
//console.log(line);
// undefined
