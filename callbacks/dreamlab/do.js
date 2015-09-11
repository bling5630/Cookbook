function do_a() {
	console.log('`do_a`: this comes out first');
}

function do_b() {
	console.log('`do_b`: this comes out later');
}

do_a();
do_b();

/*
However javascript is an event driven language. 
do_a takes longer than do_b, the result of do_b
comes out first than do_a;
*/