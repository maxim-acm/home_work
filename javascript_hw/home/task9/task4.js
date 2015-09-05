/**
 * Created by Maxim on 05.09.2015.
 */
function f(x) {
    return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {

    var cash = {};

    return function(x) {

        if(!(x in cash)) {

            cash[x] = f.call(this, x);
        }

        return cash[x];
    };
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
console.log(a, b);
console.log( a == b ); // true (значение закешировано)

b = f(2);
console.log( a == b );