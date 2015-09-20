var async = require('async'),
	_ = require('ramda');

// Traditional way

function createAccount(email, password, done) {
	var id = uuid();

	async.waterfall([
			function(callback) {
				Services.Accounts.provision(email, password, callback);
			},
			function(accountId, callback) {
				Services.Accounts.enable(email, accountId, callback);
			}


		],
		function(err, auth) {
			done(err, id, auth);
		}
	);
}

// Ramda way

function createAccount(email, password, done) {
	var id = uuid();

	async.waterfall([
			_.partial(Services.Accounts.provision, email, password),
			_.partial(Services.Notification.confirm, email)
		],
		_.partial(done, _, id, _));
}