const express = require('express');
const DoctorController = require('../controllers/doctorController');
const doctorModel = require('../models/doctor');

const doctorController = new DoctorController(doctorModel);

const router = express.Router();

router
    .route('/doctors')
    .get(async (req, res, next) => {
        try {
            res.json(await doctorController.getAll());
        } catch (err) {
            console.log(err);
            res.status(500).end();
        }
    });
    
module.exports = router;