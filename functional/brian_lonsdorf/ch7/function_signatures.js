var R = require('ramda'),
	ljs = require('lambdajs').expose(global);

// strength :: String -> Number

var strLength = function(s) {
	return s.length;
};

console.log(strLength('abrakadabra'));
// 11

// join :: String -> [String] -> String

var join = curry(function(what, xs) {
	return xs.join(what);
});

// match :: Regex -> (String -> [String])

var match = curry(function(reg, s) {
	return s.match(reg);
});

// onHoliday :: String -> [String]

var onHoliday = match(/holiday/ig);

console.log(onHoliday);

// replace :: Regex -> String -> String -> String

var replace = curry(function(reg, sub, s) {
	return s.replace(reg, sub);
});

//  replace :: Regex -> (String -> (String -> String))
var replace = curry(function(reg, sub, s) {
	return s.replace(reg, sub);
});

//  id :: a -> a
var id = function(x) {
	return x;
};

//  map :: (a -> b) -> [a] -> [b]
var map = curry(function(f, xs) {
	return xs.map(f);
});

//  head :: [a] -> a
var head = function(xs) {
	return xs[0];
};

//  filter :: (a -> Bool) -> [a] -> [a]
var filter = curry(function(f, xs) {
	return xs.filter(f);
});

//  reduce :: (b -> a -> b) -> b -> [a] -> b
var reduce = curry(function(f, x, xs) {
	return xs.reduce(f, x);
});

// head :: [a] -> a
compose(f, head) == compose(head, map(f));

// filter :: (a -> Bool) -> [a] -> [a]
compose(map(f), filter(compose(p, f))) == compose(filter(p), map(f));