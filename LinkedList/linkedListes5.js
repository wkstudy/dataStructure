function Node (ele) {
  this.element = ele;
  this.next = null;
}

function LinkedList () {
  this.length = 0;
  this.head = null;
}
LinkedList.prototype.append = function(ele){
  // 尾部添加新项
  var node = new Node(ele),
      temp = this.head;
  if (!this.head) {
    this.head = node;
  }else {
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = node;
  }
  this.length++;
};
LinkedList.prototype.insert = function(pos, ele){
  // 按位置插入元素(从0开始)
  var len = this.length;
  if (pos > -1 && pos <= len) {
    var node = new Node(ele),
        count = 0,
        pre = this.head,
        now = this.head;
    if (pos == 0) {
      node.next = this.head;
      this.head = node;
    }else {
      while (count != pos) {
        pre = now;
        now = now.next;
        count++;
      }
      node.next = now;
      pre.next = node;
    }
    this.length++;
    return true;
  }else {
    return false;
  }
};
LinkedList.prototype.removeAt = function(pos){
  // 按位置移除元素
  var len = this.length;
  if (pos > -1 && pos < len) {
    var count = 0,
        pre = this.head,
        now = this.head,
        temp = null;
    if (pos == 0) {
      this.head = this.head.next;
    }else {
      while (count != pos) {
        pre = now;
        now = now.next;
        count++;
      }
      pre.next = now.next;
    }
    this.length--;

    return now.element;
  }else {
    return null;
  }
};
LinkedList.prototype.remove = function(ele){
  // 删除指定值的元素
  // 方法一：（调用另外两个函数）
  // var n = this.indexof(ele);
  // this.removeAt(n);
  // 方法二：
  var pre = this.head,
      move = this.head;
  while (move) {
    if (move.element == ele) {
      var temp;
      if (move == this.head) {
        // 第一个元素就是
        temp = this.head;
        this.head = this.head.next;
      }else {
        temp = move;
        pre.next = move.next;
      }
      this.length--;
      return temp;
    }else {
      pre = move;
      move = move.next;
    }
  }
  return null;
};
LinkedList.prototype.indexOf = function(ele){
  // 查找元素 
  if (!this.head) {
    return -1;
  }else {
    var move = this.head;
    var pos = 0;
    while (move) {
      if (move.element == ele) {
        return pos;
      }else {
        move = move.next;
        pos++;
      }
    }
    // 如果能执行到这里，说明已经到了尾部，仍然没找到这个元素
    return -1;
  }
};
LinkedList.prototype.isEmpty = function(){
  return this.length == 0;
};
LinkedList.prototype.size = function(){
  return this.length;
};
LinkedList.prototype.getHead = function(){
  // 返回头部
  return this.head;
};
LinkedList.prototype.toString = function(){
  // 转化为字符串 
  var move = this.head,
      str = '';
  while (move) {
    str += move.element + (move.next ?  ' ' : ''); //每个元素之间用空格连接，到了最后一个元素就不用了
    move = move.next;
  }
  return str;
};
LinkedList.prototype.print = function(){
  var move = this.head;
  while (move) {
    console.log(move.element);
    move = move.next;
  }
}

var list = new LinkedList();
list.append(5);
console.log(list.toString()); // 5
list.append(10);
list.append(2);  
console.log(list.toString()); // 5 10 2 
list.insert(0,3);
console.log(list.toString());// 3 5 10 2 头部插入
list.insert(2,55);
console.log(list.toString()); // 3 5 55 10 2 中间插入
list.insert(5,7);
console.log(list.toString()); // 3 5 55 10 2 7 尾部插入
list.removeAt(3)
console.log(list.toString()); // 3 5 55 2 7  删除
list.remove(55)
console.log(list.toString()); // 3 5 2 7  删除
console.log(list.indexOf(7)); // 3
// list.print();
// console.log(list.size())
