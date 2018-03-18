// // Destructuring Assignment

// let a, b;
// [a, b] = [100, 200]

// // Rest pattern
// [a, b] = [100, 200, 300, 400]

// console.log(a, b)

// ({ a, b } = {a: 100, b: 200, c: 300 })


// // Array Destructuring
// const people = ['John', 'Beth', 'Mike']

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3)


// Parse array returned from function
// function getPeople() {
//   return ['John', 'Beth', 'Mike']
// }

// let person1, person2, person3
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3)


// Object Destructuring
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function(){
    console.log('Hello')
  }
}


// NEW ES6
const { name, age, city, sayHello } = person;