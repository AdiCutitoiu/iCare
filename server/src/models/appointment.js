const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patient: {
        type: String,
        unique: true,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        validate: {
            validator: function (date) {
                /*
                   Dates which have a value multiple of 900.000 are under the form
                   hh:00:00
                   hh:15:00
                   hh:30:00
                   hh:45:00 
                */
                return date.valueOf() % 900000 === 0;
            },
            message: () => {
                return `Dates which have a value multiple of 900.000 are under the form
                        hh:00:00
                        hh:15:00
                        hh:30:00
                        hh:45:00`;
            }
        }
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Approved', 'Canceled'],
        default: 'Pending'
    }
});

module.exports = mongoose.model('Appointment', appointmentSchema);