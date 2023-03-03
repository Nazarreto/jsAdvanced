// task 1

// let person = {};

// person.firstName = "Ivan";

// person.secondName = "Ivanov";

// person.ShowDate = function () {
//   console.log(this.firstName + " " + this.secondName);
// };

// let newPerson = {};

// for (let key in person) {
//   newPerson[key] = person[key];
// }

// newPerson.firstName = "Petro";

// newPerson.secondName = "Petriv";

// person.ShowDate();

// newPerson.ShowDate();

// task 2

let MyMath = {};

MyMath.a = 5;

MyMath.b = 2;

MyMath.sum = function () {
  const result = this.a + this.b;
  console.log(result);
};

MyMath.sum();

MyMath.multiplication = function () {
  const result = this.a * this.b;
  console.log(result);
};

MyMath.multiplication();

MyMath.division = function () {
  const result = this.a / this.b;
  console.log(result);
};

MyMath.division();

MyMath.subtraction = function () {
  const result = this.a - this.b;
  console.log(result);
};

MyMath.subtraction();
