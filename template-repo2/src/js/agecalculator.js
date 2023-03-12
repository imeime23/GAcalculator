export default class AgeCalculator {
  constructor(age) {
    this.age = age;
  }

  // Returns the age of the person in Mercury years
  get mercuryAge() {
    return this.age / 0.24;
  }

  // Returns the age of the person in Venus years
  get venusAge() {
    return this.age / 0.62;
  }

  // Returns the age of the person in Mars years
  get marsAge() {
    return this.age / 1.88;
  }

  // Returns the age of the person in Jupiter years
  get jupiterAge() {
    return this.age / 11.86;
  }

}