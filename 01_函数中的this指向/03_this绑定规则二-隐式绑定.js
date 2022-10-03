function foo() {
  console.log('foo函数：', this)
}

var obj = {
  name: 'feiyu',
  bar: foo,
}

obj.bar() // obj
