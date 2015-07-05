var obj = {
  person1Age: 20,
  person1Name: 'Ivanov',
  person2Age: 30,
  person2Name: 'Petrov',
  person3Age: 40,
  person3Name: 'Sidorov',
  
  extractNumber: function() {
    
    var extractNumber = [];
    
   for (var number in obj) {
      if (typeof obj[number] == 'number') {
        extractNumber.push(obj[number]);
      }
   }
    
    return extractNumber;
  },
  
  
  extractString: function() {
    var extractString  = [];
    
    for (var string in obj) {
      if (typeof obj[string] == 'string') {
        extractString.push(obj[string]);
      }
    }
    return extractString;
  }
  
  
};

console.log(obj.extractNumber());
console.log(obj.extractString());
