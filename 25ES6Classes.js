class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`
  }
}


const john = new Customer('John', 'Doe');

console.log(john)
console.log(john.greeting())
