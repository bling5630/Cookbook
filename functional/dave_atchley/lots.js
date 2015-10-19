function lots(a,b,c,d) {
   console.log([a,b,c,d].join(','));
}
function after(fn) {
  var orig = fn;
  return function() {
    orig.call(null, /* how do you pass them? */);
  };
}
var lots = after(lots);
lots(1,2,3,4); 
