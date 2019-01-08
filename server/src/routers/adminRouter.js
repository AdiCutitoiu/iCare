const express = require('express');
const DoctorController = require('../controllers/doctorController');
const doctorModel = require('../models/doctor');
const AuthenticationController = require('../controllers/authenticationController');
const userModel = require('../models/user');
const PatientController = require('../controllers/patientController');
const patientModel = require('../models/patient');

const doctorController = new DoctorController(doctorModel);
const authenticationController = new AuthenticationController(userModel, patientModel, doctorModel);
const patientController = new PatientController(patientModel);

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
    .route('/doctors/:id')
    .delete(async (req, res, next) => {
        try {
            const doctor = await doctorController.delete(id);

            if(!doctor) {
                res.status(404).end();
                return;
            }

            res.status(204).end();
        } catch (err) {
            console.log(err);
            res.status(500).end();
        }
    });

router
    .route('/patients')
    .get(async (req, res, next) => {
        try {
            res.json(await patientController.getAll());
        } catch (err) {
            console.log(err);
            res.status(500).end();
        }
    })

router
    .route('/patient/:id')
    .delete(async (req, res, next) => {
        try {
            const patient = await patientController.delete(id);

            if(!patient) {
                res.status(404).end();
                return;
            }

            res.status(204).end();
        } catch (err) {
            console.log(err);
            res.status(500).end();
        }
    });

module.exports = router;