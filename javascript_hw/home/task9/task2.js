/**
 * Created by Maxim on 05.09.2015.
 */

function applyAll(func, arg) {
    console.log(this);
    return func.apply(this, [].slice.call(arguments, 1));
}

console.log(applyAll(Math.max, 1, 4, 7));