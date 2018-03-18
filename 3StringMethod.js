const firstName = 'Williams';
const lastName = 'Johnson';
const age = 7
const str = 'Hello there, my name is Cool'

let val;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'John '
val += 'Doe'

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awseome, I can\'t wait'

// Length
val = firstName.length;

// Concat
val = firstName.concat(' ', lastName)

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2]

// indexOf()
val = firstName.indexOf('l')  
val = firstName.lastIndexOf('l')
// -1 means the character dosent exist


// charAt()
val = firstName.charAt('2')

// Get the lat char
val = firstName.charAt(firstName.length - 1)

// substring()
val = firstName.substring(0, 4)

// slice() (mostly used with array)
val = firstName.slice(0, 4)
val = firstName.slice(-3)

// split (converts a string to an array)
val = str.split(' ') // splits into words
val = str.split('') // splits into character

// replace()
val = str.replace('Cool', 'Joe')

// includes
val = str.includes('Hello')

console.log(val)