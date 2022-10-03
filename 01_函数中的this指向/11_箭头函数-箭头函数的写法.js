// 1 之前的函数定义方式
// function foo1() {}
// var foo2 = function () {};

// 2 箭头函数
// var foo3 = (name, age) => {
//   console.log("箭头函数的函数体");
//   console.log(name, age);
// };

// 箭头函数不会绑定this和arguments
// 箭头函数不能作为构造函数来使用

// 3 箭头函数的练习
var names = ["abc", "bcd", "nba"];
names.forEach((value, index, arr) => {
  console.log(value, index, arr);
});

setTimeout(() => {
  console.log("timeout");
}, 500);

//
