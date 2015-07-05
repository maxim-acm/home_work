function UpperLeterWordsInString(string) {
  
  var arrWords = string.split(' ');
  
  for (var i = 0; i < arrWords.length; i++) {
     arrWords[i] = arrWords[i].charAt(0).toUpperCase() + arrWords[i].substr(1);
  }
  
  return arrWords.join(' ');
}


console.log(UpperLeterWordsInString('the quick brown fox'));
