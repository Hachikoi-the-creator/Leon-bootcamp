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
// duplicateEncode("(( @"); //help

// ? regex res
function duplicateEncodeRegex(word) {
  word = word.toLowerCase();
  return word.replace(/./g, (m) =>
    word.indexOf(m) == word.lastIndexOf(m) ? "(" : ")"
  );
}

// ? may watch later
function duplicateEncodeRetro(word) {
  let unique = "";

  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += "(";
    } else {
      unique += ")";
    }
  }
  return unique;
}


// 5 - change ["a","t"] C,G => ["t","a"] G,C
function DNAStrand(dna = "") {
  res = "";

  dna.split("").forEach((e) => {
    switch (e) {
      case "A":
        res += "T";
        break;

      case "T":
        res += "A";
        break;

      case "C":
        res += "G";
        break;

      case "G":
        res += "C";
        break;

      default:
        res += e;
        break;
    }
  });
  return res;
}
// ? better solution
function DNAStrandBetter(dna) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return dna.replace(/./g, (e) => pairs[e]);
  //! replace(/./g) is [].forEach but for strings !//
}


// 6 - if the string is beyond "m" take it as an error an return the amoun of error in the format 10/20 (10 errors out of 20 words).
function printerError(str = "") {
  const alpha = [...Array(26)].map((_) => String.fromCharCode(i++), (i = 97))
    .join``;
  const m_index = alpha.indexOf("m"); //12
  let errors = 0;

  str.replace(/./g, (letter) => {
    const pos = alpha.indexOf(letter.toLowerCase());
    if (pos > m_index) {
      errors++;
    }
  });

  return `${errors}/${str.length}`;
}

// ? compare strings directly unicode
function printerErrorUnicode(str = "") {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] > "m") {
      count++;
    }
  }

  return count + "/" + str.length;
}


// 7 - return a string whit all the words inside, reversed
function reverseWords(str = "") {
  const allWordsArr = str.split(' ');

  const reverseThis = (word = "") => {
    const strArr = [...word];
    return strArr.map((_, index) => strArr[(word.length - 1) - index]);
  };

  const reversedWordsArr = allWordsArr.map(word => reverseThis(word).join``);

  return reversedWordsArr.join` `;
}

//? arr has reverse lmao
function reverseWordsV2(str = "") {
  const res = str.split(' ').map(word => (
    [...word].reverse().join``
  ));

  return res.join` `;
}


// 8 - Get 2 words as input and return a word whit only letters from a-z whit no repeated letters
function longest(s1 = "", s2 = "") {
  bothWords = s1 + s2;
  let res = [];

  [...bothWords].forEach(item => {
    if (!res.includes(item)) {
      res.push(item);
    }
  });

  return res.join``;
}
// ?Missed the sorted part lmao
// make a set of the combination of the words, convert that set to an array, sort it, join it
const longestReal = (s1, s2) => [...new Set(s1 + s2)].sort().join('');
