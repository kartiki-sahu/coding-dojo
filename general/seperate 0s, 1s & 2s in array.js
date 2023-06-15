// Given an array containing zeroes, ones and twos only. Write a function to sort the given array in O(n) time complexity.
// Input: [1, 2, 2, 0, 0, 1, 2, 2, 1];
// Output: [0, 0, 1, 1, 1, 2, 2, 2, 2];

function seperateNums(arr) {
  const numMap = {};
  const totalLength = arr.length;

  arr.forEach((i) => {
    numMap[i] = (numMap[i] || 0) + 1;
  });

  arr = [];
  let i = 0;
  while (i < totalLength) {
    if (i < numMap[0]) {
      arr.push(0);
    } else if (i < numMap[0] + numMap[1]) {
      arr.push(1);
    } else {
      arr.push(2);
    }
    i++;
  }

  return arr;
}
