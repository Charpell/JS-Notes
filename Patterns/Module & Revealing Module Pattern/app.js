// Basic Structure

// (function(){
//   // Declare private vaiable and functions

//   return {
//     // Declare public variable and functions
//   }
// }())


// STANDARD MODULE PATTERN
const UICtrl = (function(){
  let text = 'Hello World';

  const changeText = function(){
    const element = document.querySelector('h1');
    element.textContent = 'text'
  }

  return {
    callChangeText: function() {
      changeText()
      console.log(text);
    }
  }
}())

// You can't access this because they are bothe private
// UICtrl.changeText();
// console.log(UICtrl.text)

// Public
UICtrl.callChangeText();




// REVEALING MODULE PATTERN
const ItemCtrl = (function(){
  let data = [];

  function add(item){
    data.push(item)
    console.log('Item Added....')
  }

  function get(id){
    return data.find(item => {
      return item.id === id;
    })
  }

  return {
    add: add,
    get: get
    }

}())

ItemCtrl.add({id: 1, name: 'John'})
ItemCtrl.add({id: 2, name: 'Mark'})
console.log(ItemCtrl.get(2))




