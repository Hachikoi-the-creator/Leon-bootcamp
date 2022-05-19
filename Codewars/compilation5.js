// 1 - Arrange the words, depending on the number that they have inside them
// create an array of len = amount of words
// search for a number in every word -> whit try; catch
function order(words = '') {
  const cast = Array(words.split(' ').length);

  cast.forEach((item, index) => {
    let position = -1;
    console.log('cast');

    [...item].forEach(letter => {
      try {
        position = Number(letter);
      } catch (error) {
        console.log(error, position);
      }
      return 'ass';
    });
    console.log(position);
    return 'ass';
  });
}
// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
order("num nut cammo");

// for (let index = 0; index < array.length; index++) {

// }

function nut(str = '') {
  const punishment = Array(words.split(' ').length);

  for (let index = 0; index < punishment.length; index++) {
    // for every word in the array

    for (let index = 0; index < array.length; index++) {
      // for every letter in the word


    }

  }

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