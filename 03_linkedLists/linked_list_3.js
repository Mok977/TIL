/* Doubly Linked */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinked {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  /* 新增 */
  append(value) {
    const currentNode = new Node(value);
    currentNode.prev = this.tail;
    this.tail.next = currentNode;
    this.tail = currentNode;
    this.length++;
    return this;
  }
  /* 新增第一位 */
  prepend(value) {
    const currentNode = new Node(value);
    currentNode.next = this.head;
    currentNode.prev = currentNode;
    this.head = currentNode;
    this.length++;
    return this;
  }
  /* 印出list */
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  /* insert */
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const currentNode = new Node(value);
    //和 singly 最不一樣的地方
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = currentNode;
    currentNode.next = follower;
    follower.prev = currentNode;
    this.length++;
    return this;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  /* 刪除 */
  remove(index) {
    //check params
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;

    this.length--;
    return this;
  }
}
const myList = new DoublyLinked(10);
myList.append(5).append(16).prepend(1).insert(1, 99).insert(3, 22);
console.log(myList.printList());
