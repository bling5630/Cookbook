

// ```

// filterWordsByLength

R.filter(
	R.converge(
		R.and,
		R.compose(
			R.lt(3),
			R.prop('length')
		),
		R.compose(
			R.gt(6),
			R.prop('length')
		)
	)
);

R.filter(R.where({
	length: R.allPass([R.gt(6), R.lt(3)])
}));

R.filter(R.where({
	length: R.both(R.lt(3), R.gt(6))
}));

var filterByLength = R.filter(R.compose(R.contains(R.__, R.range(4, 6)), R.prop('length')));

R.lt(R.__, 3);

R.flip(R.lt)(3);