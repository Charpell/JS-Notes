// Type convversion and Type cohesion

let val;

// Number to String
val = String(555)
val = String(4+4)

// Bool to String
val = String(true);

// Date to String
val = String(new Date())

// Array to String
val = String([1,2,3,4])

// toString()
val = (5).toString()
val = (true).toString()


// Output
console.log(val)
console.log(typeof val)
console.log(val.length)


// String to number
val = Number('5')
val = Number(true)  // 1
val = Number(false)  // 0
val = Number(null)  
val = Number('hello')  
val = Number([1,2,3])  

val = parseInt('100')
val = parseFloat('100.30')




// Output
console.log(val)
console.log(typeof val)
console.log(val.toFixed(2))




// Type Cohesion
const val1 = '5'
const val2 = 6
const sum = val1 + val2

console.log(sum)
console.log(typeof sum)


