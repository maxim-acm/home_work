/**
 * Created by Maxim on 19.06.2015.
 */
var arr = [];

while (true) {

    var number = prompt('');

    if (number === null || Number.isFinite(number) === true || number === '') break;

    arr.push(+number);

}

var sum = 0;

for (var key in arr) {
    sum += arr[key];
}

console.log(sum);