/* Singly Linked*/
// 10 --> 5 --> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

// 共用方法
// class newNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    //把沒有指向(沒在使用到)的地址值刪除
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const preNode = {
      value: value,
      next: null,
    };
    preNode.next = this.head;
    this.head = preNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    // check params
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      this.prepend(value);
      return this;
    }
    const newNode = {
      value: value,
      next: null,
    };

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
    /*
    let currentNode = this.head;
    for (var i = 0; i <= this.length; i++) {
      if (i == index) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }
      currentNode = currentNode.next;
    }
    return this;
    */
  }
  traverseToIndex(index) {
    //check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    //check params
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;

    this.length--;
    return this;
  }
  /* 反轉列表 */
  reverseList() {
    //檢查 != null
    if (!this.head.next) {
      return this.head;
    }
    //[ 10, 5, 16, 88 ]
    // 1. first = 10
    // 2. this.tail = this.head; tail = 10 --> [5,16,88,10]
    // second = 5
    // temp = 16
    // first = 5
    // second = 16 --> [16,88,5,10]
    // temp = 88
    // 88 = first --> this.head = first;
    // first = second
    // second = temp --> [88,16,5,10]
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
      console.log(second);
      console.log(first);
      console.log(temp);
    }
    this.head.next = null;
    this.head = first;

    return this;
  }
}

const myLinkedList = new LinkedList(10);
// myLinkedList
//   .append(5)
//   .append(16)
//   .prepend(1)
//   .insert(2, 99)
//   .insert(0, 20)
//   .remove(1);
myLinkedList.append(5).append(16).append(88).reverseList();
console.log(myLinkedList.printList());
// console.log(myLinkedList.head.next);
