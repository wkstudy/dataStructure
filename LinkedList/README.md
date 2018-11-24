* 双向链表中，必须注意指针this.head、this.tail、this.prev、this.next都是指向的元素，而不是指向的指针。

```
 node.prev = move.prev.next; // error
 改为：

 node.prev = move.prev;
 move.prev.next = node //success
 ```
  * 双向链表中，append方法不需要添加previous来辅助增加元素，而removeAt方法需要previous元素，由于自己的指针部分容易搞混，可以选择都使用previous来添加/删除元素。