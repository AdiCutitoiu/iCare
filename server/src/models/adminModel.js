const mongoose = require('mongoose');
const user = require('./user');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Admin', adminSchema);
