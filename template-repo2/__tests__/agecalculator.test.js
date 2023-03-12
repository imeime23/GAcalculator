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

  it('calculates mars age correctly', () => {
    const ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.marsAge).toBeCloseTo(12.77, 2);
  });

  it('calculates jupiter age correctly', () => {
    const ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.jupiterAge).toBeCloseTo(2.02, 2);
  });

  it('calculates years since a past birthday on mercury correctly', () => {
    const ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.yearsSince(20, 'mercury')).toBeCloseTo(16.67, 2);
  });

  it('calculates years since a past birthday on venus correctly', () => {
    const ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.yearsSince(20, 'venus')).toBeCloseTo(6.45, 2);
  });


});