function setupSomeGlobals() {
  // Local variable that ends up within closure
  var num = 666;
  // Store some references to functions as global variables
  gAlertNumber = function() { console.log(num); };
  gIncreaseNumber = function() { num++; };
  gSetNumber = function(x) { num = x; };
}
setupSomeGlobals();
