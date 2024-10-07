import p1 from "./Person.js";

export default class Student extends p1 {
    constructor(marks, firstName, lastName, birthYear) {
      super(firstName, lastName, birthYear);
      this.marks = marks;
    }
  
    getMarks() {
      return this.marks;
    }
  
    // sayHello() {
    //   console.log(
    //     `Hej, jag är student, mitt namn är ${this.firstName} ${this.lastName}.`
    //   );
    // }
  }