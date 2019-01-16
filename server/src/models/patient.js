const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

patientSchema.pre('remove', function () {
  user.findOneAndRemove({ role: 'Patient', useData: this.id });
});

module.exports = mongoose.model('Patient', patientSchema);
