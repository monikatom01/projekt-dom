'use strict';

//jak zlapac tylko pierwszego linka
let firstLink = document.querySelector('#parFirst .link');
console.log(firstLink);

//parent element
console.log(firstLink.parentElement);

//parent Node
console.log(firstLink.parentNode);

//

let parFirst = document.getElementById('parFirst');

//child nodes

console.log(parFirst.childNodes);  //kazdy enter w html tez jest wezlem!!!!

//children - elementy html

console.log(parFirst.children);

//previous node sibling
console.log(firstLink.previousSibling);

//previous element sibling
console.log(firstLink.previousElementSibling);

//next element sibling
console.log(firstLink.nextElementSibling);


