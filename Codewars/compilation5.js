// 1 - Good 6kyu! Given an string whit words, whit numbers in between return an string of the words arranged using the numbers inside them
function nut(str = '') {
  const resArr = Array(str.split(' ').length);
  const baseArr = str.split(' ');

  for (let i = 0; i < resArr.length; i++) {// for every word in the array
    const currentWord = baseArr[i];

    for (let w = 0; w < currentWord.length; w++) {// for every letter in the word
      const currentLetter = currentWord[w];

      if (+currentLetter * 0 === 0) {//is a number
        resArr[+currentLetter - 1] = currentWord;
      }
    }
  }
  return resArr.join(' ');
}


// 2 - check if have enough gas to reach the next gas statino
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump / mpg <= fuelLeft;
};


// 3 - special check depending on lke in a post
function likes(names = []) {
  let extra = 0;
  if (names.length > 3) extra = names.length - 2;

  switch (names.length) {
    case 0: return "no one likes this";
    case 1: return `${names[0]} likes this`;
    case 2: return `${names[0]} and ${names[1]} like this`;
    case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    // more than 3 likes
    default: return `${names[0]}, ${names[1]} and ${extra} others like this`;
  }
}


// 4 - return the extension of a file, take into account css.module.css-like files
function returnExtension(str = "") {
  const reversedStr = str.split('').reverse().join('');
  const lastDotIndex = reversedStr.indexOf('.');
  return str.slice(-lastDotIndex);
}


// 5 -  //replace every T whit U
function DNAtoRNA(dna) {
  return [...dna].map(e => e === 'T' ? 'U' : e).join('');
}
// solution w/simple regex
function DNAtoRNA2(dna) {
  return dna.replace(/T/g, 'U');
}


// 6 -