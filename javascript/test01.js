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

// var s = JSON.stringify(xiaoming ,null, '  ');
// alert(s);
// function test(resolve, reject) {
//   var timeOut = Math.random() * 2;
//   // log('set timeout to: ' + timeOut + ' seconds.');
//   setTimeout(function () {
//     if (timeOut < 1) {
//       // log('call resolve()...');
//       resolve('200 OK');
//     }
//     else {
//       // log('call reject()...');
//       reject('timeout in ' + timeOut + ' seconds.');
//     }
//   }, timeOut * 1000);
// }

// var p1 = new Promise(test);

// var p2 = p1.then(function (result) {
//     // console.log('成功：' + result);
//     alert('成功：' + result);
// });

// var p3 = p2.catch(function (reason) {
//     // console.log('失败：' + reason);
//     alert('失败：' + reason);
// });

// new Promise(test).then(function (result) {
//   alert('成功');
// }).catch(function (reason) {
//   alert('失败')
// });

// new Promise(test).then(function (result) {
//   console.log('成功：' + result);
//   alert('成功');
// }).catch(function (reason) {
//   console.log('失败：' + reason);
//   alert('失败：');
// });

// ajax函数将返回Promise对象:
function ajax(method, url, data) {
  var request = new XMLHttpRequest();
  return new Promise(function (resolve, reject) {
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(request.responseText);
        } else {
          reject(request.responseText);
        }
      }
    };
    request.open(method, url);
    request.send(data);
  });
}

// var p = ajax('GET', 'http://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice');
// p.then(function (text) { // 如果AJAX成功，获得响应内容
//     alert('success'+text);
// }).catch(function (status) { // 如果AJAX失败，获得响应代码
//   alert('ERROR: ' + status);
// });


var p1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 600, 'P2');
});
// 同时执行p1和p2，并在它们都完成后执行then:
// Promise.all([p1, p2]).then(function (results) {
//   console.log(results); // 获得一个Array: ['P1', 'P2']
//   alert(results);
// });

//race
// Promise.race([p1, p2]).then(function (result) {
//   console.log(result); // 'P1'
//   alert(result);
// });


// 获取超链接的jQuery对象:
// var a = $('#test-link');
// a.on('click', function () {
//     alert('Hello!');
// });


// var jqxhr = $.ajax('/api/categories', {
//   dataType: 'json'
// }).done(function (data) {
//   ajaxLog('成功, 收到的数据: ' + JSON.stringify(data));
// }).fail(function (xhr, status) {
//   ajaxLog('失败: ' + xhr.status + ', 原因: ' + status);
// }).always(function () {
//   ajaxLog('请求完成: 无论成功或失败都会调用');
// });

// function testajax() {
//   alert('ajax');
//   var jqxhr = $.getJSON('http://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice', {
//     // dataType: 'json'
//   }).done(function (data) {
//     ajaxLog('cg');
//     alert('成功');
//   }).fail(function (xhr, status) {
//     ajaxLog(xhr.status + status);
//     alert('失败');
//   }).always(function () {
//     ajaxLog('请求完成，无论成功失败');
//     alert('请求完成，无论成功失败');
//   });
// }


// var r1, r2, s = null;
// try {
//     r1 = s.length; // 此处应产生错误
//     r2 = 100; // 该语句不会执行
// } catch (e) {
//     console.log('出错了：' + e);
// } finally {
//     console.log('finally');
// }
// console.log('r1 = ' + r1); // r1应为undefined
// console.log('r2 = ' + r2); // r2应为undefined


// var r1, s2, s = null;
// try {
//   r1 = s.length;
//   r2 = 100;
// } catch (e) {
//   alert('error🐲：'+e);
// }finally{
//   alert('finaly');
// }


const ROUTER_DEFAULT_CONFIG = {
  waitForData: true,
  transitionOnLoad: true
}

// function add(...rou) {
//   alert('add');
// }
// add();
alert(...ROUTER_DEFAULT_CONFIG);