class Queue {
  constructor () {
    this.items = []
  }

  enqueue (ele) {
    this.items.push(ele)
  }

  dequeue () {
    return this.items.shift()
  }

  front () {
    // 查看队列头元素
    return this.items[0]
  }

  isEmpty () {
    return this.items.length == 0
  }

  size () {
    return this.items.length
  }
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
// 方法二：出队的时候按优先级出队，方法一再es5.js，在入队的时候按优先级入队
class PriorityQueue {
  constructor () {
    this.items = []
  }

  enqueue (ele, priority) {
    var obj = {};
    obj.ele = ele;
    obj.priority = priority;
    this.items.push(obj)
  }

  dequeue () {
    var len = this.items.length;
    if (len) {
      if (len == 1) {
        console.log(this.items[0])
        return this.items.shift()
      }else {
        var max = this.items[0];
        var index = 0;
        for (var i = 1;i < len;i++) {
          if (this.items[i].priority > max.priority) {
            max = this.items[i];
            index = i;
          }
        }
        this.items.splice(index, 1)
        console.log(max);
        return max;
      }
    }else {
      console.log('no ele in queue')
      return 'no ele in queue'
    }
  }

  front () {
    // 查看队列头元素
    return this.items[0]
  }

  isEmpty () {
    return this.items.length == 0
  }

  size () {
    return this.items.length
  }
  print () {
    for (var i = 0;i < this.items.length;i++) {
      console.log(this.items[i])
    }
  }
}

// let priorityQueue = new PriorityQueue();
// priorityQueue.enqueue("John", 2);
// priorityQueue.enqueue("Jack", 3);
// priorityQueue.enqueue("Camila", 4);
// priorityQueue.enqueue("zc", 1);
// priorityQueue.enqueue("wk", 5);

// priorityQueue.dequeue();
// priorityQueue.dequeue();
// priorityQueue.dequeue();
// priorityQueue.dequeue();
// priorityQueue.dequeue();
// priorityQueue.dequeue();

// 循环队列 ----> 击鼓传花游戏
//  是c语言课本上的题，当时没学过数据结构，只是用数组也能实现（需要再添加一个数组，用来标志数组里的数是否已经被选中过）
function loopQueue (namelist, num) {
  // namelist为人名， num为击鼓传花的数字(假设num是从1开始的)
  let queue = new Queue(),
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

let names = ['John','Jack','Camila','Ingrid','Carl'];
loopQueue(names, 3)