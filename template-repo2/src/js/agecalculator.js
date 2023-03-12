export default class AgeCalculator {
  constructor(age) {
    this.age = age;
  }

  // Returns the age of the person in Mercury years
  get mercuryAge() {
    return this.age / 0.24;
  }
}