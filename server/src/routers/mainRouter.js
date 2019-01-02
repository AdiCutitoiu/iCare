const express = require('express');
const authenticationRouter = require('./authentication');

const router = express.Router();

const stopIfAuthenticated = (req, res, next) => {
    if(req.user) {
        res.status(401).end();
        return next();
    }
};

router.use('/auth', stopIfAuthenticated, authenticationRouter);

module.exports = router;