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
    .get(async (req, res, next) => {
        try {
            const appointments = appointmentController.getAllForPatient(req.user.userData.id);

            res.json(appointments);
        } catch (err) {
            console.log(err);
            res.status(500).end();
        }
    })
    .post(async (req, res, next) => {
        try {
            const { doctorId, date } = req.body;
            const appointment = appointmentController.create(req.user.userData.id, doctorId, date);

            if(!appointment) {
                return res.status(400).end();
            }

            res.status(201).json(appointment);
        } catch (err) {
            console.log(err);
            res.status(500).end();
        }
    });

router
    .route('/appointments/:id/cancel')
    .put(async (req, res, next) => {
        try {
            const appointment = appointmentController.cancel(req.params.id);

            if(!appointment) {
                res.status(404).end();
                return;
            }

            res.json(appointment);
        } catch (err) {
            console.log(err);
            res.status(500).end();
        }
    });

module.exports = router;