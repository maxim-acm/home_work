function isPal(string) {
  
  var a = string.toLowerCase().split('').reverse();
  var b = string.toLowerCase().split('');
  
  for (i = 0; i <a.length; i++) {
    if (a[i] == ' ') {
      a.splice(i,1);
      i--;
    }
  }
  
  for (i = 0; i <b.length; i++) {
    if (b[i] == ' ') {
      b.splice(i,1);
      i--;
    }
  }
 
  var stringA = a.join();
  var stringB = b.join();
  
  return stringA == stringB?true:false;
  
}

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
