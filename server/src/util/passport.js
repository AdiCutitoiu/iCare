const passport = require('passport');
const passportJwt = require('passport-jwt');
const userModel = require('../models/user');
const adminModel = require('../models/admin');
const doctorModel = require('../models/doctor');
const patientModel = require('../models/patient');

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: 'secret',
}

passport.use(new JwtStrategy(opts, async function (payload, done) {
	try {
		const user = await userModel.findById(payload.id).populate('userData');

		if (!user) {
			return done(null, false);
		}

		console.log(user);

		return done(null, user);
	} catch (err) {
		console.log(err);
		return done(err, false);
	}
}));

module.exports = passport;
