Tree
## description
* 二叉树：二叉树中的节点最多只能有两个子节点：一个是左侧子节点，另一个是右侧子节点。
* 二叉搜索树（BST）是二叉树的一种，但是它只允许你在左侧节点存储（比父节点）小的值，
在右侧节点存储（比父节点）大（或者等于）的值。

## warning
* 原来的写法：
```
BinarySearchTree.method('inOrderTraverse', function () {
  // 中序遍历
  if (this.root) {
    if (this.root.left) {
      this.inOrderTraverse(this.root.left);
    }
    console.log(this.root.key);
    if (this.root.right) {
      this.inOrderTraverse(this.root.right);
    }
  }
});
```
错误之处在于`inOrderTraverse`方法并不接受参数,`this.root.left.inOrderTraverse()`也不对，因为这里定义BinarySearchTree时有一个root属性，而左子树、右子树都没有这个属性。