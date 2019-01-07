const mongoose = require('mongoose');
const user = require('./user');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

doctorSchema.pre('remove', function () {
  user.findOneAndRemove({ role: 'Doctor', useData: this.id });
});

module.exports = mongoose.model('Doctor', doctorSchema);
