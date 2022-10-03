var obj = {
  name: "feiyu",
};

function foo() {
  console.log("foo函数：", this);
}

// 执行函数，并且让this绑定到obj对象
foo.apply(obj);
foo.call(obj);
foo.call(undefined);
