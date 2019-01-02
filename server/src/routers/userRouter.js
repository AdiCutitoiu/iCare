const express = require('express');

const router = express.Router();

router.get('/patient', (req, res, next) => {
    if(!req.user.isPatient()) {
        return res.status(401).end();
    }

    res.status(200).end();
});

router.get('/doctor', (req, res, next) => {
    if(!req.user.isDoctor()) {
        return res.status(401).end();
    }

    res.status(200).end();
});

router.get('/admin', (req, res, next) => {
    if(!req.user.isAdmin()) {
        return res.status(401).end();
    }

    res.status(200).end();
});

module.exports = router;