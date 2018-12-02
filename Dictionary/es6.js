class Dictionary {
  constructor () {
    this.items = {};
  }
  set (key, value) {
    // 添加元素/ 更新元素
    this.items[key] = value; 
  }
  delete (key) {
    // 通过键名删除对应的值
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }else {
      return false;
    }
  }
  has (key) {
    // 存在返回 true,反之false
    return key in this.items
  }
  get (key) {
    // 通过键值返回 特定的数值
    if (this.has(key)) {
      return this.items[key];
    }else {
      return false;
    }
  }
  clear () {
    this.items = {};
  }
  size () {
    // 字典中元素的数量  和 集合Set 中的方法一样
    return Object.keys(this.items).length;
  }
  keys () {
    // 将字典中所有的键名以数组的形式返回
    var arr = [],
        key,
        items = this.items;
    for (key in items) {
      arr.push(key);
    }
    return arr;
  }
  values () {
    // 将字典中所有的数值以数组的形式返回
    var arr = [],
        key,
        items = this.items;
    for (key in items) {
      arr.push(items[key]);
    }
    return arr;
  }
}

var dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com'); 
console.log(dictionary.has('Gandalf'));  // true
console.log(dictionary.size());  // 3
console.log(dictionary.keys()); // [Gandalf John Tyrion]
console.log(dictionary.values()); //[gandalf@email.com johnsnow@email.com tyrion@email.com]
console.log(dictionary.get('Tyrion')); // tyrion@email.com
dictionary.delete('John'); 
console.log(dictionary.keys()); // [Gandalf Tyrion]
console.log(dictionary.values()); // [gandalf@email.com tyrion@email.com]