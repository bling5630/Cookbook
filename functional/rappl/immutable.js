var _ = require('ramda');

var position = {
  x:5,
  y:9
};

position.x = 10; // works!

/*
var position_another = (function (x, y) {
    return {
        getX: () => { return x; },
        getY: () => { return y; }
    };
})(5, 9);
position_another.getX() = 10; // does not work!
*/
