function foo() {
  console.log("foo函数：", this);
}

// 1 显式绑定传入null或者undefined， 忽略， 使用默认规则
// foo.apply("aaa");
// foo.apply(null); // window
// foo.apply(undefined); // window

// 2 间接函数引用
var obj1 = {
  name: "obj1",
  foo: function () {
    console.log("foo函数：", this);
  },
};
var obj2 = {
  name: "obj2",
};
// obj2.foo = obj1.foo;
// obj2.foo();
(obj2.foo = obj1.foo)();
