var user = require('../controllers/user');

export default function(app) {
    // user routes
    // app.post('/login', function(req, res) {
    //
    //   res.json({info:'test'});
    // });
    app.post('/login', user.login);
    app.post('/loginViaToken', user.loginViaToken);
    app.get('/logout', function(req, res) {
      req.logout();
      res.end();
    })
    // app.post('/signup', users.signup);
    // app.post('/facebook_sinin', users.facebookSignin);

    // app.get('/auth/facebook', passport.authenticate('facebook', {
    //     scope: [
    //         'public_profile',
    //         'email'
    //     ]
    // }));
    //
    // app.get('/auth/facebook/callback',
    //     passport.authenticate('facebook', {failureRedirect: '/signup'}),
    //     function (req, res) {
    //         // Successful authentication, redirect home.
    //         res.redirect('/welcome');
    // });
};
