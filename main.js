var spanText = document.getElementsByTagName('span');
var begin = document.getElementById('begin');
var audio = document.getElementById('bg-music');


var start = function() {
    for (var i = 0; i < spanText.length; i++) {
        if (spanText[i].innerHTML !== '') {
            spanText[i].innerHTML = '';
            begin.style.display = 'none';
            setInterval(function() {
                spanText[0].innerHTML = 'Hi There!'
            }, 1500);
            setInterval(function() {
                spanText[1].innerHTML = 'Welcome to my Life`s Story'
            }, 3500);
            setInterval(function() {
                spanText[2].innerHTML = 'So, you want to get to know me?';
            }, 6500);
            setInterval(function() {
                begin.style.display = '';
                begin.disabled = true;
                begin.innerHTML = 'Coming soon..';
            }, 9500);
        }
    }
}


begin.addEventListener("click", start)