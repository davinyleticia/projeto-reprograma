import Pet from './model/pet-model.js';

describe('constructor', () => {
  test('should create a new Pet', () => {
    const pet = new Pet();
    expect(pet instanceof Pet).toBe(true);
  });
});
