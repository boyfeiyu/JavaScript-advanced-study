var obj = {
  name: "feiyu",
};

function foo(name, age, height) {
  // console.log("foo函数：", this);
  console.log(name, age, height);
}
// 独立函数调用
foo("fy", 18, 18);
// 数组传参
foo.apply(obj, [obj.name, 18, 19]);
// 列表传参
foo.call(obj, "jack", 25, 2.05);
