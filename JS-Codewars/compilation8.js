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


// 2 - get middle string if "one"-> "n"; "four"-> "ou"
function getMiddle(str = "") {
  if (str.length % 2 === 0) {
    return (str[str.length / 2 - 1] + str[str.length / 2]);
  } else {
    return (str[Math.floor(str.length / 2)]);
  }
}

console.log(getMiddle("tesa"));
console.log(getMiddle("tesaing"));