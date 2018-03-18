const clearBtn = document.querySelector('.clear-task');
const card = document.querySelector('.card')
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent)

// DoubleClick
clearBtn.addEventListener('dbclick', runEvent)

// Mousedown
clearBtn.addEventListener('mousedown', runEvent)

// MouseUp
clearBtn.addEventListener('mouseup', runEvent)

// MouseEnter
clearBtn.addEventListener('mouseenter', runEvent)

// MouseLeave
clearBtn.addEventListener('mouseleave', runEvent)

// MouseOver
clearBtn.addEventListener('mouseover', runEvent)

// MouseOut
clearBtn.addEventListener('mouseout', runEvent)

// Mousemove
clearBtn.addEventListener('mousemove', runEvent)





// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.innerHTML = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40 )`;
}