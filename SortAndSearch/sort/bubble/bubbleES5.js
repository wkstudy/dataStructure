function ArrayList () {
  this.array = [];
}
ArrayList.prototype.insert = function (item) {
  this.array.push(item);
}
ArrayList.prototype.toString = function(){
  return this.array.join();
};
//  交换数， i, j 为array的下标，而非值
ArrayList.prototype.swap = function(i, j){
  var _this = this,
      temp = _this.array[j];
  _this.array[j] = _this.array[i];
  _this.array[i] = temp;
};  

ArrayList.prototype.bubbleSort = function(){
  var i,
      j,
      _this = this,
      len = _this.array.length;

  for (i = 0;i < len;i++) {
    for (j = 0;j < len - 1 - i;j++) {
      if (_this.array[j] > _this.array[j + 1]) {
        _this.swap(j, j + 1);
      }
    }
  }
};  


//  冒泡排序 事件复杂度：O(n*n)
var al = new ArrayList();
al.insert(5);
al.insert(10);
al.insert(3);
al.insert(7);
al.insert(8);
al.bubbleSort();
console.log(al.toString())