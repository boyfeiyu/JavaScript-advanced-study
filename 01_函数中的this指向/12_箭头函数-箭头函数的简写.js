var names = ["abc", "bcd", "nba"];
// var nums = [20, 30, 111, 223, 444];
// 1 只有一个参数 小括号可以省略 这里自动格式化帮我补全了
// names.forEach((value) => {
//   console.log(value);
// });
// 2 函数体只有一行代码 {} 可以省略， 这一行代码表达式会作为返回值默认返回
// 一行代码不能带return, 如果省略，带return 一起省略
// var newNums = nums.filter((value) => value % 2 === 0);
// console.log("newnums", newNums);

// 3 如果默认返回值是一个对象，这个对象必须加()

// var arrFn = () => ({ name: "123", age: 18 });
// console.log(arrFn());

// 箭头函数实现nums所有偶数平方的和
var nums = [20, 30, 11, 15, 111];
var res = nums
  .filter((item) => item % 2 === 0)
  .map((item) => item ** 2)
  .reduce((prevValue, item) => prevValue + item);
console.log(res);
