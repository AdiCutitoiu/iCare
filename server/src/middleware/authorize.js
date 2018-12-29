const passport = require('../util/passport');

const authenticate = passport.authenticate('jwt', { session: false });

function roleAuthenticator(roleChecker) {
  return async (req, res, next) => {

    authenticate(req, res, next);

    if (!req.user || !roleChecker(req.user)) {
      return res.status(401).end();
    }

    return next();
  };
}

module.exports = {
  patient: roleAuthenticator(user => {
    return user.isPatient();
  }),
  moderator: roleAuthenticator(user => {
    return user.isDoctor();
  }),
  admin: roleAuthenticator(user => {
    return user.isAdmin();
  }),
};