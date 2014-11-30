var clickedTimes = 0;

$('button').click(function() {
	clickedTimes++;
	console.log('A button has been clicked ' +
		clickedTimes + ' times');
});