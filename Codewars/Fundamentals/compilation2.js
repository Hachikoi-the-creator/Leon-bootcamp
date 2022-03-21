// 1 - Find the sum of all numbers from 0 up to n that are multiples of 3 or 5
function findSum(n) {
  const fullArr = Array(n)
    .fill()
    .map((_, index) => index + 1);
  const filtering = fullArr.filter((a) => !(a % 3) || !(a % 5));
  const final = filtering.reduce((prev, curr) => prev + curr, 0);
  return final;
}

function findSum2(n) {
  let result = 0;
  for (let i = 0; i <= n; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) result += i;
  }
  return result;
}

// 2x - 1st array are the corerct answers, second are the student stuff, correct +4; failed -1; not answer 0, if grade <0 -> 0
function checkExam(array1, array2) {
  const reducer = (a, e, idx) => {
    if (e === "") {
      return a;
    } else if (e === array1[idx]) {
      return (a += 4);
    }
    return --a;
  };
  const score = array2.reduce(reducer, 0);
  return score < 0 ? 0 : score;
}

// 3 - return the square of every digit, as int (3212 => 9414)
function squareDigits(num) {
  num = JSON.stringify(num);
  let cast = "";
  for (let i = 0; i < num.length; i++) {
    cast += JSON.stringify(parseInt(num[i]) ** 2);
  }
  return parseInt(cast);
}

function squareDigits2(num) {
  const array = num
    .toString()
    .split("")
    .map((int) => parseInt(int) ** 2);

  return parseInt(array.join(""));
}

// 4x self explanatory problem
class Fighter {
  constructor(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () {
      return this.name;
    };
  }
}

function declareWinner2(fighter1, fighter2, firstAttacker) {
  const fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  const fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  if (fac1 < fac2) {
    return fighter2.name;
  } else if (fac2 < fac1) {
    return fighter1.name;
  } else {
    // if they can support the same damage & sam health wins who attacked first
    return firstAttacker;
  }
}

// 5 - form the lowest number possible, ignoring repeated numbers
function minValue(values) {
  uniq = [...new Set(values)];//changes to set -> spread to get the values into new array
  uniq.sort((a, b) => a - b);//lower to higher sort
  return parseInt(uniq.join(""), 10);//arr -> string; str -> int-base-10
}

// 6 - get the max difference between the len of the strings inside 2 given arrays
function mxdiflg(a1, a2) {
  let max1 = 0;
  let min1 = 0;
  let max2 = 0;
  let min2 = 0;
  for (let i = 0; i < a1.length; i++) {
    if (a1[i].lenght > max1) {

    }
  }
  for (let i = 0; i < a2.length; i++) {

  }
}

// 7x - weird instructions, straight forward code, SUKI
function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;
  let l1 = a1.map(str => str.length);
  let l2 = a2.map(str => str.length);
  return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1));
}