class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop(item) {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const lastItem = this.data[index];
    this.shiftItems(index);
    return lastItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
const newArrays = new MyArray();
newArrays.push("hi");
newArrays.push("you");
// newArrays.pop();
newArrays.push("are");
newArrays.push("nice");
newArrays.push("!");
newArrays.delete(2);

console.log(newArrays); // MyArray { length: 0, data: {} }
// console.log(newArrays.get(0)); // undefined
