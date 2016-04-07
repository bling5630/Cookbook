var outer = function() {
  var outerVar = 'Hatter';
  var inner = function() {
    // we can 'see' outerVar here
    console.log(outerVar);
    // Hatter

    var innerVar = 'Dormouse';
    // innerVar is only visible here inside inner()
    };

// innerVar is not visible here.
};
