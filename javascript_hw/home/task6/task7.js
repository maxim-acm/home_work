/**
 * Created by Maxim on 26.06.2015.
 */
var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function anClean(arr) {

    var obj = {}, len;

    for (var i = 0; len =arr.length, i < len; i++) {

        var arrSecond = arr[i].toLowerCase().split('').sort().join('');

        obj[arrSecond] = arr[i];
    }

    var res = [];

    for (var key in obj) res.push(obj[key]);

    return res;

}


console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'