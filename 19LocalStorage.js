// set local storage item;
localStorage.setItem('name', 'John');

// set session storage item;
sessionStorage.setItem('name', 'Beth');

// remove from stirage
localStorage.removeItem('name')

// get from storage
const name = localStorage.getItem('name')

// clear local storage
localStorage.clear();



// Add data to form
document.querySelector('form').addEventListener('submit', 
  function(e){
    e.preventDefault();

    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
      tasks.push(task)

    localStorage.setItem('tasks', JSON.stringify(tasks))

    alert('Task saved')
  })



  // Pulling the iTems form tasks
  const tasks = JSON.parse(localStorage.getItem('tasks'))

  tasks.forEach(function(task) {
    console.log(task)
  })
