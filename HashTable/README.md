## 散列表

### description
* 也叫哈希表，HashTable/HashMap,是Dictionary类的一种散列表实现方式
* **散列算法**的作用是尽可能快地在数据结构中找到一个值。在之前的章节中，你已经知道如果
要在数据结构中获得一个值（使用get方法），需要遍历整个数据结构来找到它。如果使用散列
函数，就知道值的具体位置，因此能够快速检索到该值。散列函数的作用是给定一个键值，然后
返回值在表中的地址。

* 使用哈希表会产生冲突（两个值计算的结果相同），处理冲突有几种方法：分离链接、线性探查和双散列法。
> * 分离链接： 散列表的每个位置创建一个链表（需要使用之前实现的LinkedList类） ,对应HashTableXes5.js
> * 线性探查： 当想向表中某个位置加入一个新元素的时候，如果索引
为index的位置已经被占据了，就尝试index+1的位置。如果index+1的位置也被占据了，就尝试
index+2的位置，以此类推。 对应HashTableY.js
* 没有测试分离链接和线性探查部分的代码




### knowledge
*  分离链接（HashTableXes5.js）中原本实现remove操作，自己的实现代码是：
```
HashTable.prototype.remove = function(key){
  // 移除某个值
  var value = this.get(key),
      temp = null,
      move = null,
      index = this.loseloseHashCode(key);
  while (this.table[index] && value) {
    temp = new ValuePair(key, value),
    move = this.table[index].head;
    return move.remove(temp);
  } 
};
```
前提是LinkedList中的remove方法判断`this.element = ele`能实现，但这是两个对象之间判断相等，就会出现错误，因为**== 运算符两侧都是对象时，判断的是两门是否都指向同一个对象**，虽然这里的两个元素的值可能相同，但由于不是一个对象，所以不能实现，例如：
```
function Person (name, age) {
  this.name = name;
  this.age = age;
}
var p1 = new Person('x', 18);
var p2 = new Person('x', 18);
console.log(p1 === p2) // false
var p2 = p1;
console.log(p1 == p2) // true
```
* 线性探查（HashTableYes5.js）中实现put操作时候自己写的如下：
```
HashTable.prototype.put = function(key, value){
  // 添加新项/更新散列表
  var index = this.loseloseHashCode(key),
      len = this.table.length,
      move = (index + 1) % len;
  if (this.table[index] == undefined) {
    this.table[index] = new ValuePair(key, value);
  }else if (this.table[index].key == key) {
    this.table[index].value = value;
  }else {
    while (this.table[move] != undefined && move != index) {
      move = (move + 1) % len;
    }
    if (move != index) {
      this.table[move] = new ValuePair(key, value)
    }
  }
};
```
在这里考虑了数组满了的情况，但实际情况中js的数组长度是不需要指定的，也就是不会满的。