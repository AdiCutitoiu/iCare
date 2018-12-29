const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['Admin', 'Doctor', 'Patient'],
    default: 'Normal'
  }
});

userSchema.methods.isAdmin = function (role) {
  return this.role === 'Admin';
};

userSchema.methods.isDoctor = function (role) {
  return this.role === 'Doctor';
};

userSchema.methods.isPatient = function (role) {
  return this.role === 'Patient';
};

module.exports = mongoose.model('User', userSchema);
