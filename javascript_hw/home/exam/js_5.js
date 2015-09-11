/**
 * Created by Maxim on 08.09.2015.
 */

var timeGunMan = 500;
var flag = 0;   // 0: user can fire, -1: user lost, 1: user win, 2: user fail
var fail= 0;
var timeout_id;

var paranja = document.querySelector('.game__over-paranja'),
    buttonStart = document.querySelector('.menu__a'),
    statusDiv = document.querySelector('.game__status'),
    tGunMan = document.querySelector('.gunman_time'),
    gunman = document.querySelector('.game__character'),
    divStart = document.querySelector('.game__start');

buttonStart.onclick = function() {
    console.log('click to start - startGame');
    startGame();
};

function startGame() {
    var aIntro = document.querySelector('.audio__intro');
    aIntro.play();

    divStart.classList.add('display-none');

    setTimeout(moveGunMan, 1000);

    console.log('startGame - moveGanMan');
}

function moveGunMan() {
    gunman.classList.add('display-block');
    tGunMan.innerHTML = (timeGunMan/1000).toFixed(2);

    setTimeout(function() {
        gunman.classList.add('character-move');
        gunman.classList.add('character-going');
    }, 100);

    startFire();

    console.log('moveGunMan - startFire');

}

function startFire() {
    gunman.addEventListener('transitionend', function() {
        var aWait = document.querySelector('.audio__wait');
        aWait.play();



        gunman.classList.remove('character-going');
        gunman.classList.add('bg-position-in-wait');

        gunman.addEventListener('click', foulFire);
        console.log('add event: - foulFire');

        timeout_id = setTimeout(function() {

            if (flag == 0) {
                var aFire = document.querySelector('.audio__fire');
                aFire.play();

                statusDiv.innerHTML = 'FIRE!';
                statusDiv.classList.add('display-block');
                gunman.classList.add('bg-position-in-start-to-shoot');
            }



            setTimeout(function () {
                gunman.classList.add('bg-position-in-prefire');
            }, timeGunMan/2);

            calculateTime(new Date().getTime());

            userFire();

            setTimeout(gunManFire, timeGunMan);

        }, 2000);
    })

}

function calculateTime(t) {
    var tNow;

    function run() {
        tNow = new Date().getTime();

        if (flag == 0) {
            var res = ((tNow - t) / 1000).toFixed(2);

            setTimeout(run, 1);

            var tUser = document.querySelector('.user_time');
            tUser.innerHTML = res;
        }
    }
    run();
}



function foulFire() {

    flag = -1;
    fail = 1;
    clearTimeout(timeout_id);
    gunman.removeEventListener('click', foulFire);
    var aFoul = document.querySelector('.audio__shot-fall');
    aFoul.play();
    setTimeout(function() {
        runStartWindow();
        console.log('foulFire - runStartWindow');
    }, 3000);
}

var changeFlag = function() {
    console.log('changeFlag - win');
    flag = 1;

    userWin();

    gunman.removeEventListener('click', changeFlag );



};

function userFire() {
    gunman.removeEventListener('click', foulFire);

    if (flag == 0 && fail == 0) {

        gunman.addEventListener('click', changeFlag);

        var aShoot = document.querySelector('.audio__shot');
        aShoot.play();

        console.log('userFire - changeFlag');
    }
}

function gunManFire() {
    if (flag == 0 && fail == 0) {
        console.log('gunManFire - gameOver');
        statusDiv.innerHTML = 'YOU LOST!!';

        gunman.classList.add('bg-position-in-fire');

        flag = -1;

        gameOver();


    }
}

function gameOver() {
    var aDeath = document.querySelector('.audio__death');
    aDeath.play();

    paranja.classList.add('display-block');

    setTimeout(function() {
        gunman.classList.add('character-move-with-win');
    },1000);
    setTimeout(runStartWindow, 5000);

    console.log('gameOver - runStartWindow');

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

    console.log('win - runStartWindow');
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
    gunman.classList.remove('character-death');
    gunman.classList.remove('character-death-full');

    console.log('runStartWindow');

    flag = 0;
    fail = 0;
}