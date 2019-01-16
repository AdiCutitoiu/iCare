const mongoose = require('mongoose');
const user = require('./user');
const appointment = require('./appointment');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

patientSchema.methods.erase = async function (role) {
  const u = await user.findOne({ role: 'Doctor', userData: this.id });
  await u.remove();

  await appointment.remove({ patient: this.id });

  await this.remove();
  return this;
};


module.exports = mongoose.model('Patient', patientSchema);
