// 定义函数
function foo() {
  console.log("foo函数：", this);
}

// 1.直接调用this指向Window
foo();

// 2 通过对象调用 this指向obj
var obj = { name: "feiyu" };
obj.aaa = foo;
obj.aaa();

// 3
foo.call(obj);
