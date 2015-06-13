/**
 * Created by Maxim on 13.06.2015.
 */

var a = +prompt("¬ведите интервал от:");
var c = +prompt("и до:");
outer:
    for (a; a < c; a++) {

        for (var b = 2; b < a; b++) {

            if (a % b == 0) continue outer;
        }

        console.log(a);
    }