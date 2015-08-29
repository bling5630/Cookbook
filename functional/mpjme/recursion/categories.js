let categories = [{
	id: 'animals',
	'parent': null
}, {
	id: 'marmals',
	'parent': 'animals'
}, {
	id: 'cats',
	'parent': 'marmals'
}, {
	id: 'dogs',
	'parent': 'marmals'
}, {
	id: 'chihuahua',
	'parent': 'dogs'
}, {
	id: 'labrador',
	'parent': 'dogs'
}, {
	id: 'persian',
	'parent': 'cats'
}, {
	id: 'siamese',
	'parent': 'cats'
}];

// we want a tree structure from categories

let makeTree = (categories, parent) => {
	let node = {};
	categories
		.filter(c => c.parent === parent)
		.forEach(c => node[c.id] =
			makeTree(categories, c.id));
	return node;
};

console.log(
	JSON.stringify(
		makeTree(categories, null),
		null, 2));
/*
// result
{
  "animals": {
    "marmals": {
      "cats": {
        "persian": {},
        "siamese": {}
      },
      "dogs": {
        "chihuahua": {},
        "labrador": {}
      }
    }
  }
}
*/