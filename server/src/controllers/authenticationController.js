const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = 'secret';

class AuthenticationController {
    constructor(userModel, patientModel, doctorModel) {
        this.userModel = userModel;
        this.patientModel = patientModel;
        this.doctorModel = doctorModel;
    }

    async login(email, password) {
        const user = await this.userModel.findOne({ email });

        if (!user) {
            throw new Error('The user does not exist');
        }

        const isPasswordMatch = await bcrypt.compareSync(password, user.passwordHash);
        if (isPasswordMatch) {
            const payload = {
                email: user.email,
                role: user.role,
                userData: user.userData,
                id: user.id
            };

            return { token: jwt.sign(payload, secret) };
        }

        throw new Error('Bad password');
    }

    async registerPatient(email, password, name) {
        let user = await this.userModel.findOne({ email });

        if (user) {
            throw new Error('The email already exists');
        }

        const patientData = await this.patientModel.create({
            name
        });

        if (!patientData) {
            throw new Error('Unexpected error');
        }

        const hashedPassword = bcrypt.hashSync(password)
        user = await this.userModel.create({
            email: email,
            passwordHash: hashedPassword,
            role: 'Patient',
            userData: patientData._id
        });

        const payload = {
            email: user.email,
            role: user.role,
            userData: user.userData,
            id: user.id
        };

        return { token: jwt.sign(payload, secret) };
    }

    async registerDoctor(email, password, name) {
        let user = await this.userModel.findOne({ email });

        if (user) {
            throw new Error('The email already exists');
        }

        const doctorData = await this.doctorModel.create({
            name
        });

        if (!doctorData) {
            throw new Error('Unexpected error');
        }

        const hashedPassword = bcrypt.hashSync(password)
        user = await this.userModel.create({
            email: email,
            passwordHash: hashedPassword,
            role: 'Doctor',
            userData: doctorData._id
        });

        const payload = {
            email: user.email,
            role: user.role,
            userData: user.userData,
            id: user.id
        };

        return { token: jwt.sign(payload, secret) };
    }
}

module.exports = AuthenticationController;