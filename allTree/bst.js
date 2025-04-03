class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let currentNode = this.root;
    if (!currentNode) {
      let currentNode = this.root;
      this.root = new Node(value);
      return;
    }

    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = new Node(value);
          return;
        }
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = new Node(value);
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        console.log(currentNode);
        return currentNode;
      }
    }
    console.log(value, " Is not found");
    return;
  }
  //remove
  remove(value) {
    let currentNode = this.root;
    if (!currentNode) {
      return;
    }
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        //No right child:
        if (currentNode.right === null) {
          // right child which doesnt have a
        }
      }
    }
  }
}
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// console.log(JSON.stringify(traverse(tree.root), null, 4));
tree.lookup(4);

/*
        9
     /    \
    4     20
  /  \   /  \
 1   6  15 170
*/

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
