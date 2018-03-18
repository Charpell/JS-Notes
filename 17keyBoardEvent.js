const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear Input
taskInput.value = ''

form.addEventListener('submit', runEvent);

// keydown
taskInput.addEventListener('keydown', runEvent)

// keyup
taskInput.addEventListener('keyup', runEvent)

// keypress
taskInput.addEventListener('keypress', runEvent)

// Focus
taskInput.addEventListener('focus', runEvent)

// Blur
taskInput.addEventListener('blur', runEvent)

// Cut
taskInput.addEventListener('cut', runEvent)

// Paste
taskInput.addEventListener('paste', runEvent)

// Input
taskInput.addEventListener('input', runEvent)

// Change
taskInput.addEventListener('change', runEvent)

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`)

  // Get Input Value
  console.log(taskInput.value)

  heading.innerText = e.target.value;

  e.preventDefault();
}