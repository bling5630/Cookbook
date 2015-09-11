function showMessage(message) {
	setTimeout(function() {
		alert(message);
	}, 3000);
}

showMessage('Function called 3 seconds ago');