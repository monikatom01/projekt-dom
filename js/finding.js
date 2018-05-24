'use strict';

//przez id - konkretny element

let parFirst = document.getElementById('parFirst');
console.log(parFirst);

//po klasie - kolekcja html

let links = document.getElementsByClassName('link');
console.log(links);

//przez znacznik - kolekcja html

let anchors = document.getElementsByTagName('a');
console.log(anchors);

//przez query selector - element (pierwszy trafiony z kolekcji)

let parSecond = document.querySelector('#parSecond');
console.log(parSecond);

//przez query selector all - wszystkie trafienia w element po selektorze
let divy = document.querySelectorAll('div');
console.log(divy);

let paragrafy = document.querySelectorAll('div p');
console.log(paragrafy);




