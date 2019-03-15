function Node (key) {
  this.key = key;
  this.left = null;
  this.right = null;
}
function BinarySearchTree () {
  this.root = null;
}
Function.prototype.method = function (name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
  return this;
}
BinarySearchTree.method('insert', function (key) {
  if (!this.root) {
    var node = new Node(key);
    this.root = node;
  }else {
    insertNode(this.root, node);
  }

});
BinarySearchTree.method('search', function (key) {
  // 找到返回 true ，否则返回 false
  searchNode(this.root, key);
});
BinarySearchTree.method('inOrderTraverse', function () {
  // 中序遍历
  inOrderTraverseNode(this.root);
});
BinarySearchTree.method('preOrderTraverse', function () {
  // 先序遍历
  preOrderTraverseNode(this.root);
});
BinarySearchTree.method('postOrderTraverse', function () {
  // 后序遍历
  postOrderTraverseNode(this.root);
});
BinarySearchTree.method('min', function () {
   if (this.root) {
    while (this.root.left) {
      this.root = this.root.left;
    }
    return this.root.key;
  }
  return null;
});
BinarySearchTree.method('max', function () {
  if (this.root) {
    while (this.root.right) {
      this.root = this.root.right;
    }
    return this.root.key;
  }
  return null;
});
BinarySearchTree.method('remove', function (key) {
  removeNode(this.root, key);
});
function insertNode (root, node) {
  if (node.key < root.key) {
    if (!root.left) {
      root.left = node;
    }else {
      insertNode(root.left, node);
    }
  }else {
    if (!root.right) {
      root.right = node;
    }else {
      insertNode(root.right, node);
    }
  }
}
function searchNode (root, key) {
  if (root) {
    if (root.key == key) {
      return true;
    }else if (key < root.key) {
      return searchNode(root.left, key);
    }else {
      return searchNode(root.right, key);
    }
  }else {
    return false;
  }
}
function inOrderTraverseNode(root) {
  if (root) {
    if (root.left) {
      inOrderTraverseNode(root.left);
    }
    console.log(root.key);
    if (root.right) {
      inOrderTraverseNode(root.right);
    }
  }
}
function preOrderTraverseNode(root) {
  if (root) {
    console.log(root.key);
    if (root.left) {
      preOrderTraverseNode(root.left);
    }
    if (root.right) {
      preOrderTraverseNode(root.right);
    }
  }
}
function postOrderTraverseNode(root) {
  if (root) {
    if (root.left) {
      postOrderTraverseNode(root.left);
    }
    if (root.right) {
      postOrderTraverseNode(root.right);
    }
    console.log(root.key);
  }
}

//  此处的写法不对，比如删除叶子节点的时候，`node = null`只是删除了这个节点，但是他的父节点的指向就出了问题
function removeNode (root, key) {
  if (!root) {
    // 没有找到这个key
    return false;
  }else if (key < root.key) {
    return removeNode(root.left, key);
  }else if (key > root.key) {
    return removeNode(root.right, key); 
  }else {
    // 相等
    if (root.left == null && root.right == null) {
      root = null;
      return true;
    }else if (root.left && root.right == null) {
      root = root.left; 
      return true;
    }else if (root.left == null && root.right) {
      root = root.right;
      return true;
    }else {
      // 有两个子节点，需找到右子节点中最小的那个（右子节点中最左边的那个）
      var temp = removeMinNode(root.right);
      root.key = temp.key;
      temp = null;
      return true;
    }
  }
}
function removeMinNode(root) {
  while (root.left) {
    root = root.left;
  }
  var temp = root;
  root = null;
  return temp;
}

//  书中的写法
BinarySearchTree.method('delete', function (key) {
  root = deleteNode(this.root, key);
});

function deleteNode (node, key) {
  if (node == null) {
    return null;
  }

  if (key < node.key) {
    node.left = deleteNode(node.left, key);
    return node;
  } else if (key > node.key) {
    node.right = deleteNode(node.right, key);
    return node;
  } else {
    // 叶子节点
    if (node.left == null && node.right == null) {
      node = null;
      return node;
    }

    //  只有一个叶子节点
    if (node.left && node.right == null) {
      node = node.left;
      return node;
    } else if (node.right && node.left == null) {
      node = node.right;
      return node;
    }

    //  两个子节点
    var aux = findMinVal(node.right);
    node.val = aux.val;
    node.right = deleteNode(node.right, aux.key);
    return node;

  }
}
function findMinVal (node) {
  while (node.left) {
    node = node.left;
  }
  return node;
}