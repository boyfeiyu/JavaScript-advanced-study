// 1 普通函数中有this的标识符

// 2 箭头函数中压根没有this
// var bar = () => {
//   console.log("bar:", this);
// };

// bar();

// // 通过apply调用也没有this
// bar.apply("aaa");

// 3 this的查找规则
var obj = {
  name: "obj",
  foo: function () {
    var bar = () => {
      console.log("bar:", this);
    };
    return bar;
  },
};
var fn = obj.foo();
fn.apply("bbb"); // 上层作用域
var obj2 = { name: "obj2" };
obj2.foo = obj.foo;
var fn2 = obj2.foo();
fn2();
var nfn = obj2.foo;
var fn3 = nfn();
fn3(); // window
var fn4 = obj.foo.apply("aaa");
fn4(); // window
