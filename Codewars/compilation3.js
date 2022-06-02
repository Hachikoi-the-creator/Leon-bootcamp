String.prototype.toAlternatingCase = (b = "daF") => {
  const a = b;
  console.log(a, 1);
  // const zzz = a.forEach(l => l.isLowerCase() ? l.toUpperCase() : l.toLowerCase());
  // console.log(zzz, 2);
  // return zzz;
};


// String.prototype.toAlternatingCase("abcACB");
// "comuniSM".toAlternatingCase();


// 1 -  Convert a string to a number lma
const stringToNumber = (str) => +str;


// 2 - Count the number of true items in the arra
function countSheeps(arrayOfSheep = []) {
  let counter = 0;
  arrayOfSheep.forEach(e => { if (e) counter++; });
  return counter;
}
// Better one :O
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}


// 3 - find the str, and return index
function findNeedle(haystack = []) {
  const index = haystack.indexOf('needle');
  return `found the needle at position ${index}`;
}


// 4 - return the max & min nu in an array
const max = (list = []) => Math.max(...list);

const min = (list = []) => Math.min(...list);


// 5 - Return a murmur 1 bee..
const countSheep = num => {
  let val = '';

  for (let i = 1; i <= num; i++) {
    val += `${i} bee...`;
  }

  return val;
};


// 6 - bruh
const checkEndsWith = (str = '', ed) => {
  return str.endsWith(ed);
};


// 7 - a
function areYouPlayingBanjo(name = "") {
  return name.charAt(0).toLowerCase() == 'r' ?
    `${name} plays banjo` :
    `${name} does not play banjo`;
}


// 8 - Check if a triangle can be made whit the given 3 sides
function isTriangle(a, b, c) {
  const ordered = [a, b, c].sort((a, b) => a - b);
  return ordered[0] + ordered[1] > ordered[2];
}

// another solution
var isTriangle = (a, b, c) => Math.max(a, b, c) < (a + b + c) / 2;


// 9 - return wheter the num is odd or even
const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';


// 10 - basic string template
const greet = (name) => `Hello ${name} howa are you today?`;