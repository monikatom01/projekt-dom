'use strict';
//skrypt czeka az zaladuje model dom zanim cos robi
document.addEventListener('DOMContentLoaded', function () {
    //    console.log('dddd');
    linksHover();
//    changeBodyBG();
    writeInputOutput();
    document.addEventListener('keypress', changeBodyBG);
    document.removeEventListener('keypress', changeBodyBG);

});

function linksHover() {
    let links = document.getElementsByTagName('a');
    console.log(links);



    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseover', function () {
            console.log('jestem nad linkiem');
            this.style.color = 'red'; //zmienia kolor linkow na czerwony jak sie najedzie
        });

        links[i].addEventListener('mouseout', function () {
            console.log('jestem nad linkiem');
            this.style.color = 'green'; //jak zjedziesz to zmienia sie na zielony
        });
    }
}
// zmienia background strony
//function changeBodyBG () {
//    document.addEventListener('keypress', function() {
//        document.body.style.backgroundColor = 'beige';
//    });
//}



//operacje na form (jak bedziesz wpisywac w inputa to pojawi sie w paragrafie)

function writeInputOutput() {
    let inputs = document.querySelectorAll('#form input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change', function () {
            let wpisane = this.value;
            document.getElementById('wynik').innerHTML += this.value + ' ';
        })
    }
}

// let a =10;
// a = a +10;   to samo w sktocie a += 10;

//tez zmienia background strony
function changeBodyBG() {
        document.body.style.backgroundColor = 'beige';
    };
//document.addEventListener('keypress', changeBodyBG); - ma pojsc na gore
//document.removeEventListener('keypress', changeBodyBG);
//remove... wyloncza obsluge eventa

//mozna wylaczyc obsluge eventa tylko jak jest funkcja nazwana, funkcje anominowa nie zatrzymamy


//pseudo element e

function googleClick () {
    document.getElementById('google').addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); //wylacz dla linka wszystkie inne eventy
        console.log(e);
    })
}

googleClick();// wywolac funkcje na gorze 

//jak chcesz inf o kliku mozesz sobie wykonsolowac : console.log w obsludze zdarzenia
 

//np jesli mamy funkcje na kliknecie body i inna na klikniecie linka jak klikniesz w link wykonujesz dwie funkcje 

function changeBgClick() {
    document.body.addEventListener('click', function() {
//        document.style.backgroundColor = 'pink'; albo tak albo tak
        this.style.backgroundColor = 'pink';
    })
};

changeBgClick();







