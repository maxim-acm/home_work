function suffle(arr) {
 
  var currentIndex = arr.length, randomIndex, temporaryValue;
    
  while(currentIndex !== 0) {
    
    randomIndex = Math.floor(Math.random() * currentIndex);
    
    currentIndex -= 1;
    
    temporaryValue = arr[currentIndex];
    
    arr[currentIndex] = arr[randomIndex];
    
    arr[randomIndex] = temporaryValue;
    
  }
  
  return arr;
  
}

someArray = [1,2,3,4,5,6,7,8,9,10];

console.log(suffle(someArray));
