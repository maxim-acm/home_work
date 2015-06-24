/**
 * Created by Maxim on 24.06.2015.
 */
/*var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()', 'кришна', 'харе', 'харе', 'харе', 'харе', '8-()', 'кришна', 'харе', '123', 'wqertr', '123' ];

function unique(arr) {

    for (var i = 0; i<arr.length - 1; i++) {

        for (var n = i + 1; n < arr.length; n++) {

            if (arr[i] == arr[n]) {

                arr.splice(i,1);

                n--;
                i--;

            }

        }

    }

}

console.log( unique(strings) );
console.log(strings);
    */

var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

function unique(arr) {

    var arrSecond = [];

    for (var i = 0; i <arr.length; i++){

        if (arrSecond.indexOf(arr[i]) == -1) {

            arrSecond.unshift(arr[i]);

        }
    }

    return arrSecond;

}


console.log( unique(strings) );