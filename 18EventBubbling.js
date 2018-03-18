// EVENT BUBBLING
document.querySelector('.card-title').addEventListener('click', 
  function(){
    console.log('card title')
})

document.querySelector('.card-content').addEventListener('click', 
  function(){
    console.log('card content')
})

document.querySelector('.card').addEventListener('click', 
  function(){
    console.log('card')
})

document.querySelector('.col').addEventListener('click', 
  function(){
    console.log('col')
})

// EVENT DELEGATION
// const delItem = document.querySelector('.delete-item')

// delItem.addEventListener('click', deleteItem)

document.body.addEventListener('click', deleteItem)

function deleteItem(){
  
  console.log(e.target);

  if(e.target.parentElement.className === 'delete-item secondary-content') {
    cnsole.log('delete item')
  }

  if(e.target.parentElement.classList.contains('delete-item')) {
    cnsole.log('delete item');
    e.target.parentElement.parentElement.remove()
  }
}