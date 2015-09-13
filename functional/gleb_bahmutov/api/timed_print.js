function timed(workload, isDone, interval) {
  var intervalId = setInterval(function() {
    workload();
    if (isDone()) {
      clearInterval(intervalId);
      console.log('done executing workload');
    }
  }, interval);
}

function nTimes(N) {
  var counter = 0;
  return function() {
    counter += 1;
    return counter >= N;
  };
}

// assemble the public API function
module.exports = function timedPrint(character, N, interval) {
  var print = console.log.bind(console, character);
  var isDone = nTimes(N);
  timed(print, isDone, interval);
};
