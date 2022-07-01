// 1 - arr whit number of ppl getting in & out of an bus, return the amount remaining
const number = (busStops = [[]]) => {
  let res = 0;

  for (const arr of busStops) {
    console.log("plus ", arr[0], "less: ", arr[1]);
    res += arr[0];
    res -= arr[1];
  };

  return res;
};
console.log(number([[10, 0], [3, 5], [5, 8]]));//5