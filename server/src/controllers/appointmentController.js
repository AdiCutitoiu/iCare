class AppointmentController {
    constructor(appointmentModel) {
        this.appointmentModel = appointmentModel;
    }

    async create(patientId, doctorId, date) {
        // do not allow creating an appointment in the next minute
        let currentDate = new Date(Date.now() + 60 * 1000);

        if (currentDate.valueOf() >= date.valueOf()) {
            return null;
        }

        // do not allow having 2 appointments at the same time
        const appointment = await this.appointmentModel.findOne({
            date: date,
            doctor: doctorId,
            status: { $ne: 'Canceled' }
        });
        if (appointment) {
            return null;
        }

        return await this.appointmentModel.create({
            patient: patientId,
            doctor: doctorId,
            date: date,
            status: 'Pending'
        });
    }

    async approve(appointmentId) {
        const appointment = await this.appointmentModel.findById(appointmentId);

        let currentDate = new Date(Date.now() + 60 * 1000);

        if (currentDate.valueOf() > appointment.date.valueOf()) {
            return appointment;
        }

        if (appointment.status === 'Pending') {
            appointment.status = 'Approved';
        }

        await appointment.save();
        return appointment;
    }

    async cancel(appointmentId) {
        return await this.appointmentModel.findOneAndUpdate({ _id: appointmentId }, { status: 'Canceled' }, { new: true });
    }

    async getAllForDoctor(doctorId) {
        return await this.appointmentModel.find({ doctor: doctorId });
    }

    async getAllForPatient(patientId) {
        return await this.appointmentModel.find({ patient: patientId });
    }
}

module.exports = AppointmentController;