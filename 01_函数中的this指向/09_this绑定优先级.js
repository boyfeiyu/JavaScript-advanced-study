function foo() {
  console.log("foo函数：", this);
}
var obj = { foo };

// 1 默认规则优先级最低
// 2 显式绑定高于隐式绑定
// obj.foo();
// obj.foo.apply("abc"); // 绑定在String对象

// 3 bind高于默认绑定
// var bar = foo.bind("aaa");
// var obj2 = {
//   name: "feiyu",
//   baz: bar,
// };

// obj2.baz(); // 绑定在'aaa'上

// 4 new绑定高于隐式绑定
// new obj.foo();

// 5 new / 显式
// new不可以和apply call一起使用

// var bindFn = foo.bind("aaa");
// new bindFn(); // 绑定在空对象，new高

// new foo.apply("aaa"); // 报错

// 6 bind和apply bind高
var bindFn = foo.bind("aaa");
bindFn.apply("bbb");

// 总结:
// 1 new
// 2 bind
// 3 apply/call
// 4 隐式
// 5 默认
