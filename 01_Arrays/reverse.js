class ReverseStr {
  constructor(item) {
    this.str = item;
  }

  reverse() {
    var newString = this.str.split("");
    var j = newString.length - 1;

    for (let i = 0; i < j; i++) {
      let temp = newString[i];
      newString[i] = newString[j];
      newString[j] = temp;
      j--;
    }
    this.str = newString.join("");
    return this.str;
  }
}

// let reverseStr = new ReverseStr("Hi i m mok");
// console.log(reverseStr.reverse());

// javascript es6
const reverse2 = (str) => [...str].reverse().join("");
console.log(reverse2("Hi i m mok"));
