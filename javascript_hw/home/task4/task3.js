/**
 * Created by Maxim on 15.06.2015.
 */
function strLength(str) {
    str = prompt("Enter some text");
    return str.length < 20 ? str : str.substring(0 , 20) + "...";
}

console.log(strLength());