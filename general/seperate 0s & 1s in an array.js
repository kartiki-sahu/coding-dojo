//Given an array of 0’s and 1’s in random order, you need to separate 0’s and 1’s in an array.
const input = [0, 1, 0, 0, 1, 1, 1, 0, 1];
const output = [0, 0, 0, 0, 1, 1, 1, 1, 1];

function seperateNums(arr) {
  let count0 = 0;
  const totalLength = arr.length;

  arr.forEach((i) => {
    if (arr[i] === 0) {
      count0++;
    }
  });

  arr = [];
  let i = 0;
  while (i < totalLength) {
    if (i < count0) {
      arr.push(0);
    } else {
      arr.push(1);
    }
    i++;
  }
  return arr;
}

// or

function seperateNums(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] === 0) {
      i++;
    }

    if (arr[j] == 1) {
      j--;
    }

    if (arr[i] == 1) {
      if (arr[j] == 0) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
      } else {
        j--;
      }
    }
  }

  return arr;
}
