var ids = ['unicorn', 'fairy', 'kitten'];

var map = function(callback, array) {
    var newArray = [];
    for (var i = 0; i < array.length; i = i + 1) {
        newArray[i] = callback(array[i], i);
    }
    return newArray;
};

var getElement = function(id) {
  return document.getElementById(id);
};

var elements = map(getElement, ids);
