// 1 - return the sum of the numbers in the array
function sum(numbers) {
  // dammed JS has to sum method
  return numbers.reduce((a, b) => a + b, 0);
}

// 2 - Return wether your point are higher thanthe average of the ones inside the array
function betterThanAverage(classPoints, yourPoints) {
  return (
    yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
  );
}

// 3 - Return the given string whit no spaces inside
function noSpace(x) {
  // Basic regex whit global flag
  return x.replace(/\s/g, "");
}

// 4 -  Return the double of the numbers in the array
function maps(x) {
  return x.map((n) => n * 2);
}

// 5 - Return an inversed sequence (array) of starting from N until 1
const reverseSeq = (n) => {
  return Array(n)
    .fill(0)
    .map((_, i) => n - i);
};

// 6 - Thinks fast and return the double of the given number!
function doubleInteger(i) {
  return i * 2;
}

// 7 - return the sum of all the numbers from 1 to the given number
const summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};

// 8x - Return the upper multiple of 5 of the number given, 3 -> 5, 1 -> 5
function roundToNext5(n) {
  // nice math trick I don't realy understand why it works lol
  return Math.ceil(n / 5) * 5;
}

// 9x - Return true if all the values inside the array are lower than the limit, false otherwise
// nice max trick!
function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}
//what I was looking for
const smallEnough2 = (a, l) => a.every((e) => e <= l);

//10 - Given an array of strings, return the string from shorter to longer
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}
