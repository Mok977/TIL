class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.last();
  }
  enqueque(vaule) {
    const newNode = new Node(vaule);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeque() {
    if (!this.first) {
      return null;
    }
    //是否為最後一個
    if (this.first === this.last) {
      this.last = null;
    }
    const del = this.first;
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const queue = new Queue();
queue
  .enqueque("Matt")
  .enqueque("Pavel")
  .enqueque("Samir")
  .enqueque("Joy")
  .enqueque("Morie")
  .dequeque()
  .dequeque()
  .dequeque()
  .dequeque()
  .dequeque();
// queue.dequeque();
console.log(queue);
