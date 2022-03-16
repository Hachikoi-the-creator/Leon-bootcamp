// 1
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// 2
function betterThanAverage(classPoints, yourPoints) {
  return (
    yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
  );
}

// 3
function noSpace(x) {
  return x.replace(/\s/g, "");
}

// 4
function maps(x) {
  return x.map((n) => n * 2);
}

// 5
const reverseSeq = (n) => {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
};

// 6
function doubleInteger(i) {
  return i * 2;
}

// 7
const summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};

// 8
function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}
