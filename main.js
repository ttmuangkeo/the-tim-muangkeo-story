var spanText = document.getElementsByTagName('span');
var begin = document.getElementById('begin');
var audio = document.getElementById('bg-music');
var startBtn = document.getElementById('start');
var stars = document.getElementById('stars');
var stars2 = document.getElementById('stars2');
var stars3 = document.getElementById('stars3');
var title = document.getElementById('title');
var startMenu = document.getElementById('start-menu');
var aboutMe = document.getElementById('about-me');
var s = skrollr.init();


var start = function() {
    for (var i = 0; i < spanText.length; i++) {
        if (spanText[i].innerHTML != '') {
            spanText[i].innerHTML = '';
            startBtn.style.display = 'none';
            begin.removeAttribute('class');
        };
    };
    setTimeout(function() {
        spanText[0].classList.add('slideInRight');
        spanText[0].innerHTML = 'Hi there!';
    }, 1500);
    setTimeout(function() {
        spanText[1].innerHTML = 'This is my life story';
    }, 3000);
    setTimeout(function() {
        spanText[2].innerHTML = 'Click Begin and Scroll Down!';
    }, 5000);
};


var intro = function() {
    startMenu.removeAttribute('id');
    for (var i = 0; i < spanText.length; i++) {
        spanText[i].remove();
    };
    stars.removeAttribute('id');
    stars2.removeAttribute('id');
    stars3.removeAttribute('id');
    title.removeAttribute('id');
    spanText[0].remove();
    aboutMe.classList.remove('hidden');
    aboutMe.classList.add('fadeIn')
    begin.classList.add('hidden');
}

startBtn.addEventListener("click", start);
begin.addEventListener("click", intro);