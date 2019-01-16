const expect = require('chai').expect;
const DoctorController = require('../src/controllers/doctorController');

function addTwoNumbers(x, y) {
  return x + y;
}

function getModel() {
  const data = [{
    id: '1',
    name: "John"
  }, {
    id: '2',
    name: "John"
  }];

  return {
    data: data,
    find: async function () {
      return data;
    },
    findById: async function (id) {
      const found = data.find(elem => elem.id === id);

      if(!found) {
        return found;
      }
      
      found._eraseCalled;
      found.erase = async function() {
        this._eraseCalled = true;
        return this;
      }

      return found;
    }
  };
}

describe('DoctorController', function () {
  describe('getAll()', function () {
    it('should get all the doctors', async function () {
      const controller = new DoctorController(getModel());

      const doctors = await controller.getAll();

      expect(doctors.length).to.be.equal(2);
      expect(doctors[0].id).to.be.equal('1');
      expect(doctors[1].id).to.be.equal('2');
    });
  });

  describe('get(id)', function () {
    it('should return a doctor', async function () {
      const model = getModel();
      const controller = new DoctorController(model);

      const doctor = await controller.get('1');

      expect(doctor).to.deep.equal(model.data[0]);
    });

    it('should return null', async function () {
      const controller = new DoctorController(getModel());

      const doctor = await controller.get('5');

      expect(doctor).to.be.undefined;
    });
  });

  describe('delete(id)', function () {
    it('should delete a doctor', async function () {
      const controller = new DoctorController(getModel());

      const doctor = await controller.delete('1');

      expect(doctor._eraseCalled).to.be.true;
    });

    it('should not delete anything', async function () {
      const model = getModel();
      const controller = new DoctorController(model);

      const doctor = await controller.delete('5');

      expect(doctor).to.be.null;
    });
  });
});