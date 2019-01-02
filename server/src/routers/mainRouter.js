const express = require('express');
const authenticationRouter = require('./authentication');
const userRouter = require('./userRouter');
const passport = require('../util/passport');

const router = express.Router();

router.use('/auth', authenticationRouter);
router.use('/user', passport.authenticate('jwt', { session: false }), userRouter);

module.exports = router;