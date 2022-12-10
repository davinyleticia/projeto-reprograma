const {Pet, Medicine, Vaccine } = require('./user-model');

describe('Model Pet', () => {
  it('should create a new pet', () => {
    const pet = new Pet('dog', 'rex', 10, 20, 30);
    expect(pet).toEqual({
      type: 'dog',
      name: 'rex',
      age: 10,
      height: 20,
      weigth: 30,
    });
  });

  it('should create a new medicine', () => {
    const medicine = new Medicine('dorflex', 'dor', 10, 'analgesico');
    expect(medicine).toEqual({
      name: 'dorflex',
      description: 'dor',
      price: 10,
      type: 'analgesico',
    });
  });

  it('should create a new vaccine', () => {
    const vaccine = new Vaccine('v8', 'v8', 10, 'v8', 'v8');
    expect(vaccine).toEqual({
      name: 'v8',
      description: 'v8',
      price: 10,
      type: 'v8',
      dosage: 'v8',
    });
  });

});

