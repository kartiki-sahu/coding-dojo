//How to reverse a String in java? Can you write a program without using any java inbuilt methods?

const input = "kartikisahu";
const output = "uhasikitrak";

function reverseString(input) {
  const strArr = input.split("");
  let reversedString = "";
  while (strArr.length) {
    const lastChar = strArr.pop();
    reversedString = reversedString.concat(lastChar);
  }

  return reversedString; //should return output
}
