function Calculator() {
  
  var methods = {
    
    "+": function(a,b) {
      return a + b;
    },
    
    "-": function(a,b) {
      return a - b;
    }
  };
  
  this.calculate = function(str) {
    
    var arr = str.split(' '),
        a = +arr[0],
        operator = arr[1],
        b = +arr[2];
 
    if (isNaN(a) || isNaN(b) || !methods[operator]) {
      return "Error";
    }
    
    return methods[operator](+a, +b);
  };
  
  
  this.addMethod = function(name, func) {
    methods[name] = func;
  };
  
  
}

var powerCalc = new Calculator;

powerCalc.addMethod('*', function(a, b) {
  return a * b;
});
powerCalc.addMethod('/', function(a, b) {
  return a / b;
});
powerCalc.addMethod('**', function(a, b) {
  return Math.pow(a, b);
});

alert(powerCalc.calculate("2 * 5"));
