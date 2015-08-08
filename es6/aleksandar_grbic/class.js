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


// #4

class Person {
	constructor() {
		this.name = 'Tamas',
			this.age = 32;
	}
	checkIdentity() {
		console.log(this.name, ' is ',this.age);
	}
}

let np = new Person();
np.checkIdentity();

*/

// #5 hoisting

// class is not hoisted on the top of the file
// old way, but works

FN();

function FN() {
	console.log('Wooow bro, it does WERK!!');
}

// ES6

class Person{

	constructor() {
		////
	}

	consoleMethodBro() {
		console.log('VAT MAN');
	}
}

let x = new Person();
x.consoleMethodBro();

// classes returning functions
// classes are functions
console.log(typeof Person);
