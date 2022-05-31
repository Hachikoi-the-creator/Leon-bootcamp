// 1 - returns if the number is squared (get by natural numbers multiplied by themselfs)
var isSquare = function (n) {
  return Math.sqrt(n) % 1 == 0;
};

// 2 - easy dubs
function find_average(array = []) {
  if (array.length == [].length) return 0;

  return array.reduce((a, b) => a + b) / array.length;
}

// 3 - given 2 word space separeted, return the initials of the person
function abbrevName(name = "") {
  return name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".");
}

// 4 - if the letter appears more than once in the tring change it for ), ( otherwise
function duplicateEncode(word = "") {
  const arr = [...word.toLowerCase()];
  let res = "";

  arr.forEach((e) => {
    const occurencies = [...word.matchAll(`${e}`)].length;

    res += occurencies > 1 ? ")" : "(";
  });
  console.log(res);
}
duplicateEncode("(( @"); //help
// ? regex res
function duplicateEncodeRegex(word) {
  word = word.toLowerCase();
  return word.replace(/./g, (m) =>
    word.indexOf(m) == word.lastIndexOf(m) ? "(" : ")"
  );
}
// ? may watch later
function duplicateEncodeRetro(word) {
  var unique = "";

  word = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += "(";
    } else {
      unique += ")";
    }
  }
  return unique;
}
