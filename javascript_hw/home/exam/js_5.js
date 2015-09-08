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
    divStart.classList.add('display-none');
    setTimeout(moveGunMan, 1000);
}

function moveGunMan() {
    gunman.classList.add('display-block');

    setTimeout(function() {
        gunman.classList.add('character-move');
        gunman.classList.add('character-going');
    }, 1000);
    startFire();
}
var timeGunMan = 1000;
var statusDiv = document.querySelector('.game__status');
function startFire() {
    gunman.addEventListener('transitionend', function() {
        gunman.classList.remove('character-going');
        gunman.classList.add('bg-position-in-wait');

        setTimeout(function() {
            statusDiv.innerHTML = 'FIRE!';
            statusDiv.classList.add('display-block');

            gunman.classList.add('bg-position-in-start-to-shoot');

            setTimeout(function () {
                gunman.classList.add('bg-position-in-prefire');
            }, timeGunMan/2);

            setTimeout(gunManFire, timeGunMan);

        }, 2000);
    })


}

function userFire() {

}

function gunManFire() {
    statusDiv.innerHTML = 'YOU LOST!!';
    gunman.classList.add('bg-position-in-fire');
    gameOver();

}
var paranja = document.querySelector('.game__over-paranja');

function gameOver() {
    paranja.classList.add('display-block');
    gunman.classList.add('character-move-with-win');
    setTimeout(runStartWindow, 4000);
}

function runStartWindow() {
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

}