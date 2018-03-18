// Create some arrays
const numbers = [43,45,56,4,5,6,74,5]
const numbers2 = [43,45,56,74,5]
const fruit = ['Apple', 'Z', 'Banana', 'Orange']
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()]

let val;

// Get array length
val = numbers.length;

// Check if it is array
val = Array.isArray(numbers)

// Get single value
val = numbers[3]

// Insert into array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(74)


// MUTATING ARRAY

// Add on to end
numbers.push(250)

// Add on to the front
numbers.unshift(120)

// Take off fro the end
numbers.pop()

// Take off the front
numbers.shift(120)

// Splice values
numbers.splice(1,1)

// Reverse
numbers.reverse()

// Concatenate array
val = numbers.concat(numbers2)

// Sorting arrays
val = fruit.sort()

// Sorting number (use compare functions)
val = numbers.sort(function(x, y){
  return x - y
})

// Reverse Sorting number (use compare functions)
val = numbers.sort(function(x, y){
  return y - x
})

// Find
function under50(num){
  return num < 50;
}

val = numbers.find(under50)

console.log(numbers)
console.log(val)