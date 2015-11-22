function sayAlice() {
  var sayAlert = function() { console.log(alice); };
  // Local variable that ends up within closure
  var alice = 'Hello Alice';
  return sayAlert;
}

sayAlice()();
