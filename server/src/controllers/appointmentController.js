class AppointmentController {
    constructor(appointmentModel) {
        this.appointmentModel = appointmentModel;
    }

    async create(patientId, doctorId, date) {
        return await this.appointmentModel.create({
            patient: patientId,
            doctor: doctorId,
            date: date,
            status: 'Pending'
        });
    }

    async approve(appointmentId) {
        return await this.appointmentModel.findOneAndUpdate({ _id: appointmentId }, { status: 'Approved' }, { new: true });
    }

    async cancel(appointmentId) {
        return await this.appointmentModel.findOneAndUpdate({ _id: appointmentId }, { status: 'Canceled' }, { new: true });
    }

    async getAllForDoctor(doctorId) {
        return await this.appointmentModel.find({ doctor: doctorId });
    }

    async getAllForPatients(patientId) {
        return await this.appointmentModel.find({ patient: patientId });
    }
}

module.exports = AppointmentController;