var _ = require('lodash'),
	developers = require('./developers'),
	doctors = require('./doctors');

// Adding up values 

age = developers.reduce(function(memo, developer) {
	return memo + developer.age;
}, 0);

console.log("Sum of all developer ages is " + age);

// data to manipulate with 12 doctors

// #1 Filter and Map
/*
doctors = doctors.filter(function(doctor) {
	return doctor.begin > 2000;
}).map(function(doctor) {
	return {
		doctorNumber: "#" + doctor.number,
		playedBy: doctor.actor,
		yearsPlayed: doctor.end - doctor.begin + 1
	};
});

console.log(JSON.stringify(doctors, null, 4));


// #2 Lo-Dash Filter and Map

doctors = _.filter(doctors, function(doctor) {
	return doctor.begin > 2000;
});

doctors = _.map(doctors, function(doctor) {
	return {
		doctorNumber: "#" + doctor.number,
		playedBy: doctor.actor,
		yearsPlayed: doctor.end - doctor.begin + 1
	};
});

console.log(JSON.stringify(doctors, null, 4));



// #3 Lo-Dash chaining

doctors = _.chain(doctors)
	.filter(function(doctor) {
		return doctor.begin > 2000;
	})
	.map(function(doctor) {
		return {
			doctorNumber: "#" + doctor.number,
			playedBy: doctor.actor,
			yearsPlayed: doctor.end - doctor.begin + 1
		};
	})
	.value();

console.log(JSON.stringify(doctors, null, 4));

*/

// #4 Reducing Filter and Map with Reduce

doctors = _.reduce(doctors, function(memo, doctor) {
	if (doctor.begin > 2000) {
		memo.push({
			doctorNumber: "#" + doctor.number,
			playedBy: doctor.actor,
			yearsPlayed: doctor.end - doctor.begin + 1
		});
	}
	return memo;
}, []);

console.log(JSON.stringify(doctors, null, 4));


