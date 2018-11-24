class Node {
  constructor (ele) {
    this.element = ele;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor () {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  append (pos, ele) {
    var len = this.length;
    if (pos > -1 && pos <= len) {
      var node = new Node(ele),
          i = 0,
          move = this.head;
      if (pos == 0) {
        if (move) {
          node.next = this.head;
          this.head = node;
        }else {
          // 没有元素
          this.head = node;
          this.tail = node
        }
        
      }else if (pos == len) {
        // 最后插入
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = this.tail.next;
      }else {
        while (i != pos) {
          i++;
          move = move.next;
        }

        node.prev = move.prev;
        move.prev.next = node;
        node.next = move;
        move.prev = node;
      }

      this.length++;
      return true;
    }else {
      return false;
    }
  }

  removeAt (pos) {
    var len = this.length;
    if (pos > -1 && pos < len) {
      var i = 0,
          previous = this.head,
          move = this.head;

      if (pos == 0) {
        if (len == 1) {
          this.head = null;
          this.tail = null;
        }else {
          this.head = this.head.next;
        }
      }else if(pos == len - 1) {
        // 尾部删除
        this.tail = this.tail.prev;
        this.tail.next = null;
      }else {
        while (i < pos) {
          i++;
          previous = move;
          move = move.next;
        }

        previous.next = move.next;
        move.next.prev = previous;
      }

      this.length--;
      return true;
    }else {
      return false;
    }
  }

  size () {
    return this.length;
  }
  toString () {
    // 转化为字符串 
    var move = this.head,
        str = '';
    while (move) {
      str += move.element + (move.next ?  ' ' : ''); //每个元素之间用空格连接，到了最后一个元素就不用了
      move = move.next;
    }
    return str;
  }
}


var dlist = new DoublyLinkedList();
dlist.append(0,2);
dlist.append(0,5);
dlist.append(0,7);
dlist.append(0,3);
console.log(dlist.toString()); //  3 7 5 2 头插入
dlist.append(4,44);
console.log(dlist.toString()); // 3 7 5 2 44 尾部插入
dlist.append(4,37);
console.log(dlist.toString()); // 3 7 5 2 37 44 中间插入

dlist.removeAt(0);
console.log(dlist.toString()); // 7 5 2 37 44 头部删除
dlist.removeAt(2);
console.log(dlist.toString()); // 7 5 37 44 中间删除
dlist.removeAt(3);
console.log(dlist.toString()); // 7 5 37 尾部删除