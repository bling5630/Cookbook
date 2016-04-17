var _ = require('ramda');

// instruction :: String -> String
var instruction = function(verb) {
    return verb + ' me';
};

console.log(instruction('aha'));

// wrapWith :: String -> (String -> String)
var wrapWith = _.curry(function(tag, str) {
    return '<' + tag + '>' + str + '</' + tag + '>';
});

console.log(wrapWith('one', 'two'));

// replace :: String -> (String -> (String -> String))
var replace = _.curry(function(find, replacement, str) {
    var regex = new RegExp(find, 'g');
    return str.replace(regex, replacement);
});

console.log(replace('1','2','3'));

/*
// formatDollars :: Number -> String
var formatDollars = replace('${{number}}', '{{number}}');

formatDollars(100);
//=> $100
*/

// sum :: [Number] -> Number
var sum = _.reduce(_.add, 0);

// identity :: a -> a
var identity = function(x) { return x; };

// map :: (a -> b) -> [a] -> [b]
var map = _.curry(function(callback, array) {
    return array.map(callback);
});
