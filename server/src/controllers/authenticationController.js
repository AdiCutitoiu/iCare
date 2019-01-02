const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthenticationController {
    constructor(userModel) {
        this._userModel = userModel;
    }

    async login(email, password) {
        const user = await this._userModel.findOne({ email });

        if(!user) {
            throw new Error('The user does not exist');
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(isPasswordMatch) {
            const payload = user;
            delete payload.password;

            return { token: jwt.sign(payload) };
        }

        throw new Error('Bad password');
    }

    async registerPatient(email, password, name) {
        const user = await this._userModel.findOne({ email });

        if(!user) {
            throw new Error('The email already exists');
        }

        const hashedPassword = bcrypt.hash(password)
        const user = await this._userModel.create({
            email: email,
            passwordHash: hashedPassword,
            role: 'Patient'
        });

        if(!user) {
            throw new Error('Unexpected error');
        }

        const payload = user;
        delete payload.password;

        return { token: jwt.sign(payload) };
    }
}

module.exports = AuthenticationController;