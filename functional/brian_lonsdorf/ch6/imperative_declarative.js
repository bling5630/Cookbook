// imperative way

var makes = [];

for (var i = 0; i < cars.length; i++) {
	makes.push(cars[i].make);
}

// declarative

var makes = cars.map(function(car) {
	return car.make;
});

// imperative way

var authenticate = function(form) {
	var user = toUser(form);
	return logIn(user);
};

// declarative

var authenticate = compose(logIn, toUser);