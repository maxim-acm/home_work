function f(x) {
    console.log(x);}

function debounce(func, time) {
  
  var flag = true;
  
  setTimeout(function(){
    flag = true;
  }, time);
  
  return function () {
    if (!flag) return;
    func.apply(this, arguments);
    flag = false;
    
    setTimeout(function(){
    flag = true;
  }, time);
    
  };
  
}
              
var f = debounce(f,1000);

f(1);
f(2);

setTimeout(function() {
  f(3);
},100);

setTimeout(function() {
  f(4);
},1100);

setTimeout(function() {
  f(5);
},1500);
