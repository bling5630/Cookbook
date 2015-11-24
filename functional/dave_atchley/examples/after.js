function after(fn) {
  var orig = fn;
  return function() {
    var args = [].slice.call(arguments);
    return orig.apply(null, args);
  };
}
var lots = after(lots);
lots(1,2,3,4);
/// 1,2,3,4
