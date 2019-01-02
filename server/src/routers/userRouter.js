const express = require('express');

const patientRouter = require('./patientRouter');
const doctorRouter = require('./doctorRouter');
const adminRouter = require('./adminRouter');

const router = express.Router();

router.use('/patient', (req, res, next) => {
    if(!req.user.isPatient()) {
        return res.status(401).end();
    }

    next();
}, patientRouter);

router.use('/doctor', (req, res, next) => {
    if(!req.user.isDoctor()) {
        return res.status(401).end();
    }

    next();
}, doctorRouter);

router.use('/admin', (req, res, next) => {
    if(!req.user.isAdmin()) {
        return res.status(401).end();
    }

    next();
}, adminRouter);

module.exports = router;
