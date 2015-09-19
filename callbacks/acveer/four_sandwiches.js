function mySandwitch(p1, p2, p3, cb) {
	console.log('Started eating my sandwich.\nIT has: ' + p1 + ', ' + p2 + ', ' + p3);
	if (cb && typeof(cb) === 'function')cb();
}

mySandwitch('turkey', 'bacon', 'cheese', 'other');
mySandwitch('turkey', 'bacon', 'cheese');
mySandwitch('turkey', 'bacon');
mySandwitch('turkey');