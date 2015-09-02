function fib(n) {
	if (n < 2) {
		return n;
	}
	var n0 = 0,
		n1 = 1,
		ans = 0;

	for (var i = 2; i <= n; i++) {
		ans = n0 + n1;
		n0 = n1;
		n1 = ans;
	}
	return ans;
}

console.log(fib(5)); // 5