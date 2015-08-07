// let

// let vs var

// #1

'use strict';

var globavar = 'am global';

var globavarr = 'am global too';

function JSB() {
	console.log(globavar);
	console.log(globavarr);
}

JSB();

// #2

function whatever() {
	for (var i = 1; i < 5; i++) {
		console.log('Im the i: ', i);
	}
	console.log(i);
}

whatever();

// #3

function other() {
	var x = 5;
	for (x; x < 7; x++) {
		console.log(x);
	}
}

other();
// let not hoisted on the top
// it hoisted anywhere

// #4

function nothing() {
	var x = 5; // hoisted w/5
	var x = 6; // another declaration

	console.log(x);
}

nothing();

// #5

//let x = 5;
//let x = 6;
// TypeError: let.js: Line 59: Duplicate declaration "x"

var x = 5;
var x = 6;
// var works

console.log(x);

// #6

function varTest() {
	var z = 32;

	if (true) {
		var z = 72;
		console.log(z); //72
	}
	console.log('I am var ', z); //72
}

varTest();

function test() {
	var y = 31;

	if (true) {
		var _y = 72;
		console.log(_y); //72
	}
	console.log('I am let ', y); //32
}

test();

// scoping things
