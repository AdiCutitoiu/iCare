const express = require('express');

const AppointmentController = require('../controllers/appointmentController');
const appointmentModel = require('../models/appointment');

const appointmentController = new AppointmentController(appointmentModel);

const router = express.Router();

router
    .route('/appointments')
    .get(async (req, res, next) => {
        try {
            const appointments = await appointmentController.getAllForDoctor(req.user.userData.id);

            res.json(appointments);
        } catch (err) {
            console.log(err);
            res.status(500).end();
        }
    });

router
    .route('/appointments/:id/approve')
    .put(async (req, res, next) => {
        try {
            const appointment = await appointmentController.approve(req.params.id);

            if (!appointment) {
                res.status(404).end();
                return;
            }

            if(appointment.status !== 'Approved') {
                res.status(400).end();
                return;
            }

            res.json(appointment);
        } catch (err) {
            console.log(err);
            res.status(500).end();
        }
    });

router
    .route('/appointments/:id/cancel')
    .put(async (req, res, next) => {
        try {
            const appointment = await appointmentController.cancel(req.params.id);

            if (!appointment) {
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