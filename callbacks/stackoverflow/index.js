var index;

function doSomething(callback) {
	callback();
}

for (index = 0; index < 3; ++index) {
	doSomething(doSomethingCallback);
}

function doSomethingCallback() {
	console.log("index = " + index);
}