// 1 - arr whit number of ppl getting in & out of an bus, return the amount remaining
const number = (busStops = [[]]) => {
  let res = 0;

  for (const arr of busStops) {
    console.log("plus ", arr[0], "less: ", arr[1]);
    res += arr[0];
    res -= arr[1];
  }

  return res;
};

// 2 - get middle string if "one"-> "n"; "four"-> "ou"
function getMiddle(str = "") {
  if (str.length % 2 === 0) {
    return str[str.length / 2 - 1] + str[str.length / 2];
  } else {
    return str[Math.floor(str.length / 2)];
  }
}

//3 - Return the string separated in pairs, if the str is not pair, add an _ at the end
function solution(str) {
  if (str.length % 2 !== 0) str += "_";
  console.log(str);

  let res = [];

  for (let i = 0; i < str.length; i += 2) {
    res.push(str[i] + str[i + 1]);
  }

  return res;
}

// 4 - given 2 arrays, remove every occurence of arrA found in arrB
// ?A [1,2,2,2,3]
// ?B [2]
// ![1,3]
function arrayDiff(arrA = [], arrB = []) {
  const res = arrA.filter((el) => {
    return arrB.every((e) => e !== el);
  });
  return res;
}

// 5 - Given the rgb values return the same color but in HEX
// 255, 255, 255 => #ffffff
//* ? Todo later: if the values 0,1,2 repeat, just return them once
function rgbTrue(r = 0, g = 0, b = 0) {
  // check if num > 255
  // const first = r.toString(16);
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

// 5.5 weird challenge - dont get it, im slepy
function rgb(r = 0, g = 0, b = 0) {
  const toHex = (d) => {
    if (d < 0) {
      return "00";
    }
    if (d > 255) {
      return "FF";
    }
    return ("0" + Number(d).toString(16)).slice(-2).toUpperCase();
  };
  return toHex(r) + toHex(g) + toHex(b);
}

// 6 - if name starts whit r, you r playing
function areYouPlayingBanjo(name = "") {
  return name.charAt(0).toLowerCase() == "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}
