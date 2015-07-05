function getMaxNumber(array) {
  
  array.sort( function(a,b) {
    return a - b;
  });
  
  return array.slice(-1);
  
}

console.log(getMaxNumber([1,30,40,2,7])); // 40
console.log(getMaxNumber([1,15,-20,2,-7])); // 15
