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

// 分离链接法
// 由于linkedList存储的是一个value，而HashTable需要存储key, value，所以需要定义一个类来存储
function ValuePair (key, value) {
  this.key = key;
  this.value = value;
}
ValuePair.prototype.toString = function(){
  return '[' + this.key + '-' + this.value + ']';
};

function HashTable () {
  this.table = [];
}
// 此HashTable没有考虑加入两个key取余后都一样的情况
HashTable.prototype.put = function(key, value){
  // 添加新项/更新散列表
  var index = this.loseloseHashCode(key);
  if (this.table[index] == undefined) {
    this.table[index] = new LinkedList();
  }
  this.table[index].append(new ValuePair(key,value));
};
HashTable.prototype.remove = function(key){
  // 移除某个值
  var index = this.loseloseHashCode(key),
      move = null;
  if (this.table[index] == undefined) {
    return null;
  }else {
    move = this.table[index].head;
    while (move) {
      if (move.element.key == key) {
        this.table[index].remove(move.element);
        if (this.table[index].size() == 0) {
          // 删除之后变成 空链表
          this.table[index] = undefined;
        }
        return move.element;
      }else {
        move = move.next;
      }
    }
    return null;
  }
};
HashTable.prototype.get = function(key){
  // 根据key找到值
  var index = this.loseloseHashCode(key),
      move = null;
  if (this.table[index] == undefined) {
    return null;
  }else {
   move = this.table[index].head;
   if (move) {
    while (move) {
      if (move.element.key == key) {
        return move.element.value;
      }else {
        move = move.next;
      }
      return null;
    }
   }else {
    // 空链表
    return null;
   }
  }
};

HashTable.prototype.loseloseHashCode = function(key){
  // 散列函数
  var hash = 0,
      len = key.length,
      i;
  for (i = 0;i < len;i++) {
    hash += key.charCodeAt(i);
  }
  return hash % 37; // 限定在一定的范围
};