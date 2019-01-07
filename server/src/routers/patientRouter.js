const express = require('express');
const DoctorController = require('../controllers/doctorController');
const AppointmentController = require('../controllers/appointmentController');

const doctorModel = require('../models/doctor');
const appointmentModel = require('../models/appointment');

const doctorController = new DoctorController(doctorModel);
const appointmentController = new AppointmentController(appointmentModel);

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

router
    .route('/appointments')
    .post(async (req, res, next) => {
        try {
            const { doctorId, date } = req.body;
            const appointment = appointmentController.create(req.user.userData.id, doctorId, date);

            res.json(appointment);
        } catch (err) {
            console.log(err);
            res.status(500).end();
        }
    });

module.exports = router;