function foo() {
  console.log('foo函数：', this)
}

// new操作：
// 1. 创建新的空对象
// 2 this 指向空对象
// 3 执行函数体代码
// 4 没有返回非空对象，默认返回这个对象
new foo()
