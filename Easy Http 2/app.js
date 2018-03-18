const http = new EasyHTTP;

// // Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

// User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jfh@hmd.com'
}

// // Create Post
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

// UPDATE Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

// DELETE
http.delete('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(error => console.log(error))

