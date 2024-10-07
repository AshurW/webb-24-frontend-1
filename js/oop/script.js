class Person {
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

class Student extends Person {
  constructor(marks, firstName, lastName, birthYear) {
    super(firstName, lastName, birthYear);
    this.marks = marks;
  }

  getMarks() {
    return this.marks;
  }

  sayHello() {
    console.log(
      `Hej, jag är student, mitt namn är ${this.firstName} ${this.lastName}.`
    );
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, course) {
    super(firstName, lastName);
    this.course = course;
  }

  getCourse() {
    return this.course;
  }
}

const student1 = new Student(99, "Christophe", "Berge", 2020);
console.log(student1.getFullName());
console.log(student1.getAge());
student1.sayHello()

// const person1 = new Person("ashur", "warda", 33);

// person1.sayHello();
// console.log(person1.firstName);

// class Animal {
//   constructor(name, legs) {
//     this.name = name;
//     this.legs = legs;
//   }
//   speech() {
//     return `${this.name} makes a noise`;
//   }
//   numberOfLegs() {
//     return `This animal has ${this.legs} legs`;
//   }
// }

// const dog = new Animal("Dog", 4);

// const speech = dog.speech()

// console.log(speech);
// console.log(dog.legs);
// console.log(dog.numberOfLegs());

// class ElementManager {
//     constructor(tagName, textContent) {
//       this.element = document.createElement(tagName);
//       this.element.textContent = textContent;
//       console.log(this)
//     }

//     appendTo(parentElement) {
//       parentElement.appendChild(this.element);
//     }

//     addClass(className) {
//       this.element.classList.add(className);
//     }

//     removeClass(className) {
//       this.element.classList.remove(className);
//     }

//     setTextContent(textContent) {
//       this.element.textContent = textContent;
//     }
//   }

//   // Användning av klassen:
//   const divElement = new ElementManager('div', 'Detta är en div');
//   divElement.addClass('custom-class');
//   divElement.appendTo(document.body);

//   const pElement = new ElementManager('p', 'Detta är en paragraf');
//   pElement.addClass('another-class');
//   pElement.appendTo(document.body);

//   // Ändra texten
//   divElement.setTextContent('Ny text för div-elementet');
