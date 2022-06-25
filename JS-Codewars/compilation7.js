// 1 - remove the element in a pair index
function removeEveryOther(arr = []) {
  let res = [];

  arr.forEach((_, index) => {
    if (index % 2) {
      console.log(`item ${arr[index]} has been removed`);
    } else {
      res.push(arr[index]);
    }
  });

  return res;
}

// ? I keep forgetting about those other functions lmao
function removeEveryOtherFiltered(arr) {
  return arr.filter(function (elem, index) {
    return index % 2 === 0;
  });
}


// 2 - sum all the values exept the higest and lowest in value
function sumArray(array = []) {
  if (!array) return 0;

  array.sort((a, b) => b - a);
  array.shift();
  array.pop();
  return array.reduce((a, b) => a + b, 0);
}

// ? those dammed one liners lmao
proSum = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0;


// 3 - convoluted function (retruns n+1, if `func` is not defined)
const comboFunc = (num, func = x => x + 1) => func(num);

// 4 - return true if the app returns you to your strting point exactly 10 minutes after, for each direction you take 1 minute
// ! I have no idea how to solve this lmao 12/14 right tho!
function isValidWalk(walk = [""]) {
  if (walk.length > 10 || walk.length < 10) return false;

  const directionsOnY = { "n": 1, "s": -1, };
  const directionsOnX = { "e": 1, "w": -1 };

  let yDistance;
  let xDistance;

  walk.forEach(item => {
    if (item in directionsOnY) {
      yDistance += directionsOnY[item];
    }
    else {
      xDistance += directionsOnX[item];
    }
  });

  // return xDistance + yDistance === 0;//the poblem is here
  return xDistance === 0 && yDistance === 0;//solved
}
// ? I have no diea why this worked but mine did not >:c
function isValidWalkBetter(walk) {
  let xDistance = 0;
  let yDistance = 0;
  const DISTANCE = walk.length;

  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': yDistance--; break;
      case 's': yDistance++; break;
      case 'w': xDistance--; break;
      case 'e': xDistance++; break;
    }
  }

  return DISTANCE === 10 && dx === 0 && dy === 0;
}
// ? what a fucking genius
function isValidWalkGenius(walk) {
  const count = (val) => walk.filter(a => a == val).length;

  return walk.length === 10 && count('n') == count('s') && count('w') == count('e');
}

// 5 - Double sum, find 2 number in a number array that returns the index of the numbers wich sum is the target num
// X mmm naruhodo (doesn't naruhodo at all)
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}


// 6 - Detect an pangram (has all the letters from the alphabet)
// X - just what was I even trying to do lmao (10+  lines)
function isPangram(string) {
  const alphabetList = [...'abcdefghijklmnopqrstuvwxyz'];

  return alphabetList.every((letter) => string.toLowerCase().includes(letter));
}


// 7 - return an array of numbers, self exaplantory code lul
function countBy(leap = 0, limit = 0) {
  const res = [];

  for (let i = 1; i <= limit; i++) {
    res.push(i * leap);
  }

  return res;
}
// Cooler whit Array Prototype
const countByProto = (leap, limit) => [...Array(limit)].map((_, idx) => ++idx * leap);

// 8 - given an string of numbers, return the lowest and higest in a single string
function highAndLow(numbers = "") {
  // numbers = numbers.split` `.map(e => +e);
  // no need to haave int to use Math.max/min
  numbers = numbers.split` `;
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
