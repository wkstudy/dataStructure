function HashTable () {
  this.table = [];
}

function ValuePair (key, value) {
  this.key = key;
  this.value = value;
}
// 此HashTable没有考虑加入两个key取余后都一样的情况
HashTable.prototype.put = function(key, value){
  // 添加新项/更新散列表
  var index = this.loseloseHashCode(key);
  if (this.table[index] == undefined) {
    this.table[index] = new ValuePair(key, value);
  }else if (this.table[index].key == key) {
    // 进行更新
    this.table[index].value = value;
  }else {
    index++;
    while (this.table[index] != undefined) {
      index++;
    }
    this.table[index] = new ValuePair(key, value);
  }
};
HashTable.prototype.remove = function(key){
  // 移除某个值
  var index = this.loseloseHashCode(key),
      temp;
  while (this.table[index] != undefined) {
    if (this.table[index].key == key) {
      temp = this.table[index].value;
      this.table[index] == undefined;
      return temp;
    }else {
      index++;
    }
  }
  return false;
};
HashTable.prototype.get = function(key){
  // 根据key找到值
  var index = this.loseloseHashCode(key);
  while (this.table[index] != undefined) {
    if (this.table[index].key == key) {
      return this.table[index].value;
    }else {
      index++;
    }
  }
  return false;
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

