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
    it('should get all the patients', async function () {
      const controller = new DoctorController(getModel());

      const patients = await controller.getAll();

      expect(patients.length).to.be.equal(2);
      expect(patients[0].id).to.be.equal('1');
      expect(patients[1].id).to.be.equal('2');
    });
  });

  describe('get(id)', function () {
    it('should return a patient', async function () {
      const model = getModel();
      const controller = new DoctorController(model);

      const patient = await controller.get('1');

      expect(patient).to.deep.equal(model.data[0]);
    });

    it('should return null', async function () {
      const controller = new DoctorController(getModel());

      const patient = await controller.get('5');

      expect(patient).to.be.undefined;
    });
  });

  describe('delete(id)', function () {
    it('should delete a patient', async function () {
      const controller = new DoctorController(getModel());

      const patient = await controller.delete('1');

      expect(patient._eraseCalled).to.be.true;
    });

    it('should not delete anything', async function () {
      const model = getModel();
      const controller = new DoctorController(model);

      const patient = await controller.delete('5');

      expect(patient).to.be.null;
    });
  });
});