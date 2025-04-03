class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  //看第一個值
  peek() {
    return this.top;
  }
  //後進先出，推進去(Last In --> Second-to-Last-In --> ... --> Second-In --> First-In [Bottom])
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  //後進先出，拿出來(Last In <-- Second-to-Last-In <-- ... <-- Second-In <-- First-In [Bottom])
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push("google").push("Udemy").push("Discord").pop().pop().pop();
console.log(myStack);

//Discord
//Udemy
//google
