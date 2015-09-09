/**
 * Created by Maxim on 08.09.2015.
 */
var buttonStart = document.querySelector('.menu__a');
buttonStart.onclick = function() {
    startGame();
};
var gunman = document.querySelector('.game__character');
var divStart = document.querySelector('.game__start');
function startGame() {
    var aIntro = document.querySelector('.audio__intro');
    aIntro.play();
    divStart.classList.add('display-none');
    setTimeout(moveGunMan, 1000);
}

var tGunMan = document.querySelector('.gunman_time');
function moveGunMan() {
    gunman.classList.add('display-block');
    tGunMan.innerHTML = timeGunMan/1000;
    setTimeout(function() {
        gunman.classList.add('character-move');
        gunman.classList.add('character-going');
    }, 100);
    startFire();

}
var timeGunMan = 500;
var statusDiv = document.querySelector('.game__status');
function startFire() {
    gunman.addEventListener('transitionend', function() {
        gunman.classList.remove('character-going');
        gunman.classList.add('bg-position-in-wait');

        setTimeout(function() {

            var aFire = document.querySelector('.audio__fire');
            aFire.play();
            statusDiv.innerHTML = 'FIRE!';
            statusDiv.classList.add('display-block');
            flag = 0;

            gunman.classList.add('bg-position-in-start-to-shoot');

            setTimeout(function () {
                gunman.classList.add('bg-position-in-prefire');
            }, timeGunMan/2);

            userFire();

            setTimeout(function() {
                gunManFire();

            }, timeGunMan);

        }, 2000);
    })


}
var flag = -1; // 0: user can fire, -1: user lost, 1: user win, 2: user fail

var changeFlag = function() {

    flag = 1;
    userWin();
    gunman.removeEventListener('click', changeFlag );

};

function userFire() {

    if (flag == 0) {
        gunman.addEventListener('click', changeFlag);
        var aShot = document.querySelector('.audio__shot');
        aShot.play();
    }
}

function gunManFire() {
    if (flag == 0) {

        statusDiv.innerHTML = 'YOU LOST!!';
        gunman.classList.add('bg-position-in-fire');
        flag = -1;
        gameOver();
    }
}
var paranja = document.querySelector('.game__over-paranja');

function gameOver() {
    var aDeath = document.querySelector('.audio__death');
    aDeath.play();
    paranja.classList.add('display-block');
    setTimeout(function() {
        gunman.classList.add('character-move-with-win');
    },1000);
    setTimeout(runStartWindow, 5000);

}

function runStartWindo() {
    divStart.classList.remove('display-none');
    gunman.classList.remove('display-block');
    gunman.classList.remove('character-move');
    gunman.classList.remove('character-going');
    gunman.classList.remove('bg-position-in-wait');
    statusDiv.classList.remove('display-block');
    gunman.classList.remove('bg-position-in-start-to-shoot');
    gunman.classList.remove('bg-position-in-prefire');
    gunman.classList.remove('bg-position-in-fire');
    paranja.classList.remove('display-block');
    gunman.classList.remove('character-move-with-win');
    gunman.classList.remove('character-death');
    gunman.classList.remove('character-death-full');

}

function userWin() {
    var aWin = document.querySelector('.audio__win');
    aWin.play();

    statusDiv.innerHTML = 'YOU WON!';
    gunman.classList.add('character-death');
    setTimeout(function() {
        gunman.classList.add('character-death-full');
    }, 400);
    setTimeout(runStartWindow, 4000);
}