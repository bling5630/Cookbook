var curry = require('curry');

// Version #1

fetchFromServer()
	.then(JSON.parse)
	.then(function(data) {
		return data.posts;
	})
	.then(function(posts) {
		return posts.map(function(post) {
			return post.title;
		});
	});

// Version #2

fetchFromServer()
	.then(JSON.parse)
	.then(get('posts'))
	.then(map(get('title')));