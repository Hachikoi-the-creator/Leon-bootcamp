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