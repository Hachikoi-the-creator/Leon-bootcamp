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


// 3 - convoluted function (retruns n+1, if e is not defined)
const comboFunc = (num, func = x => x + 1) => func(num);
