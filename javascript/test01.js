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

function reducetest() {
  var arr = [1, 3, 5, 7, 9];
  arr.reduce(function (x, y) {
    alert(x * 10 + y);
    // return x + y;
    return x * 10 + y;
  }); // 25
}


function filtertest() {
  // var arr = [1,3,4,5,6,7,8,9];
  // var r = arr.filter(function (x) {
  //   return x%2 != 0;
  // });
  // alert(r);

  var arr = ['A', '', 'B', null, undefined, 'C', '  '];
  var r = arr.filter(function (s) {
      return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
  });
  alert(r); // ['A', 'B', 'C']

}


function* foo(x) {
  yield x + 1;
  yield x + 2;
  return x + 3;
}


var xiaoming = {
  name: '小明',
  age: 14,
  gender: true,
  height: 1.65,
  grade: null,
  'middle-school': '\"W3C\" Middle School',
  skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

var s = JSON.stringify(xiaoming ,null, '  ');
alert(s);
