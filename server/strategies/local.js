var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

export default new LocalStrategy({
		usernameField: 'email',
	},
	function(email, password, done) {
		User.findOne({
			email: email
		}, function(err, user) {
			if (err) {
				return done(err);
			}
			if (!user) {
				return done(null, false, {
					message: 'Unknown user or invalid password'
				});
			}
			if (!user.authenticate(password)) {
				return done(null, false, {
					message: 'Unknown user or invalid password'
				});
			}

			return done(null, user);
		});
	}
);
