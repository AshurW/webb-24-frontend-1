// class Car {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     getCarInfo() {
//         return `${this.make} ${this.model} ${this.year}`;
//     }

//     startEngine() {
//         console.log("Engine started!");
//     }
// }

// // Användning
// const myCar = new Car('Toyota', 'Corolla', 2020);
// const carInfo = myCar.getCarInfo()
// console.log(carInfo);
// myCar.startEngine();

// class BankAccount {
//     constructor(accountNumber, balance = 0) {
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     }

//     deposit(amount) {
//         // this.balance = this.balance + amount
//         this.balance += amount;
//     }

//     withdraw(amount) {
//         if (this.balance >= amount) {
//             // this.balance = this.balance - amount
//             this.balance -= amount;
//         } else {
//             console.log('Insufficient funds');
//         }
//     }

//     getBalance() {
//         return this.balance;
//     }
// }

// // Användning
// const account = new BankAccount('12345678', 500);
// account.deposit(200);
// account.withdraw(100);
// console.log(account.getBalance());
// account.withdraw(1000)

// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }

//     getSummary() {
//         return `${this.title} by ${this.author} (${this.year})`;
//     }
// }

// class EBook extends Book {
//     constructor(title, author, year, fileSize) {
//         super(title, author, year);
//         this.fileSize = fileSize;
//     }

//     getFileSize() {
//         return `${this.fileSize}MB`;
//     }
// }

// // Användning
// const myEBook = new EBook('Digital Fortress', 'Dan Brown', 1998, 5);
// console.log(myEBook.getSummary());
// console.log(myEBook.getFileSize());

// class TaskManager {
//     constructor() {
//         this.tasks = [];
//     }

//     addTask(title, completed = false) {
//         // this.tasks.push({ title: title, completed: completed });
//         this.tasks.push({ title, completed });
//     }

//     markTaskComplete(index) {
//         if (this.tasks[index]) {
//             this.tasks[index].completed = true;
//         } else {
//             console.log('task not found')
//         }
//     }

//     showTasks() {
//         this.tasks.forEach((task, index) => {
//             console.log(`${index + 1}: ${task.title} - ${task.completed ? 'Complete' : 'Incomplete'}`);
//         });
//     }
// }

// // Användning
// const taskManager = new TaskManager();
// taskManager.addTask('Do laundry');
// taskManager.addTask('read book', true);
// taskManager.addTask('Write essay');
// taskManager.markTaskComplete(0);
// taskManager.showTasks();
// taskManager.markTaskComplete(5);

// class GameCharacter {
//     constructor(name, health, strength) {
//         this.name = name;
//         this.health = health;
//         this.strength = strength;
//     }

//     attack(enemy) {
//         enemy.health -= this.strength;
//         console.log(`${this.name} attacked ${enemy.name} and caused ${this.strength} damage`);
//     }
// }

// class Mage extends GameCharacter {
//     constructor(name, health, strength, magicPower) {
//         super(name, health, strength);
//         this.magicPower = magicPower;
//     }

//     magicalAttack(enemy) {
//         enemy.health -= this.magicPower;
//         console.log(`${this.name} cast a spell on ${enemy.name} and caused ${this.magicPower} magic damage`);
//     }
// }

// // Användning
// const hero = new GameCharacter('Knight', 100, 10);
// const villain = new Mage('Sorcerer', 80, 5, 20);

// hero.attack(villain);
// villain.magicalAttack(hero);

// console.log('hero health', hero.health)
// console.log('villain health', villain.health)

// class Shape {
//     getArea() {
//         return null;
//     }

//     getPerimeter() {
//         return null;
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }

//     getArea() {
//         return Math.PI * this.radius ** 2;
//     }

//     getPerimeter() {
//         return 2 * Math.PI * this.radius;
//     }
// }

// class Square extends Shape {
//     constructor(side) {
//         super();
//         this.side = side;
//     }

