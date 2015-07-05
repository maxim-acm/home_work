function findLongWordInString(string) {
  
  var arrWords = string.split(' ');
  
  
  var longWord = arrWords[0];
  
  for (var i = 0; i < arrWords.length; i++) {
    
    if (arrWords[i].length >= longWord.length) {
      
      longWord = arrWords[i];
    }
    
  }
  return longWord;
  
}

console.log(findLongWordInString('Web Development Tutorial'));
