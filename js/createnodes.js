'use strict';

let btn = document.createElement('button'); //tworzy element o nazwie btn
console.log(btn); 

let btnText = document.createTextNode('kliknij mnie'); // tworzy wezel tekst
console.log(btnText); 

let btnAttr = document.createAttribute('id'); // tworzy wezel klase
console.log(btnAttr); 

//ustalamy wartosc dla wezla atrybutu 
btnAttr.value = 'button';

//appendChild dodaje nowy wezel na koniec wezla
btn.appendChild(btnText);  //wrzucil kliknij mnie do <buttona>

//setAttributeNode - dodaj wezel atrybutu do danego wezla
btn.setAttributeNode(btnAttr);

//dopinamy element btn do body
//document.body.appendChild(btn);

//chcemy wsadzic battona przed pierwszym linkiem w pierwszym divie 
let partFirst = document.getElementById('parFirst');
parFirst.insertBefore(btn, document.querySelector('#parFirst .link'));

//buduje nowy paragraf i nadaje mu atrybut klasy
let par =document.createElement('p');

//tworzymy zmienna ktora bedzie trzymala tekst dla paragrafu
let parTex = document.createTextNode('TEKST DLA DODANEGO PARAGRAFU');

//dopinam tekst do paragrafu
par.appendChild(parTex);
console.log(par);

//ustawiamy atrybut dla paragrafu (atrybut class='paragraf')
par.setAttribute('class', 'paragraf');

//wrzucamy przed parafraf w drugim divie
document.getElementById('parSecond').insertBefore(par, document.querySelector('#parSecond p'));

//usuwanie wezlow

//usuwamy atrybut battonowi mozna na dwa sposoby
//document.getElementById('button').removeAttributeNode(btnAttr); -tak
document.getElementById('button').removeAttribute('id'); //albo tak

//usuwamy calego buttona
parFirst.removeChild(btn);


//dodawanie tekstu w locie bez tworzenia go osobno i doklejaniu pozniej 

//stworz nowy paragraf za pomoga innerText dodaj mu tekst "nowoutworzony parafraf", nastepnie dodaj go na koniec pierwszego diva


let paragraf2 = document.createElement('p');
console.log(paragraf2);

document.getElementById('parFirst').appendChild(paragraf2);

paragraf2.innerText = 'nowoutworzony element';

console.log(parFirst.innerHTML);
console.log(parFirst.outerHTML);

//zniknie div pierwszy i bedzie zamiast tego section z paragrafem
//parFirst.outerHTML = '<section id="parFirst"><p>loremjjjjjjjjjjjjj</p></section>';

//jesli przypisujemy, robimy SET , jezeli nie przypisujemy robimy GET
//zamienia hrefa linku o id link_3 na inna wartosc
document.getElementById("link_3").href = 'http://google.com';

//pokazuje jakie klasy ma zlapany elelement
console.log(document.getElementById('classList').className);

//nadpisuje nasze klasy 'class1 class2 class3' tereaz jest 'klasa1 klasa2'
document.getElementById('classList').className = 'klasa1 klasa2';
console.log(document.getElementById('classList').className);

//pokazuje domtokenlist
console.log(document.getElementById('classList').classList);

//dodajemy klase
document.getElementById('classList').classList.add('klasa_dodana');
console.log(document.getElementById('classList').classList);

//usuwanie klasy 
document.getElementById('classList').classList.remove('klasa2');
console.log(document.getElementById('classList').classList);

//MANIPULACJA STYLAMI
//background-coclor = backgroundColor 

document.getElementById('link_3').style.color = 'green';















