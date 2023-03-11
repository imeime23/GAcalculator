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
    expect(ageCalculator.yearsSince(20, 'mercury')).toBeCloseTo(17.5, 2);
  });

  it('calculates years since a past birthday on venus correctly', () => {
    const ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.yearsSince(20, 'venus')).toBeCloseTo(6.85, 2);
  });

  it('calculates years since a past birthday on mars correctly', () => {
    const ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.yearsSince(20, 'mars')).toBeCloseTo(2.26, 2);
  });

  it('calculates years since a past birthday on jupiter correctly', () => {
    const ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.yearsSince(20, 'jupiter')).toBeCloseTo(0.36, 2);
  });

  it('calculates years until a future birthday on mercury correctly', () => {
    const ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.yearsUntil(26, 'mercury')).toBeCloseTo(33.33, 2);
  });

  it('calculates years until a future birthday on venus correctly', () => {
    const ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.yearsUntil(26, 'venus')).toBeCloseTo(13.55, 2);
  });

  it('calculates years until a future birthday on mars correctly', () => {
    const ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.yearsUntil(26, 'mars')).toBeCloseTo(4.46, 2);
  });

  it('calculates years until a future birthday on jupiter correctly', () => {
    const ageCalculator = new AgeCalculator(24);
    expect(ageCalculator.yearsUntil(26, 'jupiter')).toBeCloseTo(0.71, 2);
  });
});