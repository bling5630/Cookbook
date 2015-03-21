var test = require('tape');

test('comparing booleans', function(t) {
	t.plan(1);
	t.ok(3 > 4 || 5 > 2);
});

test('negatives', function(t) {
	t.plan(3);
	t.notEqual(1 + 2, 5);
	t.notDeepEqual([1, 2], [12]);
	t.notOk(false);
});

test('empty map', function(t) {
	[].map(function(x) {
		t.fail('this callback should never fire');
	});

	t.end();
});

test('map with elements', function(t) {
	t.plan(2);

	[2, 3].map(function(x) {
		t.pass();
	});
});

test('more info', function(t) {
	t.plan(2);

	t.equal(1 + 2, 3, 'basic arithmetic still works');
	t.ok(3 + 4 > 5, 'inequalities are as we might expect');
});

test('asynchronous results', function(t) {
	t.plan(2);

	t.equal(2 + 3, 5);

	setTimeout(function() {
		t.equal(5 + 5, 10);
	}, 500);
});

test('first', function(t) {
	t.plan(1);
	setTimeout(function() {
		t.ok(true);
	}, 200);
});

test('second', function(t) {
	t.plan(1);
	setTimeout(function() {
		t.ok(true);
	}, 100);
});

test('nested', function(t) {
	t.test(function(st) {
		st.plan(1);
		st.equal(1 + 2, 3);
	});

	t.test(function(st) {
		st.plan(1);
		setTimeout(function() {
			st.pass();
		}, 100);
	});
});