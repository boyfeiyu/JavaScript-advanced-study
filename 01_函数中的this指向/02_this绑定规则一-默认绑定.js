// "use strict";
// // 1 普通函数被独立调用
function foo() {
  console.log('foo函数：', this)
}

foo()

// 2定义在对象中 独立调用
// 指向window
var obj = {
  name: 'feiyu',
  bar: function () {
    console.log('bar:', this)
  },
}
var baz = obj.bar
baz()

// 3 严格模式下 this undefined

// 4 高阶函数
function test(fn) {
  fn()
}

test(foo)
