class PatientController {
    constructor(patientModel) {
        this.doctorModel = patientModel;
    }

    async getAll() {
        return await this.doctorModel.find({});
    }

    async get(id) {
        return await this.doctorModel.findById(id); 
    }

    async delete(id) {
        return await this.doctorModel.findByIdAndRemove(id);
    }
}

module.exports = PatientController;