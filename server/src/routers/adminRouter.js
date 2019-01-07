const express = require('express');
const DoctorController = require('../controllers/doctorController');
const doctorModel = require('../models/doctor');

const doctorController = new DoctorController(doctorModel);

const router = express.Router();

router
    .route('/doctor')
    .get(async (req, res, next) => {
        try {
            res.json(await doctorController.getAll());
        } catch (err) {
            console.log(err);
            res.status(500).end();
        }
    })
    .post(async (req, res, next) => {
        try {
            res.json(await doctorController.create(req.body));
        } catch (err) {
            console.log(err);
            res.status(500).end();
        }
    });

router
    .route('/doctor/:id')
    .delete(async (req, res, next) => {
        try {
            const doctor = await doctorController.delete(id);
        } catch (err) {
            console.log(err);
            res.status(500).end();
        }
    });

module.exports = router;