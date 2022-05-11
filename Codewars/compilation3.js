String.prototype.toAlternatingCase = (b = "daF") => {
  const a = b;
  console.log(a, 1);
  // const zzz = a.forEach(l => l.isLowerCase() ? l.toUpperCase() : l.toLowerCase());
  // console.log(zzz, 2);
  // return zzz;
};


// String.prototype.toAlternatingCase("abcACB");
// "comuniSM".toAlternatingCase();

// 1 -  Convert a string to a number lmao
const stringToNumber = (str) => +str;

// 2 - Count the number of true items in the array
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

// 6 - a



