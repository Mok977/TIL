/*
 1. Given an array = [2,5,1,2,3,5,1,2,4];
    It should return 2
 2. Given an array = [2,1,1,2,3,5,1,2,4];
    It should return 1
 3. Given an array = [2,3,4,5];
    It should return undefined
*/
function searchRepetNem(num) {
  const hashTable = new Map();
  for (var i = 0; i < num.length; i++) {
    if (hashTable.get(num[i])) {
      return num[i];
    } else {
      hashTable.set(num[i], num[i]);
    }
  }
  return undefined;
}

function searchRepetNem2(input) {
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < i; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

// console.log(searchRepetNem([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(searchRepetNem2([3, 1, 3, 1, 2, 3, 5, 1, 2, 4]));
