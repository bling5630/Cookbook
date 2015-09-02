var Nil = {
	isEmpty: true,

	get head() {
		throw new Error('Accessing head on empty list.');
	},

	get tail() {
		throw new Error('Accessing head on empty list.');

	}
};