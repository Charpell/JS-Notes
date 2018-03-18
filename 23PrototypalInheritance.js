// Person Constructor
function Person (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
  retrun `Hello there ${this.firstName} ${this.lastName}`
}

const person1 = new Person('John', 'Doe')

// console.log(person1.greeting())

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName)

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prtotype methods
Customer.prototype = Object.create(Person.prototype)

// Make customer prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-555', 'Standard')

// Customer Greeting (This will over write the Person greeting)
Customer.prototype.greeting = function(){
  retrun `Hello there ${this.firstName} ${this.lastName} welcome to our company`


}
console.log(customer1)

console.log(customer1.greeting())