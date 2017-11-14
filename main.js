var spanText = document.getElementsByTagName('span');
var begin = document.getElementById('begin');
var audio = document.getElementById('bg-music');
var startBtn = document.getElementById('start');
var stars = document.getElementById('stars');
var stars2 = document.getElementById('stars2');
var stars3 = document.getElementById('stars3');
var title = document.getElementById('title');
var startMenu = document.getElementById('start-menu');


var start = function() {
    for (var i = 0; i < spanText.length; i++) {
        if (spanText[i].innerHTML !== '') {
            spanText[i].innerHTML = '';
            begin.style.display = 'none';
        };
    };
};
var text1 = setInterval(function() {
    spanText[0].innerHTML = 'Hi There!'
}, 1500);
var text2 = setInterval(function() {
    spanText[1].innerHTML = 'Welcome to my Life`s Story'
}, 3500);
var text3 = setInterval(function() {
    spanText[2].innerHTML = 'test text goes here';
}, 6500);

function stopInterval() {
    clearInterval(text1);
    clearInterval(text2);
    clearInterval(text3);
};



var intro = function() {
    startMenu.removeAttribute('id');
    for (var i = 0; i <= spanText.length; i++) {
        spanText[i].remove();
        stopInterval()
    }
}

begin.addEventListener("click", intro);