var time = function datestring() {
	var d = new Date(Date.now());
	return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '-' + d.getHours() + '-' + d.getMinutes();
};

console.log(time());