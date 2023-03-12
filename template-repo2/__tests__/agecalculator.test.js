import AgeCalculator from '../src/js/agecalculator.js';

describe('AgeCalculator', () => {
  it('calculates mercury age correctly', () => {
    const ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.mercuryAge).toBe(100);
  });

  it('calculates venus age correctly', () => {
    const ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.venusAge).toBeCloseTo(38.71, 2);
  });

});