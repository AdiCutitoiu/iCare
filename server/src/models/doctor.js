const mongoose = require('mongoose');
const user = require('./user');
const appointment = require('./appointment');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

doctorSchema.methods.erase = async function (role) {
  const u = await user.findOne({ role: 'Doctor', userData: this.id });
  await u.remove();

  await appointment.remove({ doctor: this.id });

  await this.remove();
  return this;
};

module.exports = mongoose.model('Doctor', doctorSchema);
