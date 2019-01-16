class DoctorController {
    constructor(doctorModel) {
        this.doctorModel = doctorModel;
    }

    async getAll() {
        return await this.doctorModel.find({});
    }

    async get(id) {
        return await this.doctorModel.findById(id); 
    }

    async delete(id) {
        const doctor = await this.doctorModel.findById(id);
        if(!doctor) {
            return null;
        }

        return await doctor.erase();
    }
}

module.exports = DoctorController;