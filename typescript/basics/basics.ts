// There are 3 basic types in TypeScript

var isDone: boolean = false,
	lines: number = 42,
	name: string = 'Anders';

// When it's impossible to know, there is the "Any" type

var notSure: any = 4;
var notSure: any = 'maybe a string instead';
var notSure: any  = false;

// For collections, there are typed arrays and generic arrays

var list: number[] = [1, 2, 3];

// Alternatively, using the generic array type

var list: Array<number> = [1, 2, 3];

// For enumerations:

enum Color { Red, Green, Blue };
var c: Color = Color.Green; 

// Lastly, "void" is used in the special case of a function returning nothing

function bigHorribleAlert():void{
	alert("I'm a little annoying box!");
}

// Functions are first class citizens, support the lambda "fat arrow" syntax and
// use type inference

// The following are equivalent, the same signature will be infered by the
// compiler, and same JavaScript will be emitted

var f1 = function(i: number): number { return i * i;}
// Return type inferred
var f2 = function(i: number){ return i * i;}
var f3 = (i: number):number=>{ return i * i;}
// Return type inferred
var f4 = (i: number)=>{ return i * i;}
// Return type inferred, one-liner means no return keyword needed
var f5 = (i: number) => i * i;

// Interfaces are structural, anything that has the properties is compliant with
// the interface

interface Person {
	name: string;
	age?: number;
	move(): void;
}

// Object that implements the "Person" interface
// Can be treated as a Person since it has the name and move properties

