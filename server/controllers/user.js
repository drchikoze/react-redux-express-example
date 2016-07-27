var mongoose = require('mongoose'),
    passport = require('passport'),
    User = require('../models/user.js');


exports.login = function(req, res, next) {
 	passport.authenticate('local', function(err, user, info) {
    console.log('err - ' + err);
    console.log('user - ' + user);
    console.log(info);
    console.log('-----------');
 		if (err || !user) {
 			res.status(400).json(info);
      // return res.json(info)
 		} else {
 			// Remove sensitive data before login
 			user.password = undefined;
 			user.salt = undefined;

 			req.login(user, function(err) {
 				if (err) {
 					res.status(400).send(err);
 				} else {
          var userObject = {
            id: user._id,
            email: user.email,
            photo: null,
            provider: 'local',
          }
 					res.json(userObject);
 				}
 			});
 		}
 	})(req, res, next);
 };

 exports.loginViaToken = function(req, res, next) {
    var userId = req.body.token;
  	User.findOne( {_id: userId}, function(err, user) {
      if (err) {
        res.status(400).send(err)
      } else {
        var userObject = {
          id: user._id,
          email: user.email,
          photo: null,
          provider: 'local',
        }
        res.json(userObject);
      }
    })
 };
