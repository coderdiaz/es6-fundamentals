// ES5 Classes
// function Person (name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// Person.prototype.incrementAge = function () {
//   return this.age += 1;
// }

// function Student(name, age, gender, enroll_code) {
//   Person.call(this, name, age, gender);
//   this.enroll_code = enroll_code;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.incrementAge = function () {
//   Person.prototype.incrementAge.call(this);
//   this.age += 20;
//   console.log(this.age);
// }

// var student = new Student('John Doe', 25, 'Male', '0000001');
// student.incrementAge();

// ES6
class Person {
  constructor (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  incrementAge () {
    this.age += 1;
  }
}

class Student extends Person {
  constructor(name, age, gender, enroll_code) {
    super(name, age, gender);
    this.enroll_code = enroll_code;
  }

  incrementAge () {
    super.incrementAge();
    this.age += 20;
    console.log(this.age);
  }
}

const student = new Student('John Doe', 25, 'Male', '0000001');
student.incrementAge();