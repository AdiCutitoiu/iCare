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
        const patient = await this.doctorModel.findById(id).remove();
        if(!patient) {
            return null;
        }

        return await patient.erase();
    }
}

module.exports = PatientController;