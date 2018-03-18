const sayHello = function() {
  console.log('Hello')
}

const sayHello = () => {
  console.log('Hello')
}

// One line function does not need braces
const sayHello = () => console.log('Hello')

// One line returns
const sayHello = () => 'Hello'

// Use parenthesis when returning an object
const sayHello = () => ({msg: 'Hello'})

// Single param does not need parenthesis
const sayHello = name => console.log(`Hello ${name}`)

sayHello('Brad')


const users = ['Nathan', 'John', 'Williams']

// const nameLengths = users.map(function(name ){
//   return name.length;
// })

const nameLengths = users.map(name => name.length);

console.log(nameLengths)