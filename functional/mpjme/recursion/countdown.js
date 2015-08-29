let countDownFrom = (num) => {
	if (num === 0) return;
	console.log(num);
	countDownFrom(num - 1);
};

countDownFrom(10);


// Should outout
// 10
// 9
// 8
// ....
// 1