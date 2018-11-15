function Stack () {
  this.items = []
}
Stack.prototype.push = function (ele) {
  this.items.push(ele)
}
Stack.prototype.pop = function () {
  this.items.pop()
}
Stack.prototype.peek = function () {
  // 返回栈顶元素，不做任何修改
  return this.items[this.items.length - 1]
}
Stack.prototype.isEmpty = function () {
  return this.items.length == 0
}
Stack.prototype.clear = function () {
  this.items = []
}
Stack.prototype.size = function () {
  return this.items.length
}

// let stack = new Stack();
// console.log(stack.isEmpty()); //输出为true 
// stack.push(5);
// stack.push(8); 
// console.log(stack.peek()); //输出8 
// stack.push(11);
// console.log(stack.size()); //输出3
// console.log(stack.isEmpty()); //输出false 



// 十进制到任意进制（这里的禁止必须小于10，因为大与10进制的话会有字母）  

// Math.floor() 向下取整
function  transform (num, d) {
  var stack = new Stack();
  while (Math.floor(num / d) != 0) {
    stack.push(num % d);
    num =Math.floor(num / d);
  }
  var result = num.toString();
  while (!stack.isEmpty()) {
    result += stack.peek();
    stack.pop();
  }
  return result;
}

 var x = transform(10, 2);
 console.log(x)
