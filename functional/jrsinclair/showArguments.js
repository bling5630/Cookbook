var showArgs = function(a, b) {
    console.log(arguments);
};

showArgs('Tweedledee', 'Tweedledum');
//=> { '0': 'Tweedledee', '1': 'Tweedledum' }

showArgs('a', 'l', 'i', 'c', 'e');
//=> { '0': 'a', '1': 'l', '2': 'i', '3': 'c', '4': 'e' }

var argsLen = function() {
    console.log(arguments.length);
};
argsLen('a', 'l', 'i', 'c', 'e');
//=> 5

var showArgsAsArray = function() {
    var args = Array.prototype.slice.call(arguments, 0);
    console.log(args);
};
showArgsAsArray('Tweedledee', 'Tweedledum');
//=> [ 'Tweedledee', 'Tweedledum' ]
