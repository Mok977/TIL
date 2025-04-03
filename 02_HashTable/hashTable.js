class hashTable {
  constructor(size) {
    this.data = new Array(size);
    // 第一組data -> [["grapes", 10000]];
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log(currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new hashTable(50);
myHashTable.set("grapes", 123);
myHashTable.set("grapes", 876);
myHashTable.set("apples", 456);
myHashTable.set("Joy", 817);
const getDate = myHashTable.get("grapes");
console.log(getDate);
