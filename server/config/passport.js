import local from '../strategies/local.js';

export default function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    done(null, id);
  });

  passport.use(local);
};
