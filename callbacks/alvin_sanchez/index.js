useCallback(5, callback_x, callback_y);

function useCallback(x, callback1, callback2) {
	console.log('Hello');
	callback1();
	callback2();
}

function callback_x() {
	console.log('Hey, this is the callback_x function!');
}
function callback_y() {
	console.log('Hey, this is the callback_y function!');
}