//     getArea() {
//         return this.side ** 2;
//     }

//     getPerimeter() {
//         return 4 * this.side;
//     }
// }

// class Rectangle extends Shape {
//     constructor(width, height) {
//         super();
//         this.width = width;
//         this.height = height;
//     }

//     getArea() {
//         return this.width * this.height;
//     }

//     getPerimeter() {
//         return 2 * (this.width + this.height);
//     }
// }

// // Användning
// const myCircle = new Circle(5);
// console.log(myCircle.getArea());
// console.log(myCircle.getPerimeter());

// class Person {
//     constructor(name) {
//         this.name = name
//     }
// }

// class Employee extends Person {
//     constructor(name, position, salary) {
//         super(name)
//         this.position = position;
//         this.salary = salary;
//     }

//     getDetails() {
//         return `${this.name}, ${this.position}, ${this.salary} SEK`;
//     }

//     calculateAnnualBonus() {
//         return this.salary * 0.1; // 10% bonus
//     }
// }

// class Customer extends Person {
//     constructor(name, paymentmethod) {
//         super(name)
//         this.paymentmethod = paymentmethod
//     }
// }

// // Användning
// const employee = new Employee('Alice', 'Developer', 50000);
// console.log(employee.getDetails());
// console.log(employee.calculateAnnualBonus());

// class Classroom {
//   constructor() {
//     this.students = [];
//   }

//   addStudent(name) {
//     this.students.push(name);
//   }

//   removeStudent(name) {
//     // this.students = this.students.filter(student => {
//     //     return student !== name
//     // });
//     this.students = this.students.filter((student) => student !== name);
//   }

//   showStudents() {
//     console.log(this.students);
//   }

//   findStudent(name) {
//     return this.students.includes(name);
//   }
// }

// // Användning
// const myClass = new Classroom();
// myClass.addStudent("John");
// myClass.addStudent("Jane");
// myClass.showStudents();
// console.log(myClass.findStudent("John"));
// myClass.removeStudent("John");
// console.log(myClass.findStudent("John"));
// console.log(myClass.findStudent("Jane"));


// class ShoppingCart {
//     constructor() {
//         this.items = [];
//     }

//     addItem(name, price) {
//         // this.items.push({ name: name, price: price });
//         this.items.push({ name, price });
//     }

//     getTotal() {
//         return this.items.reduce(
//             (total, item) => {
//                 return total + item.price
//             }, 
//             0
//         );
//     }

//     applyDiscount(discountPercentage) {
//         const total = this.getTotal();
//         return total - (total * (discountPercentage / 100));
//     }
// }

// // Användning
// const cart = new ShoppingCart();
// cart.addItem('Shirt', 200);
// cart.addItem('Pants', 300);
// console.log(cart.getTotal());
// console.log(cart.applyDiscount(10));


class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    login(inputPassword) {
        // if (this.password === inputPassword) {
        //     return 'Login successful!'
        // } else {
        //     return 'Incorrect password'
        // }
        return this.password === inputPassword ? 'Login successful!' : 'Incorrect password';
    }
}

class AdminUser extends User {
    constructor(username, email, password) {
        super(username, email, password);
        this.adminPrivileges = true;
    }

    updateUserDetails(user, newDetails) {
        if (this.adminPrivileges) {
            Object.assign(user, newDetails);
            console.log('User details updated');
        } else {
            console.log('Permission denied');
        }
    }
}

// Användning
const admin = new AdminUser('admin', 'admin@example.com', 'adminpass');

const user = new User('johnDoe', 'john@example.com', 'mypassword');

console.log(admin.login('adminpass')); // login success

console.log(user.login('adminpass1')); // inccorrect password

console.log(user)

admin.updateUserDetails(user, { email: 'newemail@example.com', name: "ashur" });

console.log(user)


admin.adminPrivileges = false


admin.updateUserDetails(user, { email: 'newemail@example.com', username: "ashur" }); // Permission denied


