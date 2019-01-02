const express = require('express');
const userModel = require('../models/user');
const AuthenticationController = require('../controllers/authenticationController');

const authenticationController = new AuthenticationController(userModel);

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        if(!email || !password) {
            throw new Error('Credentials cannot be empty');
        }

        const token = await authenticationController.login(email, password);
        res.json(token);
    } catch (error) {
        console.error(error);
    }
});

router.post('/register/patient', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name;

        if(!email || !password || !name) {
            throw new Error('All the fields are required');
        }

        const token = await authenticationController.registerPatient(email, password, name);
        res.json(token);
    } catch (error) {
        console.error(error);
    }
});


module.exports = router;