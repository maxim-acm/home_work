/**
 * Created by Maxim on 15.06.2015.
 */
var res = "\n";

var rowSet = prompt('set row');
var cellSet = prompt('set cell');

for (var row = 1; row <= rowSet; row++) {

    for (var cell = 1; cell <= cellSet; cell++) {

        if (row % 2 == cell % 2) {
            res += "#"
        }

        else res += " "
    }

    res = res + '\n';
}

console.log(res);