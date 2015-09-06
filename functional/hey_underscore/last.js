//+ last :: [a] -> a

var last = function(xs) {
	var sx = reverse(xs);
	return first(sx);
};


// FP way

//+ last :: [a] -> a

var last = compose(first, reverse);

last([1, 2, 3]); // 3