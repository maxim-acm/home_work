/**
 * Created by alibaba on 21.06.15.
 */
var arr = [1, 2, 3, 4, 5];

arr.sort( function rand(a,b) {

    return Math.random() - 0.5;

});

console.log(arr);