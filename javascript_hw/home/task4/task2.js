/**
 * Created by Maxim on 14.06.2015.
 */
function checkSpam(str) {
    var lowerStr = str.toLowerCase();

    return !!(~lowerStr.indexOf('sex') || ~lowerStr.indexOf('spam'));
}


console.log(checkSpam('get new Sex videos')); // true
console.log(checkSpam('[SPAM] How to earn fast money?')); // true
console.log(checkSpam('New PSD template')); // false