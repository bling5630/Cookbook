/*
// #1

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	checkIdentity() {
		if (this.name === 'JSB') {
			console.log('Alex you rock man!');
		} else {
			console.log('Well, you still rock!');
		}
	}
}

let CreatePerson = new Person('JSB', 9000);
let CreatePerson2 = new Person('JS********B', 9000);

CreatePerson.checkIdentity();
CreatePerson2.checkIdentity();


// #2

let Monkey = class {

	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	checkIdentity() {
		if (this.name === 'Mojo') {
			console.log('Mojo you rock man!');
		} else {
			console.log('Well, you still rock!');
		}
	}
};

let CreateMonkey = new Monkey('Mojo', 12345);

CreateMonkey.checkIdentity();

// #3 inheritence things

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	checkIdentity() {
		if (this.name === 'JSB') {
			console.log('Alex you rock man!');
		} else {
			console.log('Well, you still rock!');
		}
	}
}

let CreatePerson = new Person('JSB', 9000);
//CreatePerson.checkIdentity();

// create child class that inherit 
// things, properties, methods 
// from top parent class from Person

class Child extends Person {

	constructor(name, age, school, gender) {

		super(name, age);

		this.school = school;
		this.gender = gender;
	}


	callTopParentMethod() {
		super.checkIdentity();
	}
}

let CreateChild = new Child('JSB20', 20);
CreateChild.callTopParentMethod();
*/

// #4

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Person = (function () {
	function Person() {
		_classCallCheck(this, Person);

		this.name = 'Tamas', this.age = 32;
	}

	_createClass(Person, [{
		key: 'checkIdentity',
		value: function checkIdentity() {
			console.log(this.name, this.age);
		}
	}]);

	return Person;
})();
