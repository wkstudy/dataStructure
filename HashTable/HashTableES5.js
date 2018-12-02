function HashTable () {
  this.table = [];
}
// 此HashTable没有考虑加入两个key取余后都一样的情况
HashTable.prototype.put = function(key, value){
  // 添加新项/更新散列表
  var index = this.loseloseHashCode(key);
  this.table[index] = value;
  console.log(index, this.table[index]);
};
HashTable.prototype.remove = function(key){
  // 移除某个值
  this.table[this.loseloseHashCode(key)] = undefined;
};
HashTable.prototype.get = function(key){
  // 根据key找到值
  return this.table[this.loseloseHashCode(key)];
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


var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com'); // 19 gandalf@email.com
hash.put('John', 'johnsnow@email.com'); // 29 johnsnow@email.com
hash.put('Tyrion', 'tyrion@email.com');  // 16 tyrion@email.com
console.log(hash.get('Gandalf')); // gandalf@email.com
console.log(hash.get('Loiane')); // undefined
hash.remove('Gandalf');
console.log(hash.get('Gandalf')); // undefined