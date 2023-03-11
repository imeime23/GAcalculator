import AgeCalculator from '../src/js/agecalculator.js';

describe('AgeCalculator', () => {
  it('calculates mercury age correctly', () => {
    const ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.mercuryAge).toBe(100);
  });

});