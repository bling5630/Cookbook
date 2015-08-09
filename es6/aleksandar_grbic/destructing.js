// #3 mixed version

let obj = {
	name: 'JSB',
	date: 8,

	person: {
		age: 21,
		height: 123
	},
	arr: [2, 4, [55, 56]]
};

let {
	name: nm,
	date: nd,
	person: {
		age: na,
		height: nh
	},
	arr: [two, four, nested]
} = obj;


console.log(nh);
console.log(two);
console.log(nd);
console.log(nm);
console.log(nested);
console.log(nested[0]);

/*
// #4 sokip items from array

let arr = [1,2,3];

let [, , three];

console.log(three);

// #2 - Objects

let obj = {
	name: 'Alexander',
	age: 9000
};

// old fashion way
// let name = obj.name;
// let age = obj.age; 

let {
	name: newName,
	age: newAge
} = obj;

console.log(newAge);
console.log(newName);


// #1 - Arrays
let arr = ['two', [5, 6], 'cow', 2];

/*
//old way
let number = arr[0];
let animal= arr[1];

console.log(number);
console.log(animal);


// ES6

let [number, nested, animal, another_number] = arr;
//let [number, nested[five, six], animal, another_number] = arr; // same

console.log(number); // two
console.log(animal); // cow
console.log(nested[0]); // 5
*/