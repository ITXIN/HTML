'use strict';

function foo() {

  for (var i = 0; i < 100; i++) {
    console.log('i=' + i);

  }
  i = -1;
  alert('out i' + i);
}

// foo(); // 直接调用foo()
// window.foo(); 

function add(x, y, f) {
  alert('add' + f(x) + f(y));
  return f(x) + f(y);
}


function pow(x) {
  return x * x;
}

function maptest() {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
  console.log(results);
  alert(results);
}
