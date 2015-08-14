// Using try-catch to handle the JSON.parse error
function parse(str) {
	try {
		return JSON.parse(str);
	} catch {
		return false
	}
}

// With Lodash
function parseLodash(str) {
	return _.attempt(JSON.parse.bind(null, str));
}

parse('a'); // false
parseLodash('a'); // Return an error object

parse('{"name": "colin"}'); // Return {"name": "colin"}
parseLodash('{"name": "colin"}'); // Return {"name": "colin"}