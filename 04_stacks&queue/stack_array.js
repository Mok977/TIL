class Node {
  constructor(value) {
    this.Node = value;
    this.next = null;
  }
}
class stack_array {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
  //isEmpty
}
const myStack = new stack_array();
myStack.push("1").push("2").push("3").pop();
console.log(myStack);
