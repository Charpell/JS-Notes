var person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'dshf@hdihf.com',
  hobbies: ['music'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2017 - this.age
  }
}

let val;

val = person;

// Get specific value
val = person.firstName;
val = person['firstName']
val = person.age
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();


console.log(val)

// Array of Object
const people = [
  {name: 'John', age: 30},
  {name: 'John', age: 30}
]