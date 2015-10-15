var times=function(n) {
  return function (x) {
    return x*n;
  };
};

var times2=times(2);
console.log(times2(4));
// =>8
