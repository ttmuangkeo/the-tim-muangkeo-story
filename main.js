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
var header = document.getElementsByTagName('header');
var restartBtn = document.getElementById('restart-button');
var s = skrollr.init();
var start = function() {
    for (var i = 0; i < spanText.length; i++) {
        if (spanText[i].innerHTML != '') {
            spanText[i].innerHTML = '';
            startBtn.style.display = 'none';
            begin.removeAttribute('class');
            begin.disabled = false;
        };
    };
    setTimeout(function() {
        spanText[0].innerHTML = 'Hi there!';
    }, 1500);
    setTimeout(function() {
        spanText[1].innerHTML = 'Get to know me.';
    }, 3000);
    setTimeout(function() {
        spanText[2].innerHTML = 'Click Begin';
        begin.disabled = false;
    }, 5000);
};
var intro = function() {
    startMenu.classList.add('hidden');
    aboutMe.classList.remove('hidden');
    aboutMe.classList.add('fadeIn');
}
var restart = function() {
    startMenu.classList.remove('hidden');
    aboutMe.classList.add('hidden');
}
startBtn.addEventListener("click", start);
begin.addEventListener("click", intro);
restartBtn.addEventListener("click", restart)