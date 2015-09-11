function do_a() {
	//simulate a time consuming function
	setTimeout(function() {
		console.log('`do_a`: this takes longer than `do_b`');
	}, 1000);
}

function do_b() {
	console.log('`do_b`: this is supposed to come out after `do_a` but it comes out before `do_a`');
}

do_a();
do_b();