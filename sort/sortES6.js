class ArrayList {
  constructor () {
    this.array = [];
  }

  insert (item) {
    this.array.push(item);
  }

  toString () {
    return this.array.join();
  }

  //  接收数组下标
  swap (i, j) {
    var _this = this,
      temp = _this.array[j];
    _this.array[j] = _this.array[i];
    _this.array[i] = temp;
  }

  bubbleSort () {
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
  }

  selectSort () {
    var i,
      j,
      _this = this,
      len = _this.array.length,
      minIndex;  // 下标

    for (i = 0;i < len - 1;i++) {
      minIndex = i;

      for (j = i + 1;j < len;j++) {
        if (_this.array[j] < _this.array[minIndex]) {
          minIndex = j;
        }
      }

      _this.swap(minIndex, i);
    }
  }

  insertSort () {
    var i,
      j,
      _this = this,
      len = _this.array.length,
      tempArr = [];

    tempArr[0] = _this.array[0];
    for (i = 1;i < len;i++) {

      for (j = i - 1;j > -1;j--) {
        if (_this.array[i] > tempArr[j]) {
          tempArr.splice(j + 1, 0, _this.array[i]);
          break;
        }
      }

      if (j == -1) {
        tempArr.splice(0, 0, _this.array[i])
      }
    } 
    
    _this.array = tempArr.slice();
  }

  mergeSort () {
    this.array = mergeSortRec(this.array);
  }

  quickSort () {
    quickSortRec(this.array, 0, this.array.length - 1);
  }

  heapSort () {
    var _this = this,
    len = _this.array.length;

    //  初始化大根堆
    createMaxHeap(_this.array, len);

    while (len > 1) {
      swapArr(_this.array, 0, len - 1);
      createMaxHeap(_this.array, len - 1);
      len--;
    } 
  }
}
function mergeSortRec (arr) {
  var len = arr.length,
      i;

  if (len == 1) {
    return arr;
  } else {
    i = Math.floor(len / 2);
    return merge(mergeSortRec(arr.slice(0, i)), mergeSortRec(arr.splice(i, len)));
  }
}
function merge (arrFir, arrSec) {
  var res = [],
      i = 0,
      j = 0;

  while (i < arrFir.length && j < arrSec.length) {
    if (arrFir[i] < arrSec[j]) {
      res.push(arrFir[i]);
      i++;
    } else {
      res.push(arrSec[j]);
      j++;
    }
  }

  while (i < arrFir.length) {
    res.push(arrFir[i]);
    i++;
  }

  while (j < arrSec.length) {
    res.push(arrSec[j]);
    j++
  }

  return res
}
function quickSortRec (arr, start, end) {
  var len = arr.length,
      index;
  if (len > 1) {
    index = cancel(arr, start, end);
    if (start < index - 1) {
      quickSortRec(arr, start, index - 1);
    }
    
    if (index < end) {
      quickSortRec(arr, index, end);
    }
  }
}
function cancel(arr, start, end) {
  var j = end,
      i = start,
      mid = Math.floor((start + end) / 2);

  while (i <= j) { 
    while (arr[i] < arr[mid]) {
      i++;
    }
    while (arr[j] > arr[mid]) {
      j--;
    }

    if (i < j) {
      swapArr(arr, i, j);
      i++;
      j--
    }
  }
  return i;
}

// 生成大根堆
function createMaxHeap (arr, len) {
  var i,
      maxSonIndex;

  // 从最后一个非叶子节点开始
  for (i = parseInt((len - 2) / 2);i >= 0;i--) {

    maxSonIndex = i; // 暂定i处值最大

    //  左子节点存在且值大于最大值
    if(((i + 1) * 2 - 1) < len && arr[(i + 1) * 2 - 1] > arr[maxSonIndex]) {
      maxSonIndex = (i + 1) * 2 - 1;
    }
    if(((i + 1) * 2 ) < len && arr[(i + 1) * 2] > arr[maxSonIndex]) {
      maxSonIndex = (i + 1) * 2;
    }
    if(arr[i] < arr[maxSonIndex]) {
      swapArr(arr, i, maxSonIndex);
    }
  }
}
function swapArr (arr, i, j) {
  var temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}
// 冒泡排序 时间复杂度 O(n*n)
// 选择排序 时间复杂度 O(n*n)
// 插入排序 时间复杂度 O(n*n) 排序小型数组时，此算法比选择排序和冒泡排序性能要好。
// 归并排序 时间复杂度 O(nlog(n))
// 快速排序 时间复杂度 O(nlog(n))
// 堆排序 时间复杂度 O(nlog(n))
var al = new ArrayList();
al.insert(5);
al.insert(10);
al.insert(3);
al.insert(7);
al.insert(8);
// al.bubbleSort();
// al.selectSort();
// al.insertSort();
al.heapSort();
console.log(al.toString())