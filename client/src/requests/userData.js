const ID_TOKEN = "iCareToken"
const ID_ROLE = "iCareRole"

export default {
    getToken() {
        return localStorage.getItem(ID_TOKEN);
    },
    setToken(token, role) {
        if(role !== this.roles.ADMIN && role !== this.roles.DOCTOR && role !== this.roles.PATIENT) {
            role = this.roles.PATIENT;
        }

        localStorage.setItem(ID_TOKEN, token);
        localStorage.setItem(ID_ROLE, role);
        return true;
    },
    clear() {
        localStorage.removeItem(ID_TOKEN);
        localStorage.removeItem(ID_ROLE);
    },
    isAdmin() {
        return localStorage.getItem(ID_ROLE) === this.roles.ADMIN;
    },
    isDoctor() {
        return localStorage.getItem(ID_ROLE) === this.roles.DOCTOR;
    },
    isPatient() {
        return localStorage.getItem(ID_ROLE) === this.roles.PATIENT;
    },
    roles: {
        ADMIN: 1,
        DOCTOR: 2,
        PATIENT: 3
    }
};
