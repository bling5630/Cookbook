var hi = function(name) {
	return 'Hi ' + name;
};

/*
// function wrapper 
// hi in greeting is completely redundant

var greeting = function(name) {
	return hi(name);
};


// console.log(hi('Tamas')); //=> Hi Tamas
// console.log(greeting('Dori')); //=> Hi Dori

// console.log(hi('Jonas')); //=> Hi Jonas
*/

// advanced way

var greeting = hi;

console.log(greeting('Lajos')); //=> Hi Lajos