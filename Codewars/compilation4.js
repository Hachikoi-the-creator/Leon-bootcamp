// 1 - make upper case
const makeUpperCase = (str) => str.toUpperCase();

// 2 - return that
const grow = (x) => x.reduce((a, b) => a * b);

// 3 - mutiply depedning on pair
const simpleMultiplication = (num) => num % 2 ? num * 9 : num * 8;

// 4 - Only true if employed && not on vacation
const setAlarm = (employed, vacation) => employed && !vacation;

// 5 - fake binary, 0 if < 5, 1 else
function fakeBin(x) {
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// 6 - Cyclist drinks 0.5 every 1 meter, round it down
const litres = (time) => Math.floor(time / 2);

// 7 - Return if the constumer is senior or not
/*
*@params data = list of list
*@params data[0] = age
*@params data[1] = handicap
*/
function openOrSenior(data) {
  // Senior : age >= 55 && handicap > 
  const res = data.map(subList => {
    if (subList[0] >= 55 && subList[1] > 7) {
      return 'Senior';
    }
    else {
      return 'Open';
    }
  });

  return res;
  // const pop = [[59, 12], [55, -1], [12, -2], [12, 12]];
}

//! BETTER ANSWER
// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

function openOrSenior(data) {
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}


// 8x - Check if arr b has the squares of arr a, in any order
// Both will always have the same len

function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
  // a1 = [121, 144, 19, 161, 19, 144, 19, 11];
  // a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
}

// ? whyt this not working?
function coompare(array1, array2) {
  let check = true;
  array1.forEach(e => array2.includes(e * e) ? '' : check = false);
  return check;
}


// 9 - check if the amount of x & o is the same, 0 counts
function XO(str = "") {
  const x = [...str.toLowerCase()].filter(l => l === 'x').length;
  const o = [...str.toLowerCase()].filter(l => l === 'o').length;
  console.log(x === o);
}

// ! Cool regex
function XO2(str) {
  var a = str.replace(/x/gi, ''),
    b = str.replace(/o/gi, '');
  return a.length === b.length;
}

// 10 - given a uint, return the maximun(value) combination possible
function descendingOrder(n) {
  return +[...n.toString()]// ['1','2','7']
    .map(e => +e)// [1,2,7]
    .sort((a, b) => b - a)//  [7,2,1]
    // .sort()//  should work as well
    .join('');//  721
}