export default class Person {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  sayHello() {
    console.log(`Hej, mitt namn är ${this.firstName} ${this.lastName}.`);
  }
  getAge() {
    return 2024 - this.birthYear;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
