class Set {
  constructor () {
    this.items = {}
  }

  add (val) {
    // 添加一个值的时候，把它同时作为键和值保存，因为这样有利于查找这个值
    if (this.has(val)) {
      return false;
    }else {
      this.items[val] = val;
      return true;
    }
  }

  has (val) {
    // 如果值在集合中 返回 true 否则返回 false

    // for in / hasOwnProperty都能用来遍历对象属性

    // return val in this.items;
    return this.items.hasOwnProperty(val);
  }

  delete (val) {
    if (this.has(val)) {
      delete this.items[val];
      return true;
    }else {
      return false;
    }
  }

  clear () {
    this.items = {};
  }

  size () {
    // 方法一： Object.keys(obj) 返回一个包含给定对象所有属性的数组
    // return Object.keys(this.items).length;

    // 方法二
    var items = this.items,
        count = 0,
        item;
    for (item in items) {
      if (items.hasOwnProperty(item)) {
        count++;
      }
    }
    return count;
  }

  values () {
    // 返回一个包含集合中所有值的数组
    /*
    var arr = [];
    for (item in this.items) {
      if (this.items.hasOwnProperty(item)) {
        arr.push(item);
      }
    }
    return arr;
    */

    // 方法二 使用Object
    var arr = [],
        i,
        item = Object.keys(this.items),
        len = item.length;
    for (i = 0;i < len;i++) {
      arr.push(this.items[item[i]])
    }
    return arr;
  }

  union (otherSet) {
    // 并集
    var set = new Set(),
        item;
    for (item in this.items) {
      set.add(item);
    }
    for (item in otherSet.items ) {
      if (!set.has(item)) {
        set.add(item);
      }
    }
    return set;
  }

  intersection (otherSet) {
    // 交集
    var set = new Set(),
        item;
    for (item in this.items) {
      if (otherSet.has(item)) {
        set.add(item);
      }
    }
    return set;
  }

  difference (otherSet) {
    // 差集
   var set = new Set(),
      item;
   for (item in this.items) {
    if (!otherSet.has(item)) {
      set.add(item);
    }
   }
   return set;
  }

  subset (otherSet) {
    // 子集
    var item;
    for (item in this.items) {
      if (!otherSet.has(item)) {
        return false
      }
    }
    return true;
  }
}

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
let setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);
let setC = new Set();
setC.add(1);
setC.add(2);
setC.add(3);
setC.add(4); 

let set = new Set();
set.add(1);
console.log(set.values()); //输出["1"]
console.log(set.has(1)); //输出true
console.log(set.size()); //输出1
set.add(2);
console.log(set.values()); //输出["1", "2"]
console.log(set.has(2)); //true
console.log(set.size()); //2
set.delete(1);
console.log(set.values()); //输出["2"]
set.delete(2);
console.log(set.values()); //输出[] 
let intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values()); // [3]
let differenceAB = setA.difference(setB);
console.log(differenceAB.values()); // [1 2]
let subsetAC = setA.subset(setC);
console.log(subsetAC); // true