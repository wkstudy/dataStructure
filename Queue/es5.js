function Queue () {
  this.items = [];
}

Queue.prototype.enqueue = function(ele){
  this.items.push(ele)
}
Queue.prototype.dequeue = function(){
  return this.items.shift()
}
Queue.prototype.front = function(){
  // 查看队列头元素
  return this.items[0]
}
Queue.prototype.isEmpty = function(){
  return this.items.length == 0
}
Queue.prototype.size = function(){
  return this.items.length
}


// let queue = new Queue();
// console.log(queue.isEmpty()); //输出true
// queue.enqueue("John");
// queue.enqueue("Jack");
// console.log(queue.size()); //输出3
// console.log(queue.isEmpty()); //输出false
// queue.dequeue();
// queue.dequeue();

// 优先队列
//  方法一：在入队的时候按优先级入队，方法二在 es6.js 出队的时候按优先级出队 
function PriorityQueue () {
  this.items = []
}
PriorityQueue.prototype.enqueue = function(ele, priority){
  // priority 为每个元素的优先级
  var obj = {};
  obj.ele = ele;
  obj.priority = priority;

  var len = this.items.length;
  var flag = false;
  if (this.items.length) {
    for (var i = len - 1;i >= 0;i--) {
      if (this.items[i].priority > priority) {
        this.items.splice(i + 1, 0, obj);
        flag = true;
        break;
      }
    }
    if (!flag) {
      // 头部插入
      this.items.unshift(obj);
      flag = true;
    }
  }else {
    this.items.push(obj)
  }
}
PriorityQueue.prototype.dequeue = function(){
  return this.items.shift()
}
PriorityQueue.prototype.front = function(){
  // 查看队列头元素
  return this.items[0]
}
PriorityQueue.prototype.isEmpty = function(){
  return this.items.length == 0
}
PriorityQueue.prototype.size = function(){
  return this.items.length
}
PriorityQueue.prototype.print = function(){
  for (var i = 0;i < this.items.length;i++) {
    console.log(this.items[i])
  }
}



// let priorityQueue = new PriorityQueue();
// priorityQueue.enqueue("John", 2);
// priorityQueue.enqueue("Jack", 3);
// priorityQueue.enqueue("Camila", 4);
// priorityQueue.enqueue("zc", 1);
// priorityQueue.enqueue("wk", 5);
// priorityQueue.print(); 


// 循环队列 ----> 击鼓传花游戏
//  是c语言课本上的题，当时没学过数据结构，只是用数组也能实现（需要再添加一个数组，用来标志数组里的数是否已经被选中过）
function loopQueue (namelist, num) {
  // namelist为人名， num为击鼓传花的数字(假设num是从1开始的)
  var queue = new Queue(),
      len = namelist.length,
      i;
  for (i = 0;i < len;i++) {
    queue.enqueue(namelist[i])
  }
  while (queue.size() > 1) {
    for (i = 1;i < num;i++) {
      queue.enqueue(queue.dequeue())
    }
    console.log(queue.front() + '被淘汰');
    queue.dequeue();
  }

  console.log('获胜者是' + queue.front())
}

var names = ['John','Jack','Camila','Ingrid','Carl'];
loopQueue(names, 3)