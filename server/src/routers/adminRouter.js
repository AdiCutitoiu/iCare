const express = require('express');
const DoctorController = require('../controllers/doctorController');
const doctorModel = require('../models/doctor');
const AuthenticationController = require('../controllers/authenticationController');
const userModel = require('../models/user');
const patientModel = require('../models/patient');

const doctorController = new DoctorController(doctorModel);
const authenticationController = new AuthenticationController(userModel, patientModel, doctorModel);

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
            const { email, password, name } = req.body;
            authenticationController.registerDoctor(email, password, name);

            res.status(201).end();
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