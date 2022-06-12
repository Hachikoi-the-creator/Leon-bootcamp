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
