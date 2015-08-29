/*
// OOP way

function Cat() {
	this.catchedMouse = null;
}
Cat.prototype.catch = function(mouse) {
	this.catchedMouse = mouse;
}
Cat.prototype.eat = function() {
	if (this.catchedMouse) {
		this.catchedMouse.die('eaten by a cat');
		this.catchedMouse = null;
	} else {
		throw new Error('Cannot eat without a catch');
	}
}

function Mouse() {
	this.isAlive = true;
	this.deathCause = null;
}
Mouse.prototype.die = function(cause) {
	this.isAlive = false;
	this.deathCause = cause;
}

var tom = new Cat();
var jerry = new Mouse();
tom.catch(jerry);
tom.eat();
*/

// functional way

//no constructor function
//we only return a data structure representing a cat
var makeCat = function() {
	return {
		eaten: []
	};
};

//we represent state change by returning another
//structure, with the altered content
//without mutating the original inputs
var capture = function(mouse) {
	return function(cat) {
		return {
			eaten: cat.eaten,
			capture: mouse
		};
	};
};

var makeMouse = function() {
	return {
		dead: false
	};
};

var kill = function(causeOfDeath, victim) {
	return {
		dead: true,
		causeOfDeath: (victim.causeOfDeath || causeOfDeath)
	};
};

var eat = function(catWithCatch) {
	var eaten = catWithCatch.eaten || [];
	if (catWithCatch.capture) {
		return {
			capture: null,
			eaten: eaten.concat(kill('eaten by a cat', catWithCatch.capture))
		};
	} else {
		return new Error('need a captured mouse to eat');
	}
};

var tom = makeCat();
var jerry = makeMouse();

console.log(eat(
	capture(jerry)(
		tom)));