var addClass = function(className, element) {
    element.className += ' ' + className;
    return element;
};


var addTweedleClass = function(el) {
    return addClass('tweedle', el);
};

/*
var ids = ['DEE', 'DUM'];
var elements = map(document.getElementById, ids);
elements = map(addTweedleClass, elements);
*/

var addBoyClass = function(el) {
    return addClass('boy', el);
};

var partialFirstOfTwo = function(fn, param1) {
    return function(param2) {
        return fn(param1, param2);
    };
};
