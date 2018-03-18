// document.getElementByClassName

const items = document.getElementsByClassName('collection-item')
console.log(items);
console.log(items[0])
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// document.getElementByTagName
const items = document.getElementsByTagName('li')
console.log(lis);
console.log(lis[0])
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

// Convert HTML Collections into Array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li) {
  console.log(li.className);
  li.textContent = `${index}: Hello`
})

console.log(lis)


// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index) {
  item.textContent = `${index}: Hello`
})

const liOdd = document.querySelectorAll('li:nth-child(odd)')
const liEven = document.querySelectorAll('li:nth-child(even)')

liOdd.forEach(function(li, index) {
  li.style.background = '#ccc'
})

console.log(items)