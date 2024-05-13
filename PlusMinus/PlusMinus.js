"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Store the array length into
  // the variable len.
  let len = arr.length;

  // Initialize the positiveCount,
  // negativeCount, and zeroCountby
  // 0 which will count the total number
  // of positive, negative and zero elements
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  // Traverse the array and count the
  // total number of positive, negative,
  // and zero elements.
  for (let i = 0; i < len; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] < 0) {
      negativeCount++;
    } else if (arr[i] == 0) {
      zeroCount++;
    }
  }
  console.log((positiveCount / len).toFixed(4) + " ");
  console.log((negativeCount / len).toFixed(4) + " ");
  console.log((zeroCount / len).toFixed(4));
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}
