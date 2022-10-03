var obj = {
  name: "feiyu",
};
var obj2 = {
  name: "tt",
};
function foo() {
  console.log("foo函数：", this);
}

// 调用foo时候 总是绑定到obj
// 1.bind函数基本使用
var bar = foo.bind(obj);
bar();

// apply失效 优先级？
bar.apply(obj2);

// 2 bind函数也可以传参，了解
