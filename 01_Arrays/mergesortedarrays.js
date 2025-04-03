function mergeSortedArrays(arr, arr2) {
  //方法1
  var merge = [];
  for (let i = 0; i < arr.length; i++) {
    merge.push(arr[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    merge.push(arr2[j]);
  }

  merge.sort((a, b) => a - b);
  //   console.log(merge);

  //內建方法 2
  var newArr = arr.concat(arr2).sort((a, b) => a - b);
  //   console.log(newArr);
}

function merged(arr, arr2) {
  // 教學
  const mergered = [];
  let arrays1Item = arr[0];
  let arrays2Item = arr2[0];
  let i = 1;
  let j = 1;

  //check input
  if (arr.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr;
  }
  while (arrays1Item || arrays2Item) {
    if (arrays2Item === undefined || arrays1Item < arrays2Item) {
      mergered.push(arrays1Item);
      arrays1Item = arr[i];
      i++;
    } else {
      mergered.push(arrays2Item);
      arrays2Item = arr2[j];
      j++;
    }
  }
  return mergered;
}
mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
console.log(merged([0, 3, 4, 31], [4, 6, 30]));
// merged([0, 3, 4, 31], [4, 6, 30]);
