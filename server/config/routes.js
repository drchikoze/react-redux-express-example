var user = require('../controllers/user');

export default function(app) {
    app.post('/login', user.login);
    app.post('/loginViaToken', user.loginViaToken);
    app.get('/logout', function(req, res) {
      req.logout();
      res.end();
    })
};